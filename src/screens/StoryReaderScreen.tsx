import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  Alert, Modal, FlatList, NativeSyntheticEvent,
  NativeScrollEvent, useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import * as Speech from 'expo-speech';

// Pick the most magical-sounding voice available on the device
async function getDisneyVoice(): Promise<string | undefined> {
  try {
    const voices = await Speech.getAvailableVoicesAsync();
    const preferred = [
      'com.apple.ttsbundle.Samantha-compact',
      'com.apple.voice.compact.en-US.Samantha',
      'com.apple.ttsbundle.siri_female_en-US_compact',
      'com.apple.voice.compact.en-GB.Martha',
      'com.apple.ttsbundle.Kate-compact',
    ];
    for (const id of preferred) {
      if (voices.find((v) => v.identifier === id)) return id;
    }
    // fallback: first English female voice
    const female = voices.find(
      (v) => v.language.startsWith('en') && v.name.match(/female|samantha|kate|martha|victoria|karen/i)
    );
    return female?.identifier;
  } catch {
    return undefined;
  }
}
import { getById } from '../data/stories';
import { StoryIllustration } from '../components/StoryIllustration';
import { useFavorites } from '../hooks/useFavorites';
import { useSleepTimer, TIMER_OPTIONS } from '../hooks/useSleepTimer';
import { useBackgroundMusic } from '../hooks/useBackgroundMusic';
import { Colors, categoryMeta, Spacing } from '../theme';
import { RootStackParamList } from '../navigation';

const IS_TABLET = (w: number) => w >= 768;

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Reader'>;
  route: RouteProp<RootStackParamList, 'Reader'>;
}

export function StoryReaderScreen({ navigation, route }: Props) {
  const story = getById(route.params.storyId)!;
  const { isFav, toggle } = useFavorites();
  const [pageIdx, setPageIdx] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [timerModal, setTimerModal] = useState(false);
  const [voice, setVoice] = useState<string | undefined>();
  const { width: SW, height: SH } = useWindowDimensions();
  const isTablet = IS_TABLET(SW);
  const PAGE_W = SW;
  const ILLUS_H = SH * (isTablet ? 0.62 : 0.56);

  useEffect(() => {
    getDisneyVoice().then(setVoice);
  }, []);
  const flatRef = useRef<FlatList>(null);
  const meta = categoryMeta[story.category];
  const currentPage = story.pages[pageIdx];

  useBackgroundMusic(true);

  const onTimerExpire = useCallback(() => {
    Speech.stop();
    setSpeaking(false);
    Alert.alert('Sleep time 😴', 'Sweet dreams, little one!');
  }, []);

  const timer = useSleepTimer(onTimerExpire);

  const toggleSpeech = useCallback(() => {
    if (speaking) {
      Speech.stop();
      setSpeaking(false);
    } else {
      setSpeaking(true);
      Speech.speak(currentPage.text, {
        voice,
        language: 'en-US',
        rate: 0.72,       // slow & expressive like a Disney storyteller
        pitch: 1.6,       // bright, warm, magical tone
        onDone: () => setSpeaking(false),
        onStopped: () => setSpeaking(false),
        onError: () => setSpeaking(false),
      });
    }
  }, [speaking, currentPage]);

  const onScrollEnd = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const idx = Math.round(e.nativeEvent.contentOffset.x / SW);
    if (idx !== pageIdx) {
      Speech.stop();
      setSpeaking(false);
      setPageIdx(idx);
    }
  }, [pageIdx, SW]);

  const goTo = (idx: number) => {
    Speech.stop();
    setSpeaking(false);
    flatRef.current?.scrollToIndex({ index: idx, animated: true });
    setPageIdx(idx);
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => { Speech.stop(); navigation.goBack(); }} style={styles.iconBtn}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.titleTop} numberOfLines={1}>{story.title}</Text>
        <TouchableOpacity onPress={() => toggle(story.id)} style={styles.iconBtn}>
          <Text style={[styles.heartText, { color: isFav(story.id) ? Colors.accent : Colors.textMuted }]}>
            {isFav(story.id) ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* swipeable pages */}
      <FlatList
        ref={flatRef}
        data={story.pages}
        keyExtractor={(_, i) => String(i)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({ item, index }) => (
          <View style={[styles.page, { width: PAGE_W }]}>
            <StoryIllustration
              emoji={item.emoji}
              detailEmoji={item.detailEmoji}
              scene={item.scene}
              topColor={item.topColor}
              bottomColor={item.bottomColor}
              width={PAGE_W}
              height={ILLUS_H}
            />
            <View style={styles.textArea}>
              <Text style={[styles.storyText, { fontSize: isTablet ? 26 : 18, lineHeight: isTablet ? 40 : 28, paddingHorizontal: isTablet ? 40 : 0 }]}>{item.text}</Text>

              {/* keyword strip on last page */}
              {index === story.pages.length - 1 && story.keywords?.length > 0 && (
                <View style={styles.keywordsBox}>
                  <Text style={styles.keywordsTitle}>✨ Words I learned</Text>
                  <View style={styles.keywordsRow}>
                    {story.keywords.map((w) => (
                      <View key={w} style={[styles.keywordChip, { borderColor: meta.color }]}>
                        <Text style={[styles.keywordText, { color: meta.color }]}>{w}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
        )}
      />

      {/* bottom controls */}
      <View style={styles.bottom}>
        {/* page dots */}
        <View style={styles.dots}>
          {story.pages.map((_, i) => (
            <TouchableOpacity key={i} onPress={() => goTo(i)}>
              <View style={[
                styles.dot,
                { backgroundColor: i === pageIdx ? meta.color : Colors.bgDeep },
                i === pageIdx && styles.dotActive,
              ]} />
            </TouchableOpacity>
          ))}
        </View>

        {/* controls row */}
        <View style={styles.ctrlRow}>
          {/* prev */}
          <TouchableOpacity
            onPress={() => goTo(Math.max(0, pageIdx - 1))}
            disabled={pageIdx === 0}
            style={[styles.navBtn, pageIdx === 0 && styles.disabled]}
          >
            <Text style={styles.navText}>‹</Text>
          </TouchableOpacity>

          {/* read aloud */}
          <TouchableOpacity
            onPress={toggleSpeech}
            style={[styles.readBtn, { backgroundColor: meta.color }]}
          >
            <Text style={styles.readBtnText}>{speaking ? '⏸  Pause' : '▶  Read'}</Text>
          </TouchableOpacity>

          {/* sleep timer */}
          <TouchableOpacity
            onPress={() => timer.active ? timer.cancel() : setTimerModal(true)}
            style={styles.navBtn}
          >
            <Text style={styles.timerText}>{timer.display ?? '😴'}</Text>
          </TouchableOpacity>

          {/* next */}
          <TouchableOpacity
            onPress={() => goTo(Math.min(story.pages.length - 1, pageIdx + 1))}
            disabled={pageIdx === story.pages.length - 1}
            style={[styles.navBtn, pageIdx === story.pages.length - 1 && styles.disabled]}
          >
            <Text style={styles.navText}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* sleep timer modal */}
      <Modal visible={timerModal} transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>😴  Sleep Timer</Text>
            <Text style={styles.modalSub}>Auto-stop reading after…</Text>
            {TIMER_OPTIONS.map((m) => (
              <TouchableOpacity key={m} style={styles.timerOpt} onPress={() => { timer.start(m); setTimerModal(false); }}>
                <Text style={styles.timerOptText}>{m} minutes</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setTimerModal(false)} style={styles.cancelBtn}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0B0E2E' },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 6,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  iconBtn: { padding: 8 },
  backText: { fontSize: 26, color: '#FFF', textShadowColor: '#000', textShadowRadius: 4 },
  heartText: { fontSize: 24, textShadowColor: '#000', textShadowRadius: 4 },
  titleTop: {
    flex: 1,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
    textShadowColor: '#000',
    textShadowRadius: 6,
  },

  page: { flex: 1 },

  textArea: {
    flex: 1,
    backgroundColor: Colors.bgCard,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  storyText: {
    color: Colors.text,
    textAlign: 'center',
    fontWeight: '500',
  },

  bottom: {
    backgroundColor: Colors.bg,
    paddingBottom: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.bgCard,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 10,
  },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotActive: { width: 22 },

  ctrlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.md,
    gap: 12,
  },
  navBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: { fontSize: 26, color: Colors.text, lineHeight: 30 },
  disabled: { opacity: 0.25 },
  readBtn: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  readBtnText: { fontSize: 16, fontWeight: '800', color: '#FFF' },
  timerText: { fontSize: 18, color: Colors.textSoft },

  overlay: { flex: 1, backgroundColor: '#00000088', justifyContent: 'flex-end' },
  modal: {
    backgroundColor: Colors.bgCard,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: Spacing.lg,
    paddingBottom: 40,
  },
  modalTitle: { fontSize: 20, fontWeight: '800', color: Colors.text, textAlign: 'center', marginBottom: 4 },
  modalSub: { color: Colors.textMuted, textAlign: 'center', marginBottom: Spacing.md },
  timerOpt: {
    backgroundColor: Colors.bgDeep,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  timerOptText: { color: Colors.text, fontSize: 17, fontWeight: '600' },
  cancelBtn: { paddingVertical: 12, alignItems: 'center' },
  cancelText: { color: Colors.accent, fontSize: 16, fontWeight: '600' },

  keywordsBox: {
    marginTop: Spacing.md,
    padding: Spacing.md,
    backgroundColor: Colors.bgDeep,
    borderRadius: 14,
  },
  keywordsTitle: { color: Colors.gold, fontSize: 13, fontWeight: '700', marginBottom: 8, textAlign: 'center' },
  keywordsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  keywordChip: {
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  keywordText: { fontSize: 14, fontWeight: '700' },
});
