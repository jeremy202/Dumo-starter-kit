<template>
  <div class="flex flex-col justify-center">
    <div class="mx-auto text-2xl font-extrabold">
      <h1>DUMO PROJECT STARTER TEMPLATE</h1>
    </div>

    <div class="mx-auto mt-5">
      <DumoButton cta>
        DUMO
      </DumoButton>
    </div>

    <div class="flex flex-col justify-center ml-[40vw]">
      <div class="max-w-xs mt-5">
        <DumoDropdownBig placeholder="- Select Organization -" :items="organizations" v-model="organization" />
      </div>
      <div class="max-w-xs mt-5">
        <dumo-input type="text" required autocomplete="on" v-model="form.country" name="country"
          :prepend="form.country ? 'Your First Name' : ''" :label="form.country ? '' : 'First Name'"></dumo-input>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  email: "",
  password: "",
  country: ""
});

const organizations = [
  {
    text: 'Chigisoft',
    value: 'chigisoft'
  },
  {
    text: 'DUMO Ava',
    value: 'ava'
  }]

const organization = ref('')
</script>

<style scoped></style>