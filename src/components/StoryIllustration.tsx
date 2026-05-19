import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, {
  Circle, Rect, Ellipse, Path, Polygon, G, Defs, LinearGradient, Stop, RadialGradient,
} from 'react-native-svg';

interface Props {
  emoji: string;
  bgColor: string;
  accentColor: string;
  category: string;
  width?: number;
  height?: number;
}

export function StoryIllustration({ emoji, bgColor, accentColor, category, width = 360, height = 260 }: Props) {
  const cx = width / 2;
  const cy = height / 2;

  return (
    <View style={[styles.container, { width, height }]}>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#1A1A2E" stopOpacity="1" />
            <Stop offset="1" stopColor={bgColor} stopOpacity="1" />
          </LinearGradient>
          <RadialGradient id="glow" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor={accentColor} stopOpacity="0.35" />
            <Stop offset="1" stopColor={accentColor} stopOpacity="0" />
          </RadialGradient>
        </Defs>

        {/* background */}
        <Rect x={0} y={0} width={width} height={height} fill="url(#sky)" rx={20} />

        {/* stars */}
        {STARS.map((s, i) => (
          <Circle key={i} cx={s.x * width} cy={s.y * height * 0.55} r={s.r} fill="#FFFFFF" opacity={s.o} />
        ))}

        {/* moon */}
        <Circle cx={width - 60} cy={48} r={22} fill="#FFF9C4" opacity={0.9} />
        <Circle cx={width - 50} cy={42} r={18} fill="#1A1A2E" opacity={0.85} />

        {/* ground */}
        <Ellipse cx={cx} cy={height - 20} rx={width * 0.55} ry={40} fill={accentColor} opacity={0.25} />
        <Ellipse cx={cx} cy={height - 16} rx={width * 0.38} ry={26} fill={accentColor} opacity={0.3} />

        {/* glow behind character */}
        <Circle cx={cx} cy={cy - 10} r={80} fill="url(#glow)" />

        {/* scene decoration per category */}
        <SceneDecor category={category} width={width} height={height} accent={accentColor} />
      </Svg>

      {/* emoji character (rendered as native text on top of SVG) */}
      <View style={[styles.emojiWrap, { top: cy - 58 }]} pointerEvents="none">
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
    </View>
  );
}

function SceneDecor({ category, width, height, accent }: { category: string; width: number; height: number; accent: string }) {
  const bottom = height - 30;
  switch (category) {
    case 'animals':
      return (
        <G>
          <Ellipse cx={60} cy={bottom} rx={30} ry={14} fill="#388E3C" opacity={0.5} />
          <Ellipse cx={width - 55} cy={bottom} rx={25} ry={12} fill="#388E3C" opacity={0.4} />
          <Circle cx={55} cy={bottom - 20} r={18} fill="#43A047" opacity={0.5} />
          <Circle cx={width - 50} cy={bottom - 16} r={14} fill="#2E7D32" opacity={0.4} />
        </G>
      );
    case 'fantasy':
      return (
        <G>
          {SPARKLES.map((s, i) => (
            <G key={i} transform={`translate(${s.x * width},${s.y * height})`}>
              <Polygon points="0,-6 1.5,-1.5 6,0 1.5,1.5 0,6 -1.5,1.5 -6,0 -1.5,-1.5" fill={accent} opacity={0.6} />
            </G>
          ))}
          <Path d={`M${width * 0.15},${bottom} Q${width * 0.3},${bottom - 50} ${width * 0.45},${bottom}`} stroke={accent} strokeWidth={2} fill="none" opacity={0.5} />
        </G>
      );
    case 'adventure':
      return (
        <G>
          <Path d={`M20,${bottom} L80,${bottom - 60} L140,${bottom}`} fill="#607D8B" opacity={0.4} />
          <Path d={`M${width - 120},${bottom} L${width - 60},${bottom - 45} L${width},${bottom}`} fill="#546E7A" opacity={0.35} />
        </G>
      );
    case 'friendship':
      return (
        <G>
          {[0.2, 0.35, 0.65, 0.8].map((x, i) => (
            <G key={i}>
              <Circle cx={x * width} cy={bottom - 8} r={6} fill="#E91E63" opacity={0.4} />
              <Rect x={x * width - 1.5} y={bottom - 28} width={3} height={22} fill="#81C784" opacity={0.5} />
            </G>
          ))}
        </G>
      );
    case 'nature':
      return (
        <G>
          <Rect x={width * 0.18} y={bottom - 40} width={4} height={42} fill="#5D4037" opacity={0.6} />
          <Circle cx={width * 0.18} cy={bottom - 50} r={24} fill="#2E7D32" opacity={0.5} />
          <Circle cx={width * 0.22} cy={bottom - 62} r={16} fill="#43A047" opacity={0.4} />
          <Rect x={width * 0.75} y={bottom - 30} width={3} height={32} fill="#5D4037" opacity={0.6} />
          <Circle cx={width * 0.75} cy={bottom - 40} r={18} fill="#388E3C" opacity={0.5} />
        </G>
      );
    case 'family':
      return (
        <G>
          <Rect x={width * 0.65} y={bottom - 55} width={50} height={58} fill="#8D6E63" opacity={0.4} rx={4} />
          <Polygon points={`${width * 0.6},${bottom - 55} ${width * 0.9},${bottom - 55} ${width * 0.75},${bottom - 85}`} fill="#BF360C" opacity={0.35} />
          <Rect x={width * 0.73} y={bottom - 30} width={14} height={32} fill="#5D4037" opacity={0.5} rx={2} />
        </G>
      );
    default:
      return null;
  }
}

const STARS = [
  { x: 0.05, y: 0.05, r: 1.5, o: 0.9 }, { x: 0.12, y: 0.12, r: 1, o: 0.7 },
  { x: 0.22, y: 0.06, r: 2, o: 0.85 }, { x: 0.35, y: 0.14, r: 1, o: 0.6 },
  { x: 0.48, y: 0.04, r: 1.5, o: 0.8 }, { x: 0.6, y: 0.1, r: 1, o: 0.7 },
  { x: 0.7, y: 0.2, r: 2.5, o: 0.9 }, { x: 0.82, y: 0.07, r: 1, o: 0.65 },
  { x: 0.9, y: 0.22, r: 1.5, o: 0.75 }, { x: 0.15, y: 0.28, r: 1, o: 0.5 },
  { x: 0.42, y: 0.22, r: 1.2, o: 0.6 }, { x: 0.55, y: 0.3, r: 1, o: 0.5 },
];

const SPARKLES = [
  { x: 0.08, y: 0.18 }, { x: 0.88, y: 0.12 }, { x: 0.15, y: 0.55 },
  { x: 0.82, y: 0.5 }, { x: 0.5, y: 0.12 },
];

const styles = StyleSheet.create({
  container: { position: 'relative', overflow: 'hidden', borderRadius: 20 },
  emojiWrap: { position: 'absolute', left: 0, right: 0, alignItems: 'center' },
  emoji: { fontSize: 88, textAlign: 'center' },
});
