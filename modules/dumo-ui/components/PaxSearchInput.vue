<template>
  <div class="dumo-input-wrapper">
    
    <div>
      <div class="relative">
        <img
          class="fixed cursor-pointer eye-icon"
          src="~~/assets/images/ic-organization[blue].svg"
          alt=""
        />
      </div>
    </div>

    <div>
      <input
        :type="computedType"
        class="dumo-input-field"
        :class="{ error: error }"
        placeholder="_"
        :value="props.modelValue"
        @input="onChange"
        v-bind="$attrs"
      />
      <span class="text-xs" style="color: #C33434" v-if="errorMessage">
        {{ errorMessage }}
      </span>
      <div v-if="prepend" class="prepend">{{ prepend }}</div>
    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String },
  error: { type: Boolean },
  defaultLabel: { type: Boolean, default: true },
  errorMessage: { type: String },
  modelValue: {},
  prepend: { type: String },
});

const $emit = defineEmits(["update:modelValue"]);

const onChange = (e: any) => {
  $emit("update:modelValue", e.target.value);
};
</script>

<style scoped src="../assets/css/inputs.css"></style>

<style scoped>
.prepend {
  position: absolute;
  left: 0;
  top: 0;
  padding: 12px 10px;
  font-size: 14px;
}
.eye-icon {
  /* position: absolute;
  right: 10px;
  top: 14px;
  height: 16px;
  width: 16px;
  z-index: 999; */

  position: absolute;
  left: 0px;
  top: 14px;
  height: 16px;
  width: 16px;
  z-index: 999;
}
</style>
