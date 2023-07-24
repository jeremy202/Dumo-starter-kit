<template>
  <header class="py-5 md:px-8 px-4 flex justify-between gap-4 items-center">
    <div class="md:hidden block" @click="showMobileNav">
      <img src="/images/ic-nav-dark.svg" alt="">
    </div>
    <p class="flex-1 text-center sub-header md:hidden block">Welcome</p>

    <div class="ml-auto flex items-center gap-4">
      <div class="icon cursor-pointer md:block hidden">
        <NuxtLink to="/dashboard/account/settings">
          <img src="/images/ic-profile-settings.svg" alt="user settings">
        </NuxtLink>
      </div>
      <span class="account-tag cursor-pointer" @click="showAccount">
        {{ initials }}
      </span>
      <div class="icon cursor-pointer" @click="showApps">
        <img src="/images/ic-switch-app.svg" alt="user">
      </div>
    </div>
  </header>
  <div v-if="appsModal">
    <ModalAppMenu @close="appsModal = false" />
  </div>
  <div v-if="accountModal">
    <ModalAccount @close="accountModal = false" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["toggleMobileNav"]);
const appsModal = ref(false)
const accountModal = ref(false)

const showApps = () => appsModal.value = !appsModal.value
const showAccount = () => accountModal.value = !accountModal.value

const showMobileNav = () => {
  emit('toggleMobileNav')
}

const authStore = useAuthStore()
const user = authStore.getUser

const initials = computed(() => {
  const firstNameInitial = user.first_name.charAt(0);
  const lastNameInitial = user.last_name.charAt(0);
  return `${firstNameInitial}${lastNameInitial}`;
});
</script>

<style scoped></style>