<template>
  <div class="relative" :style="styles" ref="dropdownRef">
    <div
      class="flex items-center justify-between font-medium cursor-pointer dropdown-select small-paragraph"
      :class="{ 'small-select': sm }"
      @click="showDropdown = !showDropdown">
      <span class="flex items-center gap-2 capitalize">
        <span v-if="modelValue">{{ modelValue }}</span>
        <span v-if="!modelValue">{{ placeholder }}</span>
      </span>
      <span class="icon"
        ><img class="cursor-pointer" src="/images/arrow-down.png" alt=""
      /></span>
    </div>

    <div v-if="showDropdown" class="absolute dropdown-menu small-paragraph">
      <span
        v-for="(item, idx) in items"
        :key="idx"
        class="flex items-center gap-2 capitalize cursor-pointer drop-content-padding"
        @click="selectItem(item)">
        {{ item.text }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

type Item = {
  text: string
  value: string
}

const props = defineProps<{
  modelValue?: any
  placeholder?: string
  items?: Item[]
  width?: string
  background?: string
  color?: string
  border?: string
  sm?: boolean
}>()

const $emit = defineEmits(['update:modelValue'])

const showDropdown = ref(false)
// const selected = ref(props.modelValue);

const close = () => {
  showDropdown.value = false
}

const dropdownRef = ref(null)

onClickOutside(dropdownRef, close)

const styles = {
  ...(props.width && { width: props.width }),
  ...(props.background && { background: props.background }),
  ...(props.color && { color: props.color }),
  ...(props.border && { border: props.border }),
}

const selectItem = (item: Item) => {
  // selected.value = item.value;
  showDropdown.value = false
  $emit('update:modelValue', item.value)
}
</script>

<style scoped>
.dropdown-select {
  width: 100%;
  border-radius: 14px;
  padding: 14px 16px;
  border: 2px solid #e7eaf4;
  color: #4b4b4d;
  background-color: #fcfcfc;
}

.small-select {
  padding: 8px 10px;
}
.dropdown-menu {
  width: 100%;
  height: auto;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
  padding: 10px 0;
  border-radius: 4px 4px 14px 14px;
  border: 2px solid #e7eaf4;
  color: #4b4b4d;
  background-color: #ebebeb;
  position: absolute;
  z-index: 2;
}

.drop-content-padding {
  padding: 10px 16px;
}

.icon {
  height: 12px;
  width: 12px;
  margin-left: 10px;
}
</style>
