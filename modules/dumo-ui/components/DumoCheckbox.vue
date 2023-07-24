<template>
  <div class="">
    <div v-if="!categoriesCheckbox" class="relative w-full h-full">
      <label class="">
        <input
          class="check-input"
          :type="computedType"
          :class="{ error: error }"
          :value="props.modelValue"
          @input="onChange"
          v-bind="$attrs"
          ref="radio"
        />

        <div class="cont2">
          <div>
            <slot></slot>
          </div>

          <span class="checkmark2"></span>
        </div>
      </label>
    </div>

    <div v-if="categoriesCheckbox">
      <label class="container">
        <input 
          type="checkbox"
          :class="{ error: error }"
          :value="props.modelValue"
          @input="onChange"
          v-bind="$attrs"
          ref="cbox"
        >
        <span class="checkmark"></span>
      </label>
    </div>

    <span class="text-xs" style="color: #d63b3b" v-if="errorMessage">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, onMounted } from 'vue';

  const radio = ref();
  const cbox = ref();
  const props = defineProps({
    label: { type: String },
    error: { type: Boolean },
    defaultLabel: { type: Boolean, default: true },
    errorMessage: { type: String },
    modelValue: {
      type: String
    },
    defaultValue: {
      type: String,
    },
    prepend: { type: String },
    type: { type: String, default: "checkbox" },
    categoriesCheckbox: { type: Boolean, default: false },
  });

  onMounted(() => {
    // console.log('>>>>', props.defaultValue, props.modelValue)
  })
  const $emit = defineEmits(["update:modelValue", "input"]);

  watch(() => props.modelValue, () => {
    if (computedType.value === 'radio' && props.modelValue === props.defaultValue) {
      console.log('>>>>', props.defaultValue, props.modelValue)
      radio.value.checked = true;
    }else if(computedType.value === 'checkbox' && props.modelValue === props.defaultValue){
      radio.value.checked = true;
    }


    if(props.categoriesCheckbox){
      if(props.modelValue === props.defaultValue){
        console.log('yay!! it worked')
        cbox.value.checked = true;
      } 
    }

  })

  const onChange = (e: any) => {
    $emit("update:modelValue", e.target.value);
    if(props.categoriesCheckbox){
      $emit("input", e);
    }
  };

  const computedType = computed(() => {
    return props.type === 'radio' ? props.type : 'checkbox';
  })
</script>

<style scoped>
/* The container */
.cont2 {
  display: flex;
  justify-items: space-between;
  position: relative;
  padding: 19px 42px 19px 12px;
  cursor: pointer;
  color: #10365A;
  font-size: 13px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: white;
  box-shadow: 0px 1px 5px rgb(63 63 68 / 10%);
  border-radius: 4px;
  border: 2px solid #E7EAF4;
  height: 70%;
  align-items: center;
}

/* Hide the browser's default checkbox */

.check-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */

.cont2 > .checkmark2 {
  position: absolute;
  top: 50%;
  right: 20px;
  height: 15px;
  width: 15px;
  background-color: #fff;
  border: 1.5px solid #EFF0F5;
  border-radius: 50%;
  transform: translateY(-50%);
}

.cont2 > .checkmark2 > div {
  left: 4px;
  top: 0px;
  width: 5px;
  height: 9px;
  border: solid #57B27F;
  border-width: 0 1.5px 1.5px 0;
  transform: rotate( 45deg);
}

/* When the checkbox is checked, add a green background */
.check-input:checked ~ .cont2 > .checkmark2 {
  background-color: #fff;
  border: 1px solid #57B27F;
  border-radius: 50%;
}

.check-input:checked ~ .cont2 {
  border: 2px solid #4A89C3;
  color: #0B4D89;
}

.check-input.error:checked ~ .cont2 {
  border: 2px solid red;
  color: red;
}

/* Create the checkmark/indicator (hidden when not checked) */
.cont2 > .checkmark2:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.check-input:checked ~ .cont2 > .checkmark2:after {
  display: block;
}

/* Style the checkmark/indicator */
.cont2 > .checkmark2:after {
  left: 4px;
  top: 0px;
  width: 5px;
  height: 9px;
  border: solid #57B27F;
  border-width: 0 1.5px 1.5px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}












/* The container */
.container {
  display: block;
  position: relative;
  margin-right: 8px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
  border-radius: 3px;
  background-color: #FFFFFF;
  border: 1px solid #D4D4D5;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #FFFFFF;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #24B57A;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
