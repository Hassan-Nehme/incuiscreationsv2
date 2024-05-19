<!--* Script -->
<script setup>
// *Form Data
const name = defineModel("name");
const email = defineModel("email");
const subject = defineModel("subject");
const phone = defineModel("phone");
const message = defineModel("message");

const errorMsg = defineModel("errorMsg");
const successMsg = defineModel("successMsg");
const isPending = ref(false);

// &Submit Form
const submitForm = async () => {
  try {
    isPending.value = true;
    const { error } = await fetch("https://formspree.io/f/xgegrjlz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        phone: phone.value,
        message: message.value,
      }),
    });

    //! ERROR
    if (error) throw error;

    //^SUCCESS
    successMsg.value = "Your message has been sent.";

    //? Reset input fields
    name.value = "";
    email.value = "";
    subject.value = "";
    phone.value = "";
    message.value = "";
    isPending.value = false;

    //? Reset success message value
    setTimeout(() => {
      successMsg.value = null;
    }, 4000);
  } catch (error) {
    errorMsg.value = error.message;
  }
};
</script>

<!--* HTML -->
<template>
  <!-- *Failed Toast -->
  <Toast
    v-if="errorMsg"
    :toastText="errorMsg + '. Refresh page and retry.'"
    :error="true"
  />

  <!-- *Success Toast -->
  <Toast v-if="successMsg" :toastText="successMsg" :error="false" />

  <!-- *form Wrapper -->
  <div
    class="form-wrapper bg-white max-[500px]:max-w-[95vw] max-w-[100rem] mx-auto text-black p-5 rounded-[2rem] mb-5 border-black border-[3px]"
    v-motion-visibleSlideBottom
  >
    <!-- *Form -->
    <form @submit.prevent="submitForm">
      <h3 class="font-semibold text-5 text-center mb-3">Send us a message!</h3>
      <!-- *Inputs -->
      <div class="inputs">
        <!-- &Email -->
        <div class="input">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            v-model="email"
            required
          />
          <hr />
        </div>

        <!-- &Name -->
        <div class="input">
          <input
            type="text"
            name="name"
            placeholder="Name"
            v-model="name"
            required
          />
          <hr />
        </div>

        <!-- &Subject -->
        <div class="input">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            v-model="subject"
            required
          />
          <hr />
        </div>

        <!-- &Phone -->
        <div class="input">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            v-model="phone"
            required
          />
          <hr />
        </div>
      </div>

      <!-- *Text Area -->
      <textarea
        name="Message"
        placeholder="Type your message here..."
        v-model="message"
        required
        class="my-3 w-full p-1 text-3 rounded-1 min-h-[25rem] bg-none border-black border-[2px]"
      ></textarea>

      <!-- *Submit Button -->
      <button
        class="btn-form-submit rounded-[1.5rem] w-full bg-dark font-medium text-3 text-white p-2 hover:text-accent duration-500 ease-in-out transition-all"
        aria-label="send message"
        :disabled="isPending"
        v-if="!isPending"
      >
        Send Message
      </button>

      <!-- *Disabled Button -->
      <button
        class="rounded-[1.5rem] w-full bg-dark font-medium text-3 text-white p-2 hover:none duration-500 ease-in-out transition-all opacity-50 cursor-not-allowed"
        aria-label="send message"
        :disabled="isPending"
        v-if="isPending"
      >
        Sending...
      </button>
    </form>
  </div>
</template>

<!--* Styles -->
<style lang="scss" scoped>
.inputs {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.input {
  input {
    // background: none;
    // border: none;
    color: $color-text-dark !important;
    padding: 1rem;
    font-weight: 600;
    border-radius: 1rem;
    font-size: 2.6rem;
    border-bottom: 2px solid black;
    width: 100%;
  }
}

@media (max-width: 750px) {
  .form-wrapper {
    h3 {
      font-size: 3.6rem;
    }
  }
}
</style>
