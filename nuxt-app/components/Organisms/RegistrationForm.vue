<template>
  <div>
    <div
      class="next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95"
      @click="goBack"
    >
      <div class="inline-flex items-center justify-center pt-0.5 rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="octicon arrow-symbol-mktg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
          ></path>
          <path
            class="octicon-chevrow-stem"
            stroke="currentColor"
            d="M1.75 8H11"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <div>Back to Log in</div>
    </div>
    <div class="flex flex-col items-center px-4">
      <div class="mb-4 flex w-full items-end gap-6 px-4">
        <div
          class="relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white"
        >
          <div class="bg-gradient absolute inset-0 opacity-20"></div>
          <img
            src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
            class="absolute inset-0 h-full w-full rounded object-cover"
          />
          <input
            type="file"
            accept="image/*"
            class="absolute inset-0 opacity-0"
          />
        </div>
        <div>
          <div class="mb-1 text-sm font-semibold">Nice to meet you,</div>
          <div class="text-xs text-white/70">
            Upload a profile picture <br />
            and complete your <br />
            presentation
          </div>
        </div>
      </div>
      <div class="mb-4 flex items-center gap-2">
        <div
          class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white"
        >
          <input type="checkbox" required />
        </div>
        <div class="text-xs text-white/70">
          I accept
          <span class="underline text-white"> Terms &amp; Conditions </span>
          and <span class="underline text-white"> Privacy Policy </span>
        </div>
      </div>
      <div class="mb-4 text-center text-xs">Enter your details</div>

      <TextField
        v-model="form.name"
        placeholder="Name"
        icon="fa-solid fa-user text-base text-black/70"
      />

      <TextField
        v-model="form.surname"
        placeholder="Surname"
        icon="fa-solid fa-user text-base text-black/70"
      />

      <TextField
        v-model="form.email"
        :placeholder="email"
        icon="fa-solid fa-envelope text-base text-black/70"
        :disabled="true"
      />

      <TextField
        v-model="form.password"
        placeholder="Password"
        icon="fa-solid fa-key text-base text-black/70"
        type="password"
      />

      <TextField
        v-model="form.confirmPassword"
        placeholder="Confirm Password"
        icon="fa-solid fa-key text-base text-black/70"
        type="password"
        :errorMessage="errorPassword"
      />

      <Button text="Enter" @click="submitForm" />
      <div class="cursor-pointer text-center text-white/40">
        Terms &amp; Conditions
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Atoms/Button.vue";
import TextField from "../Atoms/TextField.vue";

export default {
  name: "RegistrationForm",
  components: { TextField, Button },
  data() {
    return {
      form: {
        name: "",
        surname: "",
        email: this.email,
        password: "",
        confirmPassword: "",
      },
      errorPassword: "",
    };
  },
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  methods: {
    submitForm() {
      if (this.form) {
        const valid = this.validatePassword() && this.validateName();
        if (valid) {
          this.$emit("next", { ...this.form });
        }
        return;
      }
      return;
    },
    goBack() {
      this.$emit("back");
    },
    validateName() {
      if (this.form.name.length > 1 && this.form.surname.length > 1) {
        return true;
      }
      return false;
    },
    validatePassword() {
      if (this.form.password < 8) {
        this.errorPassword = "8 character minimum";
        return false;
      }
      if (this.form.password !== this.form.confirmPassword) {
        this.errorPassword = "Password doesn't match";
        return false;
      }
      this.errorPassword = "";
      return true;
    },
  },
};
</script>
