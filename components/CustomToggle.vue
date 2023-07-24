<template>
  <label class="custom-switch">
    <input v-bind="$attrs" type="checkbox" :checked="isChecked" @change="toggleCheckbox">
    <span class="slider"></span>
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
const props = defineProps(['modelValue']);
const emit = defineEmits(["update:checked"]);

const isChecked = ref(props.modelValue);

// const toggleCheckbox = (e: any) => {
//   emit('update:checked', e.target.checked)
// };

const toggleCheckbox = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    const newValue = e.target.checked;
    isChecked.value = newValue;
    emit('update:checked', newValue);
  }
};
</script>

<style scoped>
.custom-switch {
  position: relative;
  display: inline-block;
  width: 49px;
  height: 22px;
}

.custom-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked+.slider {
  background-color: #24b57a;
}

input:checked+.slider:before {
  transform: translateX(23px);
}
</style>
