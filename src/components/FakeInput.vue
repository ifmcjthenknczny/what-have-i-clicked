<template>
  <input
    ref="autoFocusInput"
    type="text"
    class="visually-hidden-input"
    aria-hidden="true"
    tabindex="-1"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const autoFocusInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  nextTick(() => {
    if (autoFocusInput.value) {
      autoFocusInput.value.focus();
    }
  });
});
</script>

<style scoped>
.visually-hidden-input {
  position: absolute;
  /* top: -9999px; */
  /* left: -9999px; */
  width: 1px;
  height: 1px;
  opacity: 0;
  border: 0;
  padding: 0;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
