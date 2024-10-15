import type { Meta, StoryObj } from "@storybook/vue3";
import RegistrationForm from "~/components/Organisms/RegistrationForm.vue";

const meta: Meta<typeof RegistrationForm> = {
  component: RegistrationForm,
};

export default meta;
type Story = StoryObj<typeof RegistrationForm>;

export const Primary: Story = {
  render: (args) => ({
    components: { RegistrationForm },
    setup() {
      return { args };
    },
    template: '<RegistrationForm v-bind="args" />',
  }),
  args: {},
};
