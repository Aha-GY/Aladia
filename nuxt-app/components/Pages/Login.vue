<template>
  <div
    class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black/40 text-white backdrop-blur"
  >
    <div
      class="relative -mt-20 flex h-[42rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-0 backdrop-blur transition-all duration-300"
      style="margin-top: 0px; opacity: 1"
    >
      <div class="relative z-10 h-full p-5 text-13">
        <EmailForm v-if="currentStep === 'email'" @next="goToNext" />
        <RegistrationForm
          v-if="currentStep === 'registration'"
          :email="userEmail"
          @next="goToNext"
          @back="goToPrevious"
        />
        <ValidationForm
          v-if="currentStep === 'verification'"
          :form="formData"
          @next="goToNext"
          @back="goToPrevious"
        />
        <SuccessPage v-if="currentStep === 'success'" :form="formData" />
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationForm from "../Organisms/RegistrationForm.vue";
import EmailForm from "../Organisms/EmailForm.vue";
import ValidationForm from "../Organisms/ValidationForm.vue";
import SuccessPage from "../Organisms/SuccessPage.vue";

export default {
  name: "Card",
  components: {
    RegistrationForm,
    EmailForm,
    ValidationForm,
    SuccessPage,
  },
  data() {
    return {
      currentStep: "email",
      userEmail: "",
      formData: {
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    goToNext(data) {
      if (this.currentStep === "email") {
        this.userEmail = data;
        this.currentStep = "registration";
      } else if (this.currentStep === "registration") {
        if (!data.name) {
          alert("Name is required!");
          return;
        }
        if (!data.surname) {
          alert("Surname is required!");
          return;
        }
        this.formData = data;
        this.currentStep = "verification";
      } else if (this.currentStep === "verification") {
        this.formData = data;
        this.currentStep = "success";
      }
    },
    goToPrevious() {
      if (this.currentStep === "registration") {
        this.currentStep = "email";
      } else if (this.currentStep === "verification") {
        this.currentStep = "registration";
      }
    },
  },
};
</script>
