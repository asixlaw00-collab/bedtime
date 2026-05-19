export const Colors = {
  bg: '#1A1A2E',
  bgCard: '#16213E',
  bgDeep: '#0F3460',
  accent: '#E94560',
  gold: '#F5A623',
  text: '#FFFFFF',
  textSoft: '#B0B8D1',
  textMuted: '#6B7280',

  animals: '#4CAF50',
  animalsBg: '#E8F5E9',
  fantasy: '#9C27B0',
  fantasyBg: '#F3E5F5',
  adventure: '#2196F3',
  adventureBg: '#E3F2FD',
  friendship: '#E91E63',
  friendshipBg: '#FCE4EC',
  nature: '#00BCD4',
  natureBg: '#E1F5FE',
  family: '#FF9800',
  familyBg: '#FFF3E0',
  lifestyle: '#00ACC1',
  lifestyleBg: '#E0F7FA',
};

export const categoryMeta: Record<string, { label: string; color: string; bg: string; emoji: string }> = {
  animals:    { label: 'Animals',    color: Colors.animals,    bg: Colors.animalsBg,    emoji: '🐾' },
  fantasy:    { label: 'Fantasy',    color: Colors.fantasy,    bg: Colors.fantasyBg,    emoji: '✨' },
  adventure:  { label: 'Adventure',  color: Colors.adventure,  bg: Colors.adventureBg,  emoji: '🗺️' },
  friendship: { label: 'Friendship', color: Colors.friendship, bg: Colors.friendshipBg, emoji: '💝' },
  nature:     { label: 'Nature',     color: Colors.nature,     bg: Colors.natureBg,     emoji: '🌿' },
  family:     { label: 'Family',     color: Colors.family,     bg: Colors.familyBg,     emoji: '🏡' },
  lifestyle:  { label: 'Lifestyle',  color: Colors.lifestyle,  bg: Colors.lifestyleBg,  emoji: '⭐' },
};

export const Fonts = {
  title: { fontSize: 28, fontWeight: '700' as const, color: Colors.text },
  heading: { fontSize: 22, fontWeight: '700' as const, color: Colors.text },
  subheading: { fontSize: 18, fontWeight: '600' as const, color: Colors.text },
  body: { fontSize: 20, lineHeight: 32, color: Colors.text },
  caption: { fontSize: 14, color: Colors.textSoft },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};
