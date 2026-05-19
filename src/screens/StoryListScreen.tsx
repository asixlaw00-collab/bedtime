import React, { useState } from 'react';
import {
  View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { stories, Category } from '../data/stories';
import { StoryCard } from '../components/StoryCard';
import { useFavorites } from '../hooks/useFavorites';
import { Colors, categoryMeta, Spacing } from '../theme';
import { RootStackParamList } from '../navigation';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'StoryList'>;
  route: RouteProp<RootStackParamList, 'StoryList'>;
}

export function StoryListScreen({ navigation, route }: Props) {
  const { category } = route.params;
  const { isFav } = useFavorites();
  const [query, setQuery] = useState('');

  const filtered = stories.filter((s) => {
    const matchCat = category === 'all' || s.category === category;
    const matchQ = !query || s.title.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  const meta = category !== 'all' ? categoryMeta[category as Category] : null;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{meta ? `${meta.emoji}  ${meta.label}` : '📚 All Stories'}</Text>
        <Text style={styles.count}>{filtered.length}</Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Search stories…"
        placeholderTextColor={Colors.textMuted}
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtered}
        keyExtractor={(s) => String(s.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <StoryCard
            story={item}
            isFav={isFav(item.id)}
            onPress={() => navigation.navigate('Reader', { storyId: item.id })}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No stories found.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.sm,
    gap: 10,
  },
  back: { padding: 6 },
  backArrow: { fontSize: 24, color: Colors.text },
  title: { flex: 1, fontSize: 18, fontWeight: '700', color: Colors.text },
  count: {
    backgroundColor: Colors.bgCard,
    color: Colors.textSoft,
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  search: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
    backgroundColor: Colors.bgCard,
    borderRadius: 12,
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    color: Colors.text,
    fontSize: 15,
    borderWidth: 1,
    borderColor: Colors.bgDeep,
  },
  list: { paddingHorizontal: Spacing.md, paddingBottom: 32 },
  empty: { color: Colors.textMuted, textAlign: 'center', marginTop: 40, fontSize: 16 },
});
