import type { Meta, StoryObj } from "@storybook/react";
import Emoji from "../components/Emoji";

const meta: Meta<typeof Emoji> = {
  title: "Components/Emoji",
  component: Emoji,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Emoji>;

export const NoEmoji: Story = {
  args: {
    rating: 2,
  },
};

export const MehEmoji: Story = {
  args: {
    rating: 3,
  },
};

export const ThumbsUpEmoji: Story = {
  args: {
    rating: 4,
  },
};

export const BullsEyeEmoji: Story = {
  args: {
    rating: 5,
  },
};
