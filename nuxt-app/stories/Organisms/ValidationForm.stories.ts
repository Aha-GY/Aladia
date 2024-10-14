import type { Meta, StoryObj } from "@storybook/vue3";

import ValidationForm from "~/components/Organisms/ValidationForm.vue";

const meta: Meta<typeof ValidationForm> = {
  component: ValidationForm,
};

export default meta;
type Story = StoryObj<typeof ValidationForm>;

export const Primary: Story = {
  render: (args) => ({
    components: { ValidationForm },
    setup() {
      return { args };
    },
    template: '<ValidationForm v-bind="args" />',
  }),
  args: {
    form: {
      name: "",
    },
  },
};
