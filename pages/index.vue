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

    <div class="mx-auto mt-5">
      <DumoTextArea v-model="form.password" :label="form.password ? '' : 'Text area'"
        :prepend="form.password ? 'Text area' : ''"></DumoTextArea>
    </div>
    <div class="max-w-xs mt-5">
      <DumoInputStat placeholder="Select Organisation"  />
    </div>

    <div class="flex flex-col justify-center ml-[40vw]">
      <div class="max-w-xs mt-5">
        <DumoDropdownBig placeholder="- Select Organization -" :items="organizations" v-model="organization" />
      </div>
    </div>

    <div class="mx-auto mt-5">
      <DumoButtonLink to="/" image="/assets/images/ic-green-check.svg">
        DUMO Button link
      </DumoButtonLink>
    </div>

    <div class="mx-auto mt-5">
      <DumoToggle />
    </div>
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

const organizations = [{
  text: 'Chigisoft',
  value: 'chigisoft'
},
{
  text: 'DUMO Ava',
  value: 'ava'
}]

const organization = ref(organizations[0])
</script>

<style scoped></style>