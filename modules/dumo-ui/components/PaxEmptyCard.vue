<template>
  <div class="paxity-empty-card w-full flex flex-col items-center justify-center" :style="styles" v-bind="$attrs">
    <slot></slot>
    
    <p class="mt-5">{{ props.label }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  bg?: string;
  color?: string;
  // width?: string;
  label: string;
}>();

const styles = {
  ...(props.bg && { backgroundColor: props.bg }),
  ...(props.color && { color: props.color }),
  ...({ height: "100%" }),
  // ...(props.width && { width: props.width }),
};
</script>

<style scoped src="../assets/css/inputs.css"></style>

<style scoped>
.paxity-empty-card {
  background: #EFF0F5;
  color: #BFC4D5;
  border-radius: 4px;
  opacity: 1;
  padding: 100px;
}

@media only screen and (max-width: 768px) {
  .paxity-empty-card {
    padding: 50px;
  }
}
</style>
