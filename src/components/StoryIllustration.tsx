import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, {
  Circle, Rect, Ellipse, Path, G, Defs, LinearGradient, Stop, Polygon, Line,
} from 'react-native-svg';
import { SceneType } from '../data/stories';

const { width: SW } = Dimensions.get('window');

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
  width = SW, height = SW * 0.75,
}: Props) {
  const cx = width / 2;
  const cy = height / 2;
  const ground = height - 55;

  // main character: left-center; detail: right-center
  const charX = detailEmoji ? cx * 0.72 : cx;
  const charY = cy - 42;
  const detailX = cx * 1.45;
  const detailY = cy - 20;

  return (
    <View style={[styles.wrap, { width, height }]}>
      {/* SVG background + scene */}
      <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={topColor} />
            <Stop offset="1" stopColor={bottomColor} />
          </LinearGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#sky)" />

        {/* scene-specific layer */}
        <SceneBg scene={scene} w={width} h={height} ground={ground} cx={cx} cy={cy} top={topColor} />

        {/* soft glow under main character */}
        <Ellipse cx={charX} cy={ground + 4} rx={52} ry={16} fill="#000" opacity={0.18} />
        {detailEmoji && (
          <Ellipse cx={detailX} cy={ground + 4} rx={38} ry={12} fill="#000" opacity={0.14} />
        )}

        {/* decorative frame border */}
        <Rect x={6} y={6} width={width - 12} height={height - 12} rx={18}
          stroke="#FFFFFF" strokeWidth={2} fill="none" opacity={0.18} />
        <Rect x={12} y={12} width={width - 24} height={height - 24} rx={14}
          stroke="#FFFFFF" strokeWidth={1} fill="none" opacity={0.1} />

        {/* corner stars */}
        {CORNER_STARS.map((s, i) => (
          <Circle key={i} cx={s.x * width} cy={s.y * height} r={s.r} fill="#FFF" opacity={s.o} />
        ))}
      </Svg>

      {/* main character emoji */}
      <View style={[styles.emojiMain, { left: charX - 56, top: charY - 56 }]} pointerEvents="none">
        <Text style={styles.emojiMainText}>{emoji}</Text>
      </View>

      {/* detail / supporting emoji */}
      {detailEmoji && (
        <View style={[styles.emojiDetail, { left: detailX - 38, top: detailY - 38 }]} pointerEvents="none">
          <Text style={styles.emojiDetailText}>{detailEmoji}</Text>
        </View>
      )}

      {/* page label strip at bottom */}
      <View style={[styles.strip, { backgroundColor: topColor + 'CC' }]}>
        <View style={styles.stripDots}>
          {[0, 1, 2].map((i) => (
            <View key={i} style={[styles.stripDot, { opacity: 0.4 + i * 0.2 }]} />
          ))}
        </View>
      </View>
    </View>
  );
}

/* ─── Scene-specific backgrounds ─── */
function SceneBg({ scene, w, h, ground, cx, cy, top }: {
  scene: SceneType; w: number; h: number; ground: number; cx: number; cy: number; top: string;
}) {
  switch (scene) {
    case 'night':
      return (
        <G>
          {STARS.map((s, i) => <Circle key={i} cx={s.x * w} cy={s.y * h * 0.65} r={s.r} fill="#FFF" opacity={s.o} />)}
          {/* crescent moon */}
          <Circle cx={w * 0.78} cy={h * 0.18} r={30} fill="#FFF9C4" opacity={0.95} />
          <Circle cx={w * 0.84} cy={h * 0.14} r={24} fill={top} opacity={0.92} />
          {/* moon glow */}
          <Circle cx={w * 0.78} cy={h * 0.18} r={42} fill="#FFF9C4" opacity={0.07} />
          {/* rolling hills */}
          <Path d={`M0,${ground} Q${w * 0.25},${ground - 30} ${w * 0.5},${ground} Q${w * 0.75},${ground + 20} ${w},${ground - 10} L${w},${h} L0,${h} Z`}
            fill="#0D1B2A" opacity={0.55} />
          <Path d={`M0,${ground + 10} Q${w * 0.3},${ground - 15} ${w * 0.6},${ground + 8} Q${w * 0.8},${ground + 22} ${w},${ground + 5} L${w},${h} L0,${h} Z`}
            fill="#000" opacity={0.3} />
          {/* fireflies */}
          {FIREFLIES.map((f, i) => <Circle key={i} cx={f.x * w} cy={f.y * h} r={2.5} fill="#FFFF88" opacity={0.7} />)}
        </G>
      );

    case 'forest':
      return (
        <G>
          {/* distant trees */}
          {BACK_TREES.map((t, i) => (
            <G key={i}>
              <Rect x={t.x * w - 5} y={ground - t.h * 0.6} width={10} height={t.h * 0.6} fill="#3E2723" opacity={0.6} />
              <Circle cx={t.x * w} cy={ground - t.h * 0.6 - 18} r={t.h * 0.35} fill="#2E7D32" opacity={0.6} />
            </G>
          ))}
          {/* front trees */}
          {FRONT_TREES.map((t, i) => (
            <G key={i}>
              <Rect x={t.x * w - 7} y={ground - t.h} width={14} height={t.h} fill="#4E342E" opacity={0.85} />
              <Circle cx={t.x * w} cy={ground - t.h - 22} r={t.h * 0.52} fill="#1B5E20" opacity={0.9} />
              <Circle cx={t.x * w + 14} cy={ground - t.h - 8} r={t.h * 0.38} fill="#388E3C" opacity={0.75} />
            </G>
          ))}
          {/* ground grass */}
          <Rect x={0} y={ground} width={w} height={h - ground} fill="#1B5E20" opacity={0.7} />
          <Path d={`M0,${ground} Q${w * 0.2},${ground - 12} ${w * 0.4},${ground} Q${w * 0.6},${ground + 8} ${w * 0.8},${ground - 6} Q${w * 0.9},${ground - 2} ${w},${ground}`}
            fill="#2E7D32" opacity={0.6} />
          {/* dappled light */}
          {[0.3, 0.55, 0.7].map((x, i) => (
            <Ellipse key={i} cx={x * w} cy={ground - 8} rx={12} ry={6} fill="#FFFF88" opacity={0.12} />
          ))}
        </G>
      );

    case 'ocean':
      return (
        <G>
          {/* horizon */}
          <Rect x={0} y={0} width={w} height={h * 0.45} fill="#0077B6" opacity={0.2} />
          {/* wave layers */}
          {[0, 1, 2, 3].map((i) => (
            <Path key={i}
              d={`M0,${ground - i * 16} Q${w * 0.15},${ground - 22 - i * 16} ${w * 0.3},${ground - i * 16} Q${w * 0.45},${ground + 6 - i * 16} ${w * 0.6},${ground - i * 16} Q${w * 0.75},${ground - 18 - i * 16} ${w},${ground - i * 16} L${w},${h} L0,${h} Z`}
              fill="#0077B6"
              opacity={0.15 + i * 0.12}
            />
          ))}
          {/* foam */}
          {FOAM.map((f, i) => <Ellipse key={i} cx={f.x * w} cy={ground - f.y * 20} rx={f.rx} ry={4} fill="#FFF" opacity={0.25} />)}
          {/* bubbles */}
          {BUBBLES.map((b, i) => <Circle key={i} cx={b.x * w} cy={b.y * h} r={b.r} fill="#FFF" opacity={0.2} />)}
          {/* small fish */}
          <Ellipse cx={w * 0.18} cy={ground - 55} rx={14} ry={8} fill="#FF6B35" opacity={0.6} />
          <Polygon points={`${w * 0.18 - 14},${ground - 55} ${w * 0.18 - 22},${ground - 61} ${w * 0.18 - 22},${ground - 49}`} fill="#FF6B35" opacity={0.6} />
        </G>
      );

    case 'space':
      return (
        <G>
          {/* dense stars */}
          {SPACE_STARS.map((s, i) => <Circle key={i} cx={s.x * w} cy={s.y * h} r={s.r} fill="#FFF" opacity={s.o} />)}
          {/* nebula glow */}
          <Ellipse cx={w * 0.3} cy={h * 0.35} rx={80} ry={50} fill="#7C3AED" opacity={0.1} />
          <Ellipse cx={w * 0.72} cy={h * 0.25} rx={60} ry={40} fill="#2563EB" opacity={0.1} />
          {/* planet */}
          <Circle cx={w * 0.15} cy={h * 0.22} r={22} fill="#EF4444" opacity={0.75} />
          <Ellipse cx={w * 0.15} cy={h * 0.22} rx={32} ry={7} fill="#FFF" opacity={0.15} />
          {/* distant planet 2 */}
          <Circle cx={w * 0.85} cy={h * 0.35} r={32} fill="#38BDF8" opacity={0.6} />
          <Ellipse cx={w * 0.85} cy={h * 0.35} rx={46} ry={9} fill="#FFF" opacity={0.18} />
          {/* shooting star */}
          <Line x1={w * 0.55} y1={h * 0.08} x2={w * 0.35} y2={h * 0.22} stroke="#FFF" strokeWidth={1.5} opacity={0.45} />
          <Circle cx={w * 0.55} cy={h * 0.08} r={2} fill="#FFF" opacity={0.8} />
        </G>
      );

    case 'meadow':
      return (
        <G>
          {/* sun */}
          <Circle cx={w * 0.82} cy={h * 0.17} r={38} fill="#FFD700" opacity={0.92} />
          {SUN_RAYS.map((r, i) => (
            <Line key={i}
              x1={w * 0.82 + Math.cos(r) * 42} y1={h * 0.17 + Math.sin(r) * 42}
              x2={w * 0.82 + Math.cos(r) * 60} y2={h * 0.17 + Math.sin(r) * 60}
              stroke="#FFD700" strokeWidth={3} opacity={0.45} />
          ))}
          {/* clouds */}
          {CLOUDS.map((c, i) => (
            <G key={i}>
              <Ellipse cx={c.x * w} cy={c.y * h} rx={c.rx} ry={c.ry} fill="#FFF" opacity={0.9} />
              <Ellipse cx={c.x * w - c.rx * 0.38} cy={c.y * h + 6} rx={c.rx * 0.6} ry={c.ry * 0.8} fill="#FFF" opacity={0.9} />
              <Ellipse cx={c.x * w + c.rx * 0.38} cy={c.y * h + 6} rx={c.rx * 0.5} ry={c.ry * 0.75} fill="#FFF" opacity={0.9} />
            </G>
          ))}
          {/* grass ground */}
          <Rect x={0} y={ground} width={w} height={h - ground} fill="#4CAF50" opacity={0.65} />
          <Path d={`M0,${ground} Q${w * 0.25},${ground - 14} ${w * 0.5},${ground} Q${w * 0.75},${ground + 10} ${w},${ground - 6}`}
            fill="#388E3C" opacity={0.55} />
          {/* flowers row */}
          {FLOWERS.map((f, i) => (
            <G key={i}>
              <Rect x={f.x * w} y={ground - 22} width={3} height={24} fill="#388E3C" opacity={0.85} />
              <Circle cx={f.x * w + 1} cy={ground - 24} r={8} fill={f.c} opacity={0.9} />
              <Circle cx={f.x * w + 1} cy={ground - 24} r={4} fill="#FFF9C4" opacity={0.85} />
            </G>
          ))}
          {/* butterflies */}
          {[0.18, 0.68].map((x, i) => (
            <G key={i}>
              <Ellipse cx={x * w - 8} cy={(0.42 + i * 0.06) * h} rx={10} ry={6} fill="#FF80AB" opacity={0.5} />
              <Ellipse cx={x * w + 8} cy={(0.42 + i * 0.06) * h} rx={10} ry={6} fill="#FF80AB" opacity={0.5} />
            </G>
          ))}
        </G>
      );

    case 'home':
      return (
        <G>
          {/* warm room glow */}
          <Ellipse cx={cx} cy={cy + 30} rx={w * 0.55} ry={h * 0.4} fill="#FF8F00" opacity={0.12} />
          {/* small bookshelf — tucked into bottom-left corner only */}
          <Rect x={w * 0.04} y={ground - 55} width={w * 0.1} height={58} fill="#5D4037" opacity={0.45} rx={3} />
          {['#E53935', '#FB8C00', '#43A047', '#1E88E5', '#8E24AA'].map((c, i) => (
            <Rect key={i} x={w * 0.045} y={ground - 52 + i * 10} width={w * 0.09} height={8} fill={c} opacity={0.55} rx={1} />
          ))}
          {/* window — top-right, kept clear of emoji positions */}
          <Rect x={w * 0.72} y={h * 0.06} width={w * 0.22} height={h * 0.22} fill="#0B1D4A" opacity={0.85} rx={8} />
          <Rect x={w * 0.72} y={h * 0.06} width={w * 0.22} height={h * 0.22} stroke="#A1887F" strokeWidth={3} fill="none" rx={8} />
          {/* window cross bar */}
          <Line x1={w * 0.83} y1={h * 0.06} x2={w * 0.83} y2={h * 0.28} stroke="#A1887F" strokeWidth={2} opacity={0.6} />
          <Line x1={w * 0.72} y1={h * 0.17} x2={w * 0.94} y2={h * 0.17} stroke="#A1887F" strokeWidth={2} opacity={0.6} />
          {/* window moon & stars */}
          <Circle cx={w * 0.79} cy={h * 0.12} r={9} fill="#FFF9C4" opacity={0.9} />
          <Circle cx={w * 0.84} cy={h * 0.09} r={7} fill="#0B1D4A" opacity={0.85} />
          {[0.77, 0.87, 0.75].map((x, i) => (
            <Circle key={i} cx={x * w} cy={(0.2 + i * 0.03) * h} r={1.5} fill="#FFF" opacity={0.7} />
          ))}
          {/* curtains */}
          <Path d={`M${w * 0.72},${h * 0.06} Q${w * 0.75},${h * 0.18} ${w * 0.72},${h * 0.28}`} fill="#EF9A9A" opacity={0.55} />
          <Path d={`M${w * 0.94},${h * 0.06} Q${w * 0.91},${h * 0.18} ${w * 0.94},${h * 0.28}`} fill="#EF9A9A" opacity={0.55} />
          {/* floor */}
          <Rect x={0} y={ground} width={w} height={h - ground} fill="#8D6E63" opacity={0.35} />
          {/* rug */}
          <Ellipse cx={cx} cy={ground + 10} rx={w * 0.36} ry={16} fill="#E57373" opacity={0.3} />
        </G>
      );

    case 'sky':
      return (
        <G>
          {/* large clouds */}
          {BIG_CLOUDS.map((c, i) => (
            <G key={i}>
              <Ellipse cx={c.x * w} cy={c.y * h} rx={c.rx} ry={c.ry} fill="#FFF" opacity={0.92} />
              <Ellipse cx={c.x * w - c.rx * 0.42} cy={c.y * h + 8} rx={c.rx * 0.68} ry={c.ry * 0.85} fill="#FFF" opacity={0.92} />
              <Ellipse cx={c.x * w + c.rx * 0.42} cy={c.y * h + 8} rx={c.rx * 0.58} ry={c.ry * 0.78} fill="#FFF" opacity={0.92} />
            </G>
          ))}
          {/* birds V shapes */}
          {BIRDS.map((b, i) => (
            <G key={i}>
              <Path d={`M${b.x * w - 12},${b.y * h} Q${b.x * w - 6},${b.y * h - 8} ${b.x * w},${b.y * h}`} stroke="#555" strokeWidth={1.8} fill="none" opacity={0.55} />
              <Path d={`M${b.x * w},${b.y * h} Q${b.x * w + 6},${b.y * h - 8} ${b.x * w + 12},${b.y * h}`} stroke="#555" strokeWidth={1.8} fill="none" opacity={0.55} />
            </G>
          ))}
          {/* rainbow */}
          {[50, 62, 74, 86].map((r, i) => (
            <Path key={i}
              d={`M${cx - r * 1.6},${ground - 10} A${r * 1.6},${r} 0 0 1 ${cx + r * 1.6},${ground - 10}`}
              stroke={RAINBOW_COLORS[i]} strokeWidth={7} fill="none" opacity={0.5}
            />
          ))}
          {/* horizon haze */}
          <Rect x={0} y={ground - 10} width={w} height={h - ground + 10} fill="#90CAF9" opacity={0.2} />
        </G>
      );

    case 'cave':
      return (
        <G>
          {/* stalactites */}
          {STALACTITES.map((s, i) => (
            <Polygon key={i}
              points={`${s.x * w - s.w},0 ${s.x * w + s.w},0 ${s.x * w},${s.h}`}
              fill="#4E342E" opacity={0.7}
            />
          ))}
          {/* stalagmites */}
          {STALAGMITES.map((s, i) => (
            <Polygon key={i}
              points={`${s.x * w - s.w},${h} ${s.x * w + s.w},${h} ${s.x * w},${h - s.h}`}
              fill="#3E2723" opacity={0.65}
            />
          ))}
          {/* glowing crystals */}
          {CRYSTALS.map((c, i) => (
            <G key={i}>
              <Polygon
                points={`${c.x * w},${ground - c.h} ${c.x * w - c.w},${ground} ${c.x * w + c.w},${ground}`}
                fill={c.color} opacity={0.75}
              />
              <Ellipse cx={c.x * w} cy={ground - c.h * 0.5} rx={c.w * 2.5} ry={c.h * 0.7} fill={c.color} opacity={0.15} />
            </G>
          ))}
          {/* ground */}
          <Rect x={0} y={ground} width={w} height={h - ground} fill="#3E2723" opacity={0.7} />
          {/* cave glow pool */}
          <Ellipse cx={cx} cy={ground + 12} rx={w * 0.22} ry={14} fill="#4FC3F7" opacity={0.18} />
        </G>
      );

    case 'snow':
      return (
        <G>
          {/* snowflakes */}
          {SNOWFLAKES.map((s, i) => (
            <G key={i}>
              <Circle cx={s.x * w} cy={s.y * h} r={s.r} fill="#FFF" opacity={0.85} />
              {s.r > 2.5 && (
                <G>
                  <Line x1={s.x * w - s.r * 2} y1={s.y * h} x2={s.x * w + s.r * 2} y2={s.y * h} stroke="#FFF" strokeWidth={1} opacity={0.6} />
                  <Line x1={s.x * w} y1={s.y * h - s.r * 2} x2={s.x * w} y2={s.y * h + s.r * 2} stroke="#FFF" strokeWidth={1} opacity={0.6} />
                </G>
              )}
            </G>
          ))}
          {/* snowy hills */}
          <Path d={`M0,${ground - 20} Q${w * 0.2},${ground - 70} ${w * 0.4},${ground - 30} Q${w * 0.65},${ground + 10} ${w},${ground - 45} L${w},${h} L0,${h} Z`}
            fill="#E3F2FD" opacity={0.8} />
          <Path d={`M0,${ground + 5} Q${w * 0.3},${ground - 40} ${w * 0.55},${ground + 5} Q${w * 0.78},${ground + 30} ${w},${ground - 10} L${w},${h} L0,${h} Z`}
            fill="#FFF" opacity={0.7} />
          {/* pine trees */}
          {[0.1, 0.88].map((x, i) => (
            <G key={i}>
              <Rect x={x * w - 5} y={ground - 75 + i * 10} width={10} height={80} fill="#4E342E" opacity={0.7} />
              <Polygon points={`${x * w},${ground - 100 + i * 10} ${x * w - 30},${ground - 40 + i * 10} ${x * w + 30},${ground - 40 + i * 10}`} fill="#1B5E20" opacity={0.8} />
              <Polygon points={`${x * w},${ground - 85 + i * 10} ${x * w - 22},${ground - 35 + i * 10} ${x * w + 22},${ground - 35 + i * 10}`} fill="#2E7D32" opacity={0.8} />
              <Ellipse cx={x * w} cy={ground - 100 + i * 10} rx={8} ry={8} fill="#FFF" opacity={0.7} />
            </G>
          ))}
        </G>
      );

    case 'sunset':
      return (
        <G>
          {/* sun on horizon */}
          <Circle cx={cx} cy={ground - 8} r={54} fill="#FF6F00" opacity={0.9} />
          <Circle cx={cx} cy={ground - 8} r={66} fill="#FF8F00" opacity={0.18} />
          <Circle cx={cx} cy={ground - 8} r={82} fill="#FFAB40" opacity={0.1} />
          {/* light beams */}
          {SUNBEAMS.map((b, i) => (
            <Path key={i}
              d={`M${cx},${ground - 8} L${cx + Math.cos(b) * w * 0.7},${ground - 8 + Math.sin(b) * h * 0.7}`}
              stroke="#FFAB40" strokeWidth={18} opacity={0.07}
            />
          ))}
          {/* silhouette hills */}
          <Path d={`M0,${ground} Q${w * 0.18},${ground - 55} ${w * 0.38},${ground} Q${w * 0.55},${ground + 18} ${w * 0.72},${ground - 40} Q${w * 0.86},${ground - 20} ${w},${ground} L${w},${h} L0,${h} Z`}
            fill="#1B2A1C" opacity={0.75} />
          {/* cloud silhouettes */}
          {[0.12, 0.72].map((x, i) => (
            <Ellipse key={i} cx={x * w} cy={ground - 55 - i * 20} rx={55} ry={18} fill="#BF360C" opacity={0.4} />
          ))}
          {/* reflection on ground */}
          <Ellipse cx={cx} cy={ground + 20} rx={w * 0.45} ry={22} fill="#FF6F00" opacity={0.1} />
        </G>
      );

    default:
      return null;
  }
}

/* ─── constants ─── */
const STARS = [
  { x: 0.05, y: 0.07, r: 1.5, o: 0.9 }, { x: 0.14, y: 0.14, r: 1, o: 0.7 },
  { x: 0.23, y: 0.05, r: 2, o: 0.85 }, { x: 0.36, y: 0.16, r: 1, o: 0.6 },
  { x: 0.49, y: 0.04, r: 1.5, o: 0.8 }, { x: 0.61, y: 0.12, r: 1.2, o: 0.7 },
  { x: 0.32, y: 0.28, r: 1, o: 0.5 }, { x: 0.18, y: 0.32, r: 1.2, o: 0.55 },
  { x: 0.44, y: 0.23, r: 0.8, o: 0.45 },
];
const SPACE_STARS = [
  ...STARS,
  { x: 0.08, y: 0.42, r: 1, o: 0.6 }, { x: 0.28, y: 0.5, r: 1.5, o: 0.7 },
  { x: 0.52, y: 0.45, r: 1, o: 0.55 }, { x: 0.67, y: 0.38, r: 0.8, o: 0.5 },
  { x: 0.78, y: 0.55, r: 1.2, o: 0.65 }, { x: 0.91, y: 0.42, r: 1, o: 0.6 },
  { x: 0.15, y: 0.6, r: 0.8, o: 0.45 }, { x: 0.38, y: 0.68, r: 1.5, o: 0.7 },
];
const FIREFLIES = [{ x: 0.12, y: 0.62 }, { x: 0.28, y: 0.55 }, { x: 0.68, y: 0.58 }, { x: 0.82, y: 0.64 }];
const CLOUDS = [{ x: 0.22, y: 0.18, rx: 55, ry: 22 }, { x: 0.65, y: 0.13, rx: 65, ry: 24 }];
const BIG_CLOUDS = [{ x: 0.2, y: 0.2, rx: 62, ry: 26 }, { x: 0.68, y: 0.14, rx: 72, ry: 28 }, { x: 0.92, y: 0.3, rx: 44, ry: 18 }];
const BIRDS = [{ x: 0.32, y: 0.32 }, { x: 0.48, y: 0.25 }, { x: 0.6, y: 0.36 }];
const FLOWERS = [
  { x: 0.08, c: '#FF6B6B' }, { x: 0.2, c: '#FFD166' }, { x: 0.78, c: '#FF6B9D' },
  { x: 0.88, c: '#A78BFA' }, { x: 0.94, c: '#6BCB77' },
];
const SUN_RAYS = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
const RAINBOW_COLORS = ['#FF0000', '#FF7F00', '#FFD700', '#00C853'];
const BACK_TREES = [{ x: 0.08, h: 55 }, { x: 0.2, h: 65 }, { x: 0.78, h: 60 }, { x: 0.92, h: 50 }];
const FRONT_TREES = [{ x: 0.05, h: 90 }, { x: 0.9, h: 80 }];
const FOAM = [{ x: 0.1, y: 0, rx: 35 }, { x: 0.4, y: 1.2, rx: 50 }, { x: 0.72, y: 0.5, rx: 40 }];
const BUBBLES = [{ x: 0.15, y: 0.62, r: 8 }, { x: 0.38, y: 0.52, r: 5 }, { x: 0.6, y: 0.66, r: 10 }, { x: 0.78, y: 0.47, r: 6 }];
const STALACTITES = [{ x: 0.08, w: 10, h: 45 }, { x: 0.22, w: 14, h: 60 }, { x: 0.38, w: 9, h: 38 }, { x: 0.55, w: 13, h: 55 }, { x: 0.7, w: 10, h: 42 }, { x: 0.85, w: 12, h: 50 }];
const STALAGMITES = [{ x: 0.15, w: 8, h: 30 }, { x: 0.32, w: 11, h: 42 }, { x: 0.62, w: 9, h: 35 }, { x: 0.78, w: 12, h: 45 }];
const CRYSTALS = [{ x: 0.28, w: 14, h: 55, color: '#9C27B0' }, { x: 0.52, w: 18, h: 70, color: '#2196F3' }, { x: 0.74, w: 12, h: 48, color: '#4CAF50' }];
const SNOWFLAKES = [
  { x: 0.06, y: 0.08, r: 3 }, { x: 0.18, y: 0.18, r: 2 }, { x: 0.28, y: 0.06, r: 4 },
  { x: 0.42, y: 0.15, r: 2.5 }, { x: 0.56, y: 0.24, r: 3 }, { x: 0.68, y: 0.09, r: 2 },
  { x: 0.78, y: 0.2, r: 3.5 }, { x: 0.9, y: 0.12, r: 2 }, { x: 0.35, y: 0.32, r: 2 },
  { x: 0.12, y: 0.38, r: 2.5 }, { x: 0.62, y: 0.38, r: 3 }, { x: 0.85, y: 0.32, r: 2 },
];
const SUNBEAMS = Array.from({ length: 8 }, (_, i) => (i * Math.PI * 2) / 8);
const CORNER_STARS = [
  { x: 0.04, y: 0.05, r: 2, o: 0.25 }, { x: 0.96, y: 0.05, r: 2, o: 0.25 },
  { x: 0.04, y: 0.95, r: 2, o: 0.2 }, { x: 0.96, y: 0.95, r: 2, o: 0.2 },
];

const styles = StyleSheet.create({
  wrap: { position: 'relative', overflow: 'hidden' },
  emojiMain: { position: 'absolute', width: 112, height: 112, alignItems: 'center', justifyContent: 'center' },
  emojiMainText: { fontSize: 88 },
  emojiDetail: { position: 'absolute', width: 76, height: 76, alignItems: 'center', justifyContent: 'center' },
  emojiDetailText: { fontSize: 58 },
  strip: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  stripDots: { flexDirection: 'row', gap: 5 },
  stripDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#FFF' },
});
