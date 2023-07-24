<template>
  <button class="btn" :class="classes" :style="styles" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  blue?: boolean
  secondary?: boolean;
  sm?: boolean;
  xs?: boolean;
  bg?: string;
  color?: string;
  border?: string;
  width?: string;
  center?: boolean;
}>();

const classes = {
  ["btn-blue"]: props.blue,
  ["btn-secondary"]: props.secondary,
  ["btn-sm"]: props.sm,
  ["btn-xs"]: props.xs,
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
.btn {
  background: #274BAD;
  border-radius: 14px;
  color: #fff;
  /* font-family: "Avenir Next" !important; */
  font-size: 16px;
  font-style: normal;
  /* font-weight: 500; */
  padding: 14px 16px;
  line-height: 1.2;
  display: inline-flex;
  white-space: nowrap;
}

.center {
  justify-content: center;
  align-items: center;
}

.btn[disabled] {
  background-color: #bcbcbc;
  color: #4a4a4a;
  cursor: not-allowed;
}

.btn-secondary {
  background: #e7eaf4;
  color: #1a308f;
}
.btn-blue{
  background: #0E62AF;
  color: #FFFFFF;
}

.btn-sm {
  border-radius: 4px;
  font-size: 14px;
  padding: 7px 19px;
}

.btn-xs {
  border-radius: 4px;
  font-size: 13px;
  padding: 8px 16px;
}
</style>
