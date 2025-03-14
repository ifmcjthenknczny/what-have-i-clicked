<script setup lang="ts">
import { ref } from 'vue'

const isHovered = ref(false)
</script>

<template>
  <footer
    class="footer"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ visible: isHovered, invisible: !isHovered }"
  >
    <p>
      Author: Maciej Konieczny.
      <a href="https://github.com/ifmcjthenknczny/what-have-i-clicked">Repository</a>
    </p>
    <p class="caution">
      Be careful on the internet. This webpage does not save your keystrokes — but it could.
    </p>
  </footer>
</template>

<style scoped>
p {
  margin: 4px 0;
}

.footer {
  padding: 4px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  font-weight: 200;
}

.caution {
  font-size: 0.5rem;
}

.footer.invisible {
  transform: translateY(95%);
}

.footer.visible {
  transform: translateY(0);
}

a {
  color: white;
}
</style>
