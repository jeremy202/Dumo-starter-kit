<template>
  <div class="mx-auto text-2xl font-extrabold">
    <h1>DUMO PROJECT STARTER TEMPLATE</h1>
  </div>

  <div class="mx-auto mt-5">
    <DumoButton cta>
      DUMO
    </DumoButton>
  </div>
  <div class="mx-auto mt-5">
    <DumoButtonLink to="/" image="/assets/images/ic-green-check.svg">
      DUMO Button link
    </DumoButtonLink>
  </div>

  <div class="mx-auto mt-5">
    <DumoToggle />
  </div>

  <!-- <div class="mx-auto mt-5">
    <DumoSearchInput v-model="form.email" name="email" :prepend="form.email ? 'Your email' : ''"
      :label="form.email ? '' : 'Your email'" />
  </div> -->
</template>

<script setup lang="ts">
const snackbar = useSnackbar();

const form = reactive({
  email: "",
  password: "",
  country: ""
});
</script>

<style scoped></style>