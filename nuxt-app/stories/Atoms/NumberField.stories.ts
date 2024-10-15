import type { Meta, StoryObj } from "@storybook/vue3";

import NumberField from "~/components/Atoms/NumberField.vue";

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  title: "Atoms/NumberField",
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const Primary: Story = {
  render: (args) => ({
    components: { NumberField },
    setup() {
      return { args };
    },
    template: '<NumberField v-bind="args" />',
  }),
};
