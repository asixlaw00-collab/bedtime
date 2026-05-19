import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@bedtime_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  useEffect(() => {
    AsyncStorage.getItem(KEY).then((raw) => {
      if (raw) setFavorites(new Set(JSON.parse(raw) as number[]));
    });
  }, []);

  const toggle = useCallback(async (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      AsyncStorage.setItem(KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  return { favorites, toggle, isFav: (id: number) => favorites.has(id) };
}
