import React, { useState, useCallback, useRef } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert, Modal, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import { getById } from '../data/stories';
import { StoryIllustration } from '../components/StoryIllustration';
import { useFavorites } from '../hooks/useFavorites';
import { useSleepTimer, TIMER_OPTIONS } from '../hooks/useSleepTimer';
import { Colors, categoryMeta, Spacing } from '../theme';
import { RootStackParamList } from '../navigation';

const { width: SCREEN_W } = Dimensions.get('window');

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Reader'>;
  route: RouteProp<RootStackParamList, 'Reader'>;
}

export function StoryReaderScreen({ navigation, route }: Props) {
  const story = getById(route.params.storyId)!;
  const { isFav, toggle } = useFavorites();
  const [page, setPage] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [timerModal, setTimerModal] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  const meta = categoryMeta[story.category];

  const onTimerExpire = useCallback(() => {
    Speech.stop();
    setSpeaking(false);
    Alert.alert('Sleep time! 😴', 'Sweet dreams, little one!');
  }, []);

  const timer = useSleepTimer(onTimerExpire);

  const toggleSpeech = useCallback(async () => {
    if (speaking) {
      await Speech.stop();
      setSpeaking(false);
    } else {
      const text = story.pages.slice(page).join(' ');
      setSpeaking(true);
      Speech.speak(text, {
        rate: 0.82,
        pitch: 1.0,
        onDone: () => setSpeaking(false),
        onStopped: () => setSpeaking(false),
        onError: () => setSpeaking(false),
      });
    }
  }, [speaking, story.pages, page]);

  const goPage = (dir: 1 | -1) => {
    Speech.stop();
    setSpeaking(false);
    const next = Math.max(0, Math.min(story.pages.length - 1, page + dir));
    setPage(next);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => { Speech.stop(); navigation.goBack(); }} style={styles.iconBtn}>
          <Text style={styles.iconText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.catLabel} numberOfLines={1}>{meta.emoji} {meta.label}</Text>
        <TouchableOpacity onPress={() => toggle(story.id)} style={styles.iconBtn}>
          <Text style={[styles.iconText, { color: isFav(story.id) ? Colors.accent : Colors.textMuted }]}>
            {isFav(story.id) ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* illustration */}
        <StoryIllustration
          emoji={story.emoji}
          bgColor={story.bgColor}
          accentColor={story.accentColor}
          category={story.category}
          width={SCREEN_W - Spacing.md * 2}
          height={240}
        />

        {/* title */}
        <Text style={styles.title}>{story.title}</Text>

        {/* page indicator */}
        <View style={styles.dots}>
          {story.pages.map((_, i) => (
            <View key={i} style={[styles.dot, i === page && styles.dotActive, { backgroundColor: i === page ? meta.color : Colors.bgDeep }]} />
          ))}
        </View>

        {/* story text */}
        <View style={styles.textCard}>
          <Text style={styles.storyText}>{story.pages[page]}</Text>
        </View>

        {/* page nav */}
        <View style={styles.pageNav}>
          <TouchableOpacity
            onPress={() => goPage(-1)}
            disabled={page === 0}
            style={[styles.pageBtn, page === 0 && styles.pageBtnDisabled]}
          >
            <Text style={styles.pageBtnText}>‹ Prev</Text>
          </TouchableOpacity>

          <Text style={styles.pageCount}>{page + 1} / {story.pages.length}</Text>

          <TouchableOpacity
            onPress={() => goPage(1)}
            disabled={page === story.pages.length - 1}
            style={[styles.pageBtn, page === story.pages.length - 1 && styles.pageBtnDisabled]}
          >
            <Text style={styles.pageBtnText}>Next ›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* bottom controls */}
      <View style={styles.controls}>
        {/* TTS */}
        <TouchableOpacity onPress={toggleSpeech} style={[styles.ctrlBtn, { backgroundColor: meta.color + '33' }]}>
          <Text style={styles.ctrlIcon}>{speaking ? '⏸' : '▶'}</Text>
          <Text style={[styles.ctrlLabel, { color: meta.color }]}>{speaking ? 'Pause' : 'Read'}</Text>
        </TouchableOpacity>

        {/* Sleep timer */}
        <TouchableOpacity
          onPress={() => timer.active ? timer.cancel() : setTimerModal(true)}
          style={[styles.ctrlBtn, { backgroundColor: Colors.bgCard }]}
        >
          <Text style={styles.ctrlIcon}>😴</Text>
          <Text style={styles.ctrlLabel}>{timer.display ?? 'Sleep'}</Text>
        </TouchableOpacity>
      </View>

      {/* timer picker modal */}
      <Modal visible={timerModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Sleep Timer</Text>
            <Text style={styles.modalSub}>Stop reading after…</Text>
            {TIMER_OPTIONS.map((mins) => (
              <TouchableOpacity
                key={mins}
                style={styles.timerOption}
                onPress={() => { timer.start(mins); setTimerModal(false); }}
              >
                <Text style={styles.timerOptionText}>{mins} minutes</Text>
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
  safe: { flex: 1, backgroundColor: Colors.bg },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  iconBtn: { padding: 10 },
  iconText: { fontSize: 24, color: Colors.text },
  catLabel: { flex: 1, textAlign: 'center', color: Colors.textSoft, fontSize: 14, fontWeight: '600' },

  scroll: { padding: Spacing.md, paddingBottom: 16 },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center',
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
    lineHeight: 30,
  },

  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginBottom: Spacing.md },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotActive: { width: 24 },

  textCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 18,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.bgDeep,
  },
  storyText: {
    fontSize: 20,
    lineHeight: 34,
    color: Colors.text,
    textAlign: 'left',
    fontWeight: '400',
  },

  pageNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm,
  },
  pageBtn: { backgroundColor: Colors.bgCard, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 12 },
  pageBtnDisabled: { opacity: 0.3 },
  pageBtnText: { color: Colors.text, fontSize: 15, fontWeight: '600' },
  pageCount: { color: Colors.textMuted, fontSize: 14 },

  controls: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.bgCard,
  },
  ctrlBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
  },
  ctrlIcon: { fontSize: 22 },
  ctrlLabel: { fontSize: 15, fontWeight: '700', color: Colors.textSoft },

  modalOverlay: { flex: 1, backgroundColor: '#00000088', justifyContent: 'flex-end' },
  modalBox: {
    backgroundColor: Colors.bgCard,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: Spacing.lg,
    paddingBottom: 40,
  },
  modalTitle: { fontSize: 20, fontWeight: '800', color: Colors.text, textAlign: 'center', marginBottom: 4 },
  modalSub: { color: Colors.textMuted, textAlign: 'center', marginBottom: Spacing.md, fontSize: 14 },
  timerOption: {
    backgroundColor: Colors.bgDeep,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  timerOptionText: { color: Colors.text, fontSize: 17, fontWeight: '600' },
  cancelBtn: { marginTop: 4, paddingVertical: 12, alignItems: 'center' },
  cancelText: { color: Colors.accent, fontSize: 16, fontWeight: '600' },
});
