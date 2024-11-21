<template>
  <div>
    <label class="container">
      <input
        type="radio"
        :checked="isChecked"
        @input="handleChange"
        v-bind="$attrs" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: string
  value: string
}>()

const emit = defineEmits(['update:modelValue'])

const isChecked = ref(props.modelValue === props.value)

watch(
  () => props.modelValue,
  (newValue) => {
    isChecked.value = newValue === props.value
  }
)

const handleChange = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    emit('update:modelValue', props.value)
  }
}
</script>

<style scoped>
/* The container */
.container {
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 16px;
  width: 16px;
  background-color: #ffffff;
  border-radius: 50%;
  border: 1px solid #d6d6d7;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ffffff;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  border: 1px solid #3daa7e;
  background-color: #ffffff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 4px;
  left: 4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3daa7e;
}
</style>
