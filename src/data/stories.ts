export type Category = 'animals' | 'fantasy' | 'adventure' | 'friendship' | 'nature' | 'family' | 'lifestyle';
export type SceneType = 'night' | 'forest' | 'ocean' | 'space' | 'meadow' | 'home' | 'sky' | 'cave' | 'snow' | 'sunset';

export interface StoryPage {
  text: string;
  emoji: string;
  detailEmoji?: string;
  scene: SceneType;
  topColor: string;
  bottomColor: string;
}

export interface Story {
  id: number;
  title: string;
  category: Category;
  coverEmoji: string;
  accentColor: string;
  pages: StoryPage[];
  readTime: number;
  keywords: string[];
}

export const stories: Story[] = [
  // ── ANIMALS ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Benny the Bunny's Big Hop",
    category: 'animals',
    coverEmoji: '🐰',
    accentColor: '#52B788',
    readTime: 3,
    keywords: ['brave', 'hop', 'meadow', 'tired', 'home'],
    pages: [
      { text: "Benny was a tiny white bunny who lived under the old apple tree.", emoji: '🐰', detailEmoji: '🍎', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "One morning, Benny decided to hop all the way to the top of Clover Hill!", emoji: '🐰', detailEmoji: '⛰️', scene: 'sky', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "Hop, hop, hop — past the flowers! Hop, hop, hop — past the sparkling pond!", emoji: '🐰', detailEmoji: '🌸', scene: 'meadow', topColor: '#FF9999', bottomColor: '#98FB98' },
      { text: "At the top, Benny could see his whole green meadow below. He smiled his biggest smile.", emoji: '🐰', detailEmoji: '🌈', scene: 'sunset', topColor: '#FF7043', bottomColor: '#FFB74D' },
      { text: "Happy and tired, Benny hopped home. Mama tucked him in. 'Sleep tight, little hopper!'", emoji: '🐰', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 7,
    title: 'Ella the Elephant',
    category: 'animals',
    coverEmoji: '🐘',
    accentColor: '#93C5FD',
    readTime: 3,
    keywords: ['shy', 'friend', 'splash', 'laugh', 'lonely'],
    pages: [
      { text: "Ella the elephant was new to the watering hole. She stood far away, feeling very shy.", emoji: '🐘', detailEmoji: '💧', scene: 'sunset', topColor: '#E65100', bottomColor: '#FF8F00' },
      { text: "A little zebra named Zara trotted over. 'I really like your enormous ears!' she said.", emoji: '🦓', detailEmoji: '🐘', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "They splashed in the cool water and made mud paintings on the big flat rocks.", emoji: '🐘', detailEmoji: '🦓', scene: 'ocean', topColor: '#0077B6', bottomColor: '#00B4D8' },
      { text: "Ella squirted water with her trunk and Zara laughed so hard she fell into the pond!", emoji: '🐘', detailEmoji: '💦', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "'Same time tomorrow?' asked Zara. 'Yes please!' said Ella — no longer lonely.", emoji: '🐘', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0F3460' },
    ],
  },

  // ── FANTASY ──────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Draco the Friendly Dragon',
    category: 'fantasy',
    coverEmoji: '🐲',
    accentColor: '#A855F7',
    readTime: 3,
    keywords: ['kind', 'lonely', 'brave', 'friend', 'help'],
    pages: [
      { text: "Draco was a little purple dragon who lived alone on Misty Mountain.", emoji: '🐲', detailEmoji: '🏔️', scene: 'sky', topColor: '#4A1C6F', bottomColor: '#7B2D9E' },
      { text: "He had sparkly smoke that smelled like cinnamon, but no friends to share it with.", emoji: '🐲', detailEmoji: '💨', scene: 'cave', topColor: '#2D1B4E', bottomColor: '#4A1C6F' },
      { text: "One evening, a little girl named Lily got lost in the dark forest.", emoji: '👧', detailEmoji: '🌲', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "Draco swooped down and lit the path with his warm glowing breath.", emoji: '🐲', detailEmoji: '👧', scene: 'forest', topColor: '#0D2B1A', bottomColor: '#1B4332' },
      { text: "Lily hugged Draco tight. 'You are the kindest dragon!' They became best friends forever.", emoji: '🐲', detailEmoji: '💜', scene: 'night', topColor: '#1A1A2E', bottomColor: '#3B1F5E' },
    ],
  },
  {
    id: 8,
    title: 'Starlight the Unicorn',
    category: 'fantasy',
    coverEmoji: '🦄',
    accentColor: '#E879F9',
    readTime: 3,
    keywords: ['kindness', 'dream', 'magic', 'rainbow', 'glow'],
    pages: [
      { text: "Starlight was a unicorn with a silver mane and a horn that glowed softly in the dark.", emoji: '🦄', detailEmoji: '✨', scene: 'night', topColor: '#3B0764', bottomColor: '#5B21B6' },
      { text: "Every night she galloped across the sky, painting it with colors for children to dream.", emoji: '🦄', detailEmoji: '🌈', scene: 'sky', topColor: '#7C3AED', bottomColor: '#A78BFA' },
      { text: "One night she ran out of colors. The sky went grey and the children dreamed of nothing.", emoji: '🦄', detailEmoji: '😟', scene: 'night', topColor: '#1F2937', bottomColor: '#374151' },
      { text: "Starlight thought of every kind deed she had done. Her horn blazed with rainbow light!", emoji: '🦄', detailEmoji: '🌟', scene: 'space', topColor: '#1E0A3C', bottomColor: '#3B1F5E' },
      { text: "Below, every sleeping child smiled. Starlight returned home, her heart warm and full.", emoji: '🦄', detailEmoji: '💜', scene: 'night', topColor: '#1A1A2E', bottomColor: '#3B0764' },
    ],
  },

  // ── ADVENTURE ────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Space Explorer Sam',
    category: 'adventure',
    coverEmoji: '🚀',
    accentColor: '#60A5FA',
    readTime: 3,
    keywords: ['explore', 'rocket', 'planet', 'stars', 'dream'],
    pages: [
      { text: "Sam had a shiny red rocket ship parked right in her backyard!", emoji: '🚀', detailEmoji: '⭐', scene: 'night', topColor: '#0B1D4A', bottomColor: '#1A2E6A' },
      { text: "She zoomed past the moon — it waved! Then through Saturn's rings that played soft music.", emoji: '🚀', detailEmoji: '🪐', scene: 'space', topColor: '#0B0E2E', bottomColor: '#1A1A4E' },
      { text: "Sam landed on a fluffy cloud planet. Bouncy cloud creatures giggled and played with her!", emoji: '👩‍🚀', detailEmoji: '☁️', scene: 'sky', topColor: '#B3D9FF', bottomColor: '#E8F4FD' },
      { text: "They gave her a jar of starlight to take home as a precious gift.", emoji: '👩‍🚀', detailEmoji: '✨', scene: 'space', topColor: '#050714', bottomColor: '#0B1030' },
      { text: "Sam placed the starlight jar on her shelf and drifted off to dream.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },

  // ── FRIENDSHIP ───────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'The New Kid in Town',
    category: 'friendship',
    coverEmoji: '🤝',
    accentColor: '#F472B6',
    readTime: 3,
    keywords: ['new', 'scared', 'kind', 'play', 'friend'],
    pages: [
      { text: "Mia moved to a new town on a rainy Tuesday. Her tummy felt full of butterflies.", emoji: '👧', detailEmoji: '📦', scene: 'home', topColor: '#4A2040', bottomColor: '#6B2D5E' },
      { text: "She stood at the edge of the playground, watching everyone play without her.", emoji: '👧', detailEmoji: '🏫', scene: 'sky', topColor: '#A8D8EA', bottomColor: '#D4EDDA' },
      { text: "A boy named Leo walked over. 'I need someone fast to race cars with!' he smiled.", emoji: '👦', detailEmoji: '🚗', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "They raced the car down the slide, through puddles, and around the big oak tree.", emoji: '👧', detailEmoji: '🛝', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "'Sit with me at lunch?' asked Leo. Mia nodded. This new town wasn't scary at all!", emoji: '🤝', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF7043', bottomColor: '#FFB74D' },
    ],
  },

  // ── NATURE ───────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'The Little Seed',
    category: 'nature',
    coverEmoji: '🌱',
    accentColor: '#86EFAC',
    readTime: 3,
    keywords: ['grow', 'sun', 'water', 'patience', 'bloom'],
    pages: [
      { text: "Deep under the cold ground, a tiny seed slept all through the long winter.", emoji: '🌱', detailEmoji: '❄️', scene: 'cave', topColor: '#3B2507', bottomColor: '#5C3D0E' },
      { text: "One morning, a warm sunbeam reached down through the soil. The seed stretched and woke up!", emoji: '🌱', detailEmoji: '☀️', scene: 'meadow', topColor: '#FFD700', bottomColor: '#98FB98' },
      { text: "It pushed one tiny green shoot up and poked its head into the world for the first time.", emoji: '🌿', detailEmoji: '🌍', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "A bee buzzed by and said, 'Welcome! We have been waiting for you all winter long!'", emoji: '🌻', detailEmoji: '🐝', scene: 'sky', topColor: '#87CEEB', bottomColor: '#FFFDE7' },
      { text: "The little seedling looked up at the first star and whispered, 'I am so glad I woke up.'", emoji: '🌻', detailEmoji: '⭐', scene: 'sunset', topColor: '#FF9800', bottomColor: '#FFD54F' },
    ],
  },
  {
    id: 9,
    title: "The River's Lullaby",
    category: 'nature',
    coverEmoji: '🌊',
    accentColor: '#38BDF8',
    readTime: 3,
    keywords: ['flow', 'journey', 'peaceful', 'river', 'sleep'],
    pages: [
      { text: "High in the mountains, a little river was born from melting snow.", emoji: '🌊', detailEmoji: '🏔️', scene: 'snow', topColor: '#B0C4DE', bottomColor: '#E8F0FE' },
      { text: "It skipped over stones singing to itself: 'Where will I go? Where will I go?'", emoji: '🌊', detailEmoji: '🪨', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "It flowed past sleeping bears and watered the dreaming flowers. Everything grew still.", emoji: '🌊', detailEmoji: '🐻', scene: 'forest', topColor: '#0D2B1A', bottomColor: '#1B4332' },
      { text: "Fish rested in its curves. Ducks tucked their heads under their wings on its banks.", emoji: '🦆', detailEmoji: '🐟', scene: 'meadow', topColor: '#2196F3', bottomColor: '#87CEEB' },
      { text: "Far away, a child fell asleep to the sound of distant water — and smiled.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#0C4A6E', bottomColor: '#1E40AF' },
    ],
  },

  // ── FAMILY ───────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Grandma's Cookie Day",
    category: 'family',
    coverEmoji: '🍪',
    accentColor: '#FB923C',
    readTime: 3,
    keywords: ['love', 'bake', 'together', 'recipe', 'warm'],
    pages: [
      { text: "Every Saturday, Grandma pulled out her old recipe book and said, 'Today is a cookie day!'", emoji: '👵', detailEmoji: '📖', scene: 'home', topColor: '#431407', bottomColor: '#7C2D12' },
      { text: "Ava put on her tiny apron and helped measure flour, brown sugar, and chocolate chips.", emoji: '👧', detailEmoji: '🥣', scene: 'home', topColor: '#5C1A0A', bottomColor: '#92400E' },
      { text: "They stirred the big bowl together. The kitchen smelled like warm vanilla and sweet butter.", emoji: '👧', detailEmoji: '🍪', scene: 'home', topColor: '#78350F', bottomColor: '#A16207' },
      { text: "'Now the most important ingredient,' said Grandma, giving Ava a long warm hug. 'Love!'", emoji: '👵', detailEmoji: '💛', scene: 'home', topColor: '#92400E', bottomColor: '#B45309' },
      { text: "Ava wrote 'love' at the bottom of the recipe. She never wanted to forget this day.", emoji: '👧', detailEmoji: '✍️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#2C1810' },
    ],
  },
  {
    id: 10,
    title: "Dad's Bedtime Song",
    category: 'family',
    coverEmoji: '🎵',
    accentColor: '#818CF8',
    readTime: 2,
    keywords: ['song', 'bedtime', 'cozy', 'love', 'sleep'],
    pages: [
      { text: "Every night, after bath and warm milk, Noah would say: 'Dad, sing the song!'", emoji: '👦', detailEmoji: '🛁', scene: 'home', topColor: '#1E1B4B', bottomColor: '#312E81' },
      { text: "Dad would sit on the edge of the bed and sing about the moon going to sleep.", emoji: '👨', detailEmoji: '🎵', scene: 'night', topColor: '#1A1A2E', bottomColor: '#1E1B4B' },
      { text: "The stars were yawning, and the whole wide world was getting cozy and quiet.", emoji: '🌙', detailEmoji: '⭐', scene: 'night', topColor: '#0B1030', bottomColor: '#1A1A2E' },
      { text: "Dad's voice wobbled on the high notes. To Noah, it was the most beautiful sound.", emoji: '👨', detailEmoji: '💙', scene: 'night', topColor: '#1E1B4B', bottomColor: '#312E81' },
      { text: "Halfway through the song, Noah was already dreaming. Dad smiled and tiptoed out.", emoji: '😴', detailEmoji: '🌟', scene: 'night', topColor: '#0B0E2E', bottomColor: '#1A1A2E' },
    ],
  },

  // ── LIFESTYLE ────────────────────────────────────────────────────────────
  {
    id: 11,
    title: 'Brush, Brush, Brush!',
    category: 'lifestyle',
    coverEmoji: '🪥',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['teeth', 'brush', 'clean', 'healthy', 'smile'],
    pages: [
      { text: "Every morning and night, Zoe picks up her toothbrush. It is time to brush!", emoji: '👧', detailEmoji: '🪥', scene: 'home', topColor: '#006064', bottomColor: '#00838F' },
      { text: "She puts a tiny squeeze of toothpaste — just a pea-sized dot — on the brush.", emoji: '🪥', detailEmoji: '🦷', scene: 'home', topColor: '#00695C', bottomColor: '#00897B' },
      { text: "Brush the top teeth, brush the bottom teeth, brush the front and the back!", emoji: '🦷', detailEmoji: '✨', scene: 'home', topColor: '#004D40', bottomColor: '#00695C' },
      { text: "Count to twenty while you brush — that is long enough to get them sparkling clean!", emoji: '👧', detailEmoji: '🔢', scene: 'home', topColor: '#006064', bottomColor: '#0097A7' },
      { text: "Zoe rinses and smiles at the mirror. Her teeth are shiny and bright. Good night, teeth!", emoji: '😁', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#004D40' },
    ],
  },
  {
    id: 12,
    title: 'Getting Dressed All by Myself',
    category: 'lifestyle',
    coverEmoji: '👕',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['dress', 'shirt', 'trousers', 'shoes', 'proud'],
    pages: [
      { text: "Good morning! It is time to get dressed. Tom opens his wardrobe and looks inside.", emoji: '👦', detailEmoji: '👕', scene: 'home', topColor: '#1565C0', bottomColor: '#1976D2' },
      { text: "First comes the underwear, then his favourite blue shirt — he pops his head through!", emoji: '👕', detailEmoji: '👦', scene: 'home', topColor: '#0D47A1', bottomColor: '#1565C0' },
      { text: "Next come the trousers — one leg in, then the other. He gives them a little wiggle!", emoji: '👖', detailEmoji: '😄', scene: 'home', topColor: '#1A237E', bottomColor: '#283593' },
      { text: "Now the shoes! He sits on the floor, slips them on his feet, and tries the laces.", emoji: '👟', detailEmoji: '🎀', scene: 'home', topColor: '#283593', bottomColor: '#3949AB' },
      { text: "Tom stands tall and looks in the mirror. 'I did it all by myself!' he cheers.", emoji: '👦', detailEmoji: '🌟', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
    ],
  },
  {
    id: 13,
    title: 'Time to Eat with a Spoon',
    category: 'lifestyle',
    coverEmoji: '🥄',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['spoon', 'soup', 'eat', 'careful', 'yummy'],
    pages: [
      { text: "Lunch is ready! In the bowl is a warm, golden soup that smells delicious.", emoji: '🍲', detailEmoji: '🥄', scene: 'home', topColor: '#E65100', bottomColor: '#F57C00' },
      { text: "Lily picks up her spoon with her right hand. She curls her fingers around it carefully.", emoji: '👧', detailEmoji: '🥄', scene: 'home', topColor: '#BF360C', bottomColor: '#E64A19' },
      { text: "She scoops the soup gently — not too full! — and brings it slowly to her mouth.", emoji: '🥄', detailEmoji: '😋', scene: 'home', topColor: '#D84315', bottomColor: '#E64A19' },
      { text: "'Mmm!' says Lily. 'It is warm and yummy!' She scoops again and again.", emoji: '😋', detailEmoji: '🍲', scene: 'home', topColor: '#BF360C', bottomColor: '#D84315' },
      { text: "Her bowl is empty! Lily puts her spoon down neatly. 'Thank you for the soup!'", emoji: '👧', detailEmoji: '💛', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
    ],
  },
  {
    id: 14,
    title: 'Fork and Knife Are My Friends',
    category: 'lifestyle',
    coverEmoji: '🍴',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['fork', 'knife', 'cut', 'table', 'manners'],
    pages: [
      { text: "Dinner is on the table! There are vegetables, rice, and a piece of chicken.", emoji: '🍽️', detailEmoji: '🍗', scene: 'home', topColor: '#4A148C', bottomColor: '#6A1B9A' },
      { text: "Ben picks up his fork in his left hand and his knife in his right.", emoji: '👦', detailEmoji: '🍴', scene: 'home', topColor: '#38006B', bottomColor: '#4A148C' },
      { text: "He uses the fork to hold the chicken, then slices it with the knife — just like Mum showed him!", emoji: '🍴', detailEmoji: '🍗', scene: 'home', topColor: '#4A148C', bottomColor: '#6A1B9A' },
      { text: "He keeps his elbows off the table and chews with his mouth closed. What good manners!", emoji: '😊', detailEmoji: '👍', scene: 'home', topColor: '#6A1B9A', bottomColor: '#7B1FA2' },
      { text: "'Well done, Ben!' says Dad. Ben smiles proudly. Dinner together is the best.", emoji: '👦', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF7043', bottomColor: '#FFB74D' },
    ],
  },
  {
    id: 15,
    title: 'Wash Your Hands!',
    category: 'lifestyle',
    coverEmoji: '🧼',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['hands', 'soap', 'water', 'clean', 'germs'],
    pages: [
      { text: "After playing outside, Mia's hands are dirty. Time to wash them clean!", emoji: '👧', detailEmoji: '🙌', scene: 'home', topColor: '#1B5E20', bottomColor: '#2E7D32' },
      { text: "She turns on the tap and gets her hands wet — not too hot, not too cold.", emoji: '💧', detailEmoji: '🚿', scene: 'home', topColor: '#0D47A1', bottomColor: '#1565C0' },
      { text: "She rubs the soap between her palms and makes lots and lots of bubbles!", emoji: '🧼', detailEmoji: '🫧', scene: 'home', topColor: '#1565C0', bottomColor: '#1976D2' },
      { text: "She scrubs the back of her hands, between her fingers, and under her nails.", emoji: '🙌', detailEmoji: '✨', scene: 'home', topColor: '#0D47A1', bottomColor: '#1565C0' },
      { text: "She rinses off all the soap and dries with a towel. Clean hands keep germs away!", emoji: '😊', detailEmoji: '🌟', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
    ],
  },
  {
    id: 16,
    title: 'Bath Time Bubbles',
    category: 'lifestyle',
    coverEmoji: '🛁',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['bath', 'soap', 'bubbles', 'clean', 'splash'],
    pages: [
      { text: "The bath is full of warm water and big fluffy bubbles. Jake loves bath time!", emoji: '🛁', detailEmoji: '🫧', scene: 'home', topColor: '#006064', bottomColor: '#00838F' },
      { text: "He steps in carefully — holding the side — and sits down with a big splash!", emoji: '👦', detailEmoji: '💦', scene: 'home', topColor: '#004D40', bottomColor: '#00695C' },
      { text: "He washes his tummy, his arms, and his feet — especially between his toes!", emoji: '🧼', detailEmoji: '🦶', scene: 'home', topColor: '#006064', bottomColor: '#00838F' },
      { text: "Now for the hair — shampoo makes a big mountain of foam on his head!", emoji: '👦', detailEmoji: '🫧', scene: 'home', topColor: '#00695C', bottomColor: '#0097A7' },
      { text: "Rinsed, clean, and wrapped in a warm towel — Jake is fresh and ready for bed.", emoji: '😊', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#004D40' },
    ],
  },
  {
    id: 17,
    title: 'Wearing My Shoes the Right Way',
    category: 'lifestyle',
    coverEmoji: '👟',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['shoes', 'left', 'right', 'laces', 'try'],
    pages: [
      { text: "It is time to go to the park! But first, Emma needs to put on her shoes.", emoji: '👧', detailEmoji: '👟', scene: 'home', topColor: '#4527A0', bottomColor: '#512DA8' },
      { text: "She picks up the left shoe and looks for the L sticker inside. That is for the left foot!", emoji: '👟', detailEmoji: '👈', scene: 'home', topColor: '#311B92', bottomColor: '#4527A0' },
      { text: "She slides her left foot in and does the same for the right shoe. Perfect fit!", emoji: '🦶', detailEmoji: '✅', scene: 'home', topColor: '#4527A0', bottomColor: '#512DA8' },
      { text: "Now the laces — she makes two bunny ears and ties them in a big bow. She tries three times!", emoji: '👟', detailEmoji: '🎀', scene: 'home', topColor: '#512DA8', bottomColor: '#5E35B1' },
      { text: "Emma jumps up and stomps her feet. 'I can do it!' she cheers. Off to the park!", emoji: '👧', detailEmoji: '🌳', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
    ],
  },
  {
    id: 18,
    title: 'Good Morning Stretch',
    category: 'lifestyle',
    coverEmoji: '🌅',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['morning', 'stretch', 'wake', 'body', 'energy'],
    pages: [
      { text: "The sun peeks through the curtains. It is a brand new morning for Leo!", emoji: '☀️', detailEmoji: '🌅', scene: 'sky', topColor: '#FF8F00', bottomColor: '#FFB300' },
      { text: "Leo wakes up and reaches his arms up high — s-t-r-e-t-c-h — all the way to the ceiling!", emoji: '👦', detailEmoji: '🙆', scene: 'home', topColor: '#E65100', bottomColor: '#F57C00' },
      { text: "He wiggles his fingers, rolls his ankles, and gives his whole body a big good-morning shake!", emoji: '🕺', detailEmoji: '✨', scene: 'home', topColor: '#BF360C', bottomColor: '#E64A19' },
      { text: "He takes three big deep breaths — in through the nose, out through the mouth. Ahhhh!", emoji: '😌', detailEmoji: '🌬️', scene: 'sky', topColor: '#87CEEB', bottomColor: '#B3E5FC' },
      { text: "Leo feels wide awake and full of energy. What a wonderful day this will be!", emoji: '👦', detailEmoji: '🌟', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
    ],
  },
  {
    id: 19,
    title: 'Tidy Up Time',
    category: 'lifestyle',
    coverEmoji: '🧸',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['tidy', 'clean', 'toys', 'put away', 'help'],
    pages: [
      { text: "The playroom is full of toys — blocks, cars, books, and stuffed animals everywhere!", emoji: '🧸', detailEmoji: '🚗', scene: 'home', topColor: '#827717', bottomColor: '#9E9D24' },
      { text: "'Tidy up time!' calls Mum. Lily knows just what to do. She makes it a fun game!", emoji: '👧', detailEmoji: '🎵', scene: 'home', topColor: '#F57F17', bottomColor: '#F9A825' },
      { text: "She puts the blocks in the blue box, the cars in the red basket, one by one.", emoji: '🧱', detailEmoji: '🚗', scene: 'home', topColor: '#E65100', bottomColor: '#F57C00' },
      { text: "She lines up her stuffed animals on the shelf and gives her teddy a hug before he goes up.", emoji: '🧸', detailEmoji: '❤️', scene: 'home', topColor: '#BF360C', bottomColor: '#D84315' },
      { text: "The room is neat and tidy! Lily looks around and feels very proud of herself.", emoji: '👧', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
    ],
  },
  {
    id: 20,
    title: 'Goodnight, Sleep Tight',
    category: 'lifestyle',
    coverEmoji: '😴',
    accentColor: '#00ACC1',
    readTime: 2,
    keywords: ['sleep', 'bedtime', 'pillow', 'cozy', 'dreams'],
    pages: [
      { text: "The clock says eight. It is bedtime for little Sam. The stars are already out!", emoji: '⏰', detailEmoji: '⭐', scene: 'night', topColor: '#0B1030', bottomColor: '#1A1A2E' },
      { text: "Sam brushes his teeth, washes his face, and puts on his cosy pyjamas.", emoji: '👦', detailEmoji: '🪥', scene: 'home', topColor: '#1E1B4B', bottomColor: '#312E81' },
      { text: "He climbs into bed and Mum tucks the blanket snugly all around him.", emoji: '👩', detailEmoji: '🛏️', scene: 'home', topColor: '#1A1A2E', bottomColor: '#1E1B4B' },
      { text: "He hugs his teddy bear close and closes his eyes. His room is warm and dark and quiet.", emoji: '🧸', detailEmoji: '🌙', scene: 'night', topColor: '#0B0E2E', bottomColor: '#1A1A2E' },
      { text: "'Sweet dreams, Sam,' whispers Mum. Sam smiles and floats away into a wonderful dream.", emoji: '😴', detailEmoji: '✨', scene: 'night', topColor: '#050714', bottomColor: '#0B1030' },
    ],
  },

  // ── MORE ANIMALS ─────────────────────────────────────────────────────────
  {
    id: 21, title: 'Leo the Lion\'s Quiet Night', category: 'animals', coverEmoji: '🦁', accentColor: '#FFB300', readTime: 3,
    keywords: ['listen', 'quiet', 'savanna', 'stars', 'peace'],
    pages: [
      { text: "Leo the lion lived on the golden savanna. He loved to roar, but tonight he wanted to listen.", emoji: '🦁', detailEmoji: '🌅', scene: 'sunset', topColor: '#E65100', bottomColor: '#FF8F00' },
      { text: "He sat very still under the big acacia tree and closed his eyes.", emoji: '🦁', detailEmoji: '🌳', scene: 'meadow', topColor: '#558B2F', bottomColor: '#7CB342' },
      { text: "He heard crickets singing, wind through the grass, and frogs calling at the river.", emoji: '🦁', detailEmoji: '🐸', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "The whole world was full of quiet, beautiful sounds. Leo smiled his biggest lion smile.", emoji: '🦁', detailEmoji: '🎵', scene: 'sunset', topColor: '#BF360C', bottomColor: '#E64A19' },
      { text: "He lay down under the stars and let the night songs carry him to sleep.", emoji: '😴', detailEmoji: '⭐', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0F3460' },
    ],
  },
  {
    id: 22, title: 'Percy the Penguin Learns to Swim', category: 'animals', coverEmoji: '🐧', accentColor: '#4FC3F7', readTime: 3,
    keywords: ['swim', 'brave', 'try', 'cold', 'splash'],
    pages: [
      { text: "Percy the penguin stood at the edge of the icy water. All his friends were already swimming.", emoji: '🐧', detailEmoji: '🧊', scene: 'snow', topColor: '#B0C4DE', bottomColor: '#E8F0FE' },
      { text: "'What if I sink?' he worried. His mama smiled. 'Penguins are born to swim, my dear.'", emoji: '🐧', detailEmoji: '👩', scene: 'snow', topColor: '#90A4AE', bottomColor: '#B0BEC5' },
      { text: "Percy closed his eyes, took a deep breath, and jumped in with a big SPLASH!", emoji: '💦', detailEmoji: '🐧', scene: 'ocean', topColor: '#0277BD', bottomColor: '#0288D1' },
      { text: "His little wings pushed the water and he glided forward — he was swimming!", emoji: '🐧', detailEmoji: '🐟', scene: 'ocean', topColor: '#0288D1', bottomColor: '#039BE5' },
      { text: "Percy laughed with bubbles. That night he slept soundly, dreaming of deep blue waves.", emoji: '😴', detailEmoji: '🌊', scene: 'night', topColor: '#0C4A6E', bottomColor: '#1E40AF' },
    ],
  },
  {
    id: 23, title: 'Gracie the Giraffe\'s Long Neck', category: 'animals', coverEmoji: '🦒', accentColor: '#FFD54F', readTime: 3,
    keywords: ['tall', 'different', 'proud', 'leaves', 'reach'],
    pages: [
      { text: "Gracie the giraffe was the tallest animal on the savanna. Sometimes she felt too tall.", emoji: '🦒', detailEmoji: '🌳', scene: 'sunset', topColor: '#E65100', bottomColor: '#FF8F00' },
      { text: "The other animals could hide under bushes, but Gracie stuck out above everything.", emoji: '🦒', detailEmoji: '🌿', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "Then one day there was no rain. The leaves at the bottom of the trees dried up.", emoji: '🦒', detailEmoji: '🍂', scene: 'sunset', topColor: '#BF360C', bottomColor: '#D84315' },
      { text: "Only Gracie could reach the fresh green leaves at the very top. She shared them with everyone!", emoji: '🦒', detailEmoji: '🌿', scene: 'sky', topColor: '#87CEEB', bottomColor: '#FFFDE7' },
      { text: "'Being tall is the best!' cheered the animals. Gracie stretched her neck proudly at the moon.", emoji: '🦒', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0F3460' },
    ],
  },
  {
    id: 24, title: 'Daisy the Duck\'s Rainy Day', category: 'animals', coverEmoji: '🦆', accentColor: '#90CAF9', readTime: 3,
    keywords: ['rain', 'puddle', 'happy', 'splash', 'umbrella'],
    pages: [
      { text: "It was raining hard. All the animals ran inside to hide — but not Daisy the duck!", emoji: '🦆', detailEmoji: '🌧️', scene: 'sky', topColor: '#37474F', bottomColor: '#546E7A' },
      { text: "Daisy waddled straight into the biggest puddle she could find. Splash, splash, splash!", emoji: '🦆', detailEmoji: '💦', scene: 'ocean', topColor: '#0288D1', bottomColor: '#039BE5' },
      { text: "Rain dripped off her bill and made tiny ripples. Daisy thought it was absolutely wonderful.", emoji: '🦆', detailEmoji: '🌧️', scene: 'ocean', topColor: '#01579B', bottomColor: '#0277BD' },
      { text: "A little frog hopped over. 'May I splash too?' 'Of course!' said Daisy. The more the merrier!", emoji: '🐸', detailEmoji: '🦆', scene: 'meadow', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "When the rain stopped, Daisy and the frog watched the rainbow appear together.", emoji: '🌈', detailEmoji: '🦆', scene: 'sky', topColor: '#87CEEB', bottomColor: '#E1F5FE' },
    ],
  },
  {
    id: 25, title: 'Oliver the Owl\'s Nighttime Songs', category: 'animals', coverEmoji: '🦉', accentColor: '#9575CD', readTime: 3,
    keywords: ['night', 'wise', 'sing', 'moon', 'hoot'],
    pages: [
      { text: "While everyone else was sleeping, Oliver the owl opened his big golden eyes wide.", emoji: '🦉', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#3B1F5E' },
      { text: "He hooted a soft song into the dark. The moon listened from high up in the sky.", emoji: '🦉', detailEmoji: '🌕', scene: 'night', topColor: '#0B1030', bottomColor: '#1A1A2E' },
      { text: "A firefly blinked below. A cricket chirped along. Oliver was not alone at all!", emoji: '🦉', detailEmoji: '✨', scene: 'forest', topColor: '#0D2B1A', bottomColor: '#1B4332' },
      { text: "He told the stars old stories that only owls know, speaking in soft, round hoots.", emoji: '🦉', detailEmoji: '⭐', scene: 'night', topColor: '#050714', bottomColor: '#0B1030' },
      { text: "As the sun began to rise, Oliver tucked his head under his wing. Good morning, good night!", emoji: '😴', detailEmoji: '☀️', scene: 'sky', topColor: '#FF8F00', bottomColor: '#FFB300' },
    ],
  },
  {
    id: 26, title: 'The Happy Little Hamster', category: 'animals', coverEmoji: '🐹', accentColor: '#FFAB91', readTime: 2,
    keywords: ['wheel', 'run', 'cozy', 'seeds', 'sleep'],
    pages: [
      { text: "Hazel the hamster had rosy cheeks and tiny paws. She loved to run on her little wheel.", emoji: '🐹', detailEmoji: '⚙️', scene: 'home', topColor: '#4E342E', bottomColor: '#6D4C41' },
      { text: "She filled her cheeks with sunflower seeds — puff, puff, puff — until they were round as balloons!", emoji: '🐹', detailEmoji: '🌻', scene: 'meadow', topColor: '#F9A825', bottomColor: '#FFD54F' },
      { text: "She sorted her seeds neatly into her burrow: big ones here, tiny ones there.", emoji: '🐹', detailEmoji: '🌱', scene: 'cave', topColor: '#5D4037', bottomColor: '#795548' },
      { text: "Then Hazel curled into the tiniest ball, tucked her nose under her tail, and hummed.", emoji: '🐹', detailEmoji: '💤', scene: 'home', topColor: '#3E2723', bottomColor: '#4E342E' },
      { text: "Sweet dreams, little hamster. Tomorrow the wheel will be waiting, and so will the seeds.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 27, title: 'Bella the Butterfly\'s Wings', category: 'animals', coverEmoji: '🦋', accentColor: '#CE93D8', readTime: 3,
    keywords: ['caterpillar', 'change', 'patience', 'wings', 'fly'],
    pages: [
      { text: "Bella was once a tiny caterpillar who crept slowly along a leaf, eating and eating.", emoji: '🐛', detailEmoji: '🌿', scene: 'meadow', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "One day she felt very sleepy. She wrapped herself in a cosy silk blanket and waited.", emoji: '🐛', detailEmoji: '💤', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "Inside, something magical was happening. Slowly, slowly, she was changing.", emoji: '✨', detailEmoji: '🌟', scene: 'cave', topColor: '#3B0764', bottomColor: '#5B21B6' },
      { text: "One sunny morning, Bella burst out with the most beautiful wings — orange and black and gold!", emoji: '🦋', detailEmoji: '☀️', scene: 'sky', topColor: '#87CEEB', bottomColor: '#FFFDE7' },
      { text: "She flew higher than she ever crawled and thought: good things are worth waiting for.", emoji: '🦋', detailEmoji: '🌸', scene: 'meadow', topColor: '#FF9999', bottomColor: '#98FB98' },
    ],
  },
  {
    id: 28, title: 'Wally the Whale\'s Deep Dive', category: 'animals', coverEmoji: '🐋', accentColor: '#4FC3F7', readTime: 3,
    keywords: ['deep', 'ocean', 'sing', 'big', 'gentle'],
    pages: [
      { text: "Wally the whale was as long as ten school buses, but he was the gentlest creature in the sea.", emoji: '🐋', detailEmoji: '🌊', scene: 'ocean', topColor: '#01579B', bottomColor: '#0277BD' },
      { text: "He took a huge breath, flicked his great tail, and dived down, down, down into the deep.", emoji: '🐋', detailEmoji: '💦', scene: 'ocean', topColor: '#0277BD', bottomColor: '#01579B' },
      { text: "In the deep dark, Wally began to sing. His voice rumbled like soft thunder through the water.", emoji: '🎵', detailEmoji: '🐋', scene: 'ocean', topColor: '#003977', bottomColor: '#01579B' },
      { text: "Far away, other whales heard his song and sang back. The whole ocean hummed.", emoji: '🐋', detailEmoji: '🎶', scene: 'ocean', topColor: '#01579B', bottomColor: '#0288D1' },
      { text: "Wally rose slowly back to the surface, breathed out a rainbow spray, and closed his eyes.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#0C4A6E', bottomColor: '#1E40AF' },
    ],
  },
  {
    id: 29, title: 'Freddie the Fox\'s Fluffy Tail', category: 'animals', coverEmoji: '🦊', accentColor: '#FF8A65', readTime: 3,
    keywords: ['tail', 'clever', 'warm', 'forest', 'curl'],
    pages: [
      { text: "Freddie the fox had the fluffiest, most orange tail in the whole forest.", emoji: '🦊', detailEmoji: '🌲', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "On cold mornings, he wrapped it around himself like a warm scarf. So cosy!", emoji: '🦊', detailEmoji: '❄️', scene: 'snow', topColor: '#B0C4DE', bottomColor: '#E8F0FE' },
      { text: "He used it to balance on logs, to signal to friends across the valley, and to brush away tracks.", emoji: '🦊', detailEmoji: '🪵', scene: 'forest', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "At dusk, Freddie curled at the foot of the old pine tree, tail wrapped tight.", emoji: '🦊', detailEmoji: '🌅', scene: 'sunset', topColor: '#BF360C', bottomColor: '#D84315' },
      { text: "He watched the last light fade, whispered goodnight to the stars, and fell fast asleep.", emoji: '😴', detailEmoji: '⭐', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0F3460' },
    ],
  },
  {
    id: 30, title: 'Luna the Little Lamb', category: 'animals', coverEmoji: '🐑', accentColor: '#E1BEE7', readTime: 2,
    keywords: ['soft', 'meadow', 'bleat', 'wool', 'cozy'],
    pages: [
      { text: "Luna the lamb had the softest, whitest wool in the meadow. She was fluffy as a cloud.", emoji: '🐑', detailEmoji: '☁️', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "She bounced through the clover, going baa-baa to the butterflies and the bees.", emoji: '🐑', detailEmoji: '🦋', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "When evening came, she pressed close to her mama for a warm woolly cuddle.", emoji: '🐑', detailEmoji: '🤗', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
      { text: "Mama hummed a low gentle song while the fireflies came out one by one.", emoji: '🐑', detailEmoji: '✨', scene: 'forest', topColor: '#0D2B1A', bottomColor: '#1B4332' },
      { text: "Luna's eyes grew heavy. She counted the stars — one, two, three — and was asleep by four.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },

  // ── MORE FANTASY ──────────────────────────────────────────────────────────
  {
    id: 31, title: 'The Little Wizard\'s First Spell', category: 'fantasy', coverEmoji: '🧙', accentColor: '#AB47BC', readTime: 3,
    keywords: ['spell', 'magic', 'try', 'wand', 'believe'],
    pages: [
      { text: "Finn the little wizard had a new wand but had never cast a single spell.", emoji: '🧙', detailEmoji: '✨', scene: 'night', topColor: '#1A1A2E', bottomColor: '#3B1F5E' },
      { text: "He pointed at a pebble and said the magic words — nothing happened. He tried again!", emoji: '🧙', detailEmoji: '🪨', scene: 'cave', topColor: '#2D1B4E', bottomColor: '#4A1C6F' },
      { text: "On the third try, the pebble glowed gold and floated gently up into the air!", emoji: '🪨', detailEmoji: '⭐', scene: 'night', topColor: '#3B0764', bottomColor: '#5B21B6' },
      { text: "'I did it!' Finn cheered. His pointy hat spun with excitement all by itself.", emoji: '🧙', detailEmoji: '🎩', scene: 'space', topColor: '#1E0A3C', bottomColor: '#3B1F5E' },
      { text: "He tucked the glowing pebble under his pillow for luck and drifted off to dream.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#0B1030', bottomColor: '#1A1A2E' },
    ],
  },
  {
    id: 32, title: 'Princess Mia\'s Silver Crown', category: 'fantasy', coverEmoji: '👑', accentColor: '#FFC107', readTime: 3,
    keywords: ['kind', 'crown', 'share', 'princess', 'brave'],
    pages: [
      { text: "Princess Mia had a beautiful silver crown, but she only wore it on special days.", emoji: '👑', detailEmoji: '✨', scene: 'sky', topColor: '#7C3AED', bottomColor: '#A78BFA' },
      { text: "'A crown is not what makes you a princess,' her grandmother told her. 'Kindness does.'", emoji: '👵', detailEmoji: '👑', scene: 'home', topColor: '#4A1C6F', bottomColor: '#6A1B9A' },
      { text: "So Mia helped the baker carry flour, planted seeds with the farmer, and read to the baker's children.", emoji: '👧', detailEmoji: '📖', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "By evening, everyone in the village smiled when they saw her coming — crown or no crown.", emoji: '😊', detailEmoji: '💛', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
      { text: "Mia placed her crown gently on the windowsill and fell asleep knowing she had earned it.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#3B0764' },
    ],
  },
  {
    id: 33, title: 'The Cloud Kingdom', category: 'fantasy', coverEmoji: '☁️', accentColor: '#90CAF9', readTime: 3,
    keywords: ['cloud', 'float', 'soft', 'sky', 'kingdom'],
    pages: [
      { text: "High above the world, there was a kingdom made entirely of soft, billowy clouds.", emoji: '☁️', detailEmoji: '✨', scene: 'sky', topColor: '#87CEEB', bottomColor: '#B3E5FC' },
      { text: "The Cloud King sat on a fluffy white throne and blew gentle breezes over the land below.", emoji: '👴', detailEmoji: '☁️', scene: 'sky', topColor: '#4FC3F7', bottomColor: '#87CEEB' },
      { text: "Cloud children played leapfrog over cumulus hills and slid down silver rain chutes.", emoji: '👶', detailEmoji: '🌧️', scene: 'sky', topColor: '#B3D9FF', bottomColor: '#E8F4FD' },
      { text: "At night, the cloud people tucked themselves into misty beds and dimmed the moon a little.", emoji: '☁️', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0F3460' },
      { text: "And as you look up at soft clouds before sleep, know a whole kingdom is dreaming up there.", emoji: '😴', detailEmoji: '⭐', scene: 'night', topColor: '#0B1030', bottomColor: '#1A1A2E' },
    ],
  },
  {
    id: 34, title: 'The Little Dragon Who Couldn\'t Fly', category: 'fantasy', coverEmoji: '🐉', accentColor: '#FF7043', readTime: 3,
    keywords: ['try', 'courage', 'wings', 'fly', 'practice'],
    pages: [
      { text: "Every dragon in Ember Valley could fly except little Pip. His wings were tiny.", emoji: '🐉', detailEmoji: '💨', scene: 'sky', topColor: '#4A1C6F', bottomColor: '#7B2D9E' },
      { text: "He flapped and flapped from the top of the hill — but always plopped back down.", emoji: '🐉', detailEmoji: '⛰️', scene: 'sky', topColor: '#37474F', bottomColor: '#546E7A' },
      { text: "'Don't give up,' said his grandpa. 'Even the biggest dragons fell many times before they soared.'", emoji: '🦕', detailEmoji: '🐉', scene: 'cave', topColor: '#2D1B4E', bottomColor: '#4A1C6F' },
      { text: "On the one hundredth try, Pip caught a warm breeze — and glided, just for three seconds!", emoji: '🐉', detailEmoji: '✨', scene: 'sky', topColor: '#87CEEB', bottomColor: '#B3E5FC' },
      { text: "Three seconds was enough. Pip smiled fire-orange sparks and slept happy that night.", emoji: '😴', detailEmoji: '🔥', scene: 'night', topColor: '#1A1A2E', bottomColor: '#3B1F5E' },
    ],
  },
  {
    id: 35, title: 'The Enchanted Music Box', category: 'fantasy', coverEmoji: '🎵', accentColor: '#F06292', readTime: 3,
    keywords: ['music', 'magic', 'dance', 'listen', 'enchanted'],
    pages: [
      { text: "In the corner of the attic sat an old music box painted with tiny stars.", emoji: '🎵', detailEmoji: '⭐', scene: 'home', topColor: '#3B1F5E', bottomColor: '#4A1C6F' },
      { text: "When Rosa wound the golden key, the most beautiful tune floated into the air.", emoji: '👧', detailEmoji: '🎵', scene: 'home', topColor: '#1A1A2E', bottomColor: '#3B1F5E' },
      { text: "The flowers on the wallpaper began to sway. The dust motes danced in the beam of light.", emoji: '🌸', detailEmoji: '✨', scene: 'night', topColor: '#3B0764', bottomColor: '#5B21B6' },
      { text: "Rosa twirled once, twice, then fell softly onto the old armchair, laughing.", emoji: '👧', detailEmoji: '💜', scene: 'home', topColor: '#4A1C6F', bottomColor: '#6A1B9A' },
      { text: "When the music stopped, the attic was still. Rosa closed her eyes, still smiling.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#0B0E2E', bottomColor: '#1A1A2E' },
    ],
  },

  // ── MORE ADVENTURE ────────────────────────────────────────────────────────
  {
    id: 36, title: 'The Pirate Ship Discovery', category: 'adventure', coverEmoji: '⚓', accentColor: '#1976D2', readTime: 3,
    keywords: ['pirate', 'ship', 'ocean', 'treasure', 'brave'],
    pages: [
      { text: "Jake found an old map in Grandpa's attic. It had dotted lines and a big red X.", emoji: '🗺️', detailEmoji: '❌', scene: 'home', topColor: '#1A1A2E', bottomColor: '#0D2B5E' },
      { text: "He followed the map to the old cove and found a tiny wooden ship wedged in the rocks.", emoji: '⚓', detailEmoji: '🌊', scene: 'ocean', topColor: '#01579B', bottomColor: '#0277BD' },
      { text: "Inside the ship was a tiny chest. Jake opened it with a rusty key — creak!", emoji: '🗝️', detailEmoji: '📦', scene: 'ocean', topColor: '#0277BD', bottomColor: '#0288D1' },
      { text: "Inside were coloured stones, a compass, and a note: 'For the bravest explorer.'", emoji: '💎', detailEmoji: '🧭', scene: 'sunset', topColor: '#BF360C', bottomColor: '#E64A19' },
      { text: "Jake carried the treasure home and put it on his shelf. He was the bravest explorer indeed.", emoji: '😊', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0F3460' },
    ],
  },
  {
    id: 37, title: 'Safari Adventure Morning', category: 'adventure', coverEmoji: '🌍', accentColor: '#F9A825', readTime: 3,
    keywords: ['safari', 'animals', 'binoculars', 'wild', 'sunrise'],
    pages: [
      { text: "Zara woke before sunrise and put on her safari hat. Today was the big day!", emoji: '👧', detailEmoji: '🎩', scene: 'sky', topColor: '#FF8F00', bottomColor: '#FFB300' },
      { text: "Through her binoculars she spotted zebras drinking at the watering hole in the golden light.", emoji: '🦓', detailEmoji: '🔭', scene: 'sunset', topColor: '#E65100', bottomColor: '#FF8F00' },
      { text: "Then — a lion yawned on a rock nearby! Zara held very still and watched.", emoji: '🦁', detailEmoji: '🪨', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "A baby elephant splashed in the mud and looked right at Zara. She waved. It waved back!", emoji: '🐘', detailEmoji: '💦', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "That night Zara drew every animal she had seen. She fell asleep over her sketchbook.", emoji: '😴', detailEmoji: '✏️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0F3460' },
    ],
  },
  {
    id: 38, title: 'The Hot Air Balloon Trip', category: 'adventure', coverEmoji: '🎈', accentColor: '#FF8F00', readTime: 3,
    keywords: ['balloon', 'high', 'float', 'wind', 'sky'],
    pages: [
      { text: "The big striped balloon filled with hot air and lifted off the ground — whoooosh!", emoji: '🎈', detailEmoji: '💨', scene: 'sky', topColor: '#87CEEB', bottomColor: '#E1F5FE' },
      { text: "Tom and his dad floated up past the rooftops, past the treetops, into the open blue.", emoji: '👦', detailEmoji: '🎈', scene: 'sky', topColor: '#4FC3F7', bottomColor: '#87CEEB' },
      { text: "Below, the fields looked like a patchwork quilt — green, brown, yellow, green.", emoji: '🌾', detailEmoji: '🌍', scene: 'sky', topColor: '#87CEEB', bottomColor: '#FFFDE7' },
      { text: "A bird flew right beside them and tilted its head, curious about these floating visitors.", emoji: '🐦', detailEmoji: '🎈', scene: 'sky', topColor: '#B3D9FF', bottomColor: '#E8F4FD' },
      { text: "They landed softly in a sunflower field. Tom looked up at the sky. 'Same time tomorrow?'", emoji: '😊', detailEmoji: '🌻', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
    ],
  },
  {
    id: 39, title: 'The Secret Garden Door', category: 'adventure', coverEmoji: '🚪', accentColor: '#43A047', readTime: 3,
    keywords: ['garden', 'secret', 'explore', 'flowers', 'discover'],
    pages: [
      { text: "In the old stone wall behind the school, Mia found a little wooden door she had never noticed.", emoji: '🚪', detailEmoji: '🔑', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "She pushed it open. Inside was a garden bursting with roses, lavender, and tall sunflowers.", emoji: '🌸', detailEmoji: '🌻', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "Butterflies floated between the flowers. Bees hummed a busy tune. Everything smelled wonderful.", emoji: '🦋', detailEmoji: '🐝', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "Mia sat on the little bench inside and felt like the whole noisy world had disappeared.", emoji: '👧', detailEmoji: '🌷', scene: 'meadow', topColor: '#FF9999', bottomColor: '#98FB98' },
      { text: "She came back every day after school. The garden was always waiting, quiet and beautiful.", emoji: '😊', detailEmoji: '🌙', scene: 'night', topColor: '#1B4332', bottomColor: '#0D2B1A' },
    ],
  },
  {
    id: 40, title: 'The Treehouse Explorer', category: 'adventure', coverEmoji: '🏠', accentColor: '#388E3C', readTime: 3,
    keywords: ['treehouse', 'climb', 'view', 'birds', 'build'],
    pages: [
      { text: "Dad and Leo spent all Saturday building a treehouse in the old oak tree.", emoji: '👨', detailEmoji: '🔨', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "Leo hammered in the last nail himself. The treehouse creaked, then stood perfectly still.", emoji: '👦', detailEmoji: '🪵', scene: 'forest', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "From the window, Leo could see three other gardens, a pond, and a family of ducks.", emoji: '👦', detailEmoji: '🦆', scene: 'sky', topColor: '#87CEEB', bottomColor: '#FFFDE7' },
      { text: "A robin landed on the railing and sang him a little song. Leo sang back, badly.", emoji: '🐦', detailEmoji: '🎵', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "Leo slept that night in the treehouse in a sleeping bag, under a million stars.", emoji: '😴', detailEmoji: '⭐', scene: 'night', topColor: '#0B1030', bottomColor: '#1A1A2E' },
    ],
  },

  // ── MORE FRIENDSHIP ───────────────────────────────────────────────────────
  {
    id: 41, title: 'Sharing the Sandbox', category: 'friendship', coverEmoji: '🏖️', accentColor: '#FFB300', readTime: 2,
    keywords: ['share', 'together', 'build', 'kind', 'play'],
    pages: [
      { text: "Otto had the whole sandbox to himself and was building a magnificent sand castle.", emoji: '👦', detailEmoji: '🏰', scene: 'sky', topColor: '#87CEEB', bottomColor: '#FFFDE7' },
      { text: "A girl named Priya sat down at the edge. 'May I play?' she asked quietly.", emoji: '👧', detailEmoji: '🪣', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "'Yes,' said Otto, and handed her a spade. Together they built towers, a moat, and a drawbridge.", emoji: '🤝', detailEmoji: '🏰', scene: 'sky', topColor: '#87CEEB', bottomColor: '#E1F5FE' },
      { text: "Their castle was twice as big as anything Otto had built alone.", emoji: '😊', detailEmoji: '⭐', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "'Same time tomorrow?' asked Priya. 'Definitely,' said Otto. 'We'll add a whole town!'", emoji: '🤝', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
    ],
  },
  {
    id: 42, title: 'The Birthday Surprise', category: 'friendship', coverEmoji: '🎂', accentColor: '#E91E63', readTime: 3,
    keywords: ['birthday', 'surprise', 'kind', 'celebrate', 'friend'],
    pages: [
      { text: "Lily noticed her friend Sam looked sad at school. Nobody had remembered his birthday.", emoji: '😢', detailEmoji: '🎂', scene: 'home', topColor: '#4A2040', bottomColor: '#6B2D5E' },
      { text: "At lunch, Lily ran to the teacher. 'Can we do something special for Sam?' she asked.", emoji: '👧', detailEmoji: '🎓', scene: 'home', topColor: '#1A237E', bottomColor: '#283593' },
      { text: "The whole class decorated the room with paper chains and drew birthday cards.", emoji: '🎨', detailEmoji: '💝', scene: 'home', topColor: '#BF360C', bottomColor: '#E64A19' },
      { text: "When Sam came back from the water fountain, everyone shouted 'SURPRISE!'", emoji: '🎉', detailEmoji: '😮', scene: 'home', topColor: '#FF8F00', bottomColor: '#FFB300' },
      { text: "Sam cried happy tears. It was the best birthday he had ever had — because of a friend.", emoji: '❤️', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#3B1F5E' },
    ],
  },
  {
    id: 43, title: 'The Brave Friend', category: 'friendship', coverEmoji: '💪', accentColor: '#7E57C2', readTime: 3,
    keywords: ['brave', 'scared', 'together', 'help', 'courage'],
    pages: [
      { text: "Noah was terrified of the dark hallway at school. He always ran past it.", emoji: '😰', detailEmoji: '🚪', scene: 'home', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "His friend Asha found out. 'I'll walk with you every day,' she said simply.", emoji: '👧', detailEmoji: '🤝', scene: 'sky', topColor: '#87CEEB', bottomColor: '#D4EDDA' },
      { text: "The first day, Noah held Asha's hand tight. The second day, he let go halfway.", emoji: '👦', detailEmoji: '💪', scene: 'home', topColor: '#1E1B4B', bottomColor: '#312E81' },
      { text: "By the end of the week, Noah walked the whole hallway alone — and waited for Asha.", emoji: '😊', detailEmoji: '⭐', scene: 'sky', topColor: '#87CEEB', bottomColor: '#B3E5FC' },
      { text: "'You didn't need me anymore,' laughed Asha. 'I still want you,' said Noah. That's friendship.", emoji: '❤️', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF7043', bottomColor: '#FFB74D' },
    ],
  },
  {
    id: 44, title: 'The Kind Words', category: 'friendship', coverEmoji: '💬', accentColor: '#64B5F6', readTime: 2,
    keywords: ['words', 'kind', 'hurt', 'sorry', 'smile'],
    pages: [
      { text: "Tom said something mean to his classmate about her drawing. He didn't really mean it.", emoji: '😞', detailEmoji: '🎨', scene: 'home', topColor: '#1E1B4B', bottomColor: '#312E81' },
      { text: "He watched her face fall and felt a heavy stone in his chest straight away.", emoji: '😟', detailEmoji: '💔', scene: 'home', topColor: '#4A2040', bottomColor: '#6B2D5E' },
      { text: "At break time he went over. 'I'm sorry. Your drawing is actually really beautiful.'", emoji: '👦', detailEmoji: '🌸', scene: 'sky', topColor: '#87CEEB', bottomColor: '#D4EDDA' },
      { text: "She smiled a small smile. The stone in Tom's chest lifted away.", emoji: '😊', detailEmoji: '💛', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "Words can hurt and words can heal. Tom chose carefully after that day.", emoji: '💬', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF7043', bottomColor: '#FFB74D' },
    ],
  },
  {
    id: 45, title: 'Friends Through All Seasons', category: 'friendship', coverEmoji: '🍂', accentColor: '#FF8F00', readTime: 3,
    keywords: ['seasons', 'always', 'loyal', 'change', 'friendship'],
    pages: [
      { text: "In spring, Mia and Jake flew kites in the meadow until their arms ached.", emoji: '🪁', detailEmoji: '🌸', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "In summer, they chased each other through the sprinkler until they collapsed laughing.", emoji: '💦', detailEmoji: '☀️', scene: 'sky', topColor: '#87CEEB', bottomColor: '#FFFDE7' },
      { text: "In autumn, they kicked piles of leaves and made up new games in the golden light.", emoji: '🍂', detailEmoji: '🌬️', scene: 'forest', topColor: '#BF360C', bottomColor: '#E64A19' },
      { text: "In winter, they built a snow family and gave them all funny carrot noses.", emoji: '⛄', detailEmoji: '❄️', scene: 'snow', topColor: '#90A4AE', bottomColor: '#B0BEC5' },
      { text: "Seasons change and years pass, but real friendship stays warm in every weather.", emoji: '❤️', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0F3460' },
    ],
  },

  // ── MORE NATURE ───────────────────────────────────────────────────────────
  {
    id: 46, title: 'Summer Fireflies', category: 'nature', coverEmoji: '✨', accentColor: '#FFF176', readTime: 3,
    keywords: ['firefly', 'glow', 'summer', 'night', 'magic'],
    pages: [
      { text: "On warm summer evenings, tiny lights began to appear in the long grass.", emoji: '✨', detailEmoji: '🌿', scene: 'forest', topColor: '#0D2B1A', bottomColor: '#1B4332' },
      { text: "Fireflies! Each one carried its own little lantern and blinked a secret code.", emoji: '✨', detailEmoji: '💚', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "Isla ran through the garden with her jar, trying to catch just one to look at closely.", emoji: '👧', detailEmoji: '🫙', scene: 'meadow', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "She caught one! It glowed soft green in her palms. Then she opened her hands and it flew free.", emoji: '✨', detailEmoji: '🕊️', scene: 'night', topColor: '#0D2B1A', bottomColor: '#1B4332' },
      { text: "All around her, the garden twinkled. Isla lay in the grass and watched until she fell asleep.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#0B1030', bottomColor: '#1A1A2E' },
    ],
  },
  {
    id: 47, title: 'The Old Oak Tree\'s Story', category: 'nature', coverEmoji: '🌳', accentColor: '#388E3C', readTime: 3,
    keywords: ['tree', 'old', 'roots', 'seasons', 'shelter'],
    pages: [
      { text: "The old oak tree at the edge of the field had been there for three hundred years.", emoji: '🌳', detailEmoji: '⏳', scene: 'meadow', topColor: '#558B2F', bottomColor: '#7CB342' },
      { text: "It had sheltered foxes, owls, and children from summer rain and winter snow alike.", emoji: '🌳', detailEmoji: '🦊', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "Its roots reached deep into the earth where water hid, keeping it strong through droughts.", emoji: '🌳', detailEmoji: '💧', scene: 'cave', topColor: '#3B2507', bottomColor: '#5C3D0E' },
      { text: "Birds built nests in its branches every spring and filled the air with song.", emoji: '🐦', detailEmoji: '🌸', scene: 'sky', topColor: '#87CEEB', bottomColor: '#FFFDE7' },
      { text: "The oak stood in the moonlight, slow and patient and very, very wise.", emoji: '🌳', detailEmoji: '🌙', scene: 'night', topColor: '#0D2B1A', bottomColor: '#1B4332' },
    ],
  },
  {
    id: 48, title: 'The Rainbow After Rain', category: 'nature', coverEmoji: '🌈', accentColor: '#E040FB', readTime: 3,
    keywords: ['rainbow', 'rain', 'colors', 'hope', 'sun'],
    pages: [
      { text: "It had rained all afternoon. Ben pressed his nose to the window and watched the drops race.", emoji: '👦', detailEmoji: '🌧️', scene: 'home', topColor: '#37474F', bottomColor: '#546E7A' },
      { text: "Then the rain stopped. The clouds parted and a patch of sunlight swept across the garden.", emoji: '☀️', detailEmoji: '☁️', scene: 'sky', topColor: '#87CEEB', bottomColor: '#E1F5FE' },
      { text: "Bent across the whole sky was the most perfect rainbow Ben had ever seen.", emoji: '🌈', detailEmoji: '✨', scene: 'sky', topColor: '#87CEEB', bottomColor: '#B3E5FC' },
      { text: "Red, orange, yellow, green, blue, indigo, violet. Ben counted all seven out loud.", emoji: '🌈', detailEmoji: '🎨', scene: 'sky', topColor: '#4FC3F7', bottomColor: '#87CEEB' },
      { text: "He remembered: after every storm, something beautiful is waiting to show itself.", emoji: '😊', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
    ],
  },
  {
    id: 49, title: 'The Autumn Leaves', category: 'nature', coverEmoji: '🍂', accentColor: '#FF8F00', readTime: 3,
    keywords: ['autumn', 'leaves', 'color', 'change', 'wind'],
    pages: [
      { text: "The trees were putting on their finest show — red, orange, gold, and bronze.", emoji: '🍂', detailEmoji: '🌳', scene: 'forest', topColor: '#BF360C', bottomColor: '#E64A19' },
      { text: "Every gust of wind sent leaves spinning like tiny dancers across the path.", emoji: '🍁', detailEmoji: '💨', scene: 'sky', topColor: '#FF8F00', bottomColor: '#FFB300' },
      { text: "Sophie scooped up a big armful and threw them in the air over her little brother.", emoji: '👧', detailEmoji: '😄', scene: 'meadow', topColor: '#FF8F00', bottomColor: '#FFB300' },
      { text: "He squealed and buried himself in the pile until only his boots were sticking out.", emoji: '👦', detailEmoji: '🍂', scene: 'forest', topColor: '#D84315', bottomColor: '#BF360C' },
      { text: "They walked home slowly, each carrying one perfect golden leaf to press in a book.", emoji: '🍁', detailEmoji: '🌙', scene: 'sunset', topColor: '#BF360C', bottomColor: '#D84315' },
    ],
  },
  {
    id: 50, title: 'The Beehive', category: 'nature', coverEmoji: '🐝', accentColor: '#F9A825', readTime: 3,
    keywords: ['bee', 'honey', 'work', 'together', 'flower'],
    pages: [
      { text: "Inside the old beehive in the apple tree, thousands of bees were very, very busy.", emoji: '🐝', detailEmoji: '🏡', scene: 'forest', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "Each bee knew exactly what to do. Some danced to show others where the flowers were.", emoji: '🐝', detailEmoji: '💃', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "Collector bees filled their leg baskets with orange pollen and flew straight home.", emoji: '🐝', detailEmoji: '🌼', scene: 'sky', topColor: '#87CEEB', bottomColor: '#FFFDE7' },
      { text: "Builder bees made perfect six-sided cells and filled them slowly with golden honey.", emoji: '🍯', detailEmoji: '✨', scene: 'cave', topColor: '#5C3D0E', bottomColor: '#795548' },
      { text: "As the sun set, the hive hummed one last low note — a whole city going to sleep.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#2C1810' },
    ],
  },

  // ── MORE FAMILY ───────────────────────────────────────────────────────────
  {
    id: 51, title: 'The Family Campfire', category: 'family', coverEmoji: '🔥', accentColor: '#FF8F00', readTime: 3,
    keywords: ['campfire', 'together', 'stars', 'stories', 'warm'],
    pages: [
      { text: "Dad piled up the wood and struck a match. The campfire crackled to life.", emoji: '👨', detailEmoji: '🔥', scene: 'forest', topColor: '#0D2B1A', bottomColor: '#1B4332' },
      { text: "The family sat in a circle — Mum, Dad, Grandpa, and little Eli — faces glowing orange.", emoji: '👨‍👩‍👦', detailEmoji: '🔥', scene: 'night', topColor: '#1A1A2E', bottomColor: '#2C1810' },
      { text: "Grandpa told a story about a bear who once walked into their old campsite. Everyone gasped!", emoji: '👴', detailEmoji: '🐻', scene: 'forest', topColor: '#0D2B1A', bottomColor: '#1B4332' },
      { text: "They toasted marshmallows on sticks. Eli's caught fire and turned into a tiny torch.", emoji: '🍡', detailEmoji: '🔥', scene: 'night', topColor: '#BF360C', bottomColor: '#D84315' },
      { text: "They lay on blankets and counted shooting stars until the fire was just soft embers.", emoji: '😴', detailEmoji: '⭐', scene: 'night', topColor: '#050714', bottomColor: '#0B1030' },
    ],
  },
  {
    id: 52, title: 'The Family Garden', category: 'family', coverEmoji: '🌱', accentColor: '#66BB6A', readTime: 3,
    keywords: ['garden', 'plant', 'water', 'grow', 'together'],
    pages: [
      { text: "Every spring, the whole family went into the garden with seeds, gloves, and big boots.", emoji: '👨‍👩‍👧', detailEmoji: '🌱', scene: 'meadow', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "Mum dug the rows. Dad dropped in the seeds. Nadia covered them with soft earth.", emoji: '👩', detailEmoji: '🌰', scene: 'meadow', topColor: '#558B2F', bottomColor: '#7CB342' },
      { text: "Every morning Nadia ran out to check. For two weeks nothing happened. Then — a tiny green loop!", emoji: '👧', detailEmoji: '🌿', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "By midsummer the garden was bursting with tomatoes, beans, and enormous courgettes.", emoji: '🍅', detailEmoji: '🌻', scene: 'meadow', topColor: '#FFD700', bottomColor: '#90EE90' },
      { text: "They ate dinner made entirely from their own garden. It tasted like sunshine.", emoji: '😋', detailEmoji: '🌙', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
    ],
  },
  {
    id: 53, title: 'Grandpa\'s Amazing Old Stories', category: 'family', coverEmoji: '📖', accentColor: '#A1887F', readTime: 3,
    keywords: ['grandpa', 'stories', 'past', 'listen', 'love'],
    pages: [
      { text: "Every Sunday, Grandpa sat in his big armchair and Lily climbed up beside him.", emoji: '👴', detailEmoji: '📖', scene: 'home', topColor: '#4E342E', bottomColor: '#6D4C41' },
      { text: "'Tell me the one about the boat,' Lily always said. Grandpa's eyes would light up.", emoji: '⛵', detailEmoji: '🌊', scene: 'ocean', topColor: '#01579B', bottomColor: '#0277BD' },
      { text: "He told her about crossing the sea as a young man with nothing but a bag and a dream.", emoji: '👴', detailEmoji: '🌍', scene: 'ocean', topColor: '#0277BD', bottomColor: '#0288D1' },
      { text: "Lily always asked the same questions and Grandpa always answered as if for the first time.", emoji: '👧', detailEmoji: '❤️', scene: 'home', topColor: '#5D4037', bottomColor: '#795548' },
      { text: "When Grandpa finished, they sat quietly together, warm and full of each other's company.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#2C1810' },
    ],
  },

  // ── MORE LIFESTYLE ────────────────────────────────────────────────────────
  {
    id: 54, title: 'Using My Inside Voice', category: 'lifestyle', coverEmoji: '🤫', accentColor: '#00ACC1', readTime: 2,
    keywords: ['quiet', 'inside', 'voice', 'listen', 'calm'],
    pages: [
      { text: "At the library, Finn was very excited about the dinosaur book and started to SHOUT.", emoji: '👦', detailEmoji: '📚', scene: 'home', topColor: '#006064', bottomColor: '#00838F' },
      { text: "The librarian pressed a gentle finger to her lips. 'Inside voices, please,' she whispered.", emoji: '👩', detailEmoji: '🤫', scene: 'home', topColor: '#004D40', bottomColor: '#00695C' },
      { text: "Finn tried again — softer this time. His voice came out small and clear and nice.", emoji: '👦', detailEmoji: '🦕', scene: 'home', topColor: '#006064', bottomColor: '#0097A7' },
      { text: "He found he could still say everything he wanted — just quietly and carefully.", emoji: '😊', detailEmoji: '📖', scene: 'home', topColor: '#00695C', bottomColor: '#00838F' },
      { text: "On the way home, Finn used his inside voice in the garden. Birds tilted their heads to listen.", emoji: '🐦', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#004D40' },
    ],
  },
  {
    id: 55, title: 'Saying Please and Thank You', category: 'lifestyle', coverEmoji: '😊', accentColor: '#00ACC1', readTime: 2,
    keywords: ['please', 'thank you', 'manners', 'kind', 'polite'],
    pages: [
      { text: "Mia wanted the last biscuit. She reached out to grab it — then she stopped.", emoji: '👧', detailEmoji: '🍪', scene: 'home', topColor: '#78350F', bottomColor: '#92400E' },
      { text: "'May I please have the biscuit?' she asked. Mum smiled the warmest smile.", emoji: '👩', detailEmoji: '😊', scene: 'home', topColor: '#92400E', bottomColor: '#B45309' },
      { text: "Mum handed it over. Mia said, 'Thank you very much!' and it tasted extra good.", emoji: '😋', detailEmoji: '🍪', scene: 'home', topColor: '#78350F', bottomColor: '#A16207' },
      { text: "That day Mia said please and thank you to her teacher, the bus driver, and her friend.", emoji: '👧', detailEmoji: '💛', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "Every person smiled back. Magic words, Mia decided, were the best kind of magic.", emoji: '✨', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#004D40' },
    ],
  },
  {
    id: 56, title: 'Looking Both Ways', category: 'lifestyle', coverEmoji: '🚦', accentColor: '#00ACC1', readTime: 2,
    keywords: ['road', 'safe', 'look', 'stop', 'cross'],
    pages: [
      { text: "Jake and Mum reached the crossing. 'What do we do first?' asked Mum.", emoji: '👦', detailEmoji: '🚦', scene: 'sky', topColor: '#37474F', bottomColor: '#546E7A' },
      { text: "'Stop at the kerb!' said Jake. He stood with his toes just at the edge.", emoji: '👦', detailEmoji: '🛑', scene: 'meadow', topColor: '#BF360C', bottomColor: '#E64A19' },
      { text: "'Look left, look right, look left again.' Jake's head swivelled like an owl's.", emoji: '👀', detailEmoji: '🚗', scene: 'sky', topColor: '#87CEEB', bottomColor: '#B3E5FC' },
      { text: "No cars coming! 'Walk — don't run!' Jake walked across, tall and proud.", emoji: '👦', detailEmoji: '✅', scene: 'meadow', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "'You remembered every step,' said Mum. Jake puffed up his chest all the way home.", emoji: '😊', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
    ],
  },
  {
    id: 57, title: 'Drinking Enough Water', category: 'lifestyle', coverEmoji: '💧', accentColor: '#00ACC1', readTime: 2,
    keywords: ['water', 'healthy', 'thirst', 'drink', 'body'],
    pages: [
      { text: "After running around the playground, Zoe's mouth felt like dry sand.", emoji: '👧', detailEmoji: '🏃', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
      { text: "She picked up her water bottle — it was still almost full. She had forgotten to drink!", emoji: '💧', detailEmoji: '🧴', scene: 'sky', topColor: '#4FC3F7', bottomColor: '#87CEEB' },
      { text: "Zoe drank big, cool gulps. With every sip she felt more awake and more herself.", emoji: '😋', detailEmoji: '💧', scene: 'sky', topColor: '#87CEEB', bottomColor: '#B3E5FC' },
      { text: "Her teacher said, 'Our bodies are made of mostly water — we must keep topping up!'", emoji: '👩‍🏫', detailEmoji: '🫁', scene: 'home', topColor: '#1565C0', bottomColor: '#1976D2' },
      { text: "Zoe finished her whole bottle. That night she slept deeply and woke up full of energy.", emoji: '😴', detailEmoji: '🌙', scene: 'night', topColor: '#0C4A6E', bottomColor: '#1E40AF' },
    ],
  },
  {
    id: 58, title: 'Eating My Vegetables', category: 'lifestyle', coverEmoji: '🥦', accentColor: '#00ACC1', readTime: 2,
    keywords: ['vegetables', 'healthy', 'strong', 'try', 'yummy'],
    pages: [
      { text: "On Tom's plate were green beans and broccoli. He crossed his arms. 'I don't like those.'", emoji: '👦', detailEmoji: '🥦', scene: 'home', topColor: '#1B5E20', bottomColor: '#2E7D32' },
      { text: "'Have you tried them?' asked Dad. Tom thought. Actually — he never had.", emoji: '👨', detailEmoji: '🤔', scene: 'home', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "He took the smallest bite of broccoli. It was crunchy. A little like a tiny tree!", emoji: '🌳', detailEmoji: '😲', scene: 'meadow', topColor: '#2E7D32', bottomColor: '#388E3C' },
      { text: "'Vegetables help you grow tall and strong,' said Dad. Tom ate two more florets.", emoji: '💪', detailEmoji: '🥦', scene: 'home', topColor: '#1B5E20', bottomColor: '#2E7D32' },
      { text: "He didn't love them yet — but he finished them. That was a very good start.", emoji: '😊', detailEmoji: '🌟', scene: 'sunset', topColor: '#388E3C', bottomColor: '#558B2F' },
    ],
  },
  {
    id: 59, title: 'My Morning Routine', category: 'lifestyle', coverEmoji: '🌅', accentColor: '#00ACC1', readTime: 2,
    keywords: ['morning', 'routine', 'ready', 'tidy', 'organised'],
    pages: [
      { text: "Every morning, Lily had a plan. Wake up, stretch, then feet on the floor.", emoji: '👧', detailEmoji: '☀️', scene: 'sky', topColor: '#FF8F00', bottomColor: '#FFB300' },
      { text: "She made her bed neatly — pillow straight, blanket smooth. Ready for the day!", emoji: '🛏️', detailEmoji: '✅', scene: 'home', topColor: '#1E1B4B', bottomColor: '#312E81' },
      { text: "Teeth brushed, face washed, clothes on. She checked the mirror: yes, she was ready.", emoji: '👧', detailEmoji: '🪥', scene: 'home', topColor: '#006064', bottomColor: '#00838F' },
      { text: "Downstairs, breakfast was waiting. She ate slowly and thought about the day ahead.", emoji: '🥣', detailEmoji: '🍌', scene: 'home', topColor: '#FF8F00', bottomColor: '#FFB300' },
      { text: "A good morning makes a good day. Lily walked out the door feeling bright and ready.", emoji: '😊', detailEmoji: '🌟', scene: 'meadow', topColor: '#87CEEB', bottomColor: '#90EE90' },
    ],
  },
  {
    id: 60, title: 'Putting Away My Plate', category: 'lifestyle', coverEmoji: '🍽️', accentColor: '#00ACC1', readTime: 2,
    keywords: ['help', 'tidy', 'plate', 'family', 'clean'],
    pages: [
      { text: "Dinner was delicious. When Ben finished, he sat back and waited.", emoji: '👦', detailEmoji: '🍽️', scene: 'home', topColor: '#4E342E', bottomColor: '#6D4C41' },
      { text: "Mum was still clearing. Dad was washing. No one had asked him — but he noticed.", emoji: '👦', detailEmoji: '👀', scene: 'home', topColor: '#5D4037', bottomColor: '#795548' },
      { text: "Ben picked up his plate, took it to the sink, and rinsed it carefully.", emoji: '🍽️', detailEmoji: '💧', scene: 'home', topColor: '#006064', bottomColor: '#00838F' },
      { text: "'Thank you, Ben!' said Mum, looking genuinely surprised and pleased.", emoji: '👩', detailEmoji: '💛', scene: 'home', topColor: '#92400E', bottomColor: '#B45309' },
      { text: "Ben felt warm inside. Helping without being asked was its own special kind of magic.", emoji: '😊', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8F00', bottomColor: '#FFB300' },
    ],
  },

  // ── ANIMALS 61-75 ────────────────────────────────────────────────────────
  {
    id: 61, title: "Sammy the Snail's Slow Adventure", category: 'animals', coverEmoji: '🐌', accentColor: '#8BC34A', readTime: 3,
    keywords: ['slow', 'patience', 'arrive', 'journey', 'proud'],
    pages: [
      { text: "Sammy the snail moved very, very slowly — but he never, ever stopped.", emoji: '🐌', detailEmoji: '🌿', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "One day Sammy decided to climb all the way to the top of the garden wall.", emoji: '🐌', detailEmoji: '🧱', scene: 'meadow', topColor: '#74C69D', bottomColor: '#95D5B2' },
      { text: "The butterflies flew past. The beetles scurried past. But Sammy kept going.", emoji: '🐌', detailEmoji: '🦋', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Step by tiny step, Sammy reached the very top just as the sun set.", emoji: '🐌', detailEmoji: '🌅', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "'Slow and steady wins the race,' Sammy smiled. He could see the whole garden below!", emoji: '🐌', detailEmoji: '🌻', scene: 'sunset', topColor: '#FF6B35', bottomColor: '#FF9F1C' },
    ],
  },
  {
    id: 62, title: "Tommy the Tiger's Stripes", category: 'animals', coverEmoji: '🐯', accentColor: '#FF8F00', readTime: 3,
    keywords: ['unique', 'stripes', 'proud', 'different', 'beautiful'],
    pages: [
      { text: "Tommy the tiger cub looked at his stripes in the pond and frowned.", emoji: '🐯', detailEmoji: '💧', scene: 'forest', topColor: '#1B4332', bottomColor: '#40916C' },
      { text: "'Why do I have so many lines?' he asked Mama Tiger.", emoji: '🐯', detailEmoji: '🌿', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "Mama smiled. 'Every stripe tells a story. You are one of a kind, my love.'", emoji: '🐯', detailEmoji: '💛', scene: 'meadow', topColor: '#F4A261', bottomColor: '#E9C46A' },
      { text: "Tommy looked again at his reflection. His stripes looked like sunshine on water!", emoji: '🐯', detailEmoji: '☀️', scene: 'sunset', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
      { text: "From that day on, Tommy was the proudest, stripiest tiger in the whole forest.", emoji: '🐯', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 63, title: "Milo the Mouse's Big Cheese", category: 'animals', coverEmoji: '🐭', accentColor: '#F4A261', readTime: 3,
    keywords: ['share', 'cheese', 'generous', 'friend', 'enough'],
    pages: [
      { text: "Milo the mouse found a giant golden piece of cheese in the meadow.", emoji: '🐭', detailEmoji: '🧀', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "It was bigger than his whole house! He could not even roll it by himself.", emoji: '🐭', detailEmoji: '🏠', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "He called his friend Benny the bunny. Together they rolled and rolled.", emoji: '🐭', detailEmoji: '🐰', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#52B788' },
      { text: "At home, Milo cut the cheese in half. 'One piece for you, one for me!'", emoji: '🐭', detailEmoji: '🧀', scene: 'home', topColor: '#78290F', bottomColor: '#C44B4B' },
      { text: "Sharing made the cheese taste twice as delicious. That was Milo's secret.", emoji: '🐭', detailEmoji: '❤️', scene: 'home', topColor: '#6D2B3D', bottomColor: '#B5446E' },
    ],
  },
  {
    id: 64, title: "Rosie the Robin's First Song", category: 'animals', coverEmoji: '🐦', accentColor: '#FF6B6B', readTime: 3,
    keywords: ['sing', 'brave', 'practice', 'voice', 'morning'],
    pages: [
      { text: "Rosie the little robin had never sung her morning song out loud before.", emoji: '🐦', detailEmoji: '🌸', scene: 'meadow', topColor: '#FFB7C5', bottomColor: '#FF8FAB' },
      { text: "What if it wasn't beautiful enough? What if the other birds laughed?", emoji: '🐦', detailEmoji: '🍃', scene: 'sky', topColor: '#ADE8F4', bottomColor: '#90E0EF' },
      { text: "She took a deep breath, opened her beak — and out came the most gorgeous trill!", emoji: '🐦', detailEmoji: '🎵', scene: 'sky', topColor: '#48CAE4', bottomColor: '#90E0EF' },
      { text: "The whole forest went quiet. Then it burst into cheerful birdsong in reply!", emoji: '🐦', detailEmoji: '🌳', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "Every morning after that, Rosie sang first — the bravest bird in all the forest.", emoji: '🐦', detailEmoji: '☀️', scene: 'sunset', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
    ],
  },
  {
    id: 65, title: "Harvey the Hedgehog", category: 'animals', coverEmoji: '🦔', accentColor: '#A0856C', readTime: 3,
    keywords: ['spiky', 'gentle', 'hug', 'careful', 'kind'],
    pages: [
      { text: "Harvey the hedgehog wanted to hug his friends, but his spines were very prickly.", emoji: '🦔', detailEmoji: '😢', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "'I am too spiky,' he sighed, sitting alone beneath a mushroom.", emoji: '🦔', detailEmoji: '🍄', scene: 'forest', topColor: '#1B4332', bottomColor: '#40916C' },
      { text: "His friend Mia the mouse came and sat beside him very gently.", emoji: '🦔', detailEmoji: '🐭', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "'You don't need to hug tight,' she said. 'A gentle tap is enough when it comes from the heart.'", emoji: '🦔', detailEmoji: '💕', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#52B788' },
      { text: "Harvey gave Mia the softest little nudge. It felt like the warmest hug in the world.", emoji: '🦔', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 66, title: "Pippa the Parrot Learns to Listen", category: 'animals', coverEmoji: '🦜', accentColor: '#4CAF50', readTime: 3,
    keywords: ['listen', 'repeat', 'understand', 'quiet', 'learn'],
    pages: [
      { text: "Pippa the parrot loved to talk! She repeated everything she heard all day long.", emoji: '🦜', detailEmoji: '🎵', scene: 'sky', topColor: '#1A6B1A', bottomColor: '#2E8B57' },
      { text: "'Biscuit! Biscuit! Pretty bird! Hello!' she squawked from morning to night.", emoji: '🦜', detailEmoji: '🍪', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "But one day a little girl told Pippa a secret — and Pippa listened perfectly.", emoji: '🦜', detailEmoji: '🤫', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "She kept the secret all day. Not one word! The little girl was amazed.", emoji: '🦜', detailEmoji: '💛', scene: 'sunset', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
      { text: "'Good listening is even better than talking,' Pippa decided as she fell asleep.", emoji: '🦜', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 67, title: "Sandy the Seahorse", category: 'animals', coverEmoji: '🦄', accentColor: '#E91E63', readTime: 3,
    keywords: ['ocean', 'tiny', 'drift', 'coral', 'beautiful'],
    pages: [
      { text: "Sandy the tiny seahorse drifted through the warm blue ocean, holding a piece of coral.", emoji: '🐠', detailEmoji: '🪸', scene: 'ocean', topColor: '#0077B6', bottomColor: '#00B4D8' },
      { text: "She was the slowest swimmer in the sea — but she was also the most graceful.", emoji: '🐠', detailEmoji: '🌊', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "The big fish zoomed past. The crabs scuttled by. Sandy just drifted along.", emoji: '🐠', detailEmoji: '🦀', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "She found a quiet corner of reef and wrapped her tail around a branch of pink coral.", emoji: '🐠', detailEmoji: '🪸', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "There, swaying gently with the current, Sandy felt completely at home.", emoji: '🐠', detailEmoji: '💤', scene: 'night', topColor: '#03045E', bottomColor: '#023E8A' },
    ],
  },
  {
    id: 68, title: "Cleo the Clever Crow", category: 'animals', coverEmoji: '🐦‍⬛', accentColor: '#607D8B', readTime: 3,
    keywords: ['clever', 'problem', 'solve', 'water', 'pebbles'],
    pages: [
      { text: "Cleo the crow was very thirsty. She found a tall jar with a little water at the bottom.", emoji: '🐦', detailEmoji: '🫙', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Her beak could not reach the water, no matter how hard she tried.", emoji: '🐦', detailEmoji: '💧', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Cleo thought for a moment. Then she picked up a small pebble — plop!", emoji: '🐦', detailEmoji: '🪨', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "She dropped pebble after pebble until the water rose higher and higher.", emoji: '🐦', detailEmoji: '🪨', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Sip! The water reached her beak. Being clever was even better than being fast.", emoji: '🐦', detailEmoji: '💧', scene: 'sunset', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
    ],
  },
  {
    id: 69, title: "Peter the Panda's Bamboo Day", category: 'animals', coverEmoji: '🐼', accentColor: '#78909C', readTime: 3,
    keywords: ['bamboo', 'peaceful', 'calm', 'enjoy', 'content'],
    pages: [
      { text: "Peter the panda had one plan for today: find the most delicious bamboo in the forest.", emoji: '🐼', detailEmoji: '🎋', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "He waddled slowly through the misty morning forest, sniffing the fresh cool air.", emoji: '🐼', detailEmoji: '🌫️', scene: 'forest', topColor: '#1B4332', bottomColor: '#40916C' },
      { text: "He found a tall green stalk of bamboo and sat right down to munch.", emoji: '🐼', detailEmoji: '🎋', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "Munch, munch, munch! It was the best bamboo he had ever tasted.", emoji: '🐼', detailEmoji: '😋', scene: 'forest', topColor: '#40916C', bottomColor: '#74C69D' },
      { text: "Sometimes a happy day is just a quiet day doing exactly what you love.", emoji: '🐼', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 70, title: "Zara the Zebra's Lines", category: 'animals', coverEmoji: '🦓', accentColor: '#424242', readTime: 3,
    keywords: ['stripes', 'family', 'belong', 'together', 'herd'],
    pages: [
      { text: "Zara the zebra foal was born with the brightest, boldest stripes in all the savannah.", emoji: '🦓', detailEmoji: '🌅', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "She ran to keep up with her family — a whole thundering herd of zebras!", emoji: '🦓', detailEmoji: '🌾', scene: 'meadow', topColor: '#D4A373', bottomColor: '#CCD5AE' },
      { text: "When lions appeared, the zebras moved close together. Stripes mixed with stripes.", emoji: '🦓', detailEmoji: '🦁', scene: 'meadow', topColor: '#C9A84C', bottomColor: '#E9C46A' },
      { text: "The lions could not tell where one zebra ended and another began. They gave up!", emoji: '🦓', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
      { text: "Together we are stronger, thought Zara, pressed warmly against her mama.", emoji: '🦓', detailEmoji: '❤️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 71, title: "Nora the Nightingale", category: 'animals', coverEmoji: '🎵', accentColor: '#7986CB', readTime: 3,
    keywords: ['song', 'night', 'comfort', 'beauty', 'gift'],
    pages: [
      { text: "When the sun went down and the stars came out, Nora the nightingale began to sing.", emoji: '🐦', detailEmoji: '⭐', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Her song floated through open windows and into sleepy children's rooms.", emoji: '🐦', detailEmoji: '🌙', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "A sick boy heard her song and felt a little less sad. A scared girl felt safe.", emoji: '🐦', detailEmoji: '💫', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0D1B2A' },
      { text: "Nora never knew who was listening, but she sang her heart out every night.", emoji: '🐦', detailEmoji: '🎵', scene: 'night', topColor: '#1B2838', bottomColor: '#0D1B2A' },
      { text: "A gift shared in the dark is one of the most beautiful gifts of all.", emoji: '🐦', detailEmoji: '✨', scene: 'night', topColor: '#0A0A1E', bottomColor: '#1A1A2E' },
    ],
  },
  {
    id: 72, title: "Bella the Baby Elephant", category: 'animals', coverEmoji: '🐘', accentColor: '#90A4AE', readTime: 3,
    keywords: ['trunk', 'spray', 'bathe', 'cool', 'play'],
    pages: [
      { text: "Bella the baby elephant discovered something wonderful: her trunk could spray water!", emoji: '🐘', detailEmoji: '💧', scene: 'meadow', topColor: '#ADE8F4', bottomColor: '#90E0EF' },
      { text: "She sprayed herself — whoooosh! She sprayed a bird — tweet! She sprayed Mama — oops!", emoji: '🐘', detailEmoji: '🐦', scene: 'meadow', topColor: '#48CAE4', bottomColor: '#ADE8F4' },
      { text: "Mama laughed and sprayed Bella back. They had the biggest water fight in the whole savannah.", emoji: '🐘', detailEmoji: '🌊', scene: 'meadow', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "Then they walked to the mud pool and rolled around happily in the cool brown mud.", emoji: '🐘', detailEmoji: '🌿', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Clean or muddy, Bella knew one thing — playing with Mama was the best game of all.", emoji: '🐘', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 73, title: "Bobby the Bear Cub", category: 'animals', coverEmoji: '🐻', accentColor: '#8D6E63', readTime: 3,
    keywords: ['honey', 'bees', 'patient', 'sweet', 'wait'],
    pages: [
      { text: "Bobby the bear cub smelled something sweet coming from high up in an old oak tree.", emoji: '🐻', detailEmoji: '🌳', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "Honey! But the bees were buzzing loudly around their hive.", emoji: '🐻', detailEmoji: '🐝', scene: 'forest', topColor: '#1B4332', bottomColor: '#40916C' },
      { text: "Bobby waited very still, the way Papa had taught him. One minute. Two minutes. Three.", emoji: '🐻', detailEmoji: '⏳', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "The bees drifted away to gather more pollen. Bobby reached up very gently.", emoji: '🐻', detailEmoji: '🍯', scene: 'forest', topColor: '#40916C', bottomColor: '#74C69D' },
      { text: "Mmm! The sweetest honey he had ever tasted — made even sweeter by patience.", emoji: '🐻', detailEmoji: '🍯', scene: 'sunset', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
    ],
  },
  {
    id: 74, title: "Wally the Walrus", category: 'animals', coverEmoji: '🦭', accentColor: '#607D8B', readTime: 3,
    keywords: ['ice', 'warm', 'blubber', 'friends', 'huddle'],
    pages: [
      { text: "Wally the walrus lived on a big floating island of ice in the cold, cold Arctic.", emoji: '🦭', detailEmoji: '🧊', scene: 'snow', topColor: '#CAF0F8', bottomColor: '#ADE8F4' },
      { text: "When the wind blew extra cold, Wally pressed close to his friends to keep warm.", emoji: '🦭', detailEmoji: '❄️', scene: 'snow', topColor: '#90E0EF', bottomColor: '#CAF0F8' },
      { text: "They piled together in one big, whiskery, wriggly, wonderful walrus heap!", emoji: '🦭', detailEmoji: '🌨️', scene: 'snow', topColor: '#ADE8F4', bottomColor: '#90E0EF' },
      { text: "Wally laughed his big walrus laugh. Being together made even the coldest day cozy.", emoji: '🦭', detailEmoji: '😄', scene: 'snow', topColor: '#CAF0F8', bottomColor: '#ADE8F4' },
      { text: "He tucked his flippers around his friends and closed his eyes. Safe and warm.", emoji: '🦭', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 75, title: "Dotty the Dalmatian", category: 'animals', coverEmoji: '🐕', accentColor: '#607D8B', readTime: 3,
    keywords: ['spots', 'different', 'proud', 'unique', 'belong'],
    pages: [
      { text: "Dotty the dalmatian puppy was born covered in black spots — one hundred and one of them!", emoji: '🐕', detailEmoji: '⚫', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "The other dogs had plain coats — brown, or golden, or one solid colour.", emoji: '🐕', detailEmoji: '🐶', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#95D5B2' },
      { text: "Dotty worried her spots were too many, too bold, too noticeable.", emoji: '🐕', detailEmoji: '😟', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "But at the park, every child rushed to pet Dotty first. 'Oh, look at those spots!'", emoji: '🐕', detailEmoji: '👧', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Being noticed and being loved — Dotty decided that was the very best thing.", emoji: '🐕', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
    ],
  },

  // ── FANTASY 76-90 ────────────────────────────────────────────────────────
  {
    id: 76, title: 'The Magic Paintbrush', category: 'fantasy', coverEmoji: '🎨', accentColor: '#E040FB', readTime: 3,
    keywords: ['magic', 'paint', 'wish', 'create', 'kindness'],
    pages: [
      { text: "Lily found a golden paintbrush under an old stone. Whatever she painted came to life!", emoji: '🎨', detailEmoji: '✨', scene: 'meadow', topColor: '#CE93D8', bottomColor: '#BA68C8' },
      { text: "She painted a butterfly — and it fluttered away into the blue sky!", emoji: '🎨', detailEmoji: '🦋', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "She painted bread for a hungry sparrow. She painted an umbrella for a wet frog.", emoji: '🎨', detailEmoji: '🐸', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "A greedy king heard about the brush and wanted gold. Lily painted him vegetables instead!", emoji: '🎨', detailEmoji: '👑', scene: 'sky', topColor: '#FFD700', bottomColor: '#FFA000' },
      { text: "Magic used for kindness grows stronger every day. Lily painted until the stars came out.", emoji: '🎨', detailEmoji: '⭐', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 77, title: "The Tiny Fairy's Garden", category: 'fantasy', coverEmoji: '🧚', accentColor: '#66BB6A', readTime: 3,
    keywords: ['fairy', 'garden', 'tiny', 'grow', 'tend'],
    pages: [
      { text: "Fern the fairy was so tiny she could sleep inside a tulip blossom.", emoji: '🧚', detailEmoji: '🌷', scene: 'meadow', topColor: '#F48FB1', bottomColor: '#F06292' },
      { text: "Her garden was a patch of soil no bigger than a dinner plate — but she loved it.", emoji: '🧚', detailEmoji: '🌱', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Every morning she watered each tiny seed with one drop of morning dew.", emoji: '🧚', detailEmoji: '💧', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "By summer, her garden burst with flowers taller than she was — roses, lavender, bluebells!", emoji: '🧚', detailEmoji: '🌸', scene: 'meadow', topColor: '#F8BBD9', bottomColor: '#F48FB1' },
      { text: "Big things can grow from the smallest care and the tiniest hands.", emoji: '🧚', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 78, title: 'The Friendly Giant', category: 'fantasy', coverEmoji: '🏔️', accentColor: '#78909C', readTime: 3,
    keywords: ['giant', 'gentle', 'afraid', 'kind', 'misunderstood'],
    pages: [
      { text: "Everyone was afraid of the giant who lived behind the mountain — but no one had met him.", emoji: '🏔️', detailEmoji: '⛰️', scene: 'cave', topColor: '#546E7A', bottomColor: '#78909C' },
      { text: "One brave little girl named Pip decided to bring him a blackberry pie.", emoji: '🧒', detailEmoji: '🫐', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "The giant opened his door. He was enormous — with the kindest, saddest eyes Pip had ever seen.", emoji: '🧒', detailEmoji: '🏠', scene: 'cave', topColor: '#455A64', bottomColor: '#607D8B' },
      { text: "'No one ever visits,' he said in a voice like rumbling thunder, and tears rolled down his cheeks.", emoji: '🧒', detailEmoji: '😢', scene: 'cave', topColor: '#37474F', bottomColor: '#455A64' },
      { text: "They shared the pie together, and from that day on, the giant had a tiny best friend.", emoji: '🧒', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 79, title: 'The Wish Jar', category: 'fantasy', coverEmoji: '🫙', accentColor: '#9575CD', readTime: 3,
    keywords: ['wish', 'careful', 'think', 'choose', 'grateful'],
    pages: [
      { text: "Finn found a glowing glass jar on his window sill with a note: 'Three wishes inside.'", emoji: '🫙', detailEmoji: '✨', scene: 'home', topColor: '#7E57C2', bottomColor: '#9575CD' },
      { text: "He wished for a mountain of chocolate. It appeared and blocked the front door!", emoji: '🫙', detailEmoji: '🍫', scene: 'home', topColor: '#5D4037', bottomColor: '#795548' },
      { text: "He used his second wish to remove the chocolate. Now only one wish remained.", emoji: '🫙', detailEmoji: '😬', scene: 'home', topColor: '#6D4C41', bottomColor: '#795548' },
      { text: "Finn sat quietly for a long, long time. Then he wished that everyone he loved was happy.", emoji: '🫙', detailEmoji: '❤️', scene: 'home', topColor: '#4A148C', bottomColor: '#6A1B9A' },
      { text: "Outside, he heard laughing and singing. The best wish was always the one for others.", emoji: '🫙', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 80, title: 'The Cloud Castle', category: 'fantasy', coverEmoji: '☁️', accentColor: '#90CAF9', readTime: 3,
    keywords: ['cloud', 'castle', 'float', 'dream', 'wonder'],
    pages: [
      { text: "High above the mountains there was a castle made entirely of soft white clouds.", emoji: '☁️', detailEmoji: '🏰', scene: 'sky', topColor: '#BBDEFB', bottomColor: '#90CAF9' },
      { text: "Only children who could imagine very hard could find the staircase of clouds.", emoji: '☁️', detailEmoji: '✨', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "Rosa closed her eyes and imagined as hard as she could — and a fluffy stair appeared!", emoji: '🧒', detailEmoji: '☁️', scene: 'sky', topColor: '#64B5F6', bottomColor: '#42A5F5' },
      { text: "Inside the cloud castle were rooms filled with rainbows, slides of mist, and star pools.", emoji: '🧒', detailEmoji: '🌈', scene: 'sky', topColor: '#42A5F5', bottomColor: '#1E88E5' },
      { text: "Rosa played until the sun turned pink. Then she slid down a sunbeam all the way home.", emoji: '🧒', detailEmoji: '🌅', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 81, title: 'The Magic Shoes', category: 'fantasy', coverEmoji: '👟', accentColor: '#EF5350', readTime: 3,
    keywords: ['shoes', 'dance', 'anywhere', 'home', 'journey'],
    pages: [
      { text: "The old cobbler gave Theo a pair of bright red shoes that could take him anywhere.", emoji: '👟', detailEmoji: '✨', scene: 'home', topColor: '#B71C1C', bottomColor: '#C62828' },
      { text: "He stamped his foot twice — and found himself in a snowy forest full of reindeer!", emoji: '👟', detailEmoji: '🦌', scene: 'snow', topColor: '#B0BEC5', bottomColor: '#CFD8DC' },
      { text: "He stamped again — the hot orange desert with swirling sand and a bright red sun.", emoji: '👟', detailEmoji: '☀️', scene: 'sunset', topColor: '#FF8C00', bottomColor: '#FF6F00' },
      { text: "He visited a coral ocean floor, a purple mountain top, and a forest of glowing mushrooms.", emoji: '👟', detailEmoji: '🍄', scene: 'cave', topColor: '#4A148C', bottomColor: '#6A1B9A' },
      { text: "But the best stamp of all was the one that brought him home to his own warm bed.", emoji: '👟', detailEmoji: '🏠', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 82, title: 'The Dragon Who Sneezed Flowers', category: 'fantasy', coverEmoji: '🐉', accentColor: '#66BB6A', readTime: 3,
    keywords: ['dragon', 'sneeze', 'flower', 'special', 'gift'],
    pages: [
      { text: "Ember was a small green dragon — and every time she sneezed, flowers shot out of her nose.", emoji: '🐉', detailEmoji: '🌸', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Achoo! A burst of daisies. Achoo! A bouquet of roses. Achoo! A shower of lavender!", emoji: '🐉', detailEmoji: '🌹', scene: 'meadow', topColor: '#F48FB1', bottomColor: '#F06292' },
      { text: "The other dragons breathed fire. Ember wished she could too. She felt left out.", emoji: '🐉', detailEmoji: '😢', scene: 'cave', topColor: '#455A64', bottomColor: '#607D8B' },
      { text: "But on the queen's birthday, when all the other dragons were too shy to perform — Ember sneezed!", emoji: '🐉', detailEmoji: '👑', scene: 'sky', topColor: '#FFD700', bottomColor: '#FFA000' },
      { text: "The whole courtyard filled with flowers. The queen laughed with delight. Ember glowed with pride.", emoji: '🐉', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 83, title: 'Princess Pearl and the Storm', category: 'fantasy', coverEmoji: '👸', accentColor: '#F48FB1', readTime: 3,
    keywords: ['brave', 'storm', 'princess', 'help', 'courage'],
    pages: [
      { text: "A great storm came to the kingdom, and everyone was frightened — even the grown-ups.", emoji: '👸', detailEmoji: '⛈️', scene: 'night', topColor: '#263238', bottomColor: '#37474F' },
      { text: "Princess Pearl was small but she was not afraid. She walked out into the rain.", emoji: '👸', detailEmoji: '🌧️', scene: 'sky', topColor: '#546E7A', bottomColor: '#78909C' },
      { text: "She helped the baker move his flour inside. She helped the shepherd bring in the sheep.", emoji: '👸', detailEmoji: '🐑', scene: 'meadow', topColor: '#78909C', bottomColor: '#90A4AE' },
      { text: "By the time the storm passed, Pearl was soaking wet — but everyone was safe.", emoji: '👸', detailEmoji: '🌈', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "The people cheered for their smallest, bravest princess. Her crown shone brighter than ever.", emoji: '👸', detailEmoji: '👑', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 84, title: 'The Moonbeam Weaver', category: 'fantasy', coverEmoji: '🌙', accentColor: '#7986CB', readTime: 3,
    keywords: ['moon', 'weave', 'light', 'night', 'dream'],
    pages: [
      { text: "High in the sky lived the Moonbeam Weaver, a old woman who wove light into blankets.", emoji: '🌙', detailEmoji: '✨', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Every night she threw her shining blankets across the sky — that's what the Milky Way was!", emoji: '🌙', detailEmoji: '🌌', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "And the moonbeams that fell into windows? Those were threads she had dropped.", emoji: '🌙', detailEmoji: '🪟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#0D1B2A' },
      { text: "Children who lay in a moonbeam would have the sweetest, softest dreams of all.", emoji: '🌙', detailEmoji: '💤', scene: 'night', topColor: '#0A0A1E', bottomColor: '#1A1A2E' },
      { text: "So if moonlight falls on your pillow tonight, close your eyes and let the dreams begin.", emoji: '🌙', detailEmoji: '⭐', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 85, title: 'The Little Witch and Her Cat', category: 'fantasy', coverEmoji: '🧙', accentColor: '#7B1FA2', readTime: 3,
    keywords: ['witch', 'cat', 'spell', 'friend', 'laughter'],
    pages: [
      { text: "Luna the little witch had one big problem: every spell she tried went hilariously wrong.", emoji: '🧙', detailEmoji: '🐈‍⬛', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "She tried to summon rain and got a shower of frogs. She tried to grow a flower and got a cabbage.", emoji: '🧙', detailEmoji: '🐸', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Her black cat Midnight laughed at every mistake — not unkindly, but with pure delight.", emoji: '🧙', detailEmoji: '😹', scene: 'home', topColor: '#4A148C', bottomColor: '#6A1B9A' },
      { text: "'Your spells are unique!' said Midnight. 'No one else in the world can make it rain frogs.'", emoji: '🧙', detailEmoji: '🐸', scene: 'home', topColor: '#6A1B9A', bottomColor: '#7B1FA2' },
      { text: "Luna laughed too. Magic that made you laugh was the best kind of magic after all.", emoji: '🧙', detailEmoji: '🌟', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
    ],
  },
  {
    id: 86, title: 'The Rainbow Bridge', category: 'fantasy', coverEmoji: '🌈', accentColor: '#FF8F00', readTime: 3,
    keywords: ['rainbow', 'bridge', 'colour', 'cross', 'courage'],
    pages: [
      { text: "After every rain, a rainbow bridge appeared across the sky — but no one dared to cross it.", emoji: '🌈', detailEmoji: '🌦️', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "People said it led to a magical land on the other side of the clouds.", emoji: '🌈', detailEmoji: '☁️', scene: 'sky', topColor: '#64B5F6', bottomColor: '#42A5F5' },
      { text: "A little boy named Ray stepped onto the first red stripe — it held firm!", emoji: '🧒', detailEmoji: '👟', scene: 'sky', topColor: '#EF5350', bottomColor: '#E53935' },
      { text: "He walked across red, orange, yellow, green, blue, indigo, violet — singing all the way!", emoji: '🧒', detailEmoji: '🌈', scene: 'sky', topColor: '#42A5F5', bottomColor: '#1E88E5' },
      { text: "On the other side was a land filled with music, colour and endless wonder. He danced all day.", emoji: '🧒', detailEmoji: '🎵', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 87, title: 'The Enchanted Music Box', category: 'fantasy', coverEmoji: '🎵', accentColor: '#EF9A9A', readTime: 3,
    keywords: ['music', 'box', 'dance', 'enchant', 'joy'],
    pages: [
      { text: "Grandma gave Sofia an old wooden music box with a tiny dancer inside.", emoji: '🎵', detailEmoji: '🩰', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "When Sofia opened the lid, the sweetest, most magical tune filled the room.", emoji: '🎵', detailEmoji: '✨', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "The flowers on the wallpaper seemed to sway. The curtains seemed to wave in time.", emoji: '🎵', detailEmoji: '🌸', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Sofia spun around the room, dancing with the tiny ballerina inside the box.", emoji: '🎵', detailEmoji: '🩰', scene: 'home', topColor: '#7B3F00', bottomColor: '#9C4A00' },
      { text: "'Music is the secret language of happy hearts,' Grandma always said. Sofia finally understood.", emoji: '🎵', detailEmoji: '❤️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 88, title: 'The Silver Moon Horse', category: 'fantasy', coverEmoji: '🐴', accentColor: '#B0BEC5', readTime: 3,
    keywords: ['moon', 'horse', 'ride', 'night', 'gallop'],
    pages: [
      { text: "On the night of the full moon a silver horse came and stood below Ben's window.", emoji: '🐴', detailEmoji: '🌕', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Ben climbed out quietly and the horse knelt to let him climb on its shining back.", emoji: '🧒', detailEmoji: '🐴', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "They galloped across the night sky, leaping from cloud to cloud, star to star.", emoji: '🧒', detailEmoji: '⭐', scene: 'space', topColor: '#0A0E27', bottomColor: '#1A1A2E' },
      { text: "Below them, the sleeping world was tiny and peaceful, all wrapped in moonlight.", emoji: '🧒', detailEmoji: '🌙', scene: 'space', topColor: '#07091C', bottomColor: '#0A0E27' },
      { text: "By dawn, Ben was back in bed with no proof it had happened — except for a single silver hair.", emoji: '🧒', detailEmoji: '✨', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 89, title: 'The Sleeping Kingdom', category: 'fantasy', coverEmoji: '🏰', accentColor: '#9C27B0', readTime: 3,
    keywords: ['spell', 'sleep', 'wake', 'brave', 'kindness'],
    pages: [
      { text: "One hundred years ago, a wizard put an entire kingdom to sleep with a single yawn.", emoji: '🏰', detailEmoji: '🧙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "The king slept at his table. The baker slept with flour on his hands. The birds slept mid-song.", emoji: '🏰', detailEmoji: '👑', scene: 'sky', topColor: '#4A148C', bottomColor: '#6A1B9A' },
      { text: "A girl named Wren found the kingdom hidden under a hill covered in purple flowers.", emoji: '🧒', detailEmoji: '🌸', scene: 'meadow', topColor: '#CE93D8', bottomColor: '#BA68C8' },
      { text: "She walked through the silent halls and found the wizard's clock — stopped at midnight.", emoji: '🧒', detailEmoji: '🕛', scene: 'cave', topColor: '#37474F', bottomColor: '#455A64' },
      { text: "Wren wound the clock. It chimed. The kingdom woke with a stretch and a yawn. A hundred years was over.", emoji: '🧒', detailEmoji: '✨', scene: 'sunrise', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 90, title: 'The Magic Door in the Wall', category: 'fantasy', coverEmoji: '🚪', accentColor: '#A1887F', readTime: 3,
    keywords: ['door', 'magic', 'discover', 'wonder', 'secret'],
    pages: [
      { text: "There was a small wooden door in the old stone wall at the end of the garden.", emoji: '🚪', detailEmoji: '🌿', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "No one knew who had put it there. No one had ever opened it — until today.", emoji: '🚪', detailEmoji: '🔑', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Maya turned the iron handle and the door swung open with a creak.", emoji: '🧒', detailEmoji: '✨', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "Beyond was a garden that had never been touched — full of wild flowers and hidden paths.", emoji: '🧒', detailEmoji: '🌸', scene: 'forest', topColor: '#40916C', bottomColor: '#74C69D' },
      { text: "Maya sat among the flowers until the stars came out. The best secrets are worth finding.", emoji: '🧒', detailEmoji: '⭐', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },

  // ── ADVENTURE 91-100 ─────────────────────────────────────────────────────
  {
    id: 91, title: 'The Lost Map', category: 'adventure', coverEmoji: '🗺️', accentColor: '#FF8F00', readTime: 3,
    keywords: ['map', 'lost', 'find', 'clue', 'treasure'],
    pages: [
      { text: "Luca found an old rolled-up map behind a loose brick in the playroom wall.", emoji: '🗺️', detailEmoji: '🧱', scene: 'home', topColor: '#5D4037', bottomColor: '#795548' },
      { text: "The map showed a path through the garden, past the old swing, to a big X.", emoji: '🗺️', detailEmoji: '❌', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Luca followed every turn: past the roses, past the pond, past the big oak tree.", emoji: '🗺️', detailEmoji: '🌳', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "Under a flat stone marked with an X he found a small tin box with a chocolate coin inside.", emoji: '🗺️', detailEmoji: '🍫', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "And a note: 'Well done, explorer! Now hide it for the next adventurer to find.'", emoji: '🗺️', detailEmoji: '📝', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 92, title: 'Deep in the Underground Cave', category: 'adventure', coverEmoji: '🔦', accentColor: '#546E7A', readTime: 3,
    keywords: ['cave', 'dark', 'brave', 'crystals', 'wonder'],
    pages: [
      { text: "Anna's father was a cave explorer. One day he took her underground for the first time.", emoji: '🔦', detailEmoji: '⛏️', scene: 'cave', topColor: '#455A64', bottomColor: '#546E7A' },
      { text: "The entrance was a crack in the hillside. Inside it was dark and cool and very quiet.", emoji: '🔦', detailEmoji: '🌑', scene: 'cave', topColor: '#37474F', bottomColor: '#455A64' },
      { text: "Anna's torch lit up something sparkly — crystals growing right out of the rock walls!", emoji: '🔦', detailEmoji: '💎', scene: 'cave', topColor: '#263238', bottomColor: '#37474F' },
      { text: "Purple and white and orange — a secret palace hidden inside the earth.", emoji: '🔦', detailEmoji: '✨', scene: 'cave', topColor: '#455A64', bottomColor: '#607D8B' },
      { text: "Anna promised never to take a crystal — some treasures are best left where they belong.", emoji: '🔦', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 93, title: 'The Jungle Explorer', category: 'adventure', coverEmoji: '🌿', accentColor: '#2E7D32', readTime: 3,
    keywords: ['jungle', 'explore', 'discover', 'careful', 'wonder'],
    pages: [
      { text: "Max put on his explorer hat and pushed through the tall grass at the back of the garden.", emoji: '🌿', detailEmoji: '🎩', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "He found a caterpillar on a leaf and crouched down to watch it for a whole minute.", emoji: '🌿', detailEmoji: '🐛', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#40916C' },
      { text: "Behind the apple tree there was a spider web covered in dew — a perfect circle of diamonds!", emoji: '🌿', detailEmoji: '🕷️', scene: 'forest', topColor: '#40916C', bottomColor: '#52B788' },
      { text: "He watched an ant carry a crumb ten times its size without stopping once.", emoji: '🌿', detailEmoji: '🐜', scene: 'meadow', topColor: '#74C69D', bottomColor: '#95D5B2' },
      { text: "'The best jungle in the world,' Max said, 'is the one right outside your back door.'", emoji: '🌿', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 94, title: 'The Hot Air Balloon Race', category: 'adventure', coverEmoji: '🎈', accentColor: '#EF5350', readTime: 3,
    keywords: ['balloon', 'race', 'sky', 'wind', 'team'],
    pages: [
      { text: "Anya and her dad entered the Annual Village Balloon Race with a big red balloon.", emoji: '🎈', detailEmoji: '🏁', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "Up, up they went! Below them the houses looked like tiny toys.", emoji: '🎈', detailEmoji: '🏠', scene: 'sky', topColor: '#64B5F6', bottomColor: '#42A5F5' },
      { text: "They were winning — but then the wind pushed them off course into a cloud.", emoji: '🎈', detailEmoji: '☁️', scene: 'sky', topColor: '#B0BEC5', bottomColor: '#90A4AE' },
      { text: "Dad steered them gently back, reading the wind the way he always said you had to.", emoji: '🎈', detailEmoji: '💨', scene: 'sky', topColor: '#42A5F5', bottomColor: '#1E88E5' },
      { text: "They came third — but the sky view and the adventure were worth a thousand prizes.", emoji: '🎈', detailEmoji: '🥉', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 95, title: 'The Secret Island', category: 'adventure', coverEmoji: '🏝️', accentColor: '#00ACC1', readTime: 3,
    keywords: ['island', 'discover', 'explore', 'boat', 'wild'],
    pages: [
      { text: "On their camping trip, Isla and her cousin paddled a little rowing boat out to a tiny island.", emoji: '🏝️', detailEmoji: '🚣', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "No one lived there! Just tall grass, wild berries, and birds she had never seen before.", emoji: '🏝️', detailEmoji: '🐦', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "They gave every part of the island a name: Bumpy Rock Point, Wild Berry Bay, Big Tree Hill.", emoji: '🏝️', detailEmoji: '🌳', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "They drew a map in the sand so they would never forget where everything was.", emoji: '🏝️', detailEmoji: '🗺️', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Their very own island. Their very own map. Their very own adventure — forever.", emoji: '🏝️', detailEmoji: '⭐', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 96, title: 'The Night Walk with Dad', category: 'adventure', coverEmoji: '🌙', accentColor: '#3F51B5', readTime: 3,
    keywords: ['night', 'stars', 'walk', 'Dad', 'quiet'],
    pages: [
      { text: "Dad woke Mia at midnight. 'Put on your boots,' he whispered, 'I have something to show you.'", emoji: '🌙', detailEmoji: '👟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "They walked down the quiet dark street with just a torch and the moon for light.", emoji: '🌙', detailEmoji: '🔦', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "At the meadow, Dad switched off the torch. The darkness was full of stars!", emoji: '🌙', detailEmoji: '⭐', scene: 'night', topColor: '#07091C', bottomColor: '#0A0E27' },
      { text: "Dad showed her Orion's Belt, the Big Dipper, and a planet shining orange.", emoji: '🌙', detailEmoji: '🪐', scene: 'space', topColor: '#0A0E27', bottomColor: '#07091C' },
      { text: "Walking home, Mia held Dad's hand tight. Some adventures are best kept secret.", emoji: '🌙', detailEmoji: '❤️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 97, title: 'The First Bike Ride', category: 'adventure', coverEmoji: '🚲', accentColor: '#43A047', readTime: 3,
    keywords: ['bike', 'balance', 'practice', 'fall', 'try again'],
    pages: [
      { text: "Today was the day — no more training wheels! Jake's brand new blue bike stood waiting.", emoji: '🚲', detailEmoji: '🔵', scene: 'meadow', topColor: '#E3F2FD', bottomColor: '#BBDEFB' },
      { text: "Dad held the back of the seat. Jake pedalled. Wobble, wobble, wobble!", emoji: '🚲', detailEmoji: '👨', scene: 'meadow', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "He fell off and scraped his knee. It stung! He sat in the grass for a minute.", emoji: '🚲', detailEmoji: '😢', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Then he got back on. Pedal, pedal, pedal — and suddenly Dad was not holding on anymore!", emoji: '🚲', detailEmoji: '💨', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Jake was RIDING! By himself! He laughed so hard he nearly fell off again — but didn't.", emoji: '🚲', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 98, title: 'The Camping Adventure', category: 'adventure', coverEmoji: '⛺', accentColor: '#5D4037', readTime: 3,
    keywords: ['camping', 'tent', 'stars', 'fire', 'family'],
    pages: [
      { text: "The whole family drove to the mountains and set up camp beside a rushing stream.", emoji: '⛺', detailEmoji: '🏔️', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "Dad and Leo built the tent together with lots of wrong poles and lots of giggling.", emoji: '⛺', detailEmoji: '😄', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "They toasted marshmallows on the campfire — golden outside, gooey inside.", emoji: '⛺', detailEmoji: '🔥', scene: 'forest', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "At bedtime, they all squeezed into sleeping bags and listened to the stream.", emoji: '⛺', detailEmoji: '💧', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Leo fell asleep to the sound of the forest and the smell of pine and campfire smoke.", emoji: '⛺', detailEmoji: '🌙', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
    ],
  },
  {
    id: 99, title: 'The Space Station', category: 'adventure', coverEmoji: '🚀', accentColor: '#1565C0', readTime: 3,
    keywords: ['space', 'float', 'astronaut', 'stars', 'Earth'],
    pages: [
      { text: "Commander Clara floated through the space station, weightless as a feather.", emoji: '🚀', detailEmoji: '🛸', scene: 'space', topColor: '#0A0E27', bottomColor: '#07091C' },
      { text: "Outside the window, the Earth hung like a blue marble in the blackness of space.", emoji: '🚀', detailEmoji: '🌍', scene: 'space', topColor: '#07091C', bottomColor: '#0A0A1E' },
      { text: "She pressed her nose to the glass and could see whole oceans and mountains and clouds.", emoji: '🚀', detailEmoji: '☁️', scene: 'space', topColor: '#0A0E27', bottomColor: '#1A1A2E' },
      { text: "'From up here,' she said, 'the world looks so small and so precious.'", emoji: '🚀', detailEmoji: '💙', scene: 'space', topColor: '#07091C', bottomColor: '#0A0E27' },
      { text: "She floated to her sleeping pod and dreamed of running barefoot through green grass.", emoji: '🚀', detailEmoji: '💤', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 100, title: 'One Hundred Stories', category: 'adventure', coverEmoji: '📖', accentColor: '#FF6F00', readTime: 3,
    keywords: ['hundred', 'story', 'read', 'imagine', 'dream'],
    pages: [
      { text: "Every night, a little girl named Bea read a story before bed. One night she read her hundredth!", emoji: '📖', detailEmoji: '🎉', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "She had visited jungles, oceans, castles, and galaxies — all from her reading chair.", emoji: '📖', detailEmoji: '🌍', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "'Each story gives you a place to go whenever you want,' said Mama.", emoji: '📖', detailEmoji: '❤️', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Bea closed the book and lay back. She could still see the coral reef from story forty-two.", emoji: '📖', detailEmoji: '🪸', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "Story one hundred and one was already waiting. She smiled and closed her eyes.", emoji: '📖', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },

  // ── FRIENDSHIP 101-110 ───────────────────────────────────────────────────
  {
    id: 101, title: 'The New Kid', category: 'friendship', coverEmoji: '🧒', accentColor: '#42A5F5', readTime: 3,
    keywords: ['new', 'welcome', 'kind', 'nervous', 'friend'],
    pages: [
      { text: "A new boy named Eli arrived at school on a rainy Monday. He sat alone at lunch.", emoji: '🧒', detailEmoji: '🌧️', scene: 'home', topColor: '#546E7A', bottomColor: '#78909C' },
      { text: "Nadia noticed. She picked up her lunch box and walked over. 'Can I sit here?'", emoji: '🧒', detailEmoji: '🍱', scene: 'home', topColor: '#78909C', bottomColor: '#90A4AE' },
      { text: "Eli looked up in surprise. He nodded, trying not to look too hopeful.", emoji: '🧒', detailEmoji: '😊', scene: 'home', topColor: '#90A4AE', bottomColor: '#B0BEC5' },
      { text: "They talked about their favourite animals, their worst subjects, and best snacks.", emoji: '🧒', detailEmoji: '🍎', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "By the end of lunch, the rainy day felt much brighter. All it took was one hello.", emoji: '🧒', detailEmoji: '🌈', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
    ],
  },
  {
    id: 102, title: 'Pen Pals', category: 'friendship', coverEmoji: '✉️', accentColor: '#AB47BC', readTime: 3,
    keywords: ['letter', 'write', 'far', 'close', 'heart'],
    pages: [
      { text: "Mira's class started a pen pal project. Her pen pal was a boy named Diego in another country.", emoji: '✉️', detailEmoji: '🌍', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "She wrote about her cat, her school, and the funny way her dad sneezed loudly.", emoji: '✉️', detailEmoji: '🐱', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Diego wrote back about his dog, his town's festival, and his grandma's mango cake.", emoji: '✉️', detailEmoji: '🥭', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "They wrote every week. The letters got longer. The friendship got deeper.", emoji: '✉️', detailEmoji: '📝', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "A letter is a piece of your heart wrapped in paper and sent across the world.", emoji: '✉️', detailEmoji: '❤️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 103, title: 'Making Up After a Fight', category: 'friendship', coverEmoji: '🤝', accentColor: '#F4511E', readTime: 3,
    keywords: ['sorry', 'forgive', 'fight', 'make up', 'friends'],
    pages: [
      { text: "Sam and Josh had been best friends forever — until the argument about the blue crayon.", emoji: '🤝', detailEmoji: '🖍️', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "They didn't speak for a whole day. It felt strange and quiet and wrong.", emoji: '🤝', detailEmoji: '😶', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "That night, Sam wrote 'sorry' on a piece of paper and slid it under Josh's door.", emoji: '🤝', detailEmoji: '📝', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "In the morning Josh knocked and said 'I'm sorry too. Also it was your crayon.'", emoji: '🤝', detailEmoji: '😄', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "They laughed until their tummies hurt. A good friendship can survive a thousand fights.", emoji: '🤝', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 104, title: 'Two Very Different Friends', category: 'friendship', coverEmoji: '🎭', accentColor: '#00897B', readTime: 3,
    keywords: ['different', 'same', 'friend', 'opposite', 'together'],
    pages: [
      { text: "Toby was loud and bouncy. Priya was quiet and thoughtful. They were best friends.", emoji: '🎭', detailEmoji: '❤️', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Toby helped Priya be brave at the climbing frame. Priya helped Toby slow down and listen.", emoji: '🎭', detailEmoji: '🧗', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#95D5B2' },
      { text: "When Toby was sad, Priya sat with him without needing to say a word.", emoji: '🎭', detailEmoji: '🌟', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "When Priya felt invisible, Toby would shout her name so everyone could hear.", emoji: '🎭', detailEmoji: '📢', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "The best friends are the ones who help you be both more yourself and more than yourself.", emoji: '🎭', detailEmoji: '🌈', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 105, title: 'The Lonely Robot', category: 'friendship', coverEmoji: '🤖', accentColor: '#78909C', readTime: 3,
    keywords: ['lonely', 'friend', 'machine', 'heart', 'together'],
    pages: [
      { text: "Bolt the little robot lived in a workshop all by himself. He could do many things — but not smile.", emoji: '🤖', detailEmoji: '🔧', scene: 'home', topColor: '#546E7A', bottomColor: '#78909C' },
      { text: "A girl named Aria visited the workshop one day and immediately sat down next to Bolt.", emoji: '🤖', detailEmoji: '🧒', scene: 'home', topColor: '#607D8B', bottomColor: '#78909C' },
      { text: "'Do you like music?' she asked, and played a song on her little speaker.", emoji: '🤖', detailEmoji: '🎵', scene: 'home', topColor: '#78909C', bottomColor: '#90A4AE' },
      { text: "Something flickered in Bolt's chest — a small warm light his creators had not put there.", emoji: '🤖', detailEmoji: '💛', scene: 'home', topColor: '#455A64', bottomColor: '#546E7A' },
      { text: "Aria came back every day. And every day Bolt's light grew a little brighter. Some call it a heart.", emoji: '🤖', detailEmoji: '❤️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 106, title: 'The Gift of Time', category: 'friendship', coverEmoji: '⏰', accentColor: '#F9A825', readTime: 3,
    keywords: ['time', 'listen', 'care', 'present', 'friend'],
    pages: [
      { text: "Grace's best friend was going through a hard time. Grace didn't know what to say.", emoji: '⏰', detailEmoji: '😢', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "She brought her friend a biscuit and said: 'I don't have to say anything, do I?'", emoji: '⏰', detailEmoji: '🍪', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "'No,' said her friend. 'Just sit with me.'", emoji: '⏰', detailEmoji: '🤍', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "So Grace sat. For a long time. Quiet and warm and completely there.", emoji: '⏰', detailEmoji: '💛', scene: 'sunset', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
      { text: "The best gift you can give someone is your time and your presence.", emoji: '⏰', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 107, title: 'The Surprise Helper', category: 'friendship', coverEmoji: '🎁', accentColor: '#E91E63', readTime: 3,
    keywords: ['help', 'surprise', 'carry', 'notice', 'kind'],
    pages: [
      { text: "Old Mr. Finch dropped all his shopping bags on the path and sat down sadly.", emoji: '🎁', detailEmoji: '🛍️', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Three children from the street saw it happen and ran over straight away.", emoji: '🎁', detailEmoji: '🏃', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "They picked up every tin and packet and refilled every bag without being asked.", emoji: '🎁', detailEmoji: '🥫', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "They walked with Mr. Finch all the way to his door and helped him inside.", emoji: '🎁', detailEmoji: '🏠', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "'Bless you,' said Mr. Finch — and the three children felt taller walking home.", emoji: '🎁', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 108, title: 'Friends Who Listen', category: 'friendship', coverEmoji: '👂', accentColor: '#26C6DA', readTime: 3,
    keywords: ['listen', 'hear', 'talk', 'understand', 'care'],
    pages: [
      { text: "Maya had so much to tell her friend about her bad day — her friend put away her phone.", emoji: '👂', detailEmoji: '📱', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "She turned to face Maya completely and said: 'Tell me everything.'", emoji: '👂', detailEmoji: '💛', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Maya talked and talked. Her friend did not interrupt. She just listened and nodded.", emoji: '👂', detailEmoji: '🌿', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "When Maya finished, she felt so much lighter — as if the words had carried the worry out.", emoji: '👂', detailEmoji: '✨', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Being truly heard is one of the most wonderful feelings in the world.", emoji: '👂', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 109, title: 'The Playground Peacemaker', category: 'friendship', coverEmoji: '🕊️', accentColor: '#80CBC4', readTime: 3,
    keywords: ['peace', 'fair', 'solve', 'argue', 'together'],
    pages: [
      { text: "Two groups of children both wanted the climbing frame at the same time.", emoji: '🕊️', detailEmoji: '😠', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Finn stepped between them. 'What if we take turns — five minutes each?'", emoji: '🕊️', detailEmoji: '⏱️', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Both groups looked at each other. They grumbled. Then they agreed.", emoji: '🕊️', detailEmoji: '🤝', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "By the third turn, the two groups were playing together and had forgotten about arguing.", emoji: '🕊️', detailEmoji: '😄', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Sometimes all it takes is one calm voice to turn a fight into a game.", emoji: '🕊️', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 110, title: 'Forever Friends', category: 'friendship', coverEmoji: '🌟', accentColor: '#FFD600', readTime: 3,
    keywords: ['forever', 'memory', 'grow', 'change', 'always'],
    pages: [
      { text: "Rosa and Clem had been friends since they were babies in side-by-side prams.", emoji: '🌟', detailEmoji: '👶', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "They grew up: different schools, different hobbies, different towns eventually.", emoji: '🌟', detailEmoji: '🏙️', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "But every birthday, a card arrived. Every summer, a visit.", emoji: '🌟', detailEmoji: '✉️', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "They were different people now — but they still laughed at all the same things.", emoji: '🌟', detailEmoji: '😄', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "A true friend grows with you, not just beside you.", emoji: '🌟', detailEmoji: '❤️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },

  // ── NATURE 111-120 ───────────────────────────────────────────────────────
  {
    id: 111, title: "The Baby Turtle's Journey", category: 'nature', coverEmoji: '🐢', accentColor: '#26A69A', readTime: 3,
    keywords: ['turtle', 'ocean', 'brave', 'crawl', 'home'],
    pages: [
      { text: "A tiny baby turtle hatched from her egg on a moonlit beach.", emoji: '🐢', detailEmoji: '🌕', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Around her, one hundred brothers and sisters all scrambled toward the sea.", emoji: '🐢', detailEmoji: '🌊', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "The sand was soft and deep. Each step was a struggle. But she kept going.", emoji: '🐢', detailEmoji: '🏖️', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "A wave washed over her — cold and wonderful. She was swimming!", emoji: '🐢', detailEmoji: '💧', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "The ocean was enormous and she was very small. But the ocean was her home.", emoji: '🐢', detailEmoji: '🌙', scene: 'night', topColor: '#03045E', bottomColor: '#023E8A' },
    ],
  },
  {
    id: 112, title: 'Seeds in the Wind', category: 'nature', coverEmoji: '🌬️', accentColor: '#66BB6A', readTime: 3,
    keywords: ['seed', 'wind', 'travel', 'grow', 'land'],
    pages: [
      { text: "A dandelion stood in the meadow, her white fluffy seeds ready to fly.", emoji: '🌼', detailEmoji: '💨', scene: 'meadow', topColor: '#E8F5E9', bottomColor: '#C8E6C9' },
      { text: "The wind came — whoooosh! — and a hundred seeds lifted into the bright blue sky.", emoji: '🌼', detailEmoji: '🌬️', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "One seed flew over the pond. One flew past the red barn. One landed in a crack in the wall.", emoji: '🌬️', detailEmoji: '🏚️', scene: 'sky', topColor: '#64B5F6', bottomColor: '#42A5F5' },
      { text: "Weeks later, a little yellow flower pushed through the crack and opened toward the sun.", emoji: '🌼', detailEmoji: '☀️', scene: 'meadow', topColor: '#FFF9C4', bottomColor: '#FFF176' },
      { text: "Life finds a way to grow even in the most unexpected places.", emoji: '🌼', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 113, title: "The Snowflake's Journey", category: 'nature', coverEmoji: '❄️', accentColor: '#90CAF9', readTime: 3,
    keywords: ['snowflake', 'unique', 'melt', 'rain', 'cycle'],
    pages: [
      { text: "High in the sky, a tiny water droplet froze into a perfect six-pointed snowflake.", emoji: '❄️', detailEmoji: '☁️', scene: 'snow', topColor: '#E3F2FD', bottomColor: '#BBDEFB' },
      { text: "She drifted down slowly, spinning and turning, different from every other flake.", emoji: '❄️', detailEmoji: '🌨️', scene: 'snow', topColor: '#BBDEFB', bottomColor: '#90CAF9' },
      { text: "She landed on a child's mitten — and the child looked closely in wonder.", emoji: '❄️', detailEmoji: '🧤', scene: 'snow', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "'It's so tiny and perfect!' the child whispered before the snowflake melted.", emoji: '❄️', detailEmoji: '💧', scene: 'snow', topColor: '#64B5F6', bottomColor: '#42A5F5' },
      { text: "The water flowed to the river, rose as a cloud, and one day snowed again.", emoji: '❄️', detailEmoji: '🌧️', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
    ],
  },
  {
    id: 114, title: 'The Tide Pool', category: 'nature', coverEmoji: '🦀', accentColor: '#FF8A65', readTime: 3,
    keywords: ['tide', 'pool', 'crab', 'explore', 'wonder'],
    pages: [
      { text: "Between the rocks at low tide, Nola found a world in a puddle.", emoji: '🦀', detailEmoji: '🪨', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "Tiny crabs scuttled sideways. A purple starfish lay perfectly still.", emoji: '🦀', detailEmoji: '⭐', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "A sea anemone waved its orange fingers. A small fish darted under a rock.", emoji: '🦀', detailEmoji: '🐠', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "Nola crouched down and stayed very still. The creatures forgot she was there.", emoji: '🦀', detailEmoji: '🔍', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "An entire ocean in a puddle. The world is full of small miracles.", emoji: '🦀', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 115, title: 'The Mighty River', category: 'nature', coverEmoji: '🌊', accentColor: '#0288D1', readTime: 3,
    keywords: ['river', 'flow', 'journey', 'fish', 'sea'],
    pages: [
      { text: "The river began as a tiny trickle high in the snowy mountains.", emoji: '🌊', detailEmoji: '⛰️', scene: 'snow', topColor: '#B0BEC5', bottomColor: '#CFD8DC' },
      { text: "It tumbled over rocks, picked up more water, and grew wider and stronger.", emoji: '🌊', detailEmoji: '💧', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "Fish swam in it. Children paddled in it. Willows dipped their branches into it.", emoji: '🌊', detailEmoji: '🐟', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Through valleys and towns and farmland the river rolled on and on.", emoji: '🌊', detailEmoji: '🏡', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "At last it reached the great blue sea — and its long, slow journey was complete.", emoji: '🌊', detailEmoji: '🌅', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
    ],
  },
  {
    id: 116, title: 'The Butterfly Migration', category: 'nature', coverEmoji: '🦋', accentColor: '#FF8F00', readTime: 3,
    keywords: ['butterfly', 'migrate', 'journey', 'orange', 'warmth'],
    pages: [
      { text: "In autumn, a million orange monarch butterflies began to fly south.", emoji: '🦋', detailEmoji: '🍂', scene: 'sky', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "They filled the sky like a living, fluttering orange cloud.", emoji: '🦋', detailEmoji: '☀️', scene: 'sky', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
      { text: "Each butterfly weighed less than a paper clip — but they flew thousands of miles.", emoji: '🦋', detailEmoji: '💨', scene: 'sky', topColor: '#64B5F6', bottomColor: '#42A5F5' },
      { text: "They stopped in trees, covering every branch until the whole tree seemed to flutter.", emoji: '🦋', detailEmoji: '🌳', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "Something tiny finding its way across the world — small things can do big things.", emoji: '🦋', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 117, title: 'The Coral Reef', category: 'nature', coverEmoji: '🪸', accentColor: '#FF7043', readTime: 3,
    keywords: ['coral', 'reef', 'colour', 'fish', 'ocean'],
    pages: [
      { text: "Deep in the warm ocean lived a coral reef, the busiest city in the sea.", emoji: '🪸', detailEmoji: '🐠', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "Pink and orange and purple coral stretched up toward the shimmering light above.", emoji: '🪸', detailEmoji: '✨', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "Clownfish hid in anemones. Parrotfish nibbled on coral. A ray glided past.", emoji: '🪸', detailEmoji: '🐡', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "A sea turtle swam slowly overhead, casting a gentle shadow.", emoji: '🪸', detailEmoji: '🐢', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "The reef had been growing for thousands of years — older than any story ever told.", emoji: '🪸', detailEmoji: '🌟', scene: 'night', topColor: '#03045E', bottomColor: '#023E8A' },
    ],
  },
  {
    id: 118, title: 'The Northern Lights', category: 'nature', coverEmoji: '🌌', accentColor: '#26C6DA', readTime: 3,
    keywords: ['aurora', 'lights', 'green', 'sky', 'wonder'],
    pages: [
      { text: "On a cold winter night in the far north, the sky began to dance.", emoji: '🌌', detailEmoji: '❄️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Green and purple and blue ribbons of light rippled across the stars.", emoji: '🌌', detailEmoji: '💚', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "A little boy named Emil stood outside with his grandfather and stared up, mouth open.", emoji: '🌌', detailEmoji: '🧒', scene: 'night', topColor: '#0A0A1E', bottomColor: '#0D1B2A' },
      { text: "'What is it?' Emil whispered. 'The sky breathing,' said Grandpa.", emoji: '🌌', detailEmoji: '⭐', scene: 'space', topColor: '#07091C', bottomColor: '#0A0E27' },
      { text: "They stood together in the cold for a long time, wrapped in blankets and wonder.", emoji: '🌌', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 119, title: 'The Spider and Her Web', category: 'nature', coverEmoji: '🕷️', accentColor: '#9E9E9E', readTime: 3,
    keywords: ['spider', 'web', 'patient', 'build', 'beautiful'],
    pages: [
      { text: "Every morning the spider started again. The wind had torn her web in the night.", emoji: '🕷️', detailEmoji: '💨', scene: 'meadow', topColor: '#E8F5E9', bottomColor: '#C8E6C9' },
      { text: "She began with one strong thread from one branch to another.", emoji: '🕷️', detailEmoji: '🌿', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Round and round she went, adding thread after thread in a perfect spiral.", emoji: '🕷️', detailEmoji: '⭕', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "By morning the web was finished — catching dew drops that sparkled like tiny diamonds.", emoji: '🕷️', detailEmoji: '💎', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "She had made it a hundred times. She would make it a hundred more. This was her gift.", emoji: '🕷️', detailEmoji: '🌟', scene: 'sunrise', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 120, title: 'The Desert at Dawn', category: 'nature', coverEmoji: '🌵', accentColor: '#FF7043', readTime: 3,
    keywords: ['desert', 'dawn', 'quiet', 'cool', 'life'],
    pages: [
      { text: "Before the sun rose, the desert was cool and full of secret life.", emoji: '🌵', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "A tiny mouse crept from its burrow. A lizard blinked at the fading stars.", emoji: '🌵', detailEmoji: '🦎', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "A coyote trotted home after a long night's walk, yawning in the pink light.", emoji: '🌵', detailEmoji: '🐺', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "The sun crept over the red rocks — and the desert held its breath for one perfect moment.", emoji: '🌵', detailEmoji: '☀️', scene: 'sunset', topColor: '#FF6B35', bottomColor: '#FF9F1C' },
      { text: "Even the driest place on earth holds more life and beauty than you could ever imagine.", emoji: '🌵', detailEmoji: '🌸', scene: 'meadow', topColor: '#FFD54F', bottomColor: '#FFCA28' },
    ],
  },

  // ── FAMILY 121-130 ───────────────────────────────────────────────────────
  {
    id: 121, title: 'Baby Brother Arrives', category: 'family', coverEmoji: '👶', accentColor: '#FF8A80', readTime: 3,
    keywords: ['baby', 'brother', 'new', 'love', 'family'],
    pages: [
      { text: "The day baby brother came home, everything in the house felt different.", emoji: '👶', detailEmoji: '🏠', scene: 'home', topColor: '#FFCCBC', bottomColor: '#FFAB91' },
      { text: "He was so tiny! His fingers were like little pink peas.", emoji: '👶', detailEmoji: '🌸', scene: 'home', topColor: '#FF8A80', bottomColor: '#FF5252' },
      { text: "Emma held him very carefully, the way Mama showed her — supporting his head.", emoji: '👶', detailEmoji: '🤱', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "He smelled like milk and sunshine and something she could not name.", emoji: '👶', detailEmoji: '☀️', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "'I'll look after you,' Emma whispered. Baby brother smiled in his sleep.", emoji: '👶', detailEmoji: '💛', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 122, title: "Grandma's Recipe Book", category: 'family', coverEmoji: '📕', accentColor: '#A1887F', readTime: 3,
    keywords: ['grandma', 'recipe', 'cook', 'love', 'remember'],
    pages: [
      { text: "Grandma's recipe book was old and splattered with a hundred different meals.", emoji: '📕', detailEmoji: '🍲', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Every page smelled faintly of cinnamon and vanilla — the scent of her kitchen.", emoji: '📕', detailEmoji: '🌿', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Lena and Grandma made apple cake together, following the wobbly handwriting.", emoji: '📕', detailEmoji: '🍎', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "When it came out of the oven, the whole house smelled like every Christmas at once.", emoji: '📕', detailEmoji: '🎄', scene: 'home', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "One day the book will be Lena's. And she'll make it for her own grandchildren.", emoji: '📕', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 123, title: 'Sunday Morning Pancakes', category: 'family', coverEmoji: '🥞', accentColor: '#FF8F00', readTime: 3,
    keywords: ['pancake', 'sunday', 'family', 'breakfast', 'together'],
    pages: [
      { text: "Every Sunday, Dad got up early and made pancakes shaped like animals.", emoji: '🥞', detailEmoji: '🐻', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "A bear for Max. A rabbit for Ella. A wonky star-shape that was supposed to be a fish.", emoji: '🥞', detailEmoji: '⭐', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "The kitchen smelled of butter and maple syrup. Everyone ate in their pyjamas.", emoji: '🥞', detailEmoji: '🍁', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Mum had syrup on her chin. Dad had flour in his hair. Nobody cared.", emoji: '🥞', detailEmoji: '😄', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Sunday pancakes weren't just about food. They were about being all together.", emoji: '🥞', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 124, title: "Dad's Funny Hat", category: 'family', coverEmoji: '🎩', accentColor: '#5C6BC0', readTime: 2,
    keywords: ['hat', 'funny', 'laugh', 'Dad', 'silly'],
    pages: [
      { text: "Dad had a hat he wore only on Saturdays. It was bright orange with a purple feather.", emoji: '🎩', detailEmoji: '🪶', scene: 'home', topColor: '#7B3F00', bottomColor: '#9C4A00' },
      { text: "When Dad put on the hat, everyone knew it was going to be a silly day.", emoji: '🎩', detailEmoji: '😄', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "He told terrible jokes. He danced badly in the kitchen. He sang the wrong words.", emoji: '🎩', detailEmoji: '🎵', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "The children laughed until their tummies ached and tears rolled down their cheeks.", emoji: '🎩', detailEmoji: '😂', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "That silly orange hat was their very favourite thing their dad owned.", emoji: '🎩', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 125, title: "Mama's Lullaby", category: 'family', coverEmoji: '🎶', accentColor: '#7986CB', readTime: 2,
    keywords: ['lullaby', 'Mama', 'sleep', 'song', 'safe'],
    pages: [
      { text: "Every night Mama sang the same song — low and soft and just for you.", emoji: '🎶', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "It wasn't a famous song. She had made it up the night you were born.", emoji: '🎶', detailEmoji: '⭐', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "It was about stars and dreams and being small and safe and loved.", emoji: '🎶', detailEmoji: '💤', scene: 'night', topColor: '#0A0A1E', bottomColor: '#1A1A2E' },
      { text: "Even on hard nights, when everything felt too big, the song made the world small again.", emoji: '🎶', detailEmoji: '💛', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "You will remember that song forever — even when you are tall and grown.", emoji: '🎶', detailEmoji: '❤️', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
    ],
  },
  {
    id: 126, title: 'The Family Photo Album', category: 'family', coverEmoji: '📷', accentColor: '#8D6E63', readTime: 3,
    keywords: ['photo', 'memory', 'past', 'family', 'story'],
    pages: [
      { text: "On rainy afternoons, Grandpa would bring out the big photo album.", emoji: '📷', detailEmoji: '🌧️', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "There was Mama as a little girl — missing two front teeth and laughing!", emoji: '📷', detailEmoji: '😄', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "There was Grandpa with big glasses and a very silly moustache.", emoji: '📷', detailEmoji: '😂', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Every photo held a whole story. Every page was a little door into the past.", emoji: '📷', detailEmoji: '📖', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "'You are part of this story too,' said Grandpa, pointing to a new empty page.", emoji: '📷', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 127, title: 'When Grandma Visits', category: 'family', coverEmoji: '👵', accentColor: '#CE93D8', readTime: 3,
    keywords: ['grandma', 'visit', 'hug', 'bake', 'love'],
    pages: [
      { text: "When Grandma visited, the whole house changed. It smelled better for a start.", emoji: '👵', detailEmoji: '🌸', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "She brought a tin of biscuits she had made herself — three different kinds.", emoji: '👵', detailEmoji: '🍪', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "She wanted to hear everything — school, friends, worries, silly things.", emoji: '👵', detailEmoji: '👂', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "At bedtime, Grandma sat on the edge of the bed and talked in her slow, calm voice.", emoji: '👵', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Sleep always came faster when Grandma was in the house. It just did.", emoji: '👵', detailEmoji: '💤', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
    ],
  },
  {
    id: 128, title: 'Family Movie Night', category: 'family', coverEmoji: '🎬', accentColor: '#EF5350', readTime: 2,
    keywords: ['movie', 'popcorn', 'cosy', 'blanket', 'together'],
    pages: [
      { text: "Friday night was movie night. Everyone helped make the biggest bowl of popcorn.", emoji: '🎬', detailEmoji: '🍿', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "They piled on the sofa together, legs tangled, blankets everywhere.", emoji: '🎬', detailEmoji: '🛋️', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Dad chose an adventure film. Mum chose a funny one. They watched both.", emoji: '🎬', detailEmoji: '😄', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "By the second film, the little ones were fast asleep on the cushions.", emoji: '🎬', detailEmoji: '💤', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "The best part wasn't the movie at all. It was being all squished up together.", emoji: '🎬', detailEmoji: '❤️', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
    ],
  },
  {
    id: 129, title: 'The Bedtime Storyteller', category: 'family', coverEmoji: '📖', accentColor: '#7986CB', readTime: 3,
    keywords: ['story', 'imagination', 'Dad', 'create', 'bedtime'],
    pages: [
      { text: "Dad never read from a book. He made up stories right out of his head.", emoji: '📖', detailEmoji: '💡', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "'One night, a boy found a talking shoe,' he would begin, and Liam would lean in.", emoji: '📖', detailEmoji: '👟', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "The stories were always different. Always surprising. Always exactly right.", emoji: '📖', detailEmoji: '✨', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Liam couldn't always remember the story the next morning — but he remembered the feeling.", emoji: '📖', detailEmoji: '💛', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Safe and loved and full of wonder — that was the feeling Dad gave him every night.", emoji: '📖', detailEmoji: '❤️', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
    ],
  },
  {
    id: 130, title: "Moving to a New Home", category: 'family', coverEmoji: '📦', accentColor: '#FF8F00', readTime: 3,
    keywords: ['move', 'new', 'home', 'brave', 'begin'],
    pages: [
      { text: "On moving day, the house was full of boxes and everyone felt a little mixed up inside.", emoji: '📦', detailEmoji: '🏠', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Maya held her favourite stuffed bear very tight as they drove away.", emoji: '📦', detailEmoji: '🧸', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "The new house had a squeaky stair and a garden with an apple tree.", emoji: '📦', detailEmoji: '🍎', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Mum put Maya's drawings on the wall straight away. 'See? It's ours already.'", emoji: '📦', detailEmoji: '🖼️', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "That night Maya slept well. Home was wherever her family was.", emoji: '📦', detailEmoji: '💛', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },

  // ── LIFESTYLE 131-145 ────────────────────────────────────────────────────
  {
    id: 131, title: 'Sharing My Toys', category: 'lifestyle', coverEmoji: '🧸', accentColor: '#00ACC1', readTime: 2,
    keywords: ['share', 'toys', 'together', 'fair', 'kind'],
    pages: [
      { text: "Eli had a brand new set of building blocks — and his friend Sam really wanted to play.", emoji: '🧸', detailEmoji: '🧱', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "At first Eli held the blocks close. They were NEW and special.", emoji: '🧸', detailEmoji: '😟', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "But alone, he could only build a small tower. Together, they built a CASTLE.", emoji: '🧸', detailEmoji: '🏰', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "It had towers and a drawbridge and a little courtyard for tiny knights.", emoji: '🧸', detailEmoji: '⚔️', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Sharing didn't take anything away. It made everything much, much bigger.", emoji: '🧸', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 132, title: 'Waiting My Turn', category: 'lifestyle', coverEmoji: '⏳', accentColor: '#00ACC1', readTime: 2,
    keywords: ['wait', 'patient', 'turn', 'queue', 'fair'],
    pages: [
      { text: "The slide at the playground was the best slide. It also had a long queue.", emoji: '⏳', detailEmoji: '🛝', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Leo really wanted a turn — right now! But twelve children were waiting ahead.", emoji: '⏳', detailEmoji: '🧒', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "He joined the line. He counted the children. He counted again.", emoji: '⏳', detailEmoji: '🔢', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "He looked at the clouds. He found a ladybird on a leaf. And then — his turn!", emoji: '⏳', detailEmoji: '🐞', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "The slide was EVEN better after the wait. Patient waiting always makes things sweeter.", emoji: '⏳', detailEmoji: '😄', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 133, title: 'Cleaning My Room', category: 'lifestyle', coverEmoji: '🧹', accentColor: '#00ACC1', readTime: 2,
    keywords: ['tidy', 'clean', 'room', 'sort', 'proud'],
    pages: [
      { text: "Zoe's room looked like a very friendly earthquake had paid a visit.", emoji: '🧹', detailEmoji: '😬', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Books on the floor. Socks on the books. A toy car inside a welly boot.", emoji: '🧹', detailEmoji: '👟', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Mum said: 'One thing at a time, love. Start with the books.'", emoji: '🧹', detailEmoji: '📚', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Books. Then socks. Then toys. Then a quick sweep. It took twenty minutes.", emoji: '🧹', detailEmoji: '⏱️', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Zoe looked around her tidy room. It felt like a completely different place.", emoji: '🧹', detailEmoji: '🌟', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
    ],
  },
  {
    id: 134, title: 'Saying Sorry', category: 'lifestyle', coverEmoji: '🙏', accentColor: '#00ACC1', readTime: 2,
    keywords: ['sorry', 'mistake', 'repair', 'honest', 'kind'],
    pages: [
      { text: "Finn knocked over his sister's painting by accident. It was ruined.", emoji: '🙏', detailEmoji: '🎨', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "His first thought was to walk away and hope she didn't notice.", emoji: '🙏', detailEmoji: '😟', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "But his chest felt heavy. He found his sister and said: 'I'm really, really sorry.'", emoji: '🙏', detailEmoji: '😢', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "She was upset — but she felt better hearing his sorry. They repainted it together.", emoji: '🙏', detailEmoji: '🖌️', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "The heavy feeling in Finn's chest lifted the moment the words came out.", emoji: '🙏', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 135, title: 'Trying New Foods', category: 'lifestyle', coverEmoji: '🥗', accentColor: '#00ACC1', readTime: 2,
    keywords: ['try', 'taste', 'new', 'brave', 'yum'],
    pages: [
      { text: "Tonight's dinner had something on the plate that Mia had never seen before.", emoji: '🥗', detailEmoji: '😬', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "It was green and shiny and smelled a bit strange. 'What IS it?' she asked.", emoji: '🥗', detailEmoji: '🥦', scene: 'home', topColor: '#2D6A4F', bottomColor: '#40916C' },
      { text: "'Try one bite,' said Dad. 'If you hate it, that's fine. But try.'", emoji: '🥗', detailEmoji: '🍴', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Mia took a very small bite. It was... crunchy? And actually not bad?", emoji: '🥗', detailEmoji: '🤔', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "'Can I have more?' she said. Dad smiled the biggest smile she had ever seen.", emoji: '🥗', detailEmoji: '😄', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 136, title: 'Being Gentle with Pets', category: 'lifestyle', coverEmoji: '🐱', accentColor: '#00ACC1', readTime: 2,
    keywords: ['gentle', 'pet', 'soft', 'care', 'animal'],
    pages: [
      { text: "The family got a new kitten called Biscuit. She was tiny and a little bit scared.", emoji: '🐱', detailEmoji: '🏠', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Jake wanted to pick her up straight away — but Mum said wait.", emoji: '🐱', detailEmoji: '🤚', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "'Let her come to you. Sit very still and very quiet and let her decide.'", emoji: '🐱', detailEmoji: '🤫', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Jake sat still for five whole minutes. Then Biscuit walked over and sniffed his hand.", emoji: '🐱', detailEmoji: '🐾', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "She climbed into his lap and purred. Jake had never felt so trusted.", emoji: '🐱', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 137, title: 'Being a Good Sport', category: 'lifestyle', coverEmoji: '🏆', accentColor: '#00ACC1', readTime: 2,
    keywords: ['sport', 'lose', 'win', 'fair', 'try'],
    pages: [
      { text: "Sofia lost the race at Sports Day. She had trained so hard and come second.", emoji: '🏆', detailEmoji: '🏅', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "She really, really wanted to cry. She felt the tears coming.", emoji: '🏆', detailEmoji: '😢', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "She took a big breath. She walked over to Priya who had won. 'Well done.'", emoji: '🏆', detailEmoji: '🤝', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Priya said 'Your start was faster than mine. You nearly had me!'", emoji: '🏆', detailEmoji: '😊', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Being a good sport felt better than crying — and harder, and also much braver.", emoji: '🏆', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 138, title: 'Getting Dressed by Myself', category: 'lifestyle', coverEmoji: '👕', accentColor: '#00ACC1', readTime: 2,
    keywords: ['dress', 'myself', 'button', 'proud', 'independent'],
    pages: [
      { text: "Every morning Mum used to help Oscar get dressed. Today, he wanted to do it himself.", emoji: '👕', detailEmoji: '🌅', scene: 'home', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "He pulled on his jumper — inside out. He turned it around. That's better!", emoji: '👕', detailEmoji: '😅', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "The buttons were hard. First try — wrong holes. Second try — still wrong.", emoji: '👕', detailEmoji: '😤', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Third try — every button in the right hole! He checked in the mirror.", emoji: '👕', detailEmoji: '🪞', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "'I did it!' he shouted. He ran downstairs feeling ten feet tall.", emoji: '👕', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 139, title: 'Quiet Time', category: 'lifestyle', coverEmoji: '🤫', accentColor: '#00ACC1', readTime: 2,
    keywords: ['quiet', 'rest', 'calm', 'breathe', 'peace'],
    pages: [
      { text: "After a very busy, noisy morning, Mum said: 'Time for quiet time.'", emoji: '🤫', detailEmoji: '🌿', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Lily groaned. Quiet time was boring! She wanted to keep playing!", emoji: '🤫', detailEmoji: '😤', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "She lay on her bed and stared at the ceiling. A fly walked across it very slowly.", emoji: '🤫', detailEmoji: '🪰', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "She watched clouds through the window. She counted her breaths. She felt sleepy.", emoji: '🤫', detailEmoji: '☁️', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "She woke up twenty minutes later feeling full of energy. Quiet time was actually quite good.", emoji: '🤫', detailEmoji: '✨', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 140, title: 'Holding the Door Open', category: 'lifestyle', coverEmoji: '🚪', accentColor: '#00ACC1', readTime: 2,
    keywords: ['door', 'helpful', 'polite', 'notice', 'kind'],
    pages: [
      { text: "Nora was rushing out of the shop when she noticed an old man walking slowly behind.", emoji: '🚪', detailEmoji: '🏪', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "She stopped and held the door open. He had three shopping bags and a walking stick.", emoji: '🚪', detailEmoji: '🛍️', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "'Thank you, young lady,' he said, and his face lit up completely.", emoji: '🚪', detailEmoji: '😊', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Nora felt a warm glow in her chest that lasted the rest of the afternoon.", emoji: '🚪', detailEmoji: '☀️', scene: 'meadow', topColor: '#FFF9C4', bottomColor: '#FFF176' },
      { text: "Small kindnesses take five seconds and last all day — both ways.", emoji: '🚪', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 141, title: 'Using a Tissue', category: 'lifestyle', coverEmoji: '🤧', accentColor: '#00ACC1', readTime: 2,
    keywords: ['tissue', 'sneeze', 'cover', 'germ', 'healthy'],
    pages: [
      { text: "Tom felt a big sneeze coming. He looked around for a tissue.", emoji: '🤧', detailEmoji: '🌬️', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "He grabbed one just in time — achoo! Into the tissue, not into the air.", emoji: '🤧', detailEmoji: '✅', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "He folded the tissue and put it in the bin. Then he washed his hands.", emoji: '🤧', detailEmoji: '🧼', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "'Good job,' said Dad. 'Covering your sneeze means you share your kindness, not your germs.'", emoji: '🤧', detailEmoji: '👍', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Tom liked that idea. He was a sneeze-covering, germ-stopping, tissue-using champion.", emoji: '🤧', detailEmoji: '🏆', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 142, title: 'Putting on Sunscreen', category: 'lifestyle', coverEmoji: '☀️', accentColor: '#00ACC1', readTime: 2,
    keywords: ['sunscreen', 'sun', 'protect', 'skin', 'outside'],
    pages: [
      { text: "It was a brilliant sunny beach day. Mia wanted to run straight to the water.", emoji: '☀️', detailEmoji: '🏖️', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "'Sunscreen first!' said Mum, holding out the white bottle.", emoji: '☀️', detailEmoji: '🧴', scene: 'meadow', topColor: '#FFF9C4', bottomColor: '#FFF176' },
      { text: "Mia held still while Mum rubbed it on her nose, cheeks, arms and legs.", emoji: '☀️', detailEmoji: '🤍', scene: 'meadow', topColor: '#FFE082', bottomColor: '#FFD54F' },
      { text: "'The sun is strong. Your skin is precious. This keeps you safe to play all day.'", emoji: '☀️', detailEmoji: '🌞', scene: 'sky', topColor: '#FFD700', bottomColor: '#FFA000' },
      { text: "Mia played all day and didn't go red. Sunscreen was actually pretty clever.", emoji: '☀️', detailEmoji: '😄', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 143, title: 'Remembering My Manners', category: 'lifestyle', coverEmoji: '😊', accentColor: '#00ACC1', readTime: 2,
    keywords: ['manners', 'please', 'thank you', 'polite', 'kind'],
    pages: [
      { text: "Grandpa always said: 'Please and thank you — the two most powerful words in the world.'", emoji: '😊', detailEmoji: '👴', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "At the bakery, Finn said 'please' for his bun. The baker gave him an extra one!", emoji: '😊', detailEmoji: '🥐', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "At school, he said 'thank you' to the dinner lady. She smiled so warmly.", emoji: '😊', detailEmoji: '🍽️', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "He held the gate for a younger child. He said 'sorry' when he bumped into someone.", emoji: '😊', detailEmoji: '🚪', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "At bedtime, Grandpa winked. 'Manners cost nothing — and they make everything better.'", emoji: '😊', detailEmoji: '⭐', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 144, title: 'Taking Care of My Toys', category: 'lifestyle', coverEmoji: '🧩', accentColor: '#00ACC1', readTime: 2,
    keywords: ['toys', 'care', 'tidy', 'respect', 'last'],
    pages: [
      { text: "Lena had a beautiful wooden puzzle that Grandpa had carved for her.", emoji: '🧩', detailEmoji: '🪵', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "She always put the pieces back in the box and kept them dry and clean.", emoji: '🧩', detailEmoji: '📦', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Her friend Ben had a similar puzzle — but he left it in the rain.", emoji: '🧩', detailEmoji: '🌧️', scene: 'sky', topColor: '#546E7A', bottomColor: '#78909C' },
      { text: "Ben's puzzle warped and wouldn't fit together anymore. He was very sad.", emoji: '🧩', detailEmoji: '😢', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Looking after your things means they last — and that shows you are grateful for them.", emoji: '🧩', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 145, title: 'Turning Off the Lights', category: 'lifestyle', coverEmoji: '💡', accentColor: '#00ACC1', readTime: 2,
    keywords: ['light', 'energy', 'save', 'Earth', 'switch'],
    pages: [
      { text: "Dad had a rule: last one out of a room turns off the light.", emoji: '💡', detailEmoji: '🔌', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Rosie kept forgetting. The hallway light. The bathroom light. The kitchen light.", emoji: '💡', detailEmoji: '😅', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Dad explained: 'Every light left on uses power from the Earth. We should use just what we need.'", emoji: '💡', detailEmoji: '🌍', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Rosie started a game — sneaking around the house spotting lights to switch off.", emoji: '💡', detailEmoji: '🕵️', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Taking care of the Earth was easier than she thought — one switch at a time.", emoji: '💡', detailEmoji: '🌿', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },

  // ── ANIMALS 146-158 ──────────────────────────────────────────────────────
  {
    id: 146, title: 'Maya the Monkey', category: 'animals', coverEmoji: '🐒', accentColor: '#FF8F00', readTime: 3,
    keywords: ['monkey', 'swing', 'jungle', 'curious', 'explore'],
    pages: [
      { text: "Maya the monkey swung from tree to tree in the green and dripping jungle.", emoji: '🐒', detailEmoji: '🌿', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "She was the most curious monkey in the whole troop — always investigating something.", emoji: '🐒', detailEmoji: '🔍', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#40916C' },
      { text: "Today she found a hollow log full of buzzing beetles — she watched for an hour!", emoji: '🐒', detailEmoji: '🪲', scene: 'forest', topColor: '#40916C', bottomColor: '#52B788' },
      { text: "She found a waterfall and swung out over it, dangling above the cool spray.", emoji: '🐒', detailEmoji: '💧', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "Curious eyes see a world full of wonders. Maya would never run out of things to find.", emoji: '🐒', detailEmoji: '⭐', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 147, title: 'Dipper the Dolphin', category: 'animals', coverEmoji: '🐬', accentColor: '#00ACC1', readTime: 3,
    keywords: ['dolphin', 'swim', 'jump', 'play', 'wave'],
    pages: [
      { text: "Dipper the dolphin loved to race alongside big boats and leap out of the waves.", emoji: '🐬', detailEmoji: '🚢', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "He could jump so high he could see the mountains on the faraway shore.", emoji: '🐬', detailEmoji: '⛰️', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "He clicked and whistled to his pod — six other dolphins joined the game.", emoji: '🐬', detailEmoji: '🎵', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "They swam in formation, spinning and flipping, leaving white foam trails.", emoji: '🐬', detailEmoji: '🌊', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "Joy is contagious — especially when you are a dolphin on a sparkling sea.", emoji: '🐬', detailEmoji: '✨', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 148, title: 'Goldie the Goldfish', category: 'animals', coverEmoji: '🐟', accentColor: '#FF8F00', readTime: 2,
    keywords: ['fish', 'bowl', 'swim', 'circle', 'content'],
    pages: [
      { text: "Goldie swam around her bowl — left, right, up, down — and she loved every inch of it.", emoji: '🐟', detailEmoji: '🫧', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "Her bowl had a pretty pink pebble, one green plant, and a little yellow castle.", emoji: '🐟', detailEmoji: '🏰', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "Twice a day a hand appeared and tiny flakes floated down like delicious snow.", emoji: '🐟', detailEmoji: '❄️', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "People said fish had no memory — but Goldie remembered every single mealtime.", emoji: '🐟', detailEmoji: '😄', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "Goldie's world was small and she was completely, perfectly happy in it.", emoji: '🐟', detailEmoji: '🌟', scene: 'night', topColor: '#03045E', bottomColor: '#023E8A' },
    ],
  },
  {
    id: 149, title: 'Kami the Kangaroo', category: 'animals', coverEmoji: '🦘', accentColor: '#D4A373', readTime: 3,
    keywords: ['kangaroo', 'pouch', 'joey', 'hop', 'safe'],
    pages: [
      { text: "Inside Mama Kangaroo's warm pouch lived a tiny joey named Kami.", emoji: '🦘', detailEmoji: '🌿', scene: 'meadow', topColor: '#D4A373', bottomColor: '#CCD5AE' },
      { text: "He peeked out with his big brown eyes at the vast, sunlit Australian bush.", emoji: '🦘', detailEmoji: '🌅', scene: 'meadow', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "The world looked enormous. But inside the pouch it was warm and heartbeat-close.", emoji: '🦘', detailEmoji: '❤️', scene: 'meadow', topColor: '#C9A84C', bottomColor: '#E9C46A' },
      { text: "One day his paws touched the ground. He took his first wobbly hop.", emoji: '🦘', detailEmoji: '🌱', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Mama was always right behind him. That made the enormous world feel just the right size.", emoji: '🦘', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 150, title: 'Blu the Blue Jay', category: 'animals', coverEmoji: '🐦', accentColor: '#1976D2', readTime: 3,
    keywords: ['blue jay', 'call', 'warn', 'brave', 'protect'],
    pages: [
      { text: "Blu the blue jay had the loudest voice in the whole forest — and he used it well.", emoji: '🐦', detailEmoji: '📢', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "When a hawk appeared, Blu called out: ALERT! ALERT! Every bird heard and hid.", emoji: '🐦', detailEmoji: '🦅', scene: 'sky', topColor: '#64B5F6', bottomColor: '#42A5F5' },
      { text: "The squirrels and rabbits heard it too. They dived for cover in the undergrowth.", emoji: '🐦', detailEmoji: '🐿️', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#40916C' },
      { text: "The hawk circled and then flew away. The forest let out a quiet sigh of relief.", emoji: '🐦', detailEmoji: '🌿', scene: 'forest', topColor: '#40916C', bottomColor: '#52B788' },
      { text: "Blu ruffled his bright blue feathers. Looking out for others was his finest purpose.", emoji: '🐦', detailEmoji: '💙', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 151, title: 'Pepper the Porcupine', category: 'animals', coverEmoji: '🦔', accentColor: '#795548', readTime: 3,
    keywords: ['porcupine', 'quills', 'protect', 'gentle', 'friend'],
    pages: [
      { text: "Pepper the porcupine had thousands of sharp quills — and the softest heart.", emoji: '🦔', detailEmoji: '💕', scene: 'forest', topColor: '#1B4332', bottomColor: '#2D6A4F' },
      { text: "Animals were scared to get close. Pepper ate her berries alone every day.", emoji: '🦔', detailEmoji: '🍇', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#40916C' },
      { text: "Then a badger named Bruno said: 'If I stand beside you — not too close — can we eat together?'", emoji: '🦔', detailEmoji: '🦡', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Pepper said yes. Bruno stood an arm's length away. They ate in comfortable quiet.", emoji: '🦔', detailEmoji: '🫐', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "A true friend finds a way to be close — even if close looks a little different.", emoji: '🦔', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 152, title: 'Iggy the Iguana', category: 'animals', coverEmoji: '🦎', accentColor: '#43A047', readTime: 3,
    keywords: ['iguana', 'sun', 'warm', 'still', 'patient'],
    pages: [
      { text: "Iggy the iguana's favourite hobby was doing absolutely nothing on a warm rock.", emoji: '🦎', detailEmoji: '☀️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "He sat so still that birds landed on him, thinking he was part of the rock.", emoji: '🦎', detailEmoji: '🐦', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "He watched the whole world with his ancient, golden eyes. Nothing escaped him.", emoji: '🦎', detailEmoji: '👁️', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "A fly. A lizard. A distant hawk. A child with an ice cream. He saw everything.", emoji: '🦎', detailEmoji: '🍦', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Stillness is not emptiness. It is the deepest kind of watching.", emoji: '🦎', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 153, title: 'Rex the Red Fox', category: 'animals', coverEmoji: '🦊', accentColor: '#E64A19', readTime: 3,
    keywords: ['fox', 'clever', 'night', 'hunt', 'adapt'],
    pages: [
      { text: "Rex the red fox came out at dusk, his coat glowing like a small ember in the fading light.", emoji: '🦊', detailEmoji: '🌆', scene: 'sunset', topColor: '#FF6B35', bottomColor: '#FF9F1C' },
      { text: "He lived at the edge of town — half in the wild, half in the human world.", emoji: '🦊', detailEmoji: '🏙️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "He trotted past lit windows where families were eating dinner. He could smell everything.", emoji: '🦊', detailEmoji: '🍖', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "He found beetles, berries, and a crust of bread someone had left for him.", emoji: '🦊', detailEmoji: '🍞', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Rex curled his tail around himself under the old oak and slept until sunrise.", emoji: '🦊', detailEmoji: '🌅', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#40916C' },
    ],
  },
  {
    id: 154, title: 'Simba the Lion Cub', category: 'animals', coverEmoji: '🦁', accentColor: '#FFD600', readTime: 3,
    keywords: ['lion', 'roar', 'cub', 'grow', 'brave'],
    pages: [
      { text: "Simba the lion cub practised his roar every morning — but it came out as a squeak.", emoji: '🦁', detailEmoji: '😂', scene: 'meadow', topColor: '#D4A373', bottomColor: '#CCD5AE' },
      { text: "The meerkats giggled. Even the butterflies seemed to flutter away in amusement.", emoji: '🦁', detailEmoji: '🦋', scene: 'meadow', topColor: '#C9A84C', bottomColor: '#E9C46A' },
      { text: "Papa Lion lay down beside him. 'Your roar will come. Keep practising.'", emoji: '🦁', detailEmoji: '🌅', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "Day after day Simba practised. Squeak. Squeak. Squeak... ROAR!", emoji: '🦁', detailEmoji: '⚡', scene: 'meadow', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
      { text: "The whole savanna went quiet. Simba had found his voice — and it was magnificent.", emoji: '🦁', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF6B35', bottomColor: '#FF9F1C' },
    ],
  },
  {
    id: 155, title: 'Gerry the Giraffe', category: 'animals', coverEmoji: '🦒', accentColor: '#FF8F00', readTime: 3,
    keywords: ['giraffe', 'tall', 'reach', 'help', 'high'],
    pages: [
      { text: "Gerry the giraffe was the tallest animal in the whole savanna — by a very long neck.", emoji: '🦒', detailEmoji: '🌳', scene: 'meadow', topColor: '#D4A373', bottomColor: '#CCD5AE' },
      { text: "He could eat leaves from the very top of the acacia tree that no one else could reach.", emoji: '🦒', detailEmoji: '🍃', scene: 'meadow', topColor: '#C9A84C', bottomColor: '#E9C46A' },
      { text: "One day a little bird's nest blew up into the highest branch in a storm.", emoji: '🦒', detailEmoji: '🐦', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "Gerry stretched his long neck up — up — up — and gently lifted the nest back down.", emoji: '🦒', detailEmoji: '🪹', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Being different can mean being exactly what someone else needs.", emoji: '🦒', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 156, title: 'Ollie the Octopus', category: 'animals', coverEmoji: '🐙', accentColor: '#9C27B0', readTime: 3,
    keywords: ['octopus', 'arms', 'colour', 'hide', 'clever'],
    pages: [
      { text: "Ollie the octopus had eight arms and could change colour in the blink of an eye.", emoji: '🐙', detailEmoji: '🌈', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "When he was scared: grey as a rock. When he was happy: bright orange.", emoji: '🐙', detailEmoji: '🪨', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "When he was curious: electric blue. When he was sleepy: dusty purple.", emoji: '🐙', detailEmoji: '💤', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "A crab asked: 'How do you do that?' Ollie said: 'I feel it — then I show it.'", emoji: '🐙', detailEmoji: '🦀', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "Feelings are meant to be shown — Ollie had just found a more colourful way.", emoji: '🐙', detailEmoji: '🌟', scene: 'night', topColor: '#03045E', bottomColor: '#023E8A' },
    ],
  },
  {
    id: 157, title: 'Penny the Polar Bear', category: 'animals', coverEmoji: '🐻‍❄️', accentColor: '#B0BEC5', readTime: 3,
    keywords: ['polar bear', 'ice', 'swim', 'cold', 'strong'],
    pages: [
      { text: "Penny the polar bear cub took her first swim in the Arctic ocean.", emoji: '🐻‍❄️', detailEmoji: '🧊', scene: 'snow', topColor: '#CAF0F8', bottomColor: '#ADE8F4' },
      { text: "The water was shockingly cold — but her thick fur and fat kept her warm inside.", emoji: '🐻‍❄️', detailEmoji: '❄️', scene: 'snow', topColor: '#90E0EF', bottomColor: '#CAF0F8' },
      { text: "She paddled with all four paws, her huge feet acting like paddles.", emoji: '🐻‍❄️', detailEmoji: '🌊', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "She climbed onto an ice floe and shook herself dry, spraying ice-cold droplets.", emoji: '🐻‍❄️', detailEmoji: '💧', scene: 'snow', topColor: '#ADE8F4', bottomColor: '#90E0EF' },
      { text: "Mama watched proudly. Penny was born for this world — cold, wild and beautiful.", emoji: '🐻‍❄️', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 158, title: 'Hummy the Hummingbird', category: 'animals', coverEmoji: '🌸', accentColor: '#E91E63', readTime: 3,
    keywords: ['hummingbird', 'fast', 'wings', 'nectar', 'flower'],
    pages: [
      { text: "Hummy the hummingbird beat her wings so fast they were almost invisible.", emoji: '🌸', detailEmoji: '💨', scene: 'meadow', topColor: '#F8BBD9', bottomColor: '#F48FB1' },
      { text: "Sixty times a second — whirring like a tiny feathered helicopter.", emoji: '🌸', detailEmoji: '🚁', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "She hovered at a red flower and dipped her long beak into the sweet nectar.", emoji: '🌸', detailEmoji: '🌺', scene: 'meadow', topColor: '#F48FB1', bottomColor: '#F06292' },
      { text: "Without her, the flowers could not make seeds. Without them, she had no food.", emoji: '🌸', detailEmoji: '🌻', scene: 'meadow', topColor: '#FFF176', bottomColor: '#FFF9C4' },
      { text: "The tiniest creatures can hold up the biggest parts of the world.", emoji: '🌸', detailEmoji: '🌍', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },

  // ── FANTASY 159-168 ──────────────────────────────────────────────────────
  {
    id: 159, title: 'The Book That Read Itself', category: 'fantasy', coverEmoji: '📚', accentColor: '#7B1FA2', readTime: 3,
    keywords: ['book', 'magic', 'read', 'words', 'story'],
    pages: [
      { text: "On the top shelf was a book that had never been opened — and it was getting impatient.", emoji: '📚', detailEmoji: '📖', scene: 'home', topColor: '#4A148C', bottomColor: '#6A1B9A' },
      { text: "One night it flipped open by itself and began to read aloud in a papery whisper.", emoji: '📚', detailEmoji: '✨', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "A girl named Willa woke up and crept downstairs to listen.", emoji: '📚', detailEmoji: '🕯️', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "The book told the story of a girl — just like Willa — who would one day do great things.", emoji: '📚', detailEmoji: '🌟', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "She closed it softly. She knew the story wasn't finished yet — she had to write the rest.", emoji: '📚', detailEmoji: '✏️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 160, title: 'The Tiny Kingdom in the Flowerpot', category: 'fantasy', coverEmoji: '🌺', accentColor: '#E91E63', readTime: 3,
    keywords: ['tiny', 'kingdom', 'flowerpot', 'small', 'wonder'],
    pages: [
      { text: "In the old terracotta pot on the windowsill lived an entire tiny kingdom.", emoji: '🌺', detailEmoji: '🏰', scene: 'meadow', topColor: '#F48FB1', bottomColor: '#F06292' },
      { text: "The king was a beetle, the queen a ladybird, and the court was full of ants.", emoji: '🌺', detailEmoji: '🐞', scene: 'meadow', topColor: '#CE93D8', bottomColor: '#BA68C8' },
      { text: "A caterpillar served as royal librarian. A firefly lit the evening ceremonies.", emoji: '🌺', detailEmoji: '✨', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "They had tiny wars about aphids and grand festivals for every new flower.", emoji: '🌺', detailEmoji: '🌸', scene: 'meadow', topColor: '#F8BBD9', bottomColor: '#F48FB1' },
      { text: "All of this happened every day, right on the windowsill — if you looked closely enough.", emoji: '🌺', detailEmoji: '🔍', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
    ],
  },
  {
    id: 161, title: 'The Invisible Crown', category: 'fantasy', coverEmoji: '👑', accentColor: '#FFD600', readTime: 3,
    keywords: ['crown', 'invisible', 'kind', 'earn', 'deserve'],
    pages: [
      { text: "The wise queen said every person was born with an invisible crown on their head.", emoji: '👑', detailEmoji: '✨', scene: 'sky', topColor: '#FFD700', bottomColor: '#FFA000' },
      { text: "You couldn't see it — but you could always tell who was wearing theirs.", emoji: '👑', detailEmoji: '🌟', scene: 'sky', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
      { text: "People with their crowns on stood tall, spoke kindly, and helped without being asked.", emoji: '👑', detailEmoji: '❤️', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "People who forgot their crowns slouched, grabbed, and pushed to the front.", emoji: '👑', detailEmoji: '😟', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "'Put yours on every morning,' the queen said. 'It will remind you who you truly are.'", emoji: '👑', detailEmoji: '💛', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 162, title: 'The Star Catcher', category: 'fantasy', coverEmoji: '⭐', accentColor: '#3F51B5', readTime: 3,
    keywords: ['star', 'catch', 'jar', 'wish', 'night'],
    pages: [
      { text: "On the night of the meteor shower, Eli ran outside with an old jam jar.", emoji: '⭐', detailEmoji: '🫙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "He held it up to the sky as shooting stars streaked past — and something landed inside!", emoji: '⭐', detailEmoji: '✨', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "A tiny glowing spark, no bigger than a pea, sitting at the bottom of the jar.", emoji: '⭐', detailEmoji: '💫', scene: 'night', topColor: '#0A0A1E', bottomColor: '#1A1A2E' },
      { text: "It made no sound but somehow told him: you are seen, you are loved, keep going.", emoji: '⭐', detailEmoji: '💛', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "He kept it on his windowsill. On hard nights, the tiny star was enough.", emoji: '⭐', detailEmoji: '🌙', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
    ],
  },
  {
    id: 163, title: "The Mermaid's Pearl", category: 'fantasy', coverEmoji: '🧜', accentColor: '#00ACC1', readTime: 3,
    keywords: ['mermaid', 'pearl', 'ocean', 'treasure', 'gift'],
    pages: [
      { text: "Marina the mermaid found a perfect white pearl in the deepest part of the reef.", emoji: '🧜', detailEmoji: '🪸', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "It glowed faintly with its own inner light — warm as a small moon.", emoji: '🧜', detailEmoji: '🌕', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "She carried it home and placed it at the entrance to her sea-cave.", emoji: '🧜', detailEmoji: '🏠', scene: 'cave', topColor: '#37474F', bottomColor: '#455A64' },
      { text: "Lost fish followed its light home. Scared sea creatures sheltered near it.", emoji: '🧜', detailEmoji: '🐠', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "The best treasures aren't kept — they're shared until they light the whole sea.", emoji: '🧜', detailEmoji: '✨', scene: 'night', topColor: '#03045E', bottomColor: '#023E8A' },
    ],
  },
  {
    id: 164, title: 'The Garden of Talking Flowers', category: 'fantasy', coverEmoji: '🌻', accentColor: '#FF8F00', readTime: 3,
    keywords: ['flower', 'talk', 'listen', 'garden', 'secret'],
    pages: [
      { text: "In the old walled garden, the flowers only talked to children who sat very still.", emoji: '🌻', detailEmoji: '🌸', scene: 'meadow', topColor: '#FFF176', bottomColor: '#FFF9C4' },
      { text: "The roses whispered love stories. The lavender murmured old lullabies.", emoji: '🌻', detailEmoji: '🌹', scene: 'meadow', topColor: '#F48FB1', bottomColor: '#F06292' },
      { text: "The sunflowers told jokes. The daisies gave excellent advice about being happy.", emoji: '🌻', detailEmoji: '🌼', scene: 'meadow', topColor: '#FFF9C4', bottomColor: '#FFF176' },
      { text: "A boy named Cal sat in the garden every afternoon after school, just listening.", emoji: '🌻', detailEmoji: '🧒', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "He never told anyone. Some magic is better kept as your own special secret.", emoji: '🌻', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 165, title: 'The Cloud Shepherd', category: 'fantasy', coverEmoji: '⛅', accentColor: '#90CAF9', readTime: 3,
    keywords: ['cloud', 'shepherd', 'sky', 'rain', 'tend'],
    pages: [
      { text: "High above the world, the Cloud Shepherd guided his fluffy flock across the sky.", emoji: '⛅', detailEmoji: '☁️', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "He led the cumulus clouds over dry farms that needed rain.", emoji: '⛅', detailEmoji: '🌧️', scene: 'sky', topColor: '#64B5F6', bottomColor: '#42A5F5' },
      { text: "He kept the big thunderclouds away from seaside towns on market day.", emoji: '⛅', detailEmoji: '⛈️', scene: 'sky', topColor: '#546E7A', bottomColor: '#78909C' },
      { text: "At sunset he painted the stray clouds pink and gold with his long brush.", emoji: '⛅', detailEmoji: '🎨', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "Most people thought the sky just happened. They never guessed it was lovingly tended.", emoji: '⛅', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 166, title: 'The Forgotten Spell', category: 'fantasy', coverEmoji: '🪄', accentColor: '#9C27B0', readTime: 3,
    keywords: ['spell', 'forget', 'kindness', 'remember', 'magic'],
    pages: [
      { text: "Young wizard Pip forgot the spell he had spent a week memorising.", emoji: '🪄', detailEmoji: '📜', scene: 'home', topColor: '#4A148C', bottomColor: '#6A1B9A' },
      { text: "At the wizard's exam, he opened his mouth — and nothing came out.", emoji: '🪄', detailEmoji: '😬', scene: 'home', topColor: '#6A1B9A', bottomColor: '#7B1FA2' },
      { text: "He looked at the examiner and said honestly: 'I've forgotten. I'm sorry.'", emoji: '🪄', detailEmoji: '🙏', scene: 'home', topColor: '#7B1FA2', bottomColor: '#8E24AA' },
      { text: "The examiner smiled. 'The spell we look for most is honesty. You just cast it.'", emoji: '🪄', detailEmoji: '✨', scene: 'home', topColor: '#6A1B9A', bottomColor: '#7B1FA2' },
      { text: "Pip passed. He never forgot that the most powerful magic is truth.", emoji: '🪄', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 167, title: 'The Dragon Who Was Afraid of Dark', category: 'fantasy', coverEmoji: '🐉', accentColor: '#FF5722', readTime: 3,
    keywords: ['dragon', 'afraid', 'dark', 'brave', 'light'],
    pages: [
      { text: "Drake the dragon breathed fire — but was secretly terrified of the dark.", emoji: '🐉', detailEmoji: '🌑', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Every night he lit his cave with his own fire just to feel safe.", emoji: '🐉', detailEmoji: '🔥', scene: 'cave', topColor: '#455A64', bottomColor: '#546E7A' },
      { text: "A small mouse named Pip heard about this and brought him a tiny glowing lantern.", emoji: '🐉', detailEmoji: '🏮', scene: 'cave', topColor: '#37474F', bottomColor: '#455A64' },
      { text: "'Even the bravest creatures have fears,' said Pip. 'That's what makes courage real.'", emoji: '🐉', detailEmoji: '🐭', scene: 'cave', topColor: '#455A64', bottomColor: '#607D8B' },
      { text: "Drake slept with the lantern glowing softly. He felt brave and understood both at once.", emoji: '🐉', detailEmoji: '💛', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 168, title: 'The River of Dreams', category: 'fantasy', coverEmoji: '🌊', accentColor: '#7986CB', readTime: 3,
    keywords: ['river', 'dream', 'sleep', 'float', 'peaceful'],
    pages: [
      { text: "They say that when you fall asleep, a silver river carries you away.", emoji: '🌊', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "You lie in a tiny boat made of cloud and drift with the current of night.", emoji: '🌊', detailEmoji: '⭐', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "Around each bend is a different dream — some funny, some wild, some soft.", emoji: '🌊', detailEmoji: '✨', scene: 'night', topColor: '#0A0A1E', bottomColor: '#1A1A2E' },
      { text: "You cannot choose where the river takes you — but it always brings you home.", emoji: '🌊', detailEmoji: '💤', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Close your eyes. The river is waiting. Let go and float.", emoji: '🌊', detailEmoji: '🌟', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
    ],
  },

  // ── ADVENTURE 169-174 ────────────────────────────────────────────────────
  {
    id: 169, title: 'The Backyard Expedition', category: 'adventure', coverEmoji: '🔭', accentColor: '#43A047', readTime: 3,
    keywords: ['explore', 'backyard', 'discover', 'nature', 'close'],
    pages: [
      { text: "Tom declared that today the backyard was an unexplored continent.", emoji: '🔭', detailEmoji: '🗺️', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "He found a roly-poly bug that curled into a ball at the gentlest touch.", emoji: '🔭', detailEmoji: '🪲', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "He found a mushroom ring that he was certain was a fairy landing pad.", emoji: '🔭', detailEmoji: '🍄', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#40916C' },
      { text: "He found a worm so long he measured it against his arm — a whole forearm!", emoji: '🔭', detailEmoji: '🐛', scene: 'meadow', topColor: '#A8DADC', bottomColor: '#74C69D' },
      { text: "Adventure doesn't need an aeroplane. Sometimes it just needs a magnifying glass.", emoji: '🔭', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 170, title: 'The Lighthouse at the Edge', category: 'adventure', coverEmoji: '🗼', accentColor: '#EF5350', readTime: 3,
    keywords: ['lighthouse', 'keeper', 'light', 'guide', 'safe'],
    pages: [
      { text: "At the edge of the rocky coast stood a tall striped lighthouse.", emoji: '🗼', detailEmoji: '🌊', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "Inside lived old keeper Magda, who climbed the spiral stairs every night.", emoji: '🗼', detailEmoji: '🕯️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "She lit the great lamp and watched its beam sweep out over the dark waves.", emoji: '🗼', detailEmoji: '✨', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "A fishing boat, far out to sea, turned toward the light and found its way home.", emoji: '🗼', detailEmoji: '⛵', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "Being the one who keeps the light burning — that is one of the finest jobs of all.", emoji: '🗼', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 171, title: 'The Mountain Summit', category: 'adventure', coverEmoji: '⛰️', accentColor: '#78909C', readTime: 3,
    keywords: ['mountain', 'climb', 'summit', 'effort', 'view'],
    pages: [
      { text: "Finn and his mum had been walking uphill for three whole hours.", emoji: '⛰️', detailEmoji: '🥾', scene: 'snow', topColor: '#B0BEC5', bottomColor: '#CFD8DC' },
      { text: "His legs ached. His pack felt like boulders. 'Can we stop?' he asked.", emoji: '⛰️', detailEmoji: '😮‍💨', scene: 'snow', topColor: '#90A4AE', bottomColor: '#B0BEC5' },
      { text: "'Five more minutes,' said Mum. 'I promise it's worth it.'", emoji: '⛰️', detailEmoji: '⏱️', scene: 'snow', topColor: '#78909C', bottomColor: '#90A4AE' },
      { text: "They pushed through the cloud — and burst out into blazing sunshine above it all.", emoji: '⛰️', detailEmoji: '☀️', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "Mountains and clouds and sky in every direction. Finn stopped aching completely.", emoji: '⛰️', detailEmoji: '🌟', scene: 'sky', topColor: '#64B5F6', bottomColor: '#42A5F5' },
    ],
  },
  {
    id: 172, title: 'The Coral Treasure Hunt', category: 'adventure', coverEmoji: '🤿', accentColor: '#00ACC1', readTime: 3,
    keywords: ['snorkel', 'reef', 'find', 'explore', 'underwater'],
    pages: [
      { text: "With her snorkel and mask, Rosa slipped beneath the turquoise waves.", emoji: '🤿', detailEmoji: '🌊', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "Below her the reef was alive with colour: yellow tang, blue tang, purple anemone.", emoji: '🤿', detailEmoji: '🪸', scene: 'ocean', topColor: '#0077B6', bottomColor: '#0096C7' },
      { text: "She saw a sea turtle glide past like a silent green spaceship.", emoji: '🤿', detailEmoji: '🐢', scene: 'ocean', topColor: '#023E8A', bottomColor: '#0077B6' },
      { text: "She found a bright orange starfish in a hollow of coral and left it perfectly alone.", emoji: '🤿', detailEmoji: '⭐', scene: 'ocean', topColor: '#0096C7', bottomColor: '#48CAE4' },
      { text: "The best treasure hunt ends with everything still in the right place.", emoji: '🤿', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 173, title: 'The Winter Sledge Race', category: 'adventure', coverEmoji: '🛷', accentColor: '#42A5F5', readTime: 3,
    keywords: ['sledge', 'snow', 'race', 'fast', 'laugh'],
    pages: [
      { text: "The hill was covered in perfect white snow — and Mia had the fastest sledge in town.", emoji: '🛷', detailEmoji: '❄️', scene: 'snow', topColor: '#E3F2FD', bottomColor: '#BBDEFB' },
      { text: "She pushed off and the world whooshed past in a blur of white and cold air.", emoji: '🛷', detailEmoji: '💨', scene: 'snow', topColor: '#BBDEFB', bottomColor: '#90CAF9' },
      { text: "She went so fast she could barely breathe — laughing and shrieking the whole way down.", emoji: '🛷', detailEmoji: '😂', scene: 'snow', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "She climbed back up and did it again. And again. And twelve more times after that.", emoji: '🛷', detailEmoji: '🌨️', scene: 'snow', topColor: '#ADE8F4', bottomColor: '#90E0EF' },
      { text: "She went home soaking wet, cheeks red, and happier than any dry day had ever made her.", emoji: '🛷', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 174, title: 'The Rainy Day Walk', category: 'adventure', coverEmoji: '🌧️', accentColor: '#5C6BC0', readTime: 3,
    keywords: ['rain', 'puddle', 'wellies', 'outside', 'splash'],
    pages: [
      { text: "It was raining hard. Dad said: 'Put your wellies on — we're going out.'", emoji: '🌧️', detailEmoji: '👟', scene: 'sky', topColor: '#546E7A', bottomColor: '#78909C' },
      { text: "The streets were rivers of rain. Leaves sailed past like little boats.", emoji: '🌧️', detailEmoji: '🍂', scene: 'meadow', topColor: '#78909C', bottomColor: '#90A4AE' },
      { text: "They jumped in every single puddle they could find — SPLASH! SPLASH! SPLASH!", emoji: '🌧️', detailEmoji: '💧', scene: 'meadow', topColor: '#90A4AE', bottomColor: '#B0BEC5' },
      { text: "They were completely soaked but they were laughing so hard it didn't matter.", emoji: '🌧️', detailEmoji: '😂', scene: 'sky', topColor: '#546E7A', bottomColor: '#607D8B' },
      { text: "Some of the best adventures happen when you refuse to wait for better weather.", emoji: '🌧️', detailEmoji: '🌈', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
    ],
  },

  // ── FRIENDSHIP 175-180 ───────────────────────────────────────────────────
  {
    id: 175, title: 'The Imaginary Friend', category: 'friendship', coverEmoji: '🌈', accentColor: '#AB47BC', readTime: 3,
    keywords: ['imaginary', 'friend', 'real', 'invisible', 'companion'],
    pages: [
      { text: "Lola had an imaginary friend named Zip who was three inches tall and very opinionated.", emoji: '🌈', detailEmoji: '✨', scene: 'home', topColor: '#CE93D8', bottomColor: '#BA68C8' },
      { text: "Zip sat on her shoulder at school and whispered encouraging things when tests were hard.", emoji: '🌈', detailEmoji: '📝', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "When Lola made a real friend named Bex, she worried Zip might feel left out.", emoji: '🌈', detailEmoji: '😟', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "But Zip was delighted. 'I've been waiting for you to need me less,' Zip whispered.", emoji: '🌈', detailEmoji: '💛', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Some friends are for when you have no one. Others are for after.", emoji: '🌈', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 176, title: 'Saying Sorry First', category: 'friendship', coverEmoji: '🕊️', accentColor: '#64B5F6', readTime: 3,
    keywords: ['sorry', 'first', 'brave', 'repair', 'friend'],
    pages: [
      { text: "After the argument, both Ana and Rosa were waiting for the other to say sorry first.", emoji: '🕊️', detailEmoji: '⏳', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "One day. Two days. Three days of silence and miserable mealtimes.", emoji: '🕊️', detailEmoji: '😶', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Ana decided she had been unhappy long enough. She knocked on Rosa's door.", emoji: '🕊️', detailEmoji: '🚪', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "'I'm sorry,' she said. 'I missed you.' Rosa burst into tears and said 'Me too.'", emoji: '🕊️', detailEmoji: '😢', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Being brave enough to go first is one of the kindest things you can do.", emoji: '🕊️', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 177, title: 'The Kindness Chain', category: 'friendship', coverEmoji: '🔗', accentColor: '#00ACC1', readTime: 3,
    keywords: ['kindness', 'chain', 'pass on', 'spread', 'ripple'],
    pages: [
      { text: "One morning, a stranger gave Lena his umbrella in the rain — and asked nothing back.", emoji: '🔗', detailEmoji: '☂️', scene: 'sky', topColor: '#546E7A', bottomColor: '#78909C' },
      { text: "That afternoon, Lena left a flower on her neighbour's doorstep for no reason.", emoji: '🔗', detailEmoji: '🌸', scene: 'meadow', topColor: '#F48FB1', bottomColor: '#F06292' },
      { text: "The neighbour baked a cake and gave it to the postman who looked tired.", emoji: '🔗', detailEmoji: '🍰', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "The postman whistled all day and helped an old lady carry her bag.", emoji: '🔗', detailEmoji: '👜', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "One umbrella in the morning had touched five lives by bedtime.", emoji: '🔗', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },

  // ── NATURE 178-182 ───────────────────────────────────────────────────────
  {
    id: 178, title: 'The Cherry Blossom Tree', category: 'nature', coverEmoji: '🌸', accentColor: '#F48FB1', readTime: 3,
    keywords: ['blossom', 'spring', 'beautiful', 'brief', 'petals'],
    pages: [
      { text: "Once a year the cherry blossom tree outside the window turned completely pink.", emoji: '🌸', detailEmoji: '🌸', scene: 'sky', topColor: '#F8BBD9', bottomColor: '#F48FB1' },
      { text: "It lasted exactly two weeks — sometimes only one if the wind blew hard.", emoji: '🌸', detailEmoji: '💨', scene: 'sky', topColor: '#F48FB1', bottomColor: '#F06292' },
      { text: "Yuki's family came outside and sat beneath it every year without fail.", emoji: '🌸', detailEmoji: '👨‍👩‍👧', scene: 'meadow', topColor: '#F8BBD9', bottomColor: '#F48FB1' },
      { text: "Pink petals fell like sweet snow onto their shoulders and hair.", emoji: '🌸', detailEmoji: '❄️', scene: 'meadow', topColor: '#CE93D8', bottomColor: '#BA68C8' },
      { text: "Things that don't last very long are often the most beautiful things of all.", emoji: '🌸', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 179, title: 'The Sleeping Bear', category: 'nature', coverEmoji: '🐻', accentColor: '#8D6E63', readTime: 3,
    keywords: ['bear', 'hibernate', 'sleep', 'winter', 'spring'],
    pages: [
      { text: "Before the first snow, the brown bear ate and ate — berries, fish, roots, honey.", emoji: '🐻', detailEmoji: '🍯', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#52B788' },
      { text: "She found a deep, dry cave and lined it with leaves and pine needles.", emoji: '🐻', detailEmoji: '🍃', scene: 'cave', topColor: '#455A64', bottomColor: '#546E7A' },
      { text: "She curled into a great furry ball and began the long sleep of winter.", emoji: '🐻', detailEmoji: '❄️', scene: 'snow', topColor: '#B0BEC5', bottomColor: '#CFD8DC' },
      { text: "Outside the snow fell and the world went white and quiet. She dreamed of salmon.", emoji: '🐻', detailEmoji: '🐟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "In spring she woke hungry and blinking — and the world was green and full again.", emoji: '🐻', detailEmoji: '🌱', scene: 'forest', topColor: '#2D6A4F', bottomColor: '#40916C' },
    ],
  },
  {
    id: 180, title: 'The Meadow at Night', category: 'nature', coverEmoji: '🌙', accentColor: '#3F51B5', readTime: 3,
    keywords: ['meadow', 'night', 'owl', 'fox', 'quiet'],
    pages: [
      { text: "When the sun goes down, the meadow doesn't go to sleep — it just changes shift.", emoji: '🌙', detailEmoji: '🌆', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Owls glide out silently. Moths flutter toward the moon. Foxes trot the old paths.", emoji: '🌙', detailEmoji: '🦉', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "Hedgehogs snuffle through the leaves. Bats trace their invisible loops above.", emoji: '🌙', detailEmoji: '🦇', scene: 'night', topColor: '#0A0A1E', bottomColor: '#1A1A2E' },
      { text: "The whole meadow hums and rustles with a quiet kind of busy.", emoji: '🌙', detailEmoji: '⭐', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Even while you sleep, the world is full of gentle, purposeful life.", emoji: '🌙', detailEmoji: '🌟', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
    ],
  },

  // ── FAMILY 181-185 ───────────────────────────────────────────────────────
  {
    id: 181, title: 'Baking with Grandma', category: 'family', coverEmoji: '🍪', accentColor: '#FF8F00', readTime: 3,
    keywords: ['bake', 'flour', 'grandma', 'mix', 'love'],
    pages: [
      { text: "Grandma's kitchen always smelled of warm butter and something sweet in the oven.", emoji: '🍪', detailEmoji: '🧈', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Today was biscuit day. Grace tied on an apron three sizes too big.", emoji: '🍪', detailEmoji: '🥄', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "They creamed the butter and sugar. They cracked the eggs — only a little shell.", emoji: '🍪', detailEmoji: '🥚', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "They rolled the dough and cut out stars and hearts and a very wonky fish.", emoji: '🍪', detailEmoji: '⭐', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "The best biscuits taste of flour and sugar and an afternoon with Grandma.", emoji: '🍪', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 182, title: "Dad's Workshop", category: 'family', coverEmoji: '🔨', accentColor: '#795548', readTime: 3,
    keywords: ['workshop', 'make', 'wood', 'Dad', 'create'],
    pages: [
      { text: "Dad's workshop smelled of sawdust and oil and something being made.", emoji: '🔨', detailEmoji: '🪵', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "He let Isla sand a piece of wood smooth — back and forth, back and forth.", emoji: '🔨', detailEmoji: '🪚', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Then she helped him nail two pieces of wood together. BANG! BANG! BANG!", emoji: '🔨', detailEmoji: '🔩', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Dad was making a birdhouse. By the end, Isla had hammered in twelve nails.", emoji: '🔨', detailEmoji: '🐦', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Making things with your hands — and with your Dad — is one of the best feelings.", emoji: '🔨', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 183, title: 'The Family Dance Party', category: 'family', coverEmoji: '🕺', accentColor: '#E91E63', readTime: 2,
    keywords: ['dance', 'music', 'family', 'silly', 'joy'],
    pages: [
      { text: "Mum turned the music up loud on a Saturday evening. 'Right,' she said. 'Dance party.'", emoji: '🕺', detailEmoji: '🎵', scene: 'home', topColor: '#880E4F', bottomColor: '#AD1457' },
      { text: "Dad's dancing was technically terrible and completely brilliant.", emoji: '🕺', detailEmoji: '😂', scene: 'home', topColor: '#C2185B', bottomColor: '#D81B60' },
      { text: "The children copied every embarrassing move — which somehow made it perfect.", emoji: '🕺', detailEmoji: '🌟', scene: 'home', topColor: '#AD1457', bottomColor: '#C2185B' },
      { text: "They danced until the little one fell over from laughing and had to lie on the floor.", emoji: '🕺', detailEmoji: '😄', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "No one was judging anyone's moves in this family. That was the rule.", emoji: '🕺', detailEmoji: '❤️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 184, title: 'Helping with Shopping', category: 'family', coverEmoji: '🛒', accentColor: '#66BB6A', readTime: 2,
    keywords: ['shopping', 'help', 'list', 'choose', 'together'],
    pages: [
      { text: "Finn's favourite shop job was pushing the trolley — very carefully round corners.", emoji: '🛒', detailEmoji: '🏪', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Mum gave him the list. He found the apples. He found the bread. He found the cheese.", emoji: '🛒', detailEmoji: '🍎', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "He put everything in the right place so it wouldn't squash — heavy at the bottom.", emoji: '🛒', detailEmoji: '📦', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "At the checkout he helped put things on the belt one by one, carefully.", emoji: '🛒', detailEmoji: '💳', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Helping with real things makes you feel real and useful and very grown-up.", emoji: '🛒', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 185, title: 'The Bedtime Hug', category: 'family', coverEmoji: '🤗', accentColor: '#FF8A80', readTime: 2,
    keywords: ['hug', 'bedtime', 'love', 'safe', 'goodnight'],
    pages: [
      { text: "Every night at bedtime, Rosa got three hugs. One from Mum, one from Dad, one from her big brother.", emoji: '🤗', detailEmoji: '❤️', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Mum's hug was soft and smelled like lavender.", emoji: '🤗', detailEmoji: '🌸', scene: 'home', topColor: '#F8BBD9', bottomColor: '#F48FB1' },
      { text: "Dad's hug was big and warm like being wrapped in a giant blanket.", emoji: '🤗', detailEmoji: '🧸', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Her brother's hug was quick but real — and sometimes came with a whispered joke.", emoji: '🤗', detailEmoji: '😄', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Three hugs, every night. Rosa fell asleep holding that warmth tight.", emoji: '🤗', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },

  // ── LIFESTYLE 186-200 ────────────────────────────────────────────────────
  {
    id: 186, title: 'Brushing My Hair', category: 'lifestyle', coverEmoji: '💇', accentColor: '#00ACC1', readTime: 2,
    keywords: ['hair', 'brush', 'tangle', 'neat', 'patient'],
    pages: [
      { text: "Lily's hair had the most impressive tangles in the history of hair.", emoji: '💇', detailEmoji: '😬', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Every morning Mum tried to brush it and every morning there was a lot of 'OW!'", emoji: '💇', detailEmoji: '😣', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "One day Mum showed her a trick: start at the bottom, work up to the roots slowly.", emoji: '💇', detailEmoji: '✂️', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Lily tried it herself. It took longer — but there were almost no ouches.", emoji: '💇', detailEmoji: '😊', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Now she brushes her own hair every morning. She is the master of her own tangles.", emoji: '💇', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 187, title: 'Wearing My Seatbelt', category: 'lifestyle', coverEmoji: '🚗', accentColor: '#00ACC1', readTime: 2,
    keywords: ['seatbelt', 'safe', 'car', 'click', 'protect'],
    pages: [
      { text: "Every time Max got in the car, he clicked his seatbelt before Dad started the engine.", emoji: '🚗', detailEmoji: '✅', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "One day he forgot. Dad said: 'Seatbelt first please, then we go.'", emoji: '🚗', detailEmoji: '🤚', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Max clicked it. Click! That small sound meant: I am held. I am safe.", emoji: '🚗', detailEmoji: '💛', scene: 'sky', topColor: '#90CAF9', bottomColor: '#64B5F6' },
      { text: "'It only takes one second,' said Dad, 'and it keeps you safe every single time.'", emoji: '🚗', detailEmoji: '🛡️', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Max made it his own rule: seatbelt first, always — no reminders needed.", emoji: '🚗', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 188, title: 'Being Quiet in the Library', category: 'lifestyle', coverEmoji: '📚', accentColor: '#00ACC1', readTime: 2,
    keywords: ['library', 'quiet', 'whisper', 'respect', 'read'],
    pages: [
      { text: "The library was Mia's favourite place — full of worlds waiting on shelves.", emoji: '📚', detailEmoji: '📖', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "She had learned quickly: inside voices only. No running. Chairs go back neatly.", emoji: '📚', detailEmoji: '🤫', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "She saw a small boy about to shout — she gently put her finger to her lips.", emoji: '📚', detailEmoji: '🧒', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "He whispered 'sorry' and smiled. They found books in the same section and sat nearby.", emoji: '📚', detailEmoji: '😊', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "The library's quiet is a gift everyone gives each other — it costs nothing.", emoji: '📚', detailEmoji: '❤️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 189, title: 'Saying Good Morning', category: 'lifestyle', coverEmoji: '🌤️', accentColor: '#00ACC1', readTime: 2,
    keywords: ['morning', 'greet', 'smile', 'hello', 'start'],
    pages: [
      { text: "Every morning, Grandpa said good morning to everyone he met on his walk.", emoji: '🌤️', detailEmoji: '👴', scene: 'meadow', topColor: '#FFF9C4', bottomColor: '#FFF176' },
      { text: "The postman. The baker. The woman who walked the three fluffy dogs.", emoji: '🌤️', detailEmoji: '🐕', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "Caleb asked: 'Grandpa, do you actually know all those people?' 'Some of them,' he said.", emoji: '🌤️', detailEmoji: '🧒', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "'Then why do you say good morning?' 'Because it makes the morning good — for both of us.'", emoji: '🌤️', detailEmoji: '☀️', scene: 'sunset', topColor: '#FF9F1C', bottomColor: '#FFBF69' },
      { text: "Caleb started saying it too. Every morning, the world felt a little more friendly.", emoji: '🌤️', detailEmoji: '🌟', scene: 'meadow', topColor: '#FFF9C4', bottomColor: '#FFF176' },
    ],
  },
  {
    id: 190, title: 'Not Interrupting', category: 'lifestyle', coverEmoji: '🤐', accentColor: '#00ACC1', readTime: 2,
    keywords: ['interrupt', 'wait', 'listen', 'patient', 'respect'],
    pages: [
      { text: "Finn had something VERY important to say — but Dad was on the phone.", emoji: '🤐', detailEmoji: '📱', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "He bounced on his heels. He tugged Dad's sleeve. He said 'Dad' four times.", emoji: '🤐', detailEmoji: '😤', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Dad held up one finger: wait. Finn took a big breath and sat down.", emoji: '🤐', detailEmoji: '🤚', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "He thought about what he wanted to say and made sure he really remembered it.", emoji: '🤐', detailEmoji: '🤔', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "When Dad finished he said 'Yes?' and Finn told him perfectly — and felt very mature.", emoji: '🤐', detailEmoji: '😊', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 191, title: 'Caring for a Plant', category: 'lifestyle', coverEmoji: '🌱', accentColor: '#00ACC1', readTime: 2,
    keywords: ['plant', 'water', 'grow', 'care', 'alive'],
    pages: [
      { text: "Mia got a small green plant in a tiny pot for her birthday.", emoji: '🌱', detailEmoji: '🎁', scene: 'home', topColor: '#2D6A4F', bottomColor: '#40916C' },
      { text: "She put it on the windowsill where it could get morning sun.", emoji: '🌱', detailEmoji: '☀️', scene: 'home', topColor: '#FFF9C4', bottomColor: '#FFF176' },
      { text: "Every day she gave it a small drink — not too much, not too little.", emoji: '🌱', detailEmoji: '💧', scene: 'home', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "Weeks later, she saw a tiny new leaf unfurling. She had grown something alive!", emoji: '🌱', detailEmoji: '🌿', scene: 'home', topColor: '#40916C', bottomColor: '#52B788' },
      { text: "Caring for something small teaches you to notice small, beautiful things.", emoji: '🌱', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 192, title: 'Putting on My Jacket', category: 'lifestyle', coverEmoji: '🧥', accentColor: '#00ACC1', readTime: 2,
    keywords: ['jacket', 'zip', 'warm', 'independent', 'ready'],
    pages: [
      { text: "It was cold outside and Mum said it was jacket weather.", emoji: '🧥', detailEmoji: '❄️', scene: 'snow', topColor: '#CFD8DC', bottomColor: '#B0BEC5' },
      { text: "Tom found his red jacket. He pushed his arms in — one at a time, carefully.", emoji: '🧥', detailEmoji: '👕', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "The zip was tricky. You had to line up the two sides perfectly before pulling.", emoji: '🧥', detailEmoji: '🤔', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "He lined them up. He pulled. ZZZIP — all the way to the top! Done!", emoji: '🧥', detailEmoji: '😄', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "He walked outside feeling warm and ready and completely in charge of himself.", emoji: '🧥', detailEmoji: '🌟', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
    ],
  },
  {
    id: 193, title: 'Being Careful with Fragile Things', category: 'lifestyle', coverEmoji: '🏺', accentColor: '#00ACC1', readTime: 2,
    keywords: ['fragile', 'careful', 'gentle', 'slow', 'handle'],
    pages: [
      { text: "Grandpa had a blue glass bowl that had been in the family for a hundred years.", emoji: '🏺', detailEmoji: '💙', scene: 'home', topColor: '#0277BD', bottomColor: '#0288D1' },
      { text: "He let Ella hold it — but showed her first: two hands, bottom supported.", emoji: '🏺', detailEmoji: '🤲', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "The bowl felt cool and smooth and impossibly thin. She could see the light through it.", emoji: '🏺', detailEmoji: '✨', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "She handed it back with the same care she had received it — both hands, slowly.", emoji: '🏺', detailEmoji: '👐', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Some things deserve your very best gentleness. They are trusting you.", emoji: '🏺', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 194, title: 'Greeting Guests Politely', category: 'lifestyle', coverEmoji: '🤝', accentColor: '#00ACC1', readTime: 2,
    keywords: ['guest', 'greet', 'hello', 'welcome', 'polite'],
    pages: [
      { text: "When Mum's friends came for dinner, Cleo practised what to say.", emoji: '🤝', detailEmoji: '🏠', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "She stood by the door, shoulders back. When the bell rang, she answered it.", emoji: '🤝', detailEmoji: '🔔', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "'Hello! Come in! Can I take your coat?' She surprised even herself.", emoji: '🤝', detailEmoji: '🧥', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Mum's friend said 'How charming!' and looked at Mum with impressed eyes.", emoji: '🤝', detailEmoji: '😊', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Making guests feel welcome is a superpower anyone can learn.", emoji: '🤝', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 195, title: 'Not Running Inside', category: 'lifestyle', coverEmoji: '🏃', accentColor: '#00ACC1', readTime: 2,
    keywords: ['run', 'inside', 'careful', 'walk', 'slow'],
    pages: [
      { text: "Jake loved to run. He ran everywhere — including through the kitchen.", emoji: '🏃', detailEmoji: '💨', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "One day he slid on the floor and knocked into the table — cups everywhere!", emoji: '🏃', detailEmoji: '😬', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "'Running is for outside,' said Dad, cleaning up. 'Inside needs slower feet.'", emoji: '🏃', detailEmoji: '🧹', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Jake practised walking inside — even when he really, really wanted to sprint.", emoji: '🏃', detailEmoji: '🤔', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Saving your fast for the right place makes the running even better.", emoji: '🏃', detailEmoji: '🌟', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
    ],
  },
  {
    id: 196, title: 'Washing My Hands Properly', category: 'lifestyle', coverEmoji: '🧼', accentColor: '#00ACC1', readTime: 2,
    keywords: ['wash', 'hands', 'soap', 'clean', 'germs'],
    pages: [
      { text: "After playing outside, Lily's hands were magnificently dirty.", emoji: '🧼', detailEmoji: '🌿', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "She turned on the tap, got the soap, and remembered the steps: palms, backs, fingers, thumbs.", emoji: '🧼', detailEmoji: '💧', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "She scrubbed for as long as it took to sing the alphabet — all the way to Z.", emoji: '🧼', detailEmoji: '🎵', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "She rinsed and dried on the towel. Her hands were bright and clean and ready.", emoji: '🧼', detailEmoji: '✅', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "Clean hands before meals was such a small thing — and such a kind one.", emoji: '🧼', detailEmoji: '❤️', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 197, title: 'Folding My Clothes', category: 'lifestyle', coverEmoji: '👕', accentColor: '#00ACC1', readTime: 2,
    keywords: ['fold', 'clothes', 'tidy', 'neat', 'help'],
    pages: [
      { text: "After laundry day there was a pile of clean clothes on Nora's bed — a warm, soft mountain.", emoji: '👕', detailEmoji: '🌄', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Mum showed her: lay flat, fold in half, fold again. Jumpers had their own special way.", emoji: '👕', detailEmoji: '🧶', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "Nora tried. Her first fold was wobbly. Her third was better. Her fifth was almost neat.", emoji: '👕', detailEmoji: '😊', scene: 'home', topColor: '#8B4513', bottomColor: '#A0522D' },
      { text: "She put them away in the drawer — everything in the right place.", emoji: '👕', detailEmoji: '📦', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Finding your things when you need them — that is what tidying is really for.", emoji: '👕', detailEmoji: '🌟', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
    ],
  },
  {
    id: 198, title: 'Using a Quiet Voice at Night', category: 'lifestyle', coverEmoji: '🌙', accentColor: '#00ACC1', readTime: 2,
    keywords: ['quiet', 'night', 'voice', 'sleep', 'respect'],
    pages: [
      { text: "After 8 o'clock, the house had a different kind of quiet — a sleeping quiet.", emoji: '🌙', detailEmoji: '🤫', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Even if Ella wasn't tired, she moved softly and talked in the gentlest whisper.", emoji: '🌙', detailEmoji: '💤', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "She tiptoed past the baby's room. She closed doors slowly without a click.", emoji: '🌙', detailEmoji: '🚪', scene: 'home', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "The house held its breath around her — and she held hers around the house.", emoji: '🌙', detailEmoji: '⭐', scene: 'night', topColor: '#0A0A1E', bottomColor: '#1A1A2E' },
      { text: "Being quiet when others sleep is a gift of rest that costs you nothing.", emoji: '🌙', detailEmoji: '❤️', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 199, title: 'A Grateful Heart', category: 'lifestyle', coverEmoji: '🙏', accentColor: '#00ACC1', readTime: 2,
    keywords: ['grateful', 'thank', 'notice', 'appreciate', 'happy'],
    pages: [
      { text: "Before bed, Grandma asked: 'What are you thankful for today?'", emoji: '🙏', detailEmoji: '👵', scene: 'home', topColor: '#78290F', bottomColor: '#A0522D' },
      { text: "Lena thought. The warm bath. The funny joke at lunch. Her cosy socks.", emoji: '🙏', detailEmoji: '🧦', scene: 'home', topColor: '#5C3317', bottomColor: '#8B5E3C' },
      { text: "The way the sun looked through the leaves. Finding a perfect round stone.", emoji: '🙏', detailEmoji: '🌿', scene: 'meadow', topColor: '#95D5B2', bottomColor: '#74C69D' },
      { text: "'So many things!' said Lena, surprised. 'I didn't notice them at the time.'", emoji: '🙏', detailEmoji: '✨', scene: 'meadow', topColor: '#74C69D', bottomColor: '#52B788' },
      { text: "'That's the secret,' said Grandma. 'Notice them while they're happening.'", emoji: '🙏', detailEmoji: '🌟', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
  {
    id: 200, title: 'Sweet Dreams Are a Gift', category: 'lifestyle', coverEmoji: '💤', accentColor: '#3F51B5', readTime: 2,
    keywords: ['dream', 'sleep', 'rest', 'imagine', 'tomorrow'],
    pages: [
      { text: "Every night when you close your eyes, a wonderful thing happens inside your mind.", emoji: '💤', detailEmoji: '🌙', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
      { text: "Stories begin. Places appear. People you love come to visit in your dreams.", emoji: '💤', detailEmoji: '⭐', scene: 'night', topColor: '#0D1B2A', bottomColor: '#1B2838' },
      { text: "While you sleep, your body grows and your mind sorts through the whole day.", emoji: '💤', detailEmoji: '✨', scene: 'space', topColor: '#0A0E27', bottomColor: '#07091C' },
      { text: "You wake up tomorrow a tiny bit taller, a tiny bit wiser, a tiny bit more yourself.", emoji: '💤', detailEmoji: '🌅', scene: 'sunset', topColor: '#FF8C42', bottomColor: '#FFBA08' },
      { text: "So close your eyes. Breathe out slowly. You've earned every sweet dream tonight.", emoji: '💤', detailEmoji: '💛', scene: 'night', topColor: '#1A1A2E', bottomColor: '#16213E' },
    ],
  },
];

export const categories: Category[] = ['animals', 'fantasy', 'adventure', 'friendship', 'nature', 'family', 'lifestyle'];

export function getByCategory(cat: Category) {
  return stories.filter((s) => s.category === cat);
}

export function getById(id: number) {
  return stories.find((s) => s.id === id);
}
