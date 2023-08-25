<template>
  <div class="dumo-input-wrapper">
    <label v-if="defaultLabel" class="default-input-label">{{
      props.label
    }}</label>
    <select ref="el" class="dumo-select-field" :class="{ error: error }" name="" id="" :value="modelValue" data-value=""
      @input="onChange" @change="onChange">
      <template v-if="items">
        <option v-for="item in items" :value="item.value" :key="item.value">
          {{ item.text }}
        </option>
      </template>

      <slot></slot>
    </select>
    <label v-if="!defaultLabel" class="dumo-input-label">{{ props.label }}</label>
    <span class="dropdown-icon">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor">
        <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
    <span class="text-xs" style="color: #C33434" v-if="errorMessage">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: any;
  label?: string;
  defaultLabel?: { type: Boolean, default: false };
  items?: { text: string; value: any }[];
  error?: boolean;
  errorMessage?: string;
}>();

const $emit = defineEmits(["update:modelValue"]);

const el = ref<HTMLElement>();

const onChange = (e: any) => {
  $emit("update:modelValue", e.target.value);
  e.target.setAttribute("data-value", e.target.value);
};

onMounted(() => {
  if (props.modelValue) {
    el.value?.setAttribute("data-value", props.modelValue);
  }
});
</script>

<style scoped>
.dropdown-icon {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  pointer-events: none;
}

.dropdown-icon>svg {
  height: 20px;
  width: 20px;
  color: #a9abb0;
}
</style>
