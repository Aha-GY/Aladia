<template>
  <div
    class="relative mb-4 flex h-10 w-full justify-between text-xl text-black"
  >
    <input
      type="number"
      v-model="value"
      maxlength="1"
      class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      fdprocessedid="gwba67"
    />
  </div>
</template>

<script>
export default {
  name: "NumberField",

  data() {
    return {
      value: "",
    };
  },
};
</script>
