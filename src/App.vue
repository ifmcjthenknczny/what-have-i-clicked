<script setup lang="ts">
import ClickedMessage from './components/ClickedMessage.vue'
import FakeInput from './components/FakeInput.vue';
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div>
    <main class="container">
      <FakeInput />
      <ClickedMessage />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
