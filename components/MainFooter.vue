<template>
  <div class="main-footer md:w-4/5 lg:w-2/5 pb-5">
    <div class="w-full md:w-4/5">
      <hr />
      <div class="flex flex-col items-center justify-center">
        <div class="flex justify-center pt-4">
          <img src="/images/dumo-x.svg" alt="logo-ic" />
        </div>
  
        <div class="py-4 text-center">
          <a href="https://chigisoft.com/dumo/" target="_blank">
            One Account for all DUMO Apps © Chigisoft.
          </a>
        </div>
  
        <div class="hidden lg:flex justify-center">
        </div>
        <div class="w-max md:min-w-max min-w-[150px]">
          <dumo-dropdown :items="languages" width="100%" background='none' placeholder="" color="#fff"
            :modelValue="language" @update:modelValue="setLanguage"></dumo-dropdown>
        </div>
      </div>  
    </div>
  </div>
</template>

<script setup lang="ts">
import { languages } from '~/utils/languages';

const language = ref<{ text: string; value?: string; image?: string }>(languages[0]);

const setLanguage = (item: { text: string; value?: string; image?: string }) => {
  console.log(item);
  language.value = item
}
</script>

<style scoped>
.main-footer {
  display: flex;
  justify-content: center;
  position: relative;
  bottom: -60px;
  left: 0;
  margin: 0 auto;
  /* align-self: flex-end; */
}
</style>