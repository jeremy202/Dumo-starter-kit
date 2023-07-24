<template>
  <div :class="['modal-container', dark && 'dark']" @click.self="closeModal">
    <div :class="[left ? 'modal-left' : 'modal-center']">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['dark', 'left'])
const emit = defineEmits(['close']);

const closeModal = () => {
  emit("close");
};

</script>

<style scoped></style>