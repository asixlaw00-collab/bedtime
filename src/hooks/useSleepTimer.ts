import { useState, useEffect, useRef, useCallback } from 'react';

export type TimerOption = 5 | 10 | 15 | 20 | 30;
export const TIMER_OPTIONS: TimerOption[] = [5, 10, 15, 20, 30];

export function useSleepTimer(onExpire: () => void) {
  const [minutes, setMinutes] = useState<TimerOption | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback((mins: TimerOption) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setMinutes(mins);
    setSecondsLeft(mins * 60);
  }, []);

  const cancel = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setMinutes(null);
    setSecondsLeft(0);
  }, []);

  useEffect(() => {
    if (!minutes) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current!);
          setMinutes(null);
          onExpire();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current!);
  }, [minutes, onExpire]);

  const display = minutes
    ? `${Math.floor(secondsLeft / 60)}:${String(secondsLeft % 60).padStart(2, '0')}`
    : null;

  return { active: !!minutes, secondsLeft, display, start, cancel };
}
