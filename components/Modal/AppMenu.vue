<template>
  <div class="modal-container dark" @click.self="closeModal">
    <div class="absolute top-3 md:right-4 right-0 md:mx-0 mx-3">
      <div class="md:w-[500px] w-full mx-auto relative">
        <dumo-card width="100%" class="pb-8">
          <div class="icon cursor-pointer absolute top-3 right-3" @click="closeModal">
            <img src="/images/ic-switch-app.svg" alt="toggle-apps">
          </div>
          <div class="grid grid-cols-3 justify-items-center md:px-12 px-6 pt-14 pb-8 gap-10">
            <nuxt-link :to="apps.businessCloud.link" target="_blank" class="text-center min-w-max">
              <div class="mb-2 w-10 h-10 mx-auto">
                <img src="@/assets/images/ic-business-cloud.svg" alt="">
              </div>
              <p class="font-medium">Cloud</p>
              <p class="text-x-small text-[#72757E]">Business</p>
            </nuxt-link>
            <nuxt-link :to="apps.pali.link" target="_blank" class="text-center min-w-max">
              <div class="mb-2 w-10 h-10 mx-auto">
                <img src="@/assets/images/ic-pali.svg" alt="">
              </div>
              <p class="font-medium">Pali</p>
              <p class="text-x-small text-[#72757E]">Online Store</p>
            </nuxt-link>
            <nuxt-link :to="apps.ava.link" target="_blank" class="text-center min-w-max">
              <div class="mb-2 w-10 h-10 mx-auto">
                <img src="@/assets/images/ic-ava.svg" alt="">
              </div>
              <p class="font-medium">Ava</p>
              <p class="text-x-small text-[#72757E]">LMS Software</p>
            </nuxt-link>
            <nuxt-link :to="apps.oro.link" target="_blank" class="text-center min-w-max">
              <div class="mb-2 w-10 h-10 mx-auto">
                <img src="@/assets/images/ic-oro.svg" alt="">
              </div>
              <p class="font-medium">Oro</p>
              <p class="text-x-small text-[#72757E]">Real Estate</p>
            </nuxt-link>
            <nuxt-link :to="apps.homa.link" target="_blank" class="text-center min-w-max">
              <div class="mb-2 w-10 h-10 mx-auto">
                <img src="@/assets/images/ic-homa.svg" alt="">
              </div>
              <p class="font-medium">Homa</p>
              <p class="text-x-small text-[#72757E]">Logistics Booking</p>
            </nuxt-link>
          </div>

          <p class="sub-header text-primary-light text-center cursor-pointer" @click="openApps">
            All apps
          </p>
        </dumo-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);
const router = useRouter()
const { apps } = useAppLinks()

const closeModal = () => {
  emit("close");
};

const openApps = () => {
  router.replace('/dashboard/home')
  closeModal()
}
</script>

<style scoped></style>