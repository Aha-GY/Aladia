import type { Meta, StoryObj } from "@storybook/vue3";

import EmailForm from "~/components/Organisms/EmailForm.vue";

const meta: Meta<typeof EmailForm> = {
  component: EmailForm,
};

export default meta;
type Story = StoryObj<typeof EmailForm>;

export const Primary: Story = {
  render: (args) => ({
    components: { EmailForm },
    setup() {
      return { args };
    },
    template: '<EmailForm v-bind="args" />',
  }),
  args: {},
};
