<template>
  <div>
    <div class="flex items-center border-b border-[#E7EAF4] mb-10">
      <div v-for="(tab, i) in props.tabs" :key="i" class="mr-10">
        <p
          class="cursor-pointer sub-header text-[#0B4D89] uppercase pt-2 pb-4"
          :class="{
            'font-bold text-[#0B4D89] border-b-4 border-[#0B4D89]':
              activeTab === i,
          }"
          @click="handleActiveTab(i)"
        >
          {{ tab }}
        </p>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ tabs?: string[] }>();

const activeTab = ref(0);

const emit = defineEmits<{
  (e: 'getActiveTab', index: number): void
}>()

const handleActiveTab = (index: any) => {
  activeTab.value = index;
  emit('getActiveTab', index)
};
</script>

<style></style>
