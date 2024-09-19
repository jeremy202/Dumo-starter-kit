<template>
  <NuxtLink
    :to="route"
    class="button-link"
    :class="classes"
    :style="styles"
    v-bind="$attrs">
    <span class="button-link-text">
      <slot></slot>
    </span>
    <img v-if="image" :src="image" alt="Image" class="button-image" />
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
  color: var(--main-light);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.72px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: 0.4s ease-in-out;
  position: relative;
}

.button-link.success {
  color: #3daa7e;
}

.button-image {
  height: auto;
  width: auto;
  transition: 0.4s ease-in-out;
  position: relative;
}

.button-link:hover > .button-image {
  left: -6px;
  transition: 0.4s ease-in-out;
}

.button-link:hover > .button-link-text {
  background: #e8eaf2 0% 0% no-repeat padding-box;
  border-radius: 6px;
  padding-right: 10px;
  padding-left: 4px;
  transition: 0.4s ease-in-out;
}
</style>
