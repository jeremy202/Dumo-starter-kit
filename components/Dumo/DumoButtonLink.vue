<template>
  <NuxtLink :to="route" class="button-link" :class="classes" :style="styles" v-bind="$attrs">
    <slot></slot>
    <img v-if="image" :src="image" alt="Image" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  color?: string;
  image?: string,
  success?: boolean
  route?: string
}>();

const styles = {
  ...(props.color && { color: props.color }),
};

const classes = {
  ['success']: props.success
}
</script>

<style scoped>
.button-link {
  color: var(--main-light);
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.72px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.button-link.success {
  color: var(--primary-green);
}
</style>
