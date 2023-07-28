<template>
  <div class="default-layout">
    <slot></slot>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.default-layout {
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  background-color: var(--background);
  z-index: 1;
}
</style>