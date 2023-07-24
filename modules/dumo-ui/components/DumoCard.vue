<template>
  <div
    class="dumo-curved-card inline-block"
    :class="classes"
    :style="styles"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  bg?: string;
  color?: string;
  width?: string;
  default?: boolean;
  profileCard?: boolean;
  shadow?: boolean;
  noPadding?: boolean;
}>();

const classes = {
  ["default"]: props.default,
  ["profile-card"]: props.profileCard,
  ["no-padding"]: props.noPadding,
  ["card"]: props.shadow,
};

const styles = {
  ...(props.bg && { backgroundColor: props.bg }),
  ...(props.color && { color: props.color }),
  ...{ height: "100%" },
  ...(props.width && { width: props.width }),
};
</script>

<style scoped>
.dumo-curved-card {
  background: #ffffff;
  border-radius: 24px;
  opacity: 1;
}
.default {
  padding: 24px 32px;
}
.profile-card {
  padding: 24px 16px;
}
.no-padding {
  padding: 0;
}
.card {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #e7eaf480; 
  border-radius: 24px;
  opacity: 1;
  padding: 40px 32px 0px;
}
</style>
