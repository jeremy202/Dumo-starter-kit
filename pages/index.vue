<template>
  <div class="flex flex-col justify-center">
    <div class="mx-auto text-2xl font-extrabold">
      <h1>DUMO PROJECT STARTER TEMPLATE</h1>
    </div>

    <div class="mx-auto mt-5">
      <DumoButton cta> DUMO </DumoButton>
    </div>

    <div class="flex flex-col justify-center ml-[40vw]">
      <div class="max-w-xs mt-5">
        <DumoDropdown
          sm
          placeholder="- Select Organization -"
          :items="organizations"
          v-model="organization" />
      </div>
      <div class="max-w-xs mt-5">
        <dumo-search-input
          sm
          v-model="form.email"
          name="email"></dumo-search-input>
      </div>
      <div class="max-w-xs mt-5">
        <dumo-input
          type="email"
          bg="white"
          autocomplete="on"
          v-model="form.email"
          name="email"
          placeholder="Email"
          :prepend="form.email ? 'Email Address' : ''"
          :label="form.email ? '' : 'Email Address'"></dumo-input>
      </div>
      <div class="max-w-xs mt-5">
        <dumo-currency-dropdown
          :items="currencies"
          v-model="currency"
          @update:modelValue="setPrice"></dumo-currency-dropdown>
      </div>
      <div class="max-w-xs mt-5">
        <DumoImageDropdown
          :items="languages"
          width="100%"
          background="none"
          placeholder=""
          color="#fff"
          :modelValue="language"
          @update:modelValue="setLanguage"></DumoImageDropdown>
      </div>

      <DumoButtonLinkTwo
        color="#1E1F21"
        route="/"
        image="/images/ic-right-arrow.svg"
      >
        Contact sales
      </DumoButtonLinkTwo>


      <div class="max-w-xs mt-5">
        <DumoCheckbox v-model="checked" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  email: '',
  password: '',
  country: '',
})

const checked = ref(true)

const languages = [
  {
    text: 'English',
    value: 'en-US',
    image: '/images/english-flag.png',
  },
  {
    text: 'English1',
    value: 'en-US',
    image: '/images/english-flag.png',
  },
]

const language = ref<{ text: string; value: string; image?: string }>(
  languages[0]
)

const setLanguage = (item: { text: string; value: string; image?: string }) => {
  language.value = item
}

const organizations = [
  {
    text: 'Chigisoft',
    value: 'chigisoft',
  },
  {
    text: 'DUMO Ava',
    value: 'ava',
  },
]
const organization = ref('')

const currencies = [
  {
    currency: 'usd',
    amount: '',
  },
  {
    currency: 'ngn',
    amount: '',
  },
]
const currency = ref<{
  currency: string
  amount: string
}>(currencies[1])

const setPrice = (item: { currency: string; amount: string }) => {
  currency.value = item
}
</script>

<style scoped></style>
