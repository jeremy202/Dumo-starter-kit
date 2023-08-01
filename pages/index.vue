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
</template>

<script setup lang="ts">
const snackbar = useSnackbar();
</script>

<style scoped></style>