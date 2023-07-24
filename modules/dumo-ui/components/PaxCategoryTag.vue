<template>
  <div class="paxity-category-tag inline-block cursor-pointer" :style="styles" v-bind="$attrs" @click="(e) => onRemove(e)">
    <div class="flex items-center justify-between -mx-1">
      <div class="px-1">
        <slot></slot>
      </div>
      <div v-if="!noDelete" class="px-1">
        <img v-if="blackRemoveIcon" src="~/assets/images/grey-close.svg" class="w-auto h-auto"/>
        <img v-else src="~/assets/images/ic-remove.svg" class="w-auto h-auto"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  bg?: string;
  color?: string;
  blackRemoveIcon?: Boolean;
  noDelete?: Boolean;
}>();

const styles = {
  ...(props.bg && { backgroundColor: props.bg }),
  ...(props.color && { color: props.color }),
};

const emit = defineEmits(["onRemove"]);

const onRemove = (e: any) => {
  emit('onRemove', e)
};
</script>

<style scoped src="../assets/css/inputs.css"></style>

<style scoped>
.paxity-category-tag {
  background: #10365A;
  color: #FFFFFF;
  border-radius: 4px;
  opacity: 1;
  padding: 6px 8px;
}
</style>
