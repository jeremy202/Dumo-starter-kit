<template>
  <div class="profile-tag inline-block" :style="styles" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  bg?: string;
  color?: string;
}>();

const styles = {
  ...(props.bg && { backgroundColor: props.bg }),
  ...(props.color && { color: props.color }),
};
</script>

<style scoped src="../assets/css/inputs.css"></style>

<style scoped>
.profile-tag {
  background: #BFC4D5;
  color: #FFFFFF;
  border-radius: 3px;
  opacity: 1;
  padding: 7px 10px;
}
</style>
