<template>
  <header class="py-5 md:px-8 px-4 flex justify-between gap-4 items-center">
    <div>
      <img src="/images/dumo-logo.svg" alt="">
    </div>
    <p v-if="!registrationComplete" class="flex-1 text-center sub-header">Welcome</p>

    <p v-if="registrationComplete" class="flex-1 text-center sub-header md:block hidden">Welcome,
      <span class="text-[--dark]">
        {{ user.first_name }}
      </span>
    </p>
    <p v-if="registrationComplete" class="flex-1 text-center sub-header md:hidden block">Welcome
    </p>
    <div class="ml-auto flex items-center gap-4" v-show="registrationComplete">
      <div class="icon cursor-pointer md:block hidden">
        <div @click="openSettings">
          <img src="/images/ic-profile-settings.svg" alt="user settings">
        </div>
      </div>
      <span class="account-tag cursor-pointer" @click="showAccount">
        {{ initials }}
      </span>
      <div class="icon cursor-pointer" @click="showApps">
        <img src="/images/ic-switch-app.svg" alt="toggle-apps">
      </div>
    </div>
    <div v-if="appsModal">
      <ModalAppMenu @close="appsModal = false" />
    </div>
    <div v-if="accountModal">
      <ModalAccount @close="accountModal = false" />
    </div>
  </header>
</template>

<script setup lang="ts">
const appsModal = ref(false)
const accountModal = ref(false)

const authStore = useAuthStore()
const user = computed(() => authStore.getUser)
const registrationComplete = computed(() => authStore.registrationComplete)


const initials = computed(() => {
  if (registrationComplete.value) {
    const firstNameInitial = user.value.first_name.charAt(0);
    const lastNameInitial = user.value.last_name.charAt(0);
    return `${firstNameInitial}${lastNameInitial}`;
  }

  return '--'
});

const openSettings = () => {
  if (registrationComplete.value) {
    navigateTo('/dashboard/account/settings')
  }
}

const showApps = () => {
  if (registrationComplete.value) {
    appsModal.value = !appsModal.value
  }
}
const showAccount = () => {
  if (registrationComplete.value) {
    accountModal.value = !accountModal.value
  }
}
</script>

<style scoped></style>