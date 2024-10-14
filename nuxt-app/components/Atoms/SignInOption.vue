<template>
  <div
    class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
  >
    <img class="h-6" :src="icon" />
    <div class="w-39">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "SignInOption",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
