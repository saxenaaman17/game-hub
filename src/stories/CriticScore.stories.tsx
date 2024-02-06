import type { Meta, StoryObj } from "@storybook/react";
import CriticScore from "../components/CriticScore";

const meta: Meta<typeof CriticScore> = {
  title: "Components/CriticScore",
  component: CriticScore,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CriticScore>;

export const HighCriticScore: Story = {
  args: {
    score: 80,
  },
};

export const MediumCriticScore: Story = {
  args: {
    score: 70,
  },
};

export const LowCriticScore: Story = {
  args: {
    score: 40,
  },
};
