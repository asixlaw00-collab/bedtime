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
];

export const categories: Category[] = ['animals', 'fantasy', 'adventure', 'friendship', 'nature', 'family', 'lifestyle'];

export function getByCategory(cat: Category) {
  return stories.filter((s) => s.category === cat);
}

export function getById(id: number) {
  return stories.find((s) => s.id === id);
}
