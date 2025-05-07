<template>
  <div
    ref="autoFocusElement"
    class="visually-hidden-focusable-element"
    contenteditable="true"
    tabindex="-1"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const autoFocusElement = ref<HTMLElement | null>(null);

onMounted(() => {
  nextTick(() => {
    if (autoFocusElement.value) {
      autoFocusElement.value.focus();
    }
  });
});

const handleFocus = () => {}
const handleBlur = () => {}
const handleInput = () => {}
</script>

<style scoped>
.visually-hidden-focusable-element {
  position: absolute;
  /* top: -9999px; */
  /* left: -9999px; */
  width: 1px;
  height: 1px;
  opacity: 0;
  border: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  white-space: nowrap;
  line-height: 0;
}
</style>
