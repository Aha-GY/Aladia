import type { Meta, StoryObj } from "@storybook/vue3";

import SuccessPage from "../../components/Organisms/SuccessPage.vue";

const meta: Meta<typeof SuccessPage> = {
  component: SuccessPage,
};

export default meta;
type Story = StoryObj<typeof SuccessPage>;

export const Primary: Story = {
  render: (args) => ({
    components: { SuccessPage },
    setup() {
      return { args };
    },
    template: '<SuccessPage v-bind="args" />',
  }),
  args: {
    form: {
      name: "",
    },
  },
};
