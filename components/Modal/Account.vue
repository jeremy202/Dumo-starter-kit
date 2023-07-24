<template>
  <div class="modal-container dark" @click.self="closeModal">
    <div class="absolute top-3 md:right-14 right-0 md:mx-0 mx-3">
      <div class="md:w-[500px] w-[94vw] mx-auto relative">
        <DumoCard width="100%">
          <dumo-card width="100%" class="pb-8" bg="#F7F8F9">
            <span class="account-tag cursor-pointer absolute top-3 right-3 uppercase" @click="closeModal">
              {{ initials }}
            </span>
            <div class="px-6 pt-14">
              <p class="bg-[#E9ECF7] rounded-xl px-4 py-2 max-w-max text-primary mb-6">
                {{ user.email || '-' }}
              </p>
              <div class="flex gap-4">
                <div class="mb-2 w-10 h-10">
                  <img src="@/assets/images/ic-business-cloud.svg" alt="">
                </div>
                <div>
                  <p class="font-medium text-[#646464]">{{ user.first_name }} {{ user.last_name }}</p>
                  <p class="text-x-small text-[#72757E] uppercase">ID: {{ user.key }}</p>
                </div>
              </div>
            </div>
          </dumo-card>
          <div class="p-6 flex items-center gap-2">
            <p class="text-primary-light cursor-pointer" @click="openProfile">
              My DUMO® Account
            </p>
            <p class="text-primary-light font-extrabold -mt-1.5">
              .
            </p>
            <p class="text-[--error] cursor-pointer" @click="logout">
              Log out
            </p>
          </div>
        </DumoCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);
const router = useRouter()
const snackbar = useSnackbar()
const authStore = useAuthStore()

const user = authStore.getUser

const closeModal = () => {
  emit("close");
};

const initials = computed(() => {
  const firstNameInitial = user.first_name.charAt(0);
  const lastNameInitial = user.last_name.charAt(0);
  return `${firstNameInitial}${lastNameInitial}`;
});

const logout = () => {
  authStore.logout()
  snackbar.add({ type: 'success', text: "Logout successful" })
}
const openProfile = () => {
  router.replace('/dashboard/account/profile')
  closeModal()
}

</script>

<style scoped></style>