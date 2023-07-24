<template>
  <NuxtLayout>
    <linear-loader v-if="requestsStore.hasActiveRequests" />
    <NuxtPage />
    <NuxtSnackbar />
  </NuxtLayout>
</template>

<script setup lang="ts">
const requestsStore = useRequestsStore()
</script>

<style>
</style>