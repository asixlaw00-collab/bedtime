import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Story } from '../data/stories';
import { categoryMeta, Colors, Spacing } from '../theme';

interface Props {
  story: Story;
  onPress: () => void;
  isFav?: boolean;
  compact?: boolean;
}

export function StoryCard({ story, onPress, isFav, compact }: Props) {
  const meta = categoryMeta[story.category];

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.82} style={[styles.card, compact && styles.compact]}>
      {/* colored left strip */}
      <View style={[styles.strip, { backgroundColor: meta.color }]} />

      <View style={styles.emojiBox}>
        <Text style={styles.emoji}>{story.coverEmoji}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{story.title}</Text>
        <View style={styles.row}>
          <View style={[styles.badge, { backgroundColor: meta.color + '30' }]}>
            <Text style={[styles.badgeText, { color: meta.color }]}>{meta.label}</Text>
          </View>
          <Text style={styles.time}>⏱ {story.readTime} min</Text>
        </View>
      </View>

      {isFav && <Text style={styles.heart}>♥</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgCard,
    borderRadius: 16,
    marginBottom: Spacing.sm,
    overflow: 'hidden',
    minHeight: 80,
  },
  compact: { minHeight: 68 },
  strip: { width: 5, alignSelf: 'stretch' },
  emojiBox: {
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 34 },
  info: { flex: 1, paddingVertical: Spacing.sm, paddingRight: Spacing.sm },
  title: { fontSize: 15, fontWeight: '600', color: Colors.text, marginBottom: 4 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeText: { fontSize: 11, fontWeight: '700' },
  time: { fontSize: 11, color: Colors.textMuted },
  heart: { fontSize: 18, color: Colors.accent, paddingRight: 14 },
});
