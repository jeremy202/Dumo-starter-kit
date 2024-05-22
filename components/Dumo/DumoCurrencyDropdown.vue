<template>
  <div>
    <div class="flex dumo-currency-drop-container">
      <div class="relative" :style="styles" ref="dropdownRef">
        <div
          class="flex items-center justify-between font-medium cursor-pointer dropdown-select-currency small-paragraph"
          @click="showDropdown = !showDropdown">
          <div class="flex items-center gap-2 uppercase">
            <span v-if="selected">{{ selected.currency }}</span>
            <span v-if="!selected">USD</span>
          </div>
          <div class="icon">
            <img class="cursor-pointer" src="/images/arrow-down.png" alt="" />
          </div>
        </div>

        <div
          v-if="showDropdown && items.length > 1"
          class="absolute dropdown-menu small-paragraph">
          <span
            v-for="(item, idx) in items"
            :key="idx"
            class="flex items-center gap-2 uppercase cursor-pointer drop-content-padding"
            @click="selectItem(item)">
            {{ item.currency }}
          </span>
        </div>
      </div>
      <input
        class="custom-input"
        type="number"
        min="0"
        placeholder="0.00"
        :value="props.modelValue.amount"
        @input="onChange"
        v-bind="$attrs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

type Item = {
  currency: string
  amount: string | number | null
}

const props = defineProps<{
  modelValue: Item
  placeholder?: string
  items: Item[]
  width?: string
  background?: string
  color?: string
  border?: string
}>()

const $emit = defineEmits(['update:modelValue'])

const showDropdown = ref(false)
const selected = ref<Item>(props.modelValue)

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
  selected.value = item
  showDropdown.value = false

  $emit('update:modelValue', item)
}

const onChange = (e: any) => {
  selected.value.amount = e.target.value

  const updatedItem = {
    ...selected.value,
    amount: e.target.value,
  }

  $emit('update:modelValue', updatedItem)
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* For Firefox */
input[type='number'] {
  -moz-appearance: textfield !important;
}

.dropdown-select-currency {
  padding: 10px 8px;
  background: #e7eaf4;
  border-radius: 12px;
}

.dumo-currency-drop-container {
  padding: 4px;
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

.custom-input {
  background: transparent;
  padding: 10px;
}

.custom-input:focus {
  outline: 0;
  box-shadow: 0;
  /* border-color: #F07D22; */
  color: #1e1f21;
}

.icon {
  height: 8px;
  width: 8px;
  margin-left: 2px;
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
  padding: 4px 8px;
}
</style>
