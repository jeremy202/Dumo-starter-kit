<template>
  <div class="dumo-input-wrapper">
    <label v-if="defaultLabel" class="default-input-label">{{ props.label }}</label>
    <input :type="computedType" class="dumo-input-field" :class="{ error: error, success: success }" placeholder=""
      :value="props.modelValue" @input="onChange" v-bind="$attrs" />
    <label v-if="!defaultLabel" class="dumo-input-label">{{ props.label }}</label>
    <!-- <span class="dumo-floating-label">Your email address</span> -->

    <span class="text-xs" style="color: #C33434" v-if="errorMessage">
      {{ errorMessage }}
    </span>
    <div v-if="props.prepend" class="prepend" :class="{ success: success }">{{ prepend }}</div>
    <div v-if="props.type === 'password'" @click="togglePassword">
      <img class="cursor-pointer icon" v-if="hidePassword" src="~~/assets/images/unhide.svg" alt="" />
      <img class="cursor-pointer icon" v-else src="~~/assets/images/hide.svg" alt="" />
    </div>
    <div v-if="props.success">
      <img class="cursor-pointer icon" src="~~/assets/images/ic-verified.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const hidePassword = ref(true);

const props = defineProps({
  label: { type: String },
  error: { type: Boolean },
  success: { type: Boolean },
  defaultLabel: { type: Boolean, default: false },
  errorMessage: { type: String },
  modelValue: {},
  prepend: { type: String },
  type: { type: String, default: "text" },
});

const $emit = defineEmits(["update:modelValue"]);

const onChange = (e: any) => {
  $emit("update:modelValue", e.target.value);
};

const computedType = computed(() => {
  return hidePassword.value ? props.type : 'text';
})

const togglePassword = () => {
  hidePassword.value = !hidePassword.value;
};
</script>

<!-- <style scoped src="@/assets/css/inputs.css"></style> -->

<style scoped>
.icon {
  position: absolute;
  right: 10px;
  top: 18px;
  height: 16px;
  width: 16px;
  z-index: 1;
}
</style>
