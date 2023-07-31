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

    <!-- <div class="mx-auto mt-5">
      <DumoTextArea v-model="form.password" :label="form.password ? '' : 'Text area'"
        :prepend="form.password ? 'Text area' : ''"></DumoTextArea>
    </div>

    <div class="flex flex-col justify-center ml-60">
      <div class="max-w-xs mt-5">
        <dumo-select label="- Select Organisation -" :items="organisation"></dumo-select>
      </div>
      <div class="max-w-xs mt-5">
        <dumo-select v-model="form.country" required>
          <option value disabled selected>— Country —</option>
        </dumo-select>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
const snackbar = useSnackbar();
// const form = reactive({
//   email: "",
//   password: "",
//   country: ""
// });

// const organisation = [{
//   text: 'Chigisoft',
//   value: 'chigisoft'
// },
// {
//   text: 'DUMO Ava',
//   value: 'ava'
// }]
</script>

<style scoped></style>