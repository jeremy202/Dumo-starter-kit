<template>
  <div class="dumo-input-wrapper">
    <label v-if="defaultLabel" class="default-input-label">{{ props.label }}</label>
    <textarea
      class="dumo-input-field"
      :class="{ error: error }"
      placeholder="placeholder"
      v-bind="$attrs"
      @input="onChange"
      :value="modelValue"
      >{{ modelValue }}</textarea
    >
    <label v-if="!defaultLabel" class="dumo-input-label">{{ props.label }}</label>
    <span class="text-xs" style="color: #d63b3b" v-if="errorMessage">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String },
  label: { type: String },
  defaultLabel: { type: Boolean, default: false },
  error: { type: Boolean },
  errorMessage: { type: String },
});
const $emit = defineEmits(["update:modelValue"]);

const onChange = (e: any) => {
  $emit("update:modelValue", e.target.value);
};
</script>

<style scoped src="../assets/css/inputs.css"></style>
