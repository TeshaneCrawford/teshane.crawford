<script setup lang="ts">
import { toast } from 'vue-sonner'
import type { ContactMail } from '~~/types/ContactMail'

const email = ref('')
const message = ref('')
const phone = ref('')
const fullname = ref('')
const subject = ref('')

const loading = ref(false)

const contactData = computed(() => {
  return {
    email: email.value,
    message: message.value,
    phone: phone.value,
    fullname: fullname.value,
    subject: subject.value,
  } as ContactMail
})

async function submitForm() {
  loading.value = true
  try {
    await $fetch('/api/sendMail', {
      method: 'POST',
      body: contactData.value,
    })
    email.value = ''
    message.value = ''
    phone.value = ''
    fullname.value = ''
    subject.value = ''
    toast.success('Message sent successfully')
  }
  catch (error) {
    toast.error('Error sending message')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <ClientOnly>
    <form @submit.prevent="submitForm">
      <h2 class="h3Font">
        Get in touch with me
      </h2>
      <div class="flex gap-6 flex-col mt-8">
        <div class="flex flex-col md:flex-row gap-6">
          <input
            id="full-name"
            v-model="fullname"
            type="text"
            placeholder="John Doe"
            name="fullname"
            autocomplete="name"
            required
            class="ui-input dark:bg-transparent dark:border"
          >
          <input
            id="email"
            v-model="email"
            type="email"
            required
            name="email"
            autocomplete="email"
            placeholder="john.doe@gmail.com"
            class="ui-input dark:bg-transparent dark:border"
          >
        </div>
        <input
          id="subject"
          v-model="subject"
          required
          type="text"
          name="subject"
          placeholder="Subject of your message"
          class="ui-input dark:bg-transparent dark:border"
        >
        <textarea
          id="message"
          v-model="message"
          autoresize
          name="message"
          placeholder="Lets work together!"
          required
          rows="5"
          class="ui-input dark:bg-transparent dark:border"
        />
      </div>

      <div class="flex justify-between flex-wrap gap-8 mt-8 mb-4">
        <div class="order-2 md:order-1">
          <AppPrivacyNotice>
            By submitting this form, you agree to my
            <NuxtLink
              :to="{ name: 'chat' }"
              target="_blank"
              class="ui-link"
            >
              Privacy Policy
            </NuxtLink>
          </AppPrivacyNotice>
        </div>

        <button
          class="order-1 md:order-2 w-full md:w-[33%] ui-button"

          type="submit"
        >
          Send!
        </button>
      </div>
    </form>
  </ClientOnly>
</template>

<style scoped></style>
