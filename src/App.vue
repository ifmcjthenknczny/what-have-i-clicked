<script setup lang="ts">
import ClickedMessage from './components/ClickedMessage.vue'
import FakeInput from './components/FakeInput.vue';
import FooterComponent from './components/FooterComponent.vue'
import KeyboardButton from './components/KeyboardButton.vue';
</script>

<template>
  <div>
    <main class="container">
      <KeyboardButton targetInputSelector=".visually-hidden-focusable-element" />
      <FakeInput />
      <ClickedMessage />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
