<template>
  <NuxtLayout>
    <linear-loader v-if="requestsStore.hasActiveRequests" />
    <NuxtPage />
  </NuxtLayout>
  <NuxtSnackbar />
</template>

<script setup lang="ts">
const requestsStore = useRequestsStore()
</script>

<style>
</style>