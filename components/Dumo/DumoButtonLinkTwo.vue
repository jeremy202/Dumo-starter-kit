<template>
  <NuxtLink
    :to="route"
    class="button-link"
    :class="classes"
    :style="styles"
    v-bind="$attrs">
    <slot></slot>
    <img v-if="image" :src="image" alt="Image" class="arrow-img" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  color?: string
  image?: string
  success?: boolean
  route?: string
  uppercase?: boolean
}>()

const styles = {
  ...(props.color && { color: props.color }),
  ...(props.uppercase && { textTransform: 'upperCase' }),
}

const classes = {
  ['success']: props.success,
}
</script>

<style scoped>
.button-link {
  color: #1E1F21;
  font-weight: 600;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: underline;
  text-transform: math-auto;
  transition: 0.4s ease-in-out;
}

.button-link.success {
  color: var(--primary-green);
}
.arrow-img {
  height: 10px;
  width: auto;
  transition: 0.4s ease-in-out;
}
.button-link:hover > .arrow-img {
  margin-left: 5px;
  transition: 0.4s ease-in-out;
}
</style>
