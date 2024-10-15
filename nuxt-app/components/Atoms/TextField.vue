<template>
  <div class="w-full mb-6">
    <div
      :class="[
        disabled
          ? 'group relative flex h-10 w-full rounded bg-[#A8A8A8]'
          : 'group relative flex h-10 w-full rounded transition-all bg-white',
      ]"
    >
      <div class="flex flex-row">
        <div class="flex w-10 items-center justify-center text-xl">
          <i :class="icon"></i>
        </div>
        <input
          v-model="internalValue"
          :placeholder="placeholder"
          :disabled="disabled"
          maxlength="100"
          class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
          autocomplete="off"
          :type="showPassword ? 'text' : type"
          @input="handleInput"
        />

        <i
          v-if="type === 'password'"
          @click="togglePasswordVisibility"
          :class="[
            'fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90',
            showPassword ? 'fa-eye' : 'fa-eye-slash',
          ]"
        ></i>
      </div>
    </div>
    <div v-if="type === 'email'" class="w-full text-red-500 text-sm text-left">
      {{ errorMessage }}
    </div>
    <div v-if="type === 'password'" class="flex flex-row">
      <div
        v-if="errorMessage?.length > 0"
        class="w-full text-red-500 text-sm text-left"
      >
        {{ errorMessage }}
      </div>

      <div
        v-if="type === 'password' && placeholder === 'Password'"
        class="flex h-4 w-full items-center justify-between text-xs mt-1"
      >
        <div></div>
        <div class="h-1.5 w-36 rounded bg-[#4e4e4e]">
          <div
            :class="[
              'h-full rounded transition-all duration-300',
              progressBarColor,
            ]"
            :style="{ width: passwordStrength + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      internalValue: this.modelValue,
      showPassword: false,
      passwordStrength: 0,
      progressBarColor: "bg-red-500",
    };
  },
  watch: {
    modelValue(newValue) {
      this.internalValue = newValue;
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    handleInput() {
      this.internalValue = this.internalValue;
      this.$emit("update:modelValue", this.internalValue);
      if (this.type === "password") {
        this.checkPasswordStrength(this.internalValue);
      }
    },

    checkPasswordStrength(password) {
      const lengthRequirement = password.length > 8;
      const hasUpper = /[A-Z]/.test(password);
      const hasLower = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecial = /[^\w#]/.test(password);

      let strength = 0;
      let error = [];

      if (lengthRequirement) strength += 20;
      else error.push("Minimum 8 characters");

      if (hasUpper) strength += 20;
      else error.push("Upper case letter required");

      if (hasLower) strength += 20;
      else error.push("Lower case letter required");

      if (hasNumber) strength += 20;
      else error.push("Number required");

      if (hasSpecial) strength += 20;
      else error.push("Special character required (excluding #)");

      this.passwordStrength = strength;

      if (strength <= 40) {
        this.progressBarColor = "bg-red-500";
      } else if (strength <= 80) {
        this.progressBarColor = "bg-yellow-500";
      } else {
        this.progressBarColor = "bg-green-500";
      }

      this.errorMessage = error.length ? error[0] : "";
    },
  },
};
</script>
