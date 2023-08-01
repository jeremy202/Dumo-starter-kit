<template>
  <div class="dumo-input-wrapper image">

    <img class="" src="/assets/images/ic-search.svg" alt="" />

    <input type="text" class="dumo-input-field" :class="{ error: error }" placeholder="" :value="props.modelValue"
      @input="onChange" v-bind="$attrs" />
    <span class="text-xs" style="color: #C33434" v-if="errorMessage">
      {{ errorMessage }}
    </span>
    <div v-if="prepend" class="prepend">{{ prepend }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String },
  error: { type: Boolean },
  defaultLabel: { type: Boolean, default: true },
  errorMessage: { type: String },
  modelValue: {},
  prepend: { type: String },
});

const $emit = defineEmits(["update:modelValue"]);

const onChange = (e: any) => {
  $emit("update:modelValue", e.target.value);
};
</script>

<style scoped src="../assets/css/inputs.css"></style>

<style scoped>
.icon {
  position: absolute;
  left: 10px;
  top: 16px;
  height: 16px;
  width: 16px;
  z-index: 1;
}
</style>
