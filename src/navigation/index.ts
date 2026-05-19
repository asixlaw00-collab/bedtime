import { Category } from '../data/stories';

export type RootStackParamList = {
  Home: undefined;
  StoryList: { category: Category | 'all'; title: string };
  Reader: { storyId: number };
  Favorites: undefined;
};
