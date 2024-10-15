import type { Meta, StoryObj } from "@storybook/vue3";

import Login from "~/components/Pages/Login.vue";

const meta: Meta<typeof Login> = {
  component: Login,
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Primary: Story = {
  render: (args) => ({
    components: { Login },
    setup() {
      return { args };
    },
    template: '<Login v-bind="args" />',
  }),
  args: {},
};
