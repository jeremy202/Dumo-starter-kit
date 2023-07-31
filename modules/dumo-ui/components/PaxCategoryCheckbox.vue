<template>
  <div class="">
    <div>
      <label class="container">
        <input 
          type="checkbox"
          :class="{ error: error }"
          :value="props.modelValue"
          @input="onChange"
          v-bind="$attrs"
          ref="checkb"
        >
        <span class="checkmark"></span>
      </label>
    </div>

    <span class="text-xs" style="color: #C33434" v-if="errorMessage">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
  const checkb = ref();
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
  });

  onMounted(() => {
    console.log('>>>>', props.defaultValue, props.modelValue)
  })


  const $emit = defineEmits(["update:modelValue", "onInput"]);

  watch(() => props.modelValue, () => {
    if (props.modelValue === props.defaultValue) {
      console.log('yay!! it worked')
      checkb.value.checked = true;
    }
  })

  const onChange = (e: any) => {
    $emit("update:modelValue", e.target.value);
    $emit("onInput", e);
  };
</script>





<style scoped>
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
