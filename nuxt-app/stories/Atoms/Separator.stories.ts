import type { Meta, StoryObj } from "@storybook/vue3";

import Separator from "~/components/Atoms/Separator.vue";

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: "Atoms/Separator",
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Primary: Story = {
  render: (args) => ({
    components: { Separator },
    setup() {
      return { args };
    },
    template: '<Separator v-bind="args" />',
  }),
};
