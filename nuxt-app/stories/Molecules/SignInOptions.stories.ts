import type { Meta, StoryObj } from "@storybook/vue3";

import SignInOptions from "~/components/Molecules/SignInOptions.vue";

const meta: Meta<typeof SignInOptions> = {
  component: SignInOptions,
};

export default meta;
type Story = StoryObj<typeof SignInOptions>;

export const Primary: Story = {
  render: (args) => ({
    components: { SignInOptions },
    setup() {
      return { args };
    },
    template: '<SignInOptions v-bind="args" />',
  }),
  args: {},
};
