import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "~/components/Atoms/Button.vue";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Button",
  argTypes: {
    text: {
      control: "text",
      description: "Text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    text: "Enter",
  },
};
