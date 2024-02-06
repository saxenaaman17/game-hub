import type { Meta, StoryObj } from "@storybook/react";
import GameCard from "../components/GameCard";
import { Game } from "../hooks/useGames";

const mockHighRatedGameData: Game = {
  id: 1,
  name: "High Score Game",
  background_image:
    "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
  metacritic: 90,
  rating_top: 5,
  parent_platforms: [
    { platform: { id: 1, name: "PC", slug: "pc" } },
    { platform: { id: 4, name: "PlayStation", slug: "playstation" } },
  ],
};

const mockLowRatedGameData: Game = {
  id: 2,
  name: "Low Score Game",
  background_image:
    "https://media.rawg.io/media/screenshots/40d/40d936fb71dfd846350cb4443f9e037f.jpg",
  metacritic: 50,
  rating_top: 2,
  parent_platforms: [
    { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
  ],
};

const meta: Meta<typeof GameCard> = {
  title: "Components/GameCard",
  component: GameCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GameCard>;

export const HighCriticScoreGame: Story = {
  args: {
    game: mockHighRatedGameData,
  },
};

export const LowCriticScoreGame: Story = {
  args: {
    game: mockLowRatedGameData,
  },
};
