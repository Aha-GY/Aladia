import type { Meta, StoryObj } from "@storybook/vue3";
import Header from "~/components/Atoms/Header.vue";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Atoms/Header",
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: (args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: '<Header v-bind="args" />',
  }),
};
