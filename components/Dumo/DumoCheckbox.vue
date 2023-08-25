<template>
  <label class="container">
    <input v-bind="$attrs" type="checkbox" :checked="isChecked" @change="toggleCheckbox">
    <span class="checkmark"></span>
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>();

const emit = defineEmits(["update:checked"]);

const isChecked = ref(props.modelValue);

const toggleCheckbox = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    const newValue = e.target.checked;
    isChecked.value = newValue;
    emit('update:checked', newValue);
  }
};
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
  background-color: #FFFFFF;
  border: 1px solid #D4D4D5;
}

/* On mouse-over, add a grey background color */
.container:hover input~.checkmark {
  background-color: #FFFFFF;
}

/* When the checkbox is checked, add a blue background */
.container input:checked~.checkmark {
  background-color: #24B57A;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked~.checkmark:after {
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
