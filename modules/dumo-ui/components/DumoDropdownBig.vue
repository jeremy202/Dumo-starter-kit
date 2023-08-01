<template>
  <div class="relative" :style="styles">
    <div class="flex items-center justify-between font-medium cursor-pointer dropdown-select text-x-small"
      @click="showDropdown = !showDropdown">
      <span class="flex items-center gap-2 capitalize">
        <img v-if="modelValue && modelValue.image" :src="modelValue.image" alt="" />
        <span v-if="modelValue">{{ modelValue.text }}</span>
        <span v-if="!modelValue">{{ placeholder }}</span>
      </span>
      <span class="icon"><img class="cursor-pointer" src="/images/arrow-down.png" alt="" /></span>
    </div>

    <div v-click-outside="close" v-if="showDropdown" class="absolute dropdown-menu text-x-small">
      <span v-for="(item, idx) in items" :key="idx" class="flex items-center gap-2 capitalize cursor-pointer drop-conten-padding"
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
const props = defineProps<{
  modelValue: { text: string; value: any, image?: string };
  placeholder?: string;
  items?: { text: string; value: any };
  width?: string;
  background?: string;
  color?: string;
  border?: string;
}>();

const $emit = defineEmits(["update:modelValue"]);

const showDropdown = ref(false);
// const selected = ref<{ text: string; value?: string; image?: string }>();

const close = () => {
  showDropdown.value = false
}

const styles = {
  ...(props.width && { width: props.width }),
  ...(props.background && { background: props.background }),
  ...(props.color && { color: props.color }),
  ...(props.border && { border: props.border }),
};

const selectItem = (item: any) => {
  // selected.value = item;
  showDropdown.value = false;
  $emit("update:modelValue", item);
};
</script>

<style scoped>
.dropdown-select {
  width: 100%;
  border-radius: 14px;
  padding: 14px 16px;
  border: 2px solid #E7EAF4;
  color: #4B4B4D;
  background-color: #FCFCFC;
}

.dropdown-menu {
  width: 100%;
  margin-top: 4px;
  padding: 10px 0;
  border-radius: 4px 4px 14px 14px;
  border: 2px solid #E7EAF4;
  color: #4B4B4D;
  background-color: #EBEBEB;
  position: absolute;
  z-index: 2;
}
.drop-conten-padding {
  padding: 10px 16px;
}

.icon {
  height: 12px;
  width: 12px;
  margin-left: 10px;
}
</style>
