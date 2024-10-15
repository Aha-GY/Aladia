import type { Meta, StoryObj } from "@storybook/vue3";

import TextField from "~/components/Atoms/TextField.vue";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Atoms/TextField",
  argTypes: {
    placeholder: {
      control: "text",
      description: "Text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  render: (args) => ({
    components: { TextField },
    setup() {
      return { args };
    },
    template: '<TextField v-bind="args" />',
  }),
  args: {
    placeholder: "Enter your email",
    icon: "",
  },
};
