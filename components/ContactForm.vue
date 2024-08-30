<!--* Script -->
<script setup>
const data = ["name", "email", "subject", "phone", "message"];

// *Form Data
const name = defineModel("name");
const email = defineModel("email");
const subject = defineModel("subject");
const phone = defineModel("phone");
const message = defineModel("message");

const errorMsg = defineModel("errorMsg");
const successMsg = defineModel("successMsg");
const isPending = ref(false);

// const url = "https://formspree.io/f/xgegrjlz"; //* TESTING URL
const url = "https://formspree.io/f/mwpeyzpn";

// &Submit Form
const submitForm = async () => {
  try {
    isPending.value = true;
    const { error } = await fetch(url, {
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
  <Toast
    v-if="successMsg"
    :toastText="successMsg"
    :error="false"
  />

  <!-- *form Wrapper -->
  <div
    class="form-wrapper text-white mb-5"
    v-motion-visibleSlideBottom
  >
    <!-- *Form -->
    <form @submit.prevent="submitForm">
      <!-- <h3 class="font-semibold text-5 text-center mb-3">Send us a message!</h3> -->

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
        </div>
      </div>

      <!-- *Text Area -->
      <textarea
        name="Message"
        placeholder="Type your message here..."
        v-model="message"
        required
        class="my-3 w-full p-1 text-3 min-h-[15rem] bg-dark border-b-[2px] outline-none focus:border-b-accent resize-none transition-all duration-500 ease-in-out"
      ></textarea>

      <!-- *Submit Button -->
      <div class="flex justify-end">
        <button
          class="btn-form-submit rounded-4 bg-white font-medium text-3 text-black px-4 py-1 mt-5 hover:text-accent duration-500 ease-in-out transition-all"
          aria-label="send message"
          :disabled="isPending"
          v-if="!isPending"
        >
          Submit
        </button>
      </div>

      <!-- *Disabled Button -->

      <div class="flex justify-end">
        <button
          class="rounded-4 bg-white font-medium text-3 text-black px-4 py-1 hover:none duration-500 ease-in-out transition-all opacity-60 cursor-not-allowed mt-5"
          aria-label="send message"
          :disabled="isPending"
          v-if="isPending"
        >
          Sending...
        </button>
      </div>
    </form>
  </div>
</template>

<!--* Styles -->
<style lang="scss" scoped>
.inputs {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  transition: all 0.5s ease-in-out;

  input:focus {
    outline: none;
    border-bottom: solid 2px $color-accent;

    transition: all 0.5s ease-in-out;
  }
}

.input {
  input {
    background: none;
    // border: none;
    color: white !important;
    padding: 3rem;
    font-weight: 600;

    font-size: 2.6rem;
    border-bottom: 2px solid white;
    width: 100%;
  }
}
</style>
