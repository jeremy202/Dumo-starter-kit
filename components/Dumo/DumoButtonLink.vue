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
  ...(props.uppercase && { textTransform: 'uppercase' }),
}

const classes = {
  ['success']: props.success,
}
</script>

<style scoped>
.button-link {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.72px;
  display: inline-flex;
  align-items: center;
  /* gap: 6px; */
  transition: 0.4s ease-in-out;
  position: relative;
  color: var(--main-light);
}

.button-link.success {
  color: #3daa7e;
}

.button-link-text {
  color: var(--main-light);
  padding: 2px 4px;
  border-radius: 6px;
  transition: 0.4s ease-in-out;
}

.button-image {
  height: auto;
  width: auto;
  transition: 0.4s ease-in-out;
  position: relative;
}

.button-link:hover > .button-link-text {
  background: #e8eaf2;
  padding-right: 10px;
  padding-left: 4px;
}

/* .button-link:hover > .button-image {
  transform: translateX(0px);
} */
</style>
