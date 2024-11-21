<template>
  <label class="container">
    <input
      v-bind="$attrs"
      type="checkbox"
      :checked="isChecked"
      @change="handleChange" />
    <span class="checkmark"></span>
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const isChecked = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  (newValue) => {
    isChecked.value = !!newValue
  }
)

const handleChange = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    emit('update:modelValue', e.target.checked)
  }
}
</script>

<style scoped>
.container {
  display: block;
  position: relative;
  margin-right: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
  border-radius: 3px;
  background-color: #ffffff;
  border: 1px solid #d4d4d5;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ffffff;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #24b57a;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
