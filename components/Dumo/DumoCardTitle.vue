<template>
  <div class="info-header" :class="{ icon: image }">
    <div v-if="image" class="icon-container">
      <img :src="image" :alt="imageAlt" />
    </div>
    <span class="uppercase sub-header-small">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image?: string
  imageAlt?: string
  text: string
}

withDefaults(defineProps<Props>(), {
  image: undefined,
  imageAlt: 'Icon',
})
</script>

<style scoped>
.info-header {
  display: flex;
  align-items: center;
  background-color: #e4e7ea;
  color: var(--dark);
  border-radius: 16px;
  padding: 6px 12px;
  max-width: fit-content;
  max-height: 28px;
}

.info-header.icon {
  padding: 0px 12px 0px 0px;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  flex-shrink: 0;
}

.icon-container img {
  max-width: 28px;
  max-height: 28px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
