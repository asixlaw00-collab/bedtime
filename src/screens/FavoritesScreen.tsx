import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stories } from '../data/stories';
import { StoryCard } from '../components/StoryCard';
import { useFavorites } from '../hooks/useFavorites';
import { Colors, Spacing } from '../theme';
import { RootStackParamList } from '../navigation';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Favorites'>;
}

export function FavoritesScreen({ navigation }: Props) {
  const { favorites, isFav } = useFavorites();
  const favStories = stories.filter((s) => favorites.has(s.id));

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>♥ Favourites</Text>
        <Text style={styles.count}>{favStories.length} saved</Text>
      </View>

      {favStories.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>🌙</Text>
          <Text style={styles.emptyTitle}>No favourites yet</Text>
          <Text style={styles.emptyText}>Tap the ♡ on any story to save it here.</Text>
        </View>
      ) : (
        <FlatList
          data={favStories}
          keyExtractor={(s) => String(s.id)}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <StoryCard
              story={item}
              isFav={isFav(item.id)}
              onPress={() => navigation.navigate('Reader', { storyId: item.id })}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  title: { fontSize: 22, fontWeight: '800', color: Colors.text },
  count: { color: Colors.textMuted, fontSize: 14 },
  list: { paddingHorizontal: Spacing.md, paddingBottom: 32 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: Spacing.xl },
  emptyEmoji: { fontSize: 64, marginBottom: Spacing.md },
  emptyTitle: { fontSize: 20, fontWeight: '700', color: Colors.text, marginBottom: 8 },
  emptyText: { fontSize: 15, color: Colors.textMuted, textAlign: 'center' },
});
