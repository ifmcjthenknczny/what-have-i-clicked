<template>
  <button
    v-if="isMobile"
    class="focus-input-button"
    aria-label="Focus on input field"
    @click="focusTargetInput"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00" width="20px" height="20px">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M20 5H4c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V7c0-1.1-.89-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zm-3-3h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm-1-3H5V8h2v2zm12 4H7v-2h10v2zm1-3h-2v-2h2v2zm0-3h-2V8h2v2z"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  targetInputSelector: {
    type: String,
    required: true,
  }
});

const isMobile = ref(false);

const checkIsMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= 768;
  }
};

const focusTargetInput = () => {
  if (props.targetInputSelector) {
    const targetElement: HTMLElement | null = document.querySelector(props.targetInputSelector);
    if (targetElement && typeof targetElement.focus === 'function') {
      targetElement.focus();
    }
  }
};

onMounted(() => {
  checkIsMobile();
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', checkIsMobile);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', checkIsMobile);
  }
});
</script>

<style scoped>
.focus-input-button {
  position: fixed;
  top: 15px;
  right: 15px;
  background-color: #cccccc;
  border: 1px solid #aaaaaa;
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
  z-index: 1000;
  line-height: 0;
  display: inline-block;
}

.focus-input-button svg {
  width: 20px;
  height: 20px;
  fill: #333333;
  vertical-align: middle;
}
</style>
