import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stories } from '../data/stories';
import { categoryMeta, Colors, Spacing } from '../theme';
import { RootStackParamList } from '../navigation';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export function HomeScreen({ navigation }: Props) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const featured = stories[Math.floor(Math.random() * stories.length)];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bg} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* header */}
        <View style={styles.header}>
          <Text style={[styles.moon, isTablet && { fontSize: 60 }]}>🌙</Text>
          <View>
            <Text style={[styles.title, isTablet && { fontSize: 40 }]}>Bedtime Stories</Text>
            <Text style={[styles.subtitle, isTablet && { fontSize: 18 }]}>{stories.length} stories for little dreamers</Text>
          </View>
        </View>

        {/* featured story */}
        <TouchableOpacity
          style={styles.featured}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Reader', { storyId: featured.id })}
        >
          <Text style={styles.featuredLabel}>✨ Tonight's Story</Text>
          <Text style={styles.featuredEmoji}>{featured.coverEmoji}</Text>
          <Text style={styles.featuredTitle}>{featured.title}</Text>
          <View style={styles.featuredRow}>
            <View style={[styles.badge, { backgroundColor: categoryMeta[featured.category].color + '40' }]}>
              <Text style={[styles.badgeText, { color: categoryMeta[featured.category].color }]}>
                {categoryMeta[featured.category].label}
              </Text>
            </View>
            <Text style={styles.featuredTime}>⏱ {featured.readTime} min</Text>
          </View>
        </TouchableOpacity>

        {/* categories */}
        <Text style={[styles.sectionTitle, isTablet && styles.sectionTitleLg]}>Browse by Category</Text>
        <View style={styles.catGrid}>
          {Object.entries(categoryMeta).map(([key, meta]) => (
            <TouchableOpacity
              key={key}
              style={[styles.catCard, isTablet && styles.catCardLg, { backgroundColor: meta.color + '22', borderColor: meta.color + '55' }]}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('StoryList', { category: key as any, title: meta.label })}
            >
              <Text style={[styles.catEmoji, isTablet && styles.catEmojiLg]}>{meta.emoji}</Text>
              <Text style={[styles.catLabel, isTablet && styles.catLabelLg, { color: meta.color }]}>{meta.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* all stories */}
        <Text style={[styles.sectionTitle, isTablet && styles.sectionTitleLg]}>All Stories</Text>
        <View style={isTablet ? styles.twoCol : undefined}>
          {stories.map((story) => (
            <TouchableOpacity
              key={story.id}
              style={[styles.listItem, isTablet && styles.listItemLg]}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Reader', { storyId: story.id })}
            >
              <View style={[styles.listStrip, { backgroundColor: categoryMeta[story.category].color }]} />
              <Text style={[styles.listEmoji, isTablet && styles.listEmojiLg]}>{story.coverEmoji}</Text>
              <View style={{ flex: 1 }}>
                <Text style={[styles.listTitle, isTablet && styles.listTitleLg]}>{story.title}</Text>
                <Text style={[styles.listSub, isTablet && styles.listSubLg]}>{categoryMeta[story.category].label} · {story.readTime} min</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bg },
  scroll: { padding: Spacing.md },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: Spacing.lg },
  moon: { fontSize: 40 },
  title: { fontSize: 26, fontWeight: '800', color: Colors.text },
  subtitle: { fontSize: 13, color: Colors.textSoft, marginTop: 2 },

  featured: {
    backgroundColor: Colors.bgCard,
    borderRadius: 20,
    padding: Spacing.lg,
    alignItems: 'center',
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.bgDeep,
  },
  featuredLabel: { fontSize: 13, color: Colors.gold, fontWeight: '700', marginBottom: 8 },
  featuredEmoji: { fontSize: 72, marginBottom: 8 },
  featuredTitle: { fontSize: 20, fontWeight: '700', color: Colors.text, textAlign: 'center', marginBottom: 10 },
  featuredRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  badge: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: 8 },
  badgeText: { fontSize: 12, fontWeight: '700' },
  featuredTime: { fontSize: 12, color: Colors.textMuted },

  sectionTitle: { fontSize: 18, fontWeight: '700', color: Colors.text, marginBottom: Spacing.sm, marginTop: 4 },
  sectionTitleLg: { fontSize: 26 },

  catGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: Spacing.lg },
  catCard: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  catCardLg: { width: '22%', borderRadius: 20 },
  catEmoji: { fontSize: 30, marginBottom: 4 },
  catEmojiLg: { fontSize: 48, marginBottom: 8 },
  catLabel: { fontSize: 12, fontWeight: '700' },
  catLabelLg: { fontSize: 16 },

  twoCol: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    marginBottom: 8,
    overflow: 'hidden',
    minHeight: 70,
  },
  listItemLg: { width: '49%', minHeight: 90, marginBottom: 0, borderRadius: 18 },
  listStrip: { width: 4, alignSelf: 'stretch' },
  listEmoji: { fontSize: 32, width: 60, textAlign: 'center' },
  listEmojiLg: { fontSize: 44, width: 80 },
  listTitle: { fontSize: 15, fontWeight: '600', color: Colors.text },
  listTitleLg: { fontSize: 20 },
  listSub: { fontSize: 12, color: Colors.textMuted, marginTop: 2 },
  listSubLg: { fontSize: 15, marginTop: 4 },
});
