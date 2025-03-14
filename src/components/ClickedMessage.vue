<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const keyPressed = ref<string | null>(null);

const handleKeyDown = (event: KeyboardEvent) => {
  keyPressed.value = event.key;
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <div class="key-display">
    <p v-if="keyPressed" class="intro">You pressed:</p>
    <p v-else class="intro">Press any key...</p>
    <p v-if="keyPressed" class="key">{{ keyPressed }}</p>
  </div>
</template>

<style scoped>
.key-display {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

.key {
  font-size: 12rem;
}

.intro {
  padding: 12px;
  background: #f3f3f3;
  border-radius: 8px;
  display: inline-block;
}
</style>
