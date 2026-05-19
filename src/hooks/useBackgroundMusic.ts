import { useEffect, useRef, useCallback } from 'react';
import { Audio } from 'expo-av';

const MUSIC_FILE = require('../../assets/music/lullaby.mp3');

export function useBackgroundMusic(enabled = true) {
  const soundRef = useRef<Audio.Sound | null>(null);
  const volumeRef = useRef(0);
  const fadeInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearFade = () => {
    if (fadeInterval.current) clearInterval(fadeInterval.current);
  };

  const fadeTo = useCallback(async (target: number, onDone?: () => void) => {
    clearFade();
    const sound = soundRef.current;
    if (!sound) return;
    const step = target > volumeRef.current ? 0.04 : -0.04;
    fadeInterval.current = setInterval(async () => {
      volumeRef.current = Math.min(1, Math.max(0, volumeRef.current + step));
      await sound.setVolumeAsync(volumeRef.current).catch(() => {});
      if (
        (step > 0 && volumeRef.current >= target) ||
        (step < 0 && volumeRef.current <= target)
      ) {
        clearFade();
        if (target === 0) await sound.pauseAsync().catch(() => {});
        onDone?.();
      }
    }, 80);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let mounted = true;

    (async () => {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
        });

        const { sound } = await Audio.Sound.createAsync(
          MUSIC_FILE,
          { isLooping: true, volume: 0, shouldPlay: true }
        );

        if (!mounted) { await sound.unloadAsync(); return; }
        soundRef.current = sound;
        fadeTo(0.35); // fade in to 35% — soft background level
      } catch {
        // fail silently if music can't load
      }
    })();

    return () => {
      mounted = false;
      clearFade();
      soundRef.current?.unloadAsync().catch(() => {});
      soundRef.current = null;
    };
  }, [enabled, fadeTo]);

  const fadeOut = useCallback(() => fadeTo(0), [fadeTo]);
  const fadeIn  = useCallback(() => fadeTo(0.35), [fadeTo]);

  return { fadeIn, fadeOut };
}
