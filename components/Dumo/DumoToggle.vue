<template>
  <label class="custom-switch" :class="classes">
    <input
      v-bind="$attrs"
      type="checkbox"
      :checked="isChecked"
      @change="handleChange" />
    <span class="slider"></span>
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
  sm?: boolean
  blue?: boolean
}>()

const classes = {
  ['toggle-small']: props.sm,
  ['toggle-blue']: props.blue,
}

const emit = defineEmits(['update:modelValue', 'change'])

const isChecked = ref(props.modelValue)

// update checked based on model value
watch(
  () => props.modelValue,
  (newValue) => {
    isChecked.value = !!newValue
  }
)

const handleChange = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    emit('update:modelValue', e.target.checked)
    emit('change', e.target.checked)
  }
}
</script>

<style scoped>
.custom-switch {
  position: relative;
  display: inline-block;
  width: 49px;
  height: 22px;
}

.toggle-small {
  width: 30px;
  height: 17px;
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

.toggle-small .slider:before {
  height: 14px;
  width: 14px;
  left: 2.5px;
  top: 1.5px;
}

input:checked + .slider {
  background-color: #24b57a;
}

.toggle-blue input:checked + .slider {
  background-color: #5476d2;
}

input:checked + .slider:before {
  transform: translateX(23px);
}

.toggle-small input:checked + .slider:before {
  transform: translateX(11px);
}
</style>
