import type { Meta, StoryObj } from "@storybook/vue3";
import SignInOption from "~/components/Atoms/SignInOption.vue";

const meta: Meta<typeof SignInOption> = {
  component: SignInOption,
  title: "Atoms/SignOption",
  argTypes: {
    text: {
      control: "text",
      description: "Text",
    },
    icon: {
      
    },
  },
};

export default meta;
type Story = StoryObj<typeof SignInOption>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { SignInOption },
    setup() {
      return { args };
    },
    template: '<SignInOption v-bind="args" />',
  }),
  args: {
    text: "Sign In with Google",
    icon: ""
  },
};
