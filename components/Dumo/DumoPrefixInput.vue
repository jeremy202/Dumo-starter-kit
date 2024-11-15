<template>
  <div>
    <div class="relative">
      <div
        class="custom-label"
        :class="[
          position === 'left' ? 'left-3' : 'right-3',
          'truncate max-w-[110px]',
        ]">
        {{ prefix }}
      </div>
      <input
        :type="type"
        class="custom-input"
        :class="[
          position === 'left' ? 'pl-[110px] pr-[12px]' : 'pl-[12px] pr-[110px]',
        ]"
        :placeholder="placeholder"
        :value="modelValue"
        @input="onChange"
        v-bind="$attrs" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  placeholder: { type: String, default: 'Enter value' },
  modelValue: {},
  type: { type: String, default: 'text' },
  prefix: { type: String, default: '' },
  position: { type: String, default: 'left' },
  borderColor: { type: String, default: '#2a54c7' },
})

const $emit = defineEmits(['update:modelValue'])

const onChange = (e: any) => {
  $emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.custom-input {
  padding-block: 14px;
  border: 1.5px solid #e7eaf4;
  border-radius: 14px;
  width: 100%;
  font-size: 16px;
  color: rgba(30, 31, 33, 0.8);
  appearance: none;
  position: relative;
  background-color: transparent;
  transition: border-color 0.25s ease-in-out;
  line-height: 1.2;
}

.custom-input:focus {
  outline: 0;
  box-shadow: 0;
  border-color: v-bind(borderColor);
  color: #1e1f21;
}

.custom-label {
  position: absolute;
  color: #1e1f21;
  top: 50%;
  transform: translateY(-50%);
}
</style>
