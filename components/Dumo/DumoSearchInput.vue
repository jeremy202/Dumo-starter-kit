<template>
  <div class="dumo-input-wrapper">
    <div class="">
      <img src="@/assets/images/ic-search.svg" alt="" class="icon" />
    </div>

    <input type="text" class="dumo-input-field custom-input" :class="{ error: error, 'dumo-input-small': sm }"
      :placeholder="placeholder" :value="props.modelValue" @input="onChange" v-bind="$attrs" />
    <span class="text-xs" style="color: #C33434" v-if="errorMessage">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  sm: { type: Boolean, default: false },
  placeholder: { type: String, default: 'Search' },
  error: { type: Boolean },
  defaultLabel: { type: Boolean, default: true },
  errorMessage: { type: String },
  modelValue: {},
});

const $emit = defineEmits(["update:modelValue"]);

const onChange = (e: any) => {
  $emit("update:modelValue", e.target.value);
};

</script>

<style scoped>
.custom-input {
  padding: 14px 12px 14px 40px;
}

.custom-input.dumo-input-small {
  font-size: 12px;
  border-radius: 10px;
  padding: 10px 12px 10px 30px;
}

.custom-input::placeholder {
  text-transform: capitalize;
}

.icon {
  position: absolute;
  height: 16px;
  width: 16px;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
}
</style>
