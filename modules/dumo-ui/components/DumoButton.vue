<template>
  <button class="button" :class="classes" :style="styles" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  secondary?: boolean;
  cta?: boolean
  alt?: boolean
  lg?: boolean;
  sm?: boolean;
  xs?: boolean;
  bg?: string;
  color?: string;
  border?: string;
  width?: string;
  center?: boolean;
}>();

const classes = {
  ["button-secondary"]: props.secondary,
  ["button-cta"]: props.cta,
  ["button-alt"]: props.alt,
  ["button-small"]: props.sm,
  ["button-large"]: props.lg,
  ["button-xs"]: props.xs,
  ["center"]: props.center
};

const styles = {
  ...(props.bg && { backgroundColor: props.bg }),
  ...(props.color && { color: props.color }),
  ...(props.border && { border: props.border }),
  ...(props.width && { width: props.width })
};
</script>

<style scoped>
.button {
  background-color: var(--main-blue);
  border-radius: 14px;
  color: #fff;
  font-weight: var(--rustica-regular);
  font-size: 16px;
  padding: 14px 16px;
  line-height: 1.2;
  display: inline-flex;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
}

.button-secondary {
  color: var(--primary);
  background-color: #dce0ee;
}

.button-alt {
  background-color: #e9ecf7;
  border-radius: 10px;
  color: var(--main-blue);
}

.button-cta::after {
  content: '';
  position: absolute;
  background-color: white;
  border: 1.5px solid var(--primary);
  border-radius: 14px;
  bottom: -5px;
  left: 5px;
  width: 100%;
  height: 100%;
  transform: skewY(-3deg);
  transition: all 0.5s ease-in-out;
  z-index: -1;
}

.button-cta:hover::after {
  transform: skewY(3deg);
}

.button-small {
  border-radius: 10px;
  font-size: 13px;
  padding: 11px 16px;
}

.button-large {
  padding: 18px 32px;
}

.button-xs {
  font-size: 13px;
  padding: 8px 14px;
}
.center {
  justify-content: center;
  align-items: center;
}

.button[disabled] {
  background-color: #bcbcbc;
  color: #4a4a4a;
  cursor: not-allowed;
}
</style>
