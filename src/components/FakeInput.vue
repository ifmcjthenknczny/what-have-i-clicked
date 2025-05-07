<template>
  <div
    ref="autoFocusElement"
    class="visually-hidden-focusable-element"
    contenteditable="true"
    tabindex="-1"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const autoFocusElement = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    if (autoFocusElement.value) {
      autoFocusElement.value.focus()
    }
  })
})

const handleFocus = () => {}
const handleBlur = () => {}
const handleInput = () => {}
</script>

<style scoped>
.visually-hidden-focusable-element {
  width: 30%;
  position: absolute;
  top: 0;
  border: 0;
  padding: 0;
  margin: 0;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
}

.visually-hidden-focusable-element:focus {
  border: 0;
  outline: none;
}
</style>
