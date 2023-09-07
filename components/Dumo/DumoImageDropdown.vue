<template>
  <div class="relative" :style="styles" ref="dropdownRef">
    <div class="flex items-center justify-between font-medium cursor-pointer dropdown-select text-x-small"
      @click="showDropdown = !showDropdown">
      <span class="flex items-center gap-2 capitalize">
        <img v-if="selected && selected.image" :src="selected.image" alt="" />
        <span v-if="selected?.text">{{ selected.text }}</span>
        <span v-if="!selected">{{ placeholder }}</span>
      </span>
      <span class="icon"><img class="cursor-pointer" src="/images/arrow-down.png" alt="" /></span>
    </div>

    <div v-if="showDropdown" class="absolute dropdown-menu text-x-small">
      <span v-for="(item, idx) in items" :key="idx" class="flex items-center gap-2 capitalize cursor-pointer"
        @click="selectItem(item)">
        <span v-if="item.image">
          <img :src="item.image" alt="" />
        </span>
        {{ item.text }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

type Item = {
  text: string;
  value: string;
  image?: string;
};

const props = defineProps<{
  modelValue?: any;
  placeholder?: string;
  items?: Item[];
  width?: string;
  background?: string;
  color?: string;
  border?: string;
}>();

const $emit = defineEmits(["update:modelValue"]);

const showDropdown = ref(false);
const selected = ref<Item>(props.modelValue);

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
};

const selectItem = (item: Item) => {
  selected.value = item;
  showDropdown.value = false;
  $emit("update:modelValue", item);
};
</script>

<style scoped>
.dropdown-select {
  width: 100%;
  border-radius: 10px;
  padding: 6px 10px;
  border: 2px solid #E7EAF4;
  color: #4B4B4D;
  background-color: #FCFCFC;
}

.dropdown-menu {
  width: 100%;
  height: auto;
  max-height: 300px;
  border-radius: 10px;
  padding: 6px;
  border: 2px solid #E7EAF4;
  color: #4B4B4D;
  background-color: #FCFCFC;
  z-index: 1;
}

.icon {
  height: 12px;
  width: 12px;
  margin-left: 10px;
}
</style>
