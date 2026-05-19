import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, {
  Circle, Rect, Ellipse, Path, G, Defs, LinearGradient, RadialGradient,
  Stop, Polygon, Line,
} from 'react-native-svg';
import { SceneType } from '../data/stories';

interface Props {
  emoji: string;
  detailEmoji?: string;
  scene: SceneType;
  topColor: string;
  bottomColor: string;
  width?: number;
  height?: number;
}

export function StoryIllustration({
  emoji, detailEmoji, scene, topColor, bottomColor,
  width = 390, height = 300,
}: Props) {
  const cx = width / 2;
  const ground = height * 0.72;

  const charX = detailEmoji ? cx * 0.68 : cx;
  const charY = ground - 50;
  const detailX = cx * 1.48;
  const detailY = ground - 65;

  return (
    <View style={[styles.wrap, { width, height }]}>
      <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={topColor} />
            <Stop offset="0.6" stopColor={topColor} stopOpacity="0.85" />
            <Stop offset="1" stopColor={bottomColor} />
          </LinearGradient>
          <RadialGradient id="glow" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.3" />
            <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor="#FFD700" stopOpacity="0.6" />
            <Stop offset="0.5" stopColor="#FF8F00" stopOpacity="0.2" />
            <Stop offset="1" stopColor="#FF8F00" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor="#FFF9C4" stopOpacity="0.8" />
            <Stop offset="1" stopColor="#FFF9C4" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="fireGlow" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor="#FF8F00" stopOpacity="0.7" />
            <Stop offset="1" stopColor="#FF8F00" stopOpacity="0" />
          </RadialGradient>
        </Defs>

        {/* sky background */}
        <Rect x={0} y={0} width={width} height={height} fill="url(#bg)" />

        <SceneBg scene={scene} w={width} h={height} ground={ground} cx={cx} top={topColor} bot={bottomColor} />

        {/* character shadow */}
        <Ellipse cx={charX} cy={ground + 8} rx={44} ry={12} fill="#000" opacity={0.2} />
        {detailEmoji && (
          <Ellipse cx={detailX} cy={ground + 8} rx={32} ry={9} fill="#000" opacity={0.15} />
        )}

        {/* decorative frame */}
        <Rect x={5} y={5} width={width - 10} height={height - 10} rx={20}
          stroke="#FFFFFF" strokeWidth={2.5} fill="none" opacity={0.25} />
      </Svg>

      {/* main character emoji */}
      <View style={[styles.emojiMain, { left: charX - 58, top: charY - 58 }]} pointerEvents="none">
        <Text style={styles.emojiMainText}>{emoji}</Text>
      </View>

      {detailEmoji && (
        <View style={[styles.emojiDetail, { left: detailX - 40, top: detailY - 40 }]} pointerEvents="none">
          <Text style={styles.emojiDetailText}>{detailEmoji}</Text>
        </View>
      )}
    </View>
  );
}

function SceneBg({ scene, w, h, ground, cx, top, bot }: {
  scene: SceneType; w: number; h: number; ground: number; cx: number; top: string; bot: string;
}) {
  switch (scene) {

    case 'night': return (
      <G>
        {/* moon with glow */}
        <Circle cx={w * 0.78} cy={h * 0.16} r={55} fill="#FFF9C4" opacity={0.08} />
        <Circle cx={w * 0.78} cy={h * 0.16} r={38} fill="#FFFDE7" opacity={0.15} />
        <Circle cx={w * 0.78} cy={h * 0.16} r={26} fill="#FFF9C4" opacity={0.95} />
        <Circle cx={w * 0.86} cy={h * 0.11} r={20} fill={top} opacity={0.97} />
        {/* stars varied sizes */}
        {NIGHT_STARS.map((s, i) => (
          <G key={i}>
            <Circle cx={s.x * w} cy={s.y * h} r={s.r + 0.5} fill="#FFF" opacity={0.15} />
            <Circle cx={s.x * w} cy={s.y * h} r={s.r} fill="#FFF9C4" opacity={s.o} />
          </G>
        ))}
        {/* forest silhouette - back layer */}
        <Path d={`M0,${ground - 10}
          L${w * 0.04},${ground - 55} L${w * 0.08},${ground - 10}
          L${w * 0.1},${ground - 70} L${w * 0.14},${ground - 10}
          L${w * 0.18},${ground - 50} L${w * 0.22},${ground - 10}
          L${w * 0.88},${ground - 10}
          L${w * 0.88},${ground - 52} L${w * 0.92},${ground - 10}
          L${w * 0.94},${ground - 68} L${w * 0.98},${ground - 10}
          L${w},${ground - 10} L${w},${h} L0,${h} Z`}
          fill="#0A1628" opacity={0.75} />
        {/* forest silhouette - front layer with detail */}
        {NIGHT_TREES.map((t, i) => (
          <G key={i}>
            <Rect x={t.x * w - 4} y={ground - t.h * 0.35} width={8} height={t.h * 0.35} fill="#1A0A00" opacity={0.9} />
            <Polygon points={`${t.x * w},${ground - t.h} ${t.x * w - t.w},${ground - t.h * 0.3} ${t.x * w + t.w},${ground - t.h * 0.3}`} fill="#0D2818" opacity={0.9} />
            <Polygon points={`${t.x * w},${ground - t.h * 0.75} ${t.x * w - t.w * 1.2},${ground - t.h * 0.2} ${t.x * w + t.w * 1.2},${ground - t.h * 0.2}`} fill="#152E1E" opacity={0.85} />
          </G>
        ))}
        {/* ground */}
        <Path d={`M0,${ground} Q${w * 0.3},${ground - 12} ${w * 0.6},${ground + 4} Q${w * 0.8},${ground + 12} ${w},${ground - 6} L${w},${h} L0,${h} Z`}
          fill="#0D2818" opacity={0.9} />
        {/* fireflies */}
        {FIREFLIES.map((f, i) => (
          <G key={i}>
            <Circle cx={f.x * w} cy={f.y * h} r={4} fill="#FFFF88" opacity={0.15} />
            <Circle cx={f.x * w} cy={f.y * h} r={2} fill="#FFFF88" opacity={0.8} />
          </G>
        ))}
        {/* campfire glow on ground */}
        <Ellipse cx={w * 0.5} cy={ground + 5} rx={w * 0.25} ry={18} fill="#FF8F00" opacity={0.1} />
      </G>
    );

    case 'forest': return (
      <G>
        {/* light rays through trees */}
        {[0.25, 0.5, 0.72].map((x, i) => (
          <Path key={i}
            d={`M${x * w - 15},0 L${x * w + 15},0 L${x * w + 45},${ground} L${x * w - 45},${ground} Z`}
            fill="#FFFF88" opacity={0.06} />
        ))}
        {/* back trees - varied greens */}
        {FOREST_BACK.map((t, i) => (
          <G key={i}>
            <Rect x={t.x * w - 4} y={ground - t.h * 0.4} width={8} height={t.h * 0.4} fill="#3E2000" opacity={0.7} />
            <Circle cx={t.x * w} cy={ground - t.h * 0.55} r={t.h * 0.42} fill={t.c} opacity={0.65} />
            <Circle cx={t.x * w - t.h * 0.15} cy={ground - t.h * 0.45} r={t.h * 0.3} fill={t.c2} opacity={0.55} />
          </G>
        ))}
        {/* ground grass */}
        <Path d={`M0,${ground} Q${w * 0.2},${ground - 18} ${w * 0.4},${ground - 5} Q${w * 0.6},${ground + 10} ${w * 0.8},${ground - 8} Q${w * 0.9},${ground - 2} ${w},${ground - 4} L${w},${h} L0,${h} Z`}
          fill="#2E7D32" opacity={0.85} />
        <Path d={`M0,${ground + 8} Q${w * 0.35},${ground - 4} ${w * 0.65},${ground + 10} Q${w * 0.85},${ground + 18} ${w},${ground + 6} L${w},${h} L0,${h} Z`}
          fill="#1B5E20" opacity={0.75} />
        {/* front trees */}
        {FOREST_FRONT.map((t, i) => (
          <G key={i}>
            <Rect x={t.x * w - 6} y={ground - t.h * 0.45} width={12} height={t.h * 0.45} fill="#3E1A00" opacity={0.9} />
            <Polygon points={`${t.x * w},${ground - t.h} ${t.x * w - t.w},${ground - t.h * 0.45} ${t.x * w + t.w},${ground - t.h * 0.45}`} fill="#1B5E20" opacity={0.95} />
            <Polygon points={`${t.x * w},${ground - t.h * 0.78} ${t.x * w - t.w * 1.3},${ground - t.h * 0.35} ${t.x * w + t.w * 1.3},${ground - t.h * 0.35}`} fill="#2E7D32" opacity={0.9} />
            <Polygon points={`${t.x * w},${ground - t.h * 0.55} ${t.x * w - t.w * 1.5},${ground - t.h * 0.2} ${t.x * w + t.w * 1.5},${ground - t.h * 0.2}`} fill="#388E3C" opacity={0.8} />
          </G>
        ))}
        {/* colourful flowers */}
        {FLOWERS.map((f, i) => (
          <G key={i}>
            <Rect x={f.x * w + 1} y={ground - 28} width={3} height={30} fill="#388E3C" opacity={0.9} />
            {[-1, 1].map((d, j) => (
              <Ellipse key={j} cx={f.x * w + 1 + d * 7} cy={ground - 30} rx={6} ry={4} fill={f.c} opacity={0.85} />
            ))}
            <Circle cx={f.x * w + 1} cy={ground - 32} r={6} fill={f.c} opacity={0.9} />
            <Circle cx={f.x * w + 1} cy={ground - 32} r={3} fill="#FFF9C4" opacity={0.9} />
          </G>
        ))}
        {/* mushrooms */}
        {[0.35, 0.62].map((x, i) => (
          <G key={i}>
            <Rect x={x * w - 3} y={ground - 16} width={6} height={16} fill="#D7CCC8" opacity={0.8} />
            <Ellipse cx={x * w} cy={ground - 18} rx={14} ry={8} fill={i === 0 ? '#E53935' : '#FF8F00'} opacity={0.9} />
            {[0, 1, 2].map(j => <Circle key={j} cx={x * w - 6 + j * 6} cy={ground - 21} r={2} fill="#FFF" opacity={0.8} />)}
          </G>
        ))}
        {/* butterflies */}
        {[{ x: 0.15, y: 0.45, c: '#FF80AB' }, { x: 0.78, y: 0.38, c: '#FFD740' }].map((b, i) => (
          <G key={i}>
            <Ellipse cx={b.x * w - 9} cy={b.y * h} rx={11} ry={7} fill={b.c} opacity={0.7} />
            <Ellipse cx={b.x * w + 9} cy={b.y * h} rx={11} ry={7} fill={b.c} opacity={0.7} />
            <Circle cx={b.x * w} cy={b.y * h} r={3} fill="#333" opacity={0.8} />
          </G>
        ))}
      </G>
    );

    case 'ocean': return (
      <G>
        {/* horizon sky gradient extra */}
        <Rect x={0} y={0} width={w} height={h * 0.42} fill="#87CEEB" opacity={0.3} />
        {/* sun reflection */}
        <Ellipse cx={cx} cy={h * 0.38} rx={w * 0.08} ry={h * 0.06} fill="#FFD700" opacity={0.15} />
        {/* deep ocean layers */}
        <Rect x={0} y={h * 0.38} width={w} height={h * 0.62} fill="#0077B6" opacity={0.35} />
        <Rect x={0} y={h * 0.5} width={w} height={h * 0.5} fill="#023E8A" opacity={0.3} />
        {/* wave layers - vibrant teal/blue */}
        {[0, 1, 2, 3].map(i => (
          <Path key={i}
            d={`M0,${ground - i * 14} Q${w * 0.12},${ground - 20 - i * 14} ${w * 0.25},${ground - i * 14} Q${w * 0.38},${ground + 6 - i * 14} ${w * 0.5},${ground - i * 14} Q${w * 0.62},${ground - 18 - i * 14} ${w * 0.75},${ground - i * 14} Q${w * 0.88},${ground + 4 - i * 14} ${w},${ground - i * 14} L${w},${h} L0,${h} Z`}
            fill={i < 2 ? '#0096C7' : '#48CAE4'}
            opacity={0.12 + i * 0.1}
          />
        ))}
        {/* foam highlights */}
        {FOAM.map((f, i) => (
          <G key={i}>
            <Ellipse cx={f.x * w} cy={ground - f.y * 18} rx={f.rx} ry={5} fill="#FFF" opacity={0.3} />
            <Ellipse cx={f.x * w + 10} cy={ground - f.y * 18 - 4} rx={f.rx * 0.5} ry={3} fill="#FFF" opacity={0.2} />
          </G>
        ))}
        {/* coral reef */}
        {[0.08, 0.78, 0.88].map((x, i) => (
          <G key={i}>
            <Path d={`M${x * w},${h} Q${x * w - 8},${ground + 10} ${x * w - 4},${ground - 10} Q${x * w},${ground - 20} ${x * w + 4},${ground - 10} Q${x * w + 8},${ground + 10} ${x * w},${h}`}
              fill={i === 0 ? '#FF6B6B' : i === 1 ? '#FF8F00' : '#FF69B4'} opacity={0.75} />
          </G>
        ))}
        {/* colourful fish */}
        {[
          { x: 0.15, y: 0.62, c1: '#FF6B35', c2: '#FFD700', s: 1 },
          { x: 0.78, y: 0.55, c1: '#00BCD4', c2: '#FFF', s: -1 },
          { x: 0.55, y: 0.68, c1: '#9C27B0', c2: '#E040FB', s: 1 },
        ].map((f, i) => (
          <G key={i}>
            <Ellipse cx={f.x * w} cy={f.y * h} rx={18} ry={10} fill={f.c1} opacity={0.8} />
            <Polygon points={`${f.x * w + f.s * 18},${f.y * h} ${f.x * w + f.s * 28},${f.y * h - 9} ${f.x * w + f.s * 28},${f.y * h + 9}`} fill={f.c2} opacity={0.7} />
            <Circle cx={f.x * w - f.s * 8} cy={f.y * h - 2} r={3} fill="#FFF" opacity={0.9} />
            <Circle cx={f.x * w - f.s * 8} cy={f.y * h - 2} r={1.5} fill="#000" opacity={0.8} />
            {/* stripes */}
            {[0, 1].map(j => (
              <Line key={j} x1={f.x * w - 2 + j * 7} y1={f.y * h - 9} x2={f.x * w - 2 + j * 7} y2={f.y * h + 9} stroke="#FFF" strokeWidth={1.5} opacity={0.3} />
            ))}
          </G>
        ))}
        {/* bubbles */}
        {BUBBLES.map((b, i) => (
          <G key={i}>
            <Circle cx={b.x * w} cy={b.y * h} r={b.r + 2} fill="#FFF" opacity={0.08} />
            <Circle cx={b.x * w} cy={b.y * h} r={b.r} stroke="#FFF" strokeWidth={1} fill="none" opacity={0.35} />
          </G>
        ))}
        {/* seagulls */}
        {[{ x: 0.2, y: 0.12 }, { x: 0.65, y: 0.08 }, { x: 0.82, y: 0.18 }].map((b, i) => (
          <G key={i}>
            <Path d={`M${b.x * w - 10},${b.y * h} Q${b.x * w - 5},${b.y * h - 7} ${b.x * w},${b.y * h}`} stroke="#FFF" strokeWidth={2} fill="none" opacity={0.7} />
            <Path d={`M${b.x * w},${b.y * h} Q${b.x * w + 5},${b.y * h - 7} ${b.x * w + 10},${b.y * h}`} stroke="#FFF" strokeWidth={2} fill="none" opacity={0.7} />
          </G>
        ))}
      </G>
    );

    case 'space': return (
      <G>
        {/* milky way band */}
        <Ellipse cx={cx} cy={h * 0.4} rx={w * 0.8} ry={h * 0.25} fill="#7C3AED" opacity={0.08} />
        <Ellipse cx={cx * 0.7} cy={h * 0.3} rx={w * 0.5} ry={h * 0.2} fill="#2563EB" opacity={0.07} />
        <Ellipse cx={cx * 1.4} cy={h * 0.5} rx={w * 0.45} ry={h * 0.18} fill="#EC4899" opacity={0.06} />
        {/* stars */}
        {SPACE_STARS.map((s, i) => (
          <G key={i}>
            <Circle cx={s.x * w} cy={s.y * h} r={s.r * 2.5} fill="#FFF" opacity={0.05} />
            <Circle cx={s.x * w} cy={s.y * h} r={s.r} fill={s.c || '#FFF9C4'} opacity={s.o} />
          </G>
        ))}
        {/* large colourful planet with rings */}
        <Circle cx={w * 0.82} cy={h * 0.22} r={38} fill="#38BDF8" opacity={0.85} />
        <Circle cx={w * 0.82} cy={h * 0.22} r={32} fill="#0EA5E9" opacity={0.6} />
        {/* planet bands */}
        <Ellipse cx={w * 0.82} cy={h * 0.2} rx={30} ry={6} fill="#7DD3FC" opacity={0.35} />
        <Ellipse cx={w * 0.82} cy={h * 0.26} rx={28} ry={5} fill="#0369A1" opacity={0.3} />
        {/* planet ring */}
        <Ellipse cx={w * 0.82} cy={h * 0.22} rx={58} ry={12} stroke="#FFF" strokeWidth={3} fill="none" opacity={0.25} />
        <Ellipse cx={w * 0.82} cy={h * 0.22} rx={54} ry={10} stroke="#BAE6FD" strokeWidth={2} fill="none" opacity={0.2} />
        {/* small red planet */}
        <Circle cx={w * 0.12} cy={h * 0.28} r={18} fill="#EF4444" opacity={0.85} />
        <Ellipse cx={w * 0.12} cy={h * 0.26} rx={14} ry={4} fill="#FCA5A5" opacity={0.35} />
        <Circle cx={w * 0.12} cy={h * 0.28} r={9} fill="#DC2626" opacity={0.5} />
        {/* yellow moon */}
        <Circle cx={w * 0.55} cy={h * 0.14} r={12} fill="#FCD34D" opacity={0.8} />
        <Circle cx={w * 0.58} cy={h * 0.12} r={9} fill="#F59E0B" opacity={0.3} />
        {/* shooting star trail */}
        <Path d={`M${w * 0.65},${h * 0.06} L${w * 0.38},${h * 0.24}`} stroke="#FFF" strokeWidth={2} opacity={0.6} />
        <Path d={`M${w * 0.65},${h * 0.06} L${w * 0.42},${h * 0.21}`} stroke="#FFD700" strokeWidth={1} opacity={0.4} />
        <Circle cx={w * 0.65} cy={h * 0.06} r={3} fill="#FFF" opacity={0.95} />
        {/* asteroid belt dots */}
        {[0.2, 0.32, 0.44, 0.56].map((x, i) => (
          <Ellipse key={i} cx={x * w} cy={h * (0.75 + i * 0.02)} rx={4 + i} ry={3} fill="#9CA3AF" opacity={0.4} />
        ))}
      </G>
    );

    case 'meadow': return (
      <G>
        {/* big golden sun with rays */}
        <Circle cx={w * 0.82} cy={h * 0.16} r={70} fill="#FFD700" opacity={0.08} />
        <Circle cx={w * 0.82} cy={h * 0.16} r={50} fill="#FFEB3B" opacity={0.12} />
        <Circle cx={w * 0.82} cy={h * 0.16} r={34} fill="#FFD700" opacity={0.95} />
        <Circle cx={w * 0.82} cy={h * 0.16} r={28} fill="#FFEB3B" opacity={0.7} />
        {SUN_RAYS.map((angle, i) => (
          <G key={i}>
            <Line
              x1={w * 0.82 + Math.cos(angle) * 38} y1={h * 0.16 + Math.sin(angle) * 38}
              x2={w * 0.82 + Math.cos(angle) * 58} y2={h * 0.16 + Math.sin(angle) * 58}
              stroke="#FFD700" strokeWidth={4} opacity={0.55} />
            <Line
              x1={w * 0.82 + Math.cos(angle + 0.2) * 36} y1={h * 0.16 + Math.sin(angle + 0.2) * 36}
              x2={w * 0.82 + Math.cos(angle + 0.2) * 50} y2={h * 0.16 + Math.sin(angle + 0.2) * 50}
              stroke="#FFD700" strokeWidth={2} opacity={0.3} />
          </G>
        ))}
        {/* fluffy clouds */}
        {CLOUDS.map((c, i) => (
          <G key={i}>
            <Ellipse cx={c.x * w} cy={c.y * h} rx={c.rx} ry={c.ry} fill="#FFF" opacity={0.95} />
            <Ellipse cx={c.x * w - c.rx * 0.4} cy={c.y * h + 5} rx={c.rx * 0.65} ry={c.ry * 0.8} fill="#FFF" opacity={0.95} />
            <Ellipse cx={c.x * w + c.rx * 0.42} cy={c.y * h + 7} rx={c.rx * 0.55} ry={c.ry * 0.75} fill="#FFF" opacity={0.95} />
            <Ellipse cx={c.x * w + c.rx * 0.1} cy={c.y * h - c.ry * 0.4} rx={c.rx * 0.45} ry={c.ry * 0.6} fill="#FFF" opacity={0.9} />
          </G>
        ))}
        {/* rolling hills - back */}
        <Path d={`M0,${ground - 25} Q${w * 0.25},${ground - 80} ${w * 0.5},${ground - 30} Q${w * 0.75},${ground + 10} ${w},${ground - 40} L${w},${h} L0,${h} Z`}
          fill="#66BB6A" opacity={0.5} />
        {/* ground */}
        <Path d={`M0,${ground} Q${w * 0.2},${ground - 16} ${w * 0.4},${ground - 4} Q${w * 0.6},${ground + 12} ${w * 0.8},${ground - 8} Q${w * 0.9},${ground - 3} ${w},${ground - 5} L${w},${h} L0,${h} Z`}
          fill="#4CAF50" opacity={0.9} />
        <Path d={`M0,${ground + 10} Q${w * 0.3},${ground - 5} ${w * 0.6},${ground + 12} Q${w * 0.85},${ground + 22} ${w},${ground + 8} L${w},${h} L0,${h} Z`}
          fill="#388E3C" opacity={0.8} />
        {/* colourful flowers - lots! */}
        {MEADOW_FLOWERS.map((f, i) => (
          <G key={i}>
            <Rect x={f.x * w} y={ground - f.h} width={3} height={f.h} fill="#2E7D32" opacity={0.9} />
            {[0, 60, 120, 180, 240, 300].map((deg, j) => {
              const rad = deg * Math.PI / 180;
              return <Ellipse key={j} cx={f.x * w + 1 + Math.cos(rad) * 7} cy={ground - f.h + Math.sin(rad) * 7} rx={5} ry={3.5} fill={f.c} opacity={0.9} />;
            })}
            <Circle cx={f.x * w + 1} cy={ground - f.h} r={4} fill="#FFF9C4" opacity={0.95} />
          </G>
        ))}
        {/* butterflies */}
        {[{ x: 0.12, y: 0.44, c: '#FF80AB' }, { x: 0.72, y: 0.38, c: '#40C4FF' }, { x: 0.88, y: 0.5, c: '#FFD740' }].map((b, i) => (
          <G key={i}>
            <Ellipse cx={b.x * w - 9} cy={b.y * h} rx={12} ry={7} fill={b.c} opacity={0.75} />
            <Ellipse cx={b.x * w + 9} cy={b.y * h} rx={12} ry={7} fill={b.c} opacity={0.75} />
            <Ellipse cx={b.x * w - 7} cy={b.y * h + 4} rx={7} ry={5} fill={b.c} opacity={0.5} />
            <Ellipse cx={b.x * w + 7} cy={b.y * h + 4} rx={7} ry={5} fill={b.c} opacity={0.5} />
            <Circle cx={b.x * w} cy={b.y * h} r={2.5} fill="#333" opacity={0.8} />
          </G>
        ))}
      </G>
    );

    case 'home': return (
      <G>
        {/* warm room glow */}
        <Ellipse cx={cx} cy={h * 0.55} rx={w * 0.6} ry={h * 0.45} fill="#FF8F00" opacity={0.08} />
        {/* wall with warm colour */}
        <Rect x={0} y={0} width={w} height={ground} fill="#FFF8E1" opacity={0.08} />
        {/* big window with night view */}
        <Rect x={w * 0.62} y={h * 0.06} width={w * 0.32} height={h * 0.35} fill="#0B1D4A" opacity={0.9} rx={10} />
        <Rect x={w * 0.62} y={h * 0.06} width={w * 0.32} height={h * 0.35} stroke="#C8A96E" strokeWidth={4} fill="none" rx={10} />
        {/* window panes */}
        <Line x1={w * 0.78} y1={h * 0.06} x2={w * 0.78} y2={h * 0.41} stroke="#C8A96E" strokeWidth={3} opacity={0.7} />
        <Line x1={w * 0.62} y1={h * 0.235} x2={w * 0.94} y2={h * 0.235} stroke="#C8A96E" strokeWidth={3} opacity={0.7} />
        {/* window: moon & stars */}
        <Circle cx={w * 0.7} cy={h * 0.15} r={11} fill="#FFF9C4" opacity={0.95} />
        <Circle cx={w * 0.74} cy={h * 0.12} r={8.5} fill="#0B1D4A" opacity={0.95} />
        {[{ x: 0.68, y: 0.28 }, { x: 0.76, y: 0.24 }, { x: 0.85, y: 0.15 }, { x: 0.88, y: 0.32 }, { x: 0.66, y: 0.37 }].map((s, i) => (
          <Circle key={i} cx={s.x * w} cy={s.y * h} r={1.8} fill="#FFF" opacity={0.8} />
        ))}
        {/* curtains */}
        <Path d={`M${w * 0.62},${h * 0.06} C${w * 0.66},${h * 0.16} ${w * 0.64},${h * 0.28} ${w * 0.62},${h * 0.41}`} fill="#EF9A9A" opacity={0.7} />
        <Path d={`M${w * 0.94},${h * 0.06} C${w * 0.9},${h * 0.16} ${w * 0.92},${h * 0.28} ${w * 0.94},${h * 0.41}`} fill="#EF9A9A" opacity={0.7} />
        <Rect x={w * 0.60} y={h * 0.04} width={w * 0.36} height={h * 0.04} fill="#C62828" opacity={0.5} rx={3} />
        {/* bookshelf */}
        <Rect x={w * 0.03} y={ground - 80} width={w * 0.16} height={85} fill="#5D4037" opacity={0.75} rx={4} />
        <Rect x={w * 0.03} y={ground - 80} width={w * 0.16} height={4} fill="#4E342E" opacity={0.6} rx={2} />
        <Rect x={w * 0.03} y={ground - 44} width={w * 0.16} height={4} fill="#4E342E" opacity={0.6} rx={2} />
        {['#E53935', '#FB8C00', '#43A047', '#1E88E5', '#8E24AA'].map((c, i) => (
          <Rect key={i} x={w * 0.04 + i * w * 0.028} y={ground - 75} width={w * 0.024} height={32} fill={c} opacity={0.85} rx={2} />
        ))}
        {['#F4511E', '#00897B', '#3949AB'].map((c, i) => (
          <Rect key={i} x={w * 0.04 + i * w * 0.048} y={ground - 40} width={w * 0.038} height={28} fill={c} opacity={0.8} rx={2} />
        ))}
        {/* lamp */}
        <Rect x={w * 0.04} y={ground - 95} width={6} height={20} fill="#8D6E63" opacity={0.8} />
        <Ellipse cx={w * 0.045} cy={ground - 100} rx={18} ry={14} fill="#FFF9C4" opacity={0.45} />
        <Ellipse cx={w * 0.045} cy={ground - 100} rx={12} ry={9} fill="#FFD54F" opacity={0.6} />
        {/* floor */}
        <Rect x={0} y={ground} width={w} height={h - ground} fill="#A1887F" opacity={0.45} />
        {/* rug */}
        <Ellipse cx={cx * 0.9} cy={ground + 12} rx={w * 0.38} ry={18} fill="#E53935" opacity={0.25} />
        <Ellipse cx={cx * 0.9} cy={ground + 12} rx={w * 0.28} ry={12} fill="#FF8F00" opacity={0.2} />
        {/* floorboards */}
        {[0, 1, 2].map(i => (
          <Line key={i} x1={w * 0.1 * i} y1={ground} x2={w * 0.1 * i + w * 0.3} y2={h} stroke="#8D6E63" strokeWidth={1} opacity={0.2} />
        ))}
      </G>
    );

    case 'sky': return (
      <G>
        {/* big rainbow */}
        {[
          { r: 95, c: '#FF0000' }, { r: 82, c: '#FF7F00' }, { r: 69, c: '#FFD700' },
          { r: 56, c: '#00C853' }, { r: 43, c: '#2979FF' }, { r: 30, c: '#AA00FF' },
        ].map((rb, i) => (
          <Path key={i}
            d={`M${cx - rb.r * 1.8},${ground - 5} A${rb.r * 1.8},${rb.r} 0 0 1 ${cx + rb.r * 1.8},${ground - 5}`}
            stroke={rb.c} strokeWidth={10} fill="none" opacity={0.45}
          />
        ))}
        {/* big fluffy clouds */}
        {BIG_CLOUDS.map((c, i) => (
          <G key={i}>
            <Ellipse cx={c.x * w} cy={c.y * h} rx={c.rx} ry={c.ry} fill="#FFF" opacity={0.97} />
            <Ellipse cx={c.x * w - c.rx * 0.42} cy={c.y * h + 8} rx={c.rx * 0.68} ry={c.ry * 0.8} fill="#FFF" opacity={0.97} />
            <Ellipse cx={c.x * w + c.rx * 0.42} cy={c.y * h + 10} rx={c.rx * 0.55} ry={c.ry * 0.72} fill="#FFF" opacity={0.97} />
            <Ellipse cx={c.x * w + c.rx * 0.1} cy={c.y * h - c.ry * 0.5} rx={c.rx * 0.42} ry={c.ry * 0.6} fill="#FFF" opacity={0.97} />
          </G>
        ))}
        {/* sun - top left */}
        <Circle cx={w * 0.14} cy={h * 0.14} r={36} fill="#FFD700" opacity={0.9} />
        <Circle cx={w * 0.14} cy={h * 0.14} r={28} fill="#FFEB3B" opacity={0.7} />
        {/* birds */}
        {BIRDS.map((b, i) => (
          <G key={i}>
            <Path d={`M${b.x * w - 12},${b.y * h} Q${b.x * w - 6},${b.y * h - 9} ${b.x * w},${b.y * h}`} stroke="#444" strokeWidth={2} fill="none" opacity={0.65} />
            <Path d={`M${b.x * w},${b.y * h} Q${b.x * w + 6},${b.y * h - 9} ${b.x * w + 12},${b.y * h}`} stroke="#444" strokeWidth={2} fill="none" opacity={0.65} />
          </G>
        ))}
        {/* horizon haze */}
        <Rect x={0} y={ground - 8} width={w} height={h - ground + 8} fill="#B3E5FC" opacity={0.3} />
        {/* ground */}
        <Path d={`M0,${ground} Q${w * 0.3},${ground - 14} ${w * 0.6},${ground + 6} Q${w * 0.8},${ground + 14} ${w},${ground - 4} L${w},${h} L0,${h} Z`}
          fill="#81C784" opacity={0.85} />
        <Path d={`M0,${ground + 12} Q${w * 0.4},${ground} ${w * 0.7},${ground + 16} Q${w * 0.9},${ground + 24} ${w},${ground + 10} L${w},${h} L0,${h} Z`}
          fill="#4CAF50" opacity={0.7} />
      </G>
    );

    case 'cave': return (
      <G>
        {/* cave ceiling stalactites */}
        {STALACTITES.map((s, i) => (
          <G key={i}>
            <Polygon points={`${s.x * w - s.w},0 ${s.x * w + s.w},0 ${s.x * w},${s.h}`} fill="#3E2723" opacity={0.85} />
            <Polygon points={`${s.x * w - s.w * 0.5},0 ${s.x * w + s.w * 0.5},0 ${s.x * w},${s.h * 0.7}`} fill="#4E342E" opacity={0.5} />
          </G>
        ))}
        {/* cave walls */}
        <Path d={`M0,0 Q${w * 0.1},${h * 0.3} 0,${h}`} fill="#1A0A00" opacity={0.6} />
        <Path d={`M${w},0 Q${w * 0.9},${h * 0.3} ${w},${h}`} fill="#1A0A00" opacity={0.6} />
        {/* glowing crystals - very colourful */}
        {CRYSTALS.map((c, i) => (
          <G key={i}>
            <Ellipse cx={c.x * w} cy={ground - c.h * 0.3} rx={c.w * 3} ry={c.h * 0.8} fill={c.color} opacity={0.12} />
            <Ellipse cx={c.x * w} cy={ground - c.h * 0.4} rx={c.w * 2} ry={c.h * 0.6} fill={c.color} opacity={0.18} />
            <Polygon points={`${c.x * w},${ground - c.h} ${c.x * w - c.w},${ground} ${c.x * w + c.w},${ground}`} fill={c.color} opacity={0.85} />
            <Polygon points={`${c.x * w - c.w * 0.3},${ground - c.h * 0.8} ${c.x * w - c.w * 1.4},${ground - c.h * 0.1} ${c.x * w - c.w * 0.5},${ground}`} fill={c.color} opacity={0.6} />
            <Polygon points={`${c.x * w + c.w * 0.3},${ground - c.h * 0.75} ${c.x * w + c.w * 1.3},${ground - c.h * 0.1} ${c.x * w + c.w * 0.5},${ground}`} fill={c.color} opacity={0.55} />
            {/* crystal shine */}
            <Line x1={c.x * w - c.w * 0.3} y1={ground - c.h} x2={c.x * w + c.w * 0.1} y2={ground - c.h * 0.6} stroke="#FFF" strokeWidth={1.5} opacity={0.5} />
          </G>
        ))}
        {/* stalagmites */}
        {STALAGMITES.map((s, i) => (
          <Polygon key={i}
            points={`${s.x * w - s.w},${h} ${s.x * w + s.w},${h} ${s.x * w},${h - s.h}`}
            fill="#3E2723" opacity={0.7}
          />
        ))}
        {/* ground with glow pool */}
        <Rect x={0} y={ground} width={w} height={h - ground} fill="#2A1300" opacity={0.9} />
        <Ellipse cx={cx * 1.1} cy={ground + 10} rx={w * 0.28} ry={16} fill="#4FC3F7" opacity={0.22} />
        <Ellipse cx={cx * 1.1} cy={ground + 12} rx={w * 0.18} ry={10} fill="#80D8FF" opacity={0.18} />
        {/* small glowing dots on walls */}
        {[{ x: 0.06, y: 0.5, c: '#7C3AED' }, { x: 0.92, y: 0.45, c: '#0EA5E9' }, { x: 0.08, y: 0.7, c: '#10B981' }].map((d, i) => (
          <G key={i}>
            <Circle cx={d.x * w} cy={d.y * h} r={8} fill={d.c} opacity={0.15} />
            <Circle cx={d.x * w} cy={d.y * h} r={4} fill={d.c} opacity={0.55} />
          </G>
        ))}
      </G>
    );

    case 'snow': return (
      <G>
        {/* distant snowy mountains */}
        <Path d={`M0,${ground - 40} L${w * 0.2},${ground - 120} L${w * 0.35},${ground - 60} L${w * 0.5},${ground - 140} L${w * 0.65},${ground - 70} L${w * 0.82},${ground - 110} L${w},${ground - 50} L${w},${h} L0,${h} Z`}
          fill="#90A4AE" opacity={0.5} />
        {/* snow caps on mountains */}
        <Path d={`M${w * 0.16},${ground - 105} L${w * 0.2},${ground - 120} L${w * 0.24},${ground - 105} Z`} fill="#FFF" opacity={0.85} />
        <Path d={`M${w * 0.46},${ground - 125} L${w * 0.5},${ground - 140} L${w * 0.54},${ground - 125} Z`} fill="#FFF" opacity={0.85} />
        <Path d={`M${w * 0.79},${ground - 96} L${w * 0.82},${ground - 110} L${w * 0.85},${ground - 96} Z`} fill="#FFF" opacity={0.85} />
        {/* snowy ground hills */}
        <Path d={`M0,${ground - 20} Q${w * 0.2},${ground - 65} ${w * 0.4},${ground - 25} Q${w * 0.6},${ground + 8} ${w},${ground - 40} L${w},${h} L0,${h} Z`}
          fill="#E3F2FD" opacity={0.9} />
        <Path d={`M0,${ground + 4} Q${w * 0.3},${ground - 35} ${w * 0.55},${ground + 6} Q${w * 0.78},${ground + 28} ${w},${ground - 8} L${w},${h} L0,${h} Z`}
          fill="#FFFFFF" opacity={0.85} />
        {/* snowy pine trees */}
        {[{ x: 0.06, h: 95 }, { x: 0.14, h: 75 }, { x: 0.86, h: 88 }, { x: 0.94, h: 70 }].map((t, i) => (
          <G key={i}>
            <Rect x={t.x * w - 5} y={ground - t.h * 0.45} width={10} height={t.h * 0.45} fill="#4E342E" opacity={0.8} />
            <Polygon points={`${t.x * w},${ground - t.h} ${t.x * w - t.h * 0.36},${ground - t.h * 0.4} ${t.x * w + t.h * 0.36},${ground - t.h * 0.4}`} fill="#1B5E20" opacity={0.9} />
            <Polygon points={`${t.x * w},${ground - t.h * 0.75} ${t.x * w - t.h * 0.44},${ground - t.h * 0.3} ${t.x * w + t.h * 0.44},${ground - t.h * 0.3}`} fill="#2E7D32" opacity={0.9} />
            <Polygon points={`${t.x * w},${ground - t.h * 0.5} ${t.x * w - t.h * 0.5},${ground - t.h * 0.15} ${t.x * w + t.h * 0.5},${ground - t.h * 0.15}`} fill="#388E3C" opacity={0.85} />
            {/* snow on branches */}
            <Path d={`M${t.x * w - t.h * 0.32},${ground - t.h * 0.38} Q${t.x * w},${ground - t.h * 0.32} ${t.x * w + t.h * 0.32},${ground - t.h * 0.38}`} stroke="#FFF" strokeWidth={4} fill="none" opacity={0.7} />
            <Path d={`M${t.x * w - t.h * 0.4},${ground - t.h * 0.28} Q${t.x * w},${ground - t.h * 0.22} ${t.x * w + t.h * 0.4},${ground - t.h * 0.28}`} stroke="#FFF" strokeWidth={4} fill="none" opacity={0.7} />
            <Circle cx={t.x * w} cy={ground - t.h} r={7} fill="#FFF" opacity={0.85} />
          </G>
        ))}
        {/* snowflakes */}
        {SNOWFLAKES.map((s, i) => (
          <G key={i}>
            <Circle cx={s.x * w} cy={s.y * h} r={s.r * 1.8} fill="#FFF" opacity={0.1} />
            <Circle cx={s.x * w} cy={s.y * h} r={s.r} fill="#FFF" opacity={0.9} />
            <Line x1={s.x * w - s.r * 2.2} y1={s.y * h} x2={s.x * w + s.r * 2.2} y2={s.y * h} stroke="#FFF" strokeWidth={1.2} opacity={0.65} />
            <Line x1={s.x * w} y1={s.y * h - s.r * 2.2} x2={s.x * w} y2={s.y * h + s.r * 2.2} stroke="#FFF" strokeWidth={1.2} opacity={0.65} />
            <Line x1={s.x * w - s.r * 1.5} y1={s.y * h - s.r * 1.5} x2={s.x * w + s.r * 1.5} y2={s.y * h + s.r * 1.5} stroke="#FFF" strokeWidth={0.9} opacity={0.5} />
          </G>
        ))}
        {/* frozen lake reflection */}
        <Ellipse cx={cx} cy={ground + 14} rx={w * 0.38} ry={14} fill="#B3E5FC" opacity={0.35} />
      </G>
    );

    case 'sunset': return (
      <G>
        {/* sun on horizon with big glow */}
        <Circle cx={cx} cy={ground - 5} r={90} fill="#FF6F00" opacity={0.08} />
        <Circle cx={cx} cy={ground - 5} r={70} fill="#FF8F00" opacity={0.12} />
        <Circle cx={cx} cy={ground - 5} r={52} fill="#FF6F00" opacity={0.95} />
        <Circle cx={cx} cy={ground - 5} r={40} fill="#FFB300" opacity={0.85} />
        <Circle cx={cx} cy={ground - 5} r={24} fill="#FFD740" opacity={0.9} />
        {/* sunbeams */}
        {SUNBEAMS.map((angle, i) => (
          <Path key={i}
            d={`M${cx},${ground - 5} L${cx + Math.cos(angle) * w * 0.75},${ground - 5 + Math.sin(angle) * h * 0.75}`}
            stroke="#FFAB40" strokeWidth={22} opacity={0.05}
          />
        ))}
        {/* dramatic clouds lit by sunset */}
        {[{ x: 0.08, y: 0.22, rx: 65, ry: 22, c: '#BF360C' },
          { x: 0.88, y: 0.28, rx: 72, ry: 24, c: '#E64A19' },
          { x: 0.45, y: 0.12, rx: 55, ry: 18, c: '#FF6E40' }].map((c, i) => (
          <G key={i}>
            <Ellipse cx={c.x * w} cy={c.y * h} rx={c.rx + 12} ry={c.ry + 6} fill={c.c} opacity={0.12} />
            <Ellipse cx={c.x * w} cy={c.y * h} rx={c.rx} ry={c.ry} fill={c.c} opacity={0.5} />
            <Ellipse cx={c.x * w} cy={c.y * h - 4} rx={c.rx * 0.7} ry={c.ry * 0.7} fill="#FF7043" opacity={0.3} />
          </G>
        ))}
        {/* silhouette trees on horizon */}
        {[0.05, 0.1, 0.84, 0.9, 0.96].map((x, i) => (
          <G key={i}>
            <Rect x={x * w - 4} y={ground - 55 + i * 5} width={8} height={60} fill="#1B2A1C" opacity={0.85} />
            <Circle cx={x * w} cy={ground - 60 + i * 5} r={22 - i * 2} fill="#1B2A1C" opacity={0.85} />
          </G>
        ))}
        {/* silhouette hills */}
        <Path d={`M0,${ground} Q${w * 0.18},${ground - 55} ${w * 0.38},${ground} Q${w * 0.55},${ground + 20} ${w * 0.72},${ground - 40} Q${w * 0.86},${ground - 20} ${w},${ground} L${w},${h} L0,${h} Z`}
          fill="#1B2A1C" opacity={0.85} />
        {/* water reflection */}
        <Rect x={0} y={ground} width={w} height={h - ground} fill="#E65100" opacity={0.15} />
        <Ellipse cx={cx} cy={ground + (h - ground) * 0.5} rx={w * 0.12} ry={(h - ground) * 0.4} fill="#FFD740" opacity={0.18} />
      </G>
    );

    default: return null;
  }
}

/* ─── constants ─── */
const NIGHT_STARS = [
  { x: 0.05, y: 0.06, r: 1.8, o: 0.95, }, { x: 0.14, y: 0.13, r: 1.2, o: 0.8 },
  { x: 0.23, y: 0.04, r: 2.2, o: 0.9 }, { x: 0.36, y: 0.15, r: 1.0, o: 0.7 },
  { x: 0.49, y: 0.03, r: 1.8, o: 0.85 }, { x: 0.61, y: 0.11, r: 1.4, o: 0.75 },
  { x: 0.32, y: 0.26, r: 1.2, o: 0.6 }, { x: 0.18, y: 0.30, r: 1.5, o: 0.65 },
  { x: 0.44, y: 0.22, r: 1.0, o: 0.55 }, { x: 0.55, y: 0.18, r: 2.0, o: 0.9 },
  { x: 0.68, y: 0.08, r: 1.2, o: 0.7 }, { x: 0.08, y: 0.22, r: 1.5, o: 0.75 },
  { x: 0.41, y: 0.33, r: 1.0, o: 0.5 }, { x: 0.26, y: 0.38, r: 1.2, o: 0.55 },
];
const NIGHT_TREES = [
  { x: 0.04, h: 105, w: 28 }, { x: 0.12, h: 82, w: 22 },
  { x: 0.85, h: 95, w: 26 }, { x: 0.93, h: 75, w: 20 },
];
const SPACE_STARS = [
  { x: 0.04, y: 0.05, r: 1.5, o: 0.9, c: '#FFF9C4' }, { x: 0.12, y: 0.12, r: 1.0, o: 0.7, c: '#FFF' },
  { x: 0.22, y: 0.04, r: 2.0, o: 0.85, c: '#FFF9C4' }, { x: 0.34, y: 0.14, r: 1.0, o: 0.65, c: '#BFDBFE' },
  { x: 0.48, y: 0.03, r: 1.8, o: 0.8, c: '#FFF' }, { x: 0.60, y: 0.10, r: 1.3, o: 0.7, c: '#FDE68A' },
  { x: 0.30, y: 0.24, r: 1.0, o: 0.55, c: '#FFF' }, { x: 0.16, y: 0.30, r: 1.5, o: 0.6, c: '#DDD6FE' },
  { x: 0.44, y: 0.20, r: 0.8, o: 0.5, c: '#FFF' }, { x: 0.55, y: 0.36, r: 2.2, o: 0.85, c: '#FFF9C4' },
  { x: 0.68, y: 0.08, r: 1.2, o: 0.7, c: '#FFF' }, { x: 0.08, y: 0.42, r: 1.0, o: 0.6, c: '#BFDBFE' },
  { x: 0.26, y: 0.48, r: 1.8, o: 0.75, c: '#FDE68A' }, { x: 0.50, y: 0.44, r: 1.0, o: 0.55, c: '#FFF' },
  { x: 0.36, y: 0.55, r: 1.5, o: 0.65, c: '#DDD6FE' }, { x: 0.72, y: 0.52, r: 2.0, o: 0.8, c: '#FFF9C4' },
];
const FIREFLIES = [
  { x: 0.1, y: 0.62 }, { x: 0.22, y: 0.56 }, { x: 0.68, y: 0.59 },
  { x: 0.80, y: 0.65 }, { x: 0.45, y: 0.68 },
];
const FOREST_BACK = [
  { x: 0.06, h: 62, c: '#2E7D32', c2: '#388E3C' }, { x: 0.18, h: 75, c: '#1B5E20', c2: '#2E7D32' },
  { x: 0.78, h: 68, c: '#33691E', c2: '#558B2F' }, { x: 0.9, h: 58, c: '#2E7D32', c2: '#43A047' },
  { x: 0.28, h: 55, c: '#1B5E20', c2: '#2E7D32' },
];
const FOREST_FRONT = [
  { x: 0.04, h: 100, w: 26 }, { x: 0.9, h: 92, w: 24 },
];
const FLOWERS = [
  { x: 0.12, c: '#FF5252', h: 26 }, { x: 0.22, c: '#FFD740', h: 22 },
  { x: 0.74, c: '#E040FB', h: 24 }, { x: 0.82, c: '#40C4FF', h: 20 },
  { x: 0.92, c: '#FF6E40', h: 26 },
];
const MEADOW_FLOWERS = [
  { x: 0.06, c: '#FF5252', h: 28 }, { x: 0.14, c: '#FFD740', h: 22 },
  { x: 0.22, c: '#E040FB', h: 26 }, { x: 0.3, c: '#40C4FF', h: 20 },
  { x: 0.72, c: '#FF6E40', h: 24 }, { x: 0.8, c: '#69F0AE', h: 28 },
  { x: 0.88, c: '#FF80AB', h: 22 }, { x: 0.96, c: '#FFD740', h: 26 },
];
const CLOUDS = [
  { x: 0.2, y: 0.16, rx: 58, ry: 24 }, { x: 0.65, y: 0.11, rx: 68, ry: 26 },
];
const BIG_CLOUDS = [
  { x: 0.18, y: 0.22, rx: 65, ry: 28 }, { x: 0.68, y: 0.15, rx: 78, ry: 30 },
  { x: 0.9, y: 0.32, rx: 46, ry: 20 },
];
const BIRDS = [
  { x: 0.32, y: 0.34 }, { x: 0.48, y: 0.26 }, { x: 0.6, y: 0.38 }, { x: 0.72, y: 0.3 },
];
const SUN_RAYS = Array.from({ length: 10 }, (_, i) => (i * Math.PI * 2) / 10);
const SUNBEAMS = Array.from({ length: 10 }, (_, i) => (i * Math.PI * 2) / 10);
const STALACTITES = [
  { x: 0.06, w: 12, h: 50 }, { x: 0.18, w: 16, h: 68 }, { x: 0.32, w: 11, h: 42 },
  { x: 0.48, w: 15, h: 62 }, { x: 0.62, w: 10, h: 46 }, { x: 0.76, w: 14, h: 58 },
  { x: 0.9, w: 11, h: 40 },
];
const STALAGMITES = [
  { x: 0.12, w: 9, h: 34 }, { x: 0.28, w: 13, h: 48 },
  { x: 0.58, w: 10, h: 38 }, { x: 0.74, w: 14, h: 52 }, { x: 0.88, w: 8, h: 28 },
];
const CRYSTALS = [
  { x: 0.22, w: 16, h: 62, color: '#CE93D8' },
  { x: 0.46, w: 20, h: 78, color: '#64B5F6' },
  { x: 0.68, w: 14, h: 55, color: '#80CBC4' },
  { x: 0.82, w: 11, h: 44, color: '#FFD54F' },
];
const SNOWFLAKES = [
  { x: 0.06, y: 0.07, r: 3.5 }, { x: 0.18, y: 0.17, r: 2.5 }, { x: 0.28, y: 0.05, r: 4.5 },
  { x: 0.42, y: 0.14, r: 3.0 }, { x: 0.56, y: 0.23, r: 3.5 }, { x: 0.68, y: 0.08, r: 2.5 },
  { x: 0.78, y: 0.19, r: 4.0 }, { x: 0.9, y: 0.11, r: 2.5 }, { x: 0.34, y: 0.31, r: 2.5 },
  { x: 0.12, y: 0.37, r: 3.0 }, { x: 0.62, y: 0.36, r: 3.5 }, { x: 0.84, y: 0.30, r: 2.5 },
  { x: 0.50, y: 0.42, r: 2.0 },
];
const FOAM = [
  { x: 0.1, y: 0, rx: 38 }, { x: 0.38, y: 1.2, rx: 52 }, { x: 0.65, y: 0.5, rx: 44 }, { x: 0.88, y: 0.8, rx: 36 },
];
const BUBBLES = [
  { x: 0.12, y: 0.62, r: 9 }, { x: 0.35, y: 0.52, r: 6 },
  { x: 0.58, y: 0.67, r: 11 }, { x: 0.76, y: 0.48, r: 7 }, { x: 0.9, y: 0.6, r: 5 },
];

const styles = StyleSheet.create({
  wrap: { position: 'relative', overflow: 'hidden' },
  emojiMain: { position: 'absolute', width: 116, height: 116, alignItems: 'center', justifyContent: 'center' },
  emojiMainText: { fontSize: 92 },
  emojiDetail: { position: 'absolute', width: 80, height: 80, alignItems: 'center', justifyContent: 'center' },
  emojiDetailText: { fontSize: 62 },
});
