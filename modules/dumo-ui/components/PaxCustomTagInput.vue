<template>
  <div class="inline-block w-full dumo-input-field">

    <div class="inline-block w-full dumo-input-wrapper">
      <pax-select 
        color="#7A809B" 
        bg="#FAFBFB"  
        class="w-full"
        v-model="key"
        @change="onChange($event)"
      >
        <option value disabled>Select ---</option>
        <option v-for="(skill, i) in items" :key="i">
          {{ skill?.name }}
        </option>
      </pax-select>

      <div class="inline-block px-1 py-1 mt-4 border border-red-500" v-for="(tag, idx) in tags" :key="idx">
        <pax-category-tag blackRemoveIcon @on-remove="deleteTags(tag)" :key="idx" bg="#EFF0F5" color="#7A809B">
          {{ tag?.name || tag }}
        </pax-category-tag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as _ from "lodash";

// onMounted
onBeforeMount(()=> {
  if((props.savedTags as any).length > 0) {
    tags.value = props.savedTags
  }
})

// watch(() => props.savedTags, () => {
//   if((props.savedTags as any).length > 0) {
//     tags.value = props.savedTags
//   }
// })

const props = defineProps({
  error: { type: Boolean },
  errorMessage: { type: String },
  modelValue: {},
  prepend: { type: String },
  type: { type: String, default: "text" },
  items: { type: Array, default:()=> [] as any},
  savedTags: { type: Array, default: ()=> [] as any}
});

const $emit = defineEmits(["update:modelValue", "onInput"]);
const filteredSkills = ref();
const tags = ref<any>([])
const key = ref<any>("")


const capitalize = (string: string)=> {
  if(!string) return string;
  let splittedString = string.split(' ');
  let s: any = splittedString.map((curr) =>  curr = curr.charAt(0).toUpperCase() + curr.slice(1));
  s = s.join(' ');
  return s;
}

const onChange = (e: any) => {   
  const value: any = capitalize(e.target.value);
  addTags(value);
};

const onEnter = (e: any) => {
  if (e.keyCode === 13) {
    if(e.target.value.length === 0) return;
    addTags(e.target.value);
    e.target.value = "";
    $emit("onInput", tags.value);
  } 
};

const addTags = (value: string) => {
  const refinedText = capitalize(value);
  const filteredarr = tags.value.find((curr: any) => curr?.name === refinedText);
  const newTag: any = props.items.find((curr: any)=>  curr?.name === refinedText);

  tags.value.push({
    name: value,
    id: newTag?._id
  });

  $emit("onInput", tags.value);
}

const deleteTags = (tag: string)=> {
  const filteredTags= tags.value.filter((curr: string)=> curr !== tag)
  tags.value = filteredTags;
  $emit("onInput", tags.value);
}
</script>



<!-- <style scoped src="../assets/css/inputs.css"></style> -->
<style scoped>
.min-w {
  min-width: 60%;
}
.outline-none {
  outline: none;
  box-shadow: none;
}
.dumo-input-field {
  color: rgba(44, 62, 80, 0.75);
  border-width: 0;
  z-index: 400;
}
.dumo-input-field:focus {
  outline: 0;
  box-shadow: 0;
}
.dumo-input-field::placeholder {
  color: #646a86;
  opacity: 0.35;
  font-size: 14px;
}

/* Make the label and field look identical on every browser */
.dumo-input-field {
  font-size: 14px;
  line-height: 1.2;
  /* display: block; */
  /* width: 100%; */
  color: #4a4a4a;
}

.dumo-input-field,
.dumo-input-wrapper {
  position: relative;
  /* width: 100%; */
}

.dumo-input-field {
  /* padding: 10px 16px; */
  transition: border-color 0.25s ease-in-out;
  /* border: 1px solid #dededf; */
  border-radius: 4px;
  background-color: transparent;
}

.dumo-input-field + .dumo-input-label {
  position: absolute;
  top: 12px;
  left: 18px;
  display: inline-block;
  width: auto;
  margin: 0;
  padding: 0;
  color: #b5b5b5;
  transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out;
  transform-origin: 0 0;
}

.dumo-input-field:focus + .dumo-input-label,
.dumo-input-field:not(:placeholder-shown) + .dumo-input-label,
.dumo-input-field:focus {
  border-color: #0e62af;
}

.dumo-input-field:focus + .dumo-input-label,
.dumo-select-field:focus + .dumo-input-label {
  color: #1a308f;
}

.dumo-input-field.error,
.dumo-select-field.error {
  border-color: #C33434 !important;
  color: #C33434 !important;
}

.dumo-input-field.error + .dumo-input-label {
  color: #C33434;
}

.dumo-input-field:-webkit-autofill,
.dumo-input-field:-webkit-autofill:hover,
.dumo-input-field:-webkit-autofill:focus {
  box-shadow: 0 0 0px 1000px #ffffff inset !important;
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
}
.dumo-input-field[disabled] {
  background: #eee;
  opacity: 0.5;
}
</style>
