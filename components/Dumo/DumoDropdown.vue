<template>
  <div class="relative" :style="styles" ref="dropdownRef">
    <div
      class="flex items-center justify-between font-medium cursor-pointer dropdown-select small-paragraph"
      :class="{ 'small-select': sm }"
      @click="showDropdown = !showDropdown">
      <span
        class="flex items-center gap-2"
        :class="[uppercase ? 'uppercase' : 'capitalize']">
        <span v-if="modelValue">{{ modelValue }}</span>
        <span v-if="!modelValue">{{ placeholder }}</span>
      </span>
      <span class="icon"
        ><img class="cursor-pointer" src="/images/arrow-down.png" alt=""
      /></span>

      <div v-if="modelValue" class="placeholder-label">
        {{ placeholder }}
      </div>
    </div>

    <div v-if="showDropdown" class="absolute dropdown-menu small-paragraph">
      <span
        v-if="!loading"
        v-for="(item, idx) in items"
        :key="idx"
        class="flex items-center gap-2 cursor-pointer drop-content-padding"
        :class="[uppercase && 'uppercase', capitalize && 'capitalize']"
        @click="selectItem(item)">
        {{ item.text }}
      </span>
      <div v-if="loading" class="flex items-center justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
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
  uppercase?: boolean
  capitalize?: boolean
  loading?: boolean
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

.placeholder-label {
  position: absolute;
  left: 8px;
  top: -21px;
  margin: 12px 10px;
  font-size: 12px;
  z-index: 1;
  color: #1e1f21;
  padding: 0 1px;
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
