<template>
  <div
    @click.self="close"
    class="d-modal"
    :class="modalClasses"
    :style="modalStyles"
  >
    <div
      v-if="isActive"
      class="d-modal__content"
      :style="contentStyles"
      ref="content"
      @keydown="onKeydown"
      role="document"
      :tabindex="isActive ? 0 : undefined"
    >
      <slot :close="close"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import rgba from "color-rgba";

const content = ref();

const props = defineProps({
  modelValue: { required: false },
  overlayColor: {
    type: String,
    default: "#262626",
  },
  overlayOpacity: {
    type: [Number, String],
    default: 0.5,
  },
  value: {
    default: true,
  },
  maxWidth: {
    type: String,
    default: "700px",
  },
  center: {
    type: Boolean,
  },
  zIndex: {
    type: [Number, String],
    default: 9000,
  },
});

const emit = defineEmits(["close", "keydown", "update:modelValue"]);

const isActive = ref(!!props.modelValue);

const show = () => {
  nextTick(() => {
    document.documentElement.classList.add("overflow-y-hidden");
    content.value.focus();
  });
};

const hide = () => {
  emit("close");
  nextTick(() => {
    document.documentElement.classList.remove("overflow-y-hidden");
  });
};

const close = () => {
  isActive.value = false;
};

const onKeydown = (e: KeyboardEvent) => {
  if (e.keyCode === 27) {
    close();
  }
  emit("keydown", e);
};

const computedColor = computed(() => {
  const [r, g, b, alpha] = rgba(props.overlayColor)!;
  const a = isActive.value && alpha ? props.overlayOpacity : 0;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
});

const modalClasses = computed(() => {
  return {
    "d-modal--active": isActive.value,
  };
});
const modalStyles = computed(() => {
  return {
    zIndex: props.zIndex,
    backgroundColor: computedColor.value,
    opacity: isActive.value ? 1 : 0,
    alignItems: props.center ? "center" : undefined,
  } as any;
});
const contentStyles = computed(() => {
  return {
    width: "100%",
    maxWidth: props.maxWidth,
  };
});
const scrimStyles = computed(() => {
  return {};
});

watch(
  () => props.modelValue,
  (value) => {
    isActive.value = !!value;
  }
);

watch(isActive, (value) => {
  !!value !== props["modelValue"] && emit("update:modelValue", value);
  !!value ? show() : hide();
});

onBeforeMount(() => {
  nextTick(() => {
    isActive.value && show();
  });
});
</script>

<style>
.d-modal {
  border-radius: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

.d-modal__content {
  position: relative;
  outline: none;
}

.d-modal--active {
  pointer-events: auto;
  overflow-y: auto;
}
</style>
