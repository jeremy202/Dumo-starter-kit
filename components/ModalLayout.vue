<template>
  <div :class="['modal-container', dark && 'dark']" @click.self="closeModal">
    <div :class="[left ? 'modal-left' : 'modal-center']">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  dark?: boolean
  left?: boolean
}

defineProps<Props>()

const emit = defineEmits(['close']);

const closeModal = () => {
  emit("close");
};

onMounted(() => {
  document.body.style.overflowY = "hidden";
});

onUnmounted(() => {
  document.body.style.overflowY = "auto";
});
</script>

<style scoped>
/* modal layout */
.modal-container {
  background: rgba(0, 0, 0, 0.45);
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow-y: auto;
}

.modal-container.dark {
  background: #00000065;
  position: fixed;
  inset: 0;
  z-index: 1;
  overflow-y: auto;
  height: 100vh;
}

.modal-left {
  width: 65%;
  background: rgba(250, 250, 250, 1);
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 42px 39px;
  overflow-y: auto;
}

.modal-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>