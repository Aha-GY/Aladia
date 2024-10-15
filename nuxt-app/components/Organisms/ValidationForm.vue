<template>
  <div class="flex flex-col items-center px-6 pt-8">
    <img
      src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
      class="mb-2 h-24 w-24 rounded object-cover"
    />
    <div class="mb-4 text-lg font-semibold">{{ form.name }}</div>
    <div class="mb-8 text-white/70">Thanks for joining Aladia.</div>
    <div class="mb-20 text-center text-white/70">
      Please enter below the 6-digit code we sent you through your registration
      e-mail:
    </div>
    <div
      class="relative mb-4 flex h-10 w-full justify-between text-xl text-black"
    >
      <NumberField />
      <NumberField />
      <NumberField />
      <NumberField />
      <NumberField />
      <NumberField />
    </div>
    <div class="mb-24 flex w-full justify-center">
      <div
        class="flex cursor-pointer items-center justify-center text-xs transition-all"
      >
        <div class="text-white/50">You didn't receive any mail?</div>
      </div>
    </div>
    <Button text="Enter" @click="submitRegistration" />
  </div>
</template>

<script>
import Button from "../Atoms/Button.vue";
import NumberField from "../Atoms/NumberField.vue";

export default {
  name: "ValidationForm",
  components: { NumberField, Button },
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  methods: {
    submitRegistration() {
      console.log("here");
      this.$emit("next", this.form);
    },
  },
};
</script>
