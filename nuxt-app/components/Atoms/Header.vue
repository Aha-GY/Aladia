<template>
  <div
    class="relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6"
  >
    <div class="bg-gradient absolute inset-0 opacity-[0.15]"></div>
    <div
      class="relative flex w-full justify-between transition-all duration-300 opacity-100"
    >
      <img
        src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
        class="h-20 w-20 object-cover"
      />
      <div>
        <div class="mb-2 text-base font-semibold">Welcome to Aladia,</div>
        <div class="text-white/70">
          Create or access your <br />
          account from here
        </div>
      </div>
    </div>
    <div
      class="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0"
    >
      <i class="fa-solid fa-spinner animate-spin text-xs"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
