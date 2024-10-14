<template>
  <div class="flex flex-col items-center px-6 pt-8">
    <div class="mb-4 text-lg font-semibold">{{ form.name }},</div>
    <div class="mb-24 text-white/70">Thanks for joining Aladia.</div>
    <img
      src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
      class="mb-28 h-28"
    />
    <Button text="Enter Marketplace" />
  </div>
</template>

<script>
import Button from "../Atoms/Button.vue";

export default {
  name: "SuccessPage",
  components: { Button },
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
};
</script>
