export type Category = 'animals' | 'fantasy' | 'adventure' | 'friendship' | 'nature' | 'family';

export interface Story {
  id: number;
  title: string;
  category: Category;
  emoji: string;
  bgColor: string;
  accentColor: string;
  pages: string[];
  readTime: number;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Benny the Bunny's Big Hop",
    category: 'animals',
    emoji: '🐰',
    bgColor: '#1B4332',
    accentColor: '#52B788',
    readTime: 3,
    pages: [
      "Benny was a small white bunny who lived in a cozy burrow under the old apple tree. His home was warm and soft, filled with dried petals and sweet-smelling grass.",
      "One sunny morning, Benny decided to hop all the way to the top of Clover Hill. 'It is very far,' said Mama Bunny. But Benny was brave, and he set off hopping.",
      "Hop, hop, hop — past the wildflowers! Hop, hop, hop — past the sparkling pond! Up and up Clover Hill he went, until he could see the whole green meadow below.",
      "Happy and tired, Benny hopped home as the stars came out. Mama tucked him into his soft bed. 'Sleep now, little hopper,' she whispered. Benny smiled and dreamed of green, rolling hills.",
    ],
  },
  {
    id: 2,
    title: 'Draco the Friendly Dragon',
    category: 'fantasy',
    emoji: '🐲',
    bgColor: '#3B1F5E',
    accentColor: '#A855F7',
    readTime: 3,
    pages: [
      "Draco was a little purple dragon who lived on Misty Mountain. He had tiny wings, big golden eyes, and puffs of sparkly smoke that smelled like cinnamon.",
      "All the other animals were afraid of dragons, so Draco had no friends. He sat by the lake every day, watching the fish and wishing someone would play with him.",
      "One afternoon, a little girl named Lily got lost in the forest. Draco heard her crying and flew down. He lit up the dark path with his warm, glowing breath, guiding her safely home.",
      "Lily hugged Draco tight. 'You are the kindest dragon in the world!' she said. From that day on, they were best friends, and Draco never sat alone by the lake again.",
    ],
  },
  {
    id: 3,
    title: 'Space Explorer Sam',
    category: 'adventure',
    emoji: '🚀',
    bgColor: '#0B1D4A',
    accentColor: '#60A5FA',
    readTime: 3,
    pages: [
      "Sam had a shiny red rocket ship parked in her backyard. Every night before bed, she would climb inside, press the big green button, and zoom up into the stars.",
      "Tonight, Sam flew past the moon — it waved at her! She zoomed past Saturn's rings, which played a soft, tinkling music as she went through them.",
      "She landed on a small, fluffy planet made entirely of clouds. Bouncy cloud creatures giggled and played catch with her. They gave her a jar of starlight to take home.",
      "Sam flew back as the sun began to peek over the hills. She tucked herself into bed, placed the jar of starlight on her shelf, and fell fast asleep with a happy smile.",
    ],
  },
  {
    id: 4,
    title: 'The New Kid in Town',
    category: 'friendship',
    emoji: '🤝',
    bgColor: '#4A1528',
    accentColor: '#F472B6',
    readTime: 3,
    pages: [
      "Mia moved to a new town on a rainy Tuesday. She stood at the edge of the playground, watching the other children play. Her tummy felt like it had butterflies inside.",
      "A boy named Leo noticed her standing alone. He walked over, held out a yellow toy car, and said, 'Do you want to race? I need someone fast!'",
      "Mia smiled and took the car. They raced it down the slide, through the puddles, and around the big oak tree. Mia laughed so hard her tummy stopped feeling funny.",
      "When the bell rang, Leo said, 'Sit with me at lunch?' Mia nodded. Walking inside, she thought: maybe this new town was not so scary after all. It just needed a yellow toy car.",
    ],
  },
  {
    id: 5,
    title: 'The First Day of Spring',
    category: 'nature',
    emoji: '🌸',
    bgColor: '#14532D',
    accentColor: '#86EFAC',
    readTime: 3,
    pages: [
      "Under the cold, hard ground, a tiny seed had been sleeping all winter long. It was dark and quiet, and the seed dreamed of sunshine and warm rain.",
      "One morning, something magical happened. A single warm sunbeam reached down through the soil. The seed stretched, pushed one green shoot upward, and poked its head out into the world.",
      "It saw blue sky, heard birds singing, and felt a gentle breeze. 'So this is spring!' the little seedling said. A bee buzzed by and said, 'Welcome! We have been waiting for you!'",
      "The seedling grew a little taller every day. By evening, it looked up at the first star and whispered, 'I am so glad I woke up.' Then it rested, ready to grow more tomorrow.",
    ],
  },
  {
    id: 6,
    title: "Grandma's Secret Cookie Recipe",
    category: 'family',
    emoji: '🍪',
    bgColor: '#431407',
    accentColor: '#FB923C',
    readTime: 3,
    pages: [
      "Every Saturday, Grandma would pull out her old, worn recipe book and say, 'Today is a cookie day!' Ava would run to the kitchen, put on her tiny apron, and clap her hands.",
      "They measured flour, brown sugar, and chocolate chips together. Grandma let Ava stir the big bowl. The kitchen smelled like warm vanilla and sweet butter.",
      "When the cookies came out of the oven, Grandma said, 'Now the most important ingredient.' She gave Ava a long hug. 'Love. You must put love in every single batch.'",
      "Ava ate a warm cookie and decided it was the best thing she had ever tasted. She wrote 'love' at the bottom of the recipe in her own careful letters, so she would never forget.",
    ],
  },
  {
    id: 7,
    title: "Ella the Elephant Finds a Friend",
    category: 'animals',
    emoji: '🐘',
    bgColor: '#1E3A5F',
    accentColor: '#93C5FD',
    readTime: 3,
    pages: [
      "Ella the elephant was new to the watering hole. She was big and grey and very shy. She stood far away and watched the other animals splash and play.",
      "A little zebra named Zara trotted over. 'Hello! My name is Zara. I really like your enormous ears!' Ella's ears wiggled up and down with happiness.",
      "They splashed in the cool water and made mud paintings on the big flat rocks. Ella squirted water with her trunk and Zara laughed so hard she fell right into the pond.",
      "As the stars appeared, they sat side by side watching fireflies flicker. 'Same time tomorrow?' asked Zara. 'Yes please!' said Ella. She walked home slowly, no longer feeling new or lonely at all.",
    ],
  },
  {
    id: 8,
    title: 'Starlight the Unicorn',
    category: 'fantasy',
    emoji: '🦄',
    bgColor: '#3B0764',
    accentColor: '#E879F9',
    readTime: 3,
    pages: [
      "Starlight was a unicorn with a silver mane and a horn that glowed softly in the dark. She lived in the Rainbow Valley where waterfalls played musical notes as they fell.",
      "Each night, Starlight would gallop across the sky, painting it with soft colors so sleeping children could have beautiful dreams. It was her most important job.",
      "One night, she ran out of colors. The sky went grey and the children began to dream of nothing at all. Starlight thought hard. Then she remembered: kindness makes the brightest color of all.",
      "She thought of every kind deed she had done, and her horn blazed with rainbow light. She swept it across the sky. Below, every sleeping child smiled. Starlight returned home, her heart full and warm.",
    ],
  },
  {
    id: 9,
    title: "The River's Lullaby",
    category: 'nature',
    emoji: '🌊',
    bgColor: '#0C4A6E',
    accentColor: '#38BDF8',
    readTime: 3,
    pages: [
      "High in the mountains, a little river was born from melting snow. It was curious and quick, and it skipped over stones singing to itself: 'Where will I go? Where will I go?'",
      "It flowed through a dark pine forest and sang to the sleeping bears. It bubbled past a meadow and watered the sleeping flowers. Everything it touched grew peaceful and still.",
      "By the time the little river reached the valley, it was wider and slower and very, very wise. Fish rested in its gentle curves. Ducks tucked their heads under their wings on its banks.",
      "At last the river reached the sea, sighed softly, and became part of something enormous and calm. Far away, a child fell asleep to the sound of distant water — and smiled.",
    ],
  },
  {
    id: 10,
    title: "Dad's Bedtime Song",
    category: 'family',
    emoji: '🎵',
    bgColor: '#1E1B4B',
    accentColor: '#818CF8',
    readTime: 2,
    pages: [
      "Every single night, after the bath and the warm milk and the brushing of teeth, Noah would climb into bed and say the same thing: 'Dad, sing the song.'",
      "Dad would sit on the edge of the bed, clear his throat, and sing a slow, soft song about the moon going to sleep, the stars yawning, and the whole world getting cozy and quiet.",
      "Dad was not the best singer in the world. His voice wobbled on the high notes. But to Noah, it was the most beautiful sound in all the universe.",
      "Halfway through the second verse, Noah's eyes would grow heavy. By the third verse, he was always already dreaming. And Dad would sit there a little longer, watching, before tiptoeing out with a smile.",
    ],
  },
];

export const categories: Category[] = ['animals', 'fantasy', 'adventure', 'friendship', 'nature', 'family'];

export function getByCategory(cat: Category) {
  return stories.filter((s) => s.category === cat);
}

export function getById(id: number) {
  return stories.find((s) => s.id === id);
}
