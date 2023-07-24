<template>
  <div class="tag inline-block" :class="classes" :style="styles" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  professional?: boolean;
  recruiter?: boolean;
  bg?: string;
  color?: string;
}>();

const classes = {
  ["tag-professional"]: props.professional,
  ["tag-recruiter"]: props.recruiter,
};

const styles = {
  ...(props.bg && { backgroundColor: props.bg }),
  ...(props.color && { color: props.color }),
};
</script>

<style scoped src="../assets/css/inputs.css"></style>

<style scoped>
.tag {
  border-radius: 11px;
  opacity: 1;
  padding: 2px 8px;
  font-size: 13px;
}
.tag-professional {
  background: #D0F0FD;
  color: #335F71;
}

.tag-recruiter {
  background: #D1F7C4;
  color: #337138
}
</style>
