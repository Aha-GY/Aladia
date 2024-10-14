<template>
  <div
    class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm opacity-70 mb-6"
  >
    <button
      class="absolute inset-0 flex items-center justify-center bg-gradient opacity-50"
      @click="handleClick"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
