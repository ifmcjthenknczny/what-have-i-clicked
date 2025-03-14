<script setup lang="ts">
import { pick } from '@/helpers'
import { ref, onMounted, onUnmounted } from 'vue'

type Key = {
  key: string | null
  keyCode: number | null
}

const TARGET_INTRO_CONTENT = 'Press any key...'

const keyPressed = ref<Key>({ key: null, keyCode: null })
const introContent = ref<string>('')
let intervalId: number | null = null
let index = 0

const startTyping = (limit: number, delay: number, onComplete?: () => void) => {
  intervalId = setInterval(() => {
    if (index < limit) {
      introContent.value += TARGET_INTRO_CONTENT[index]
      index++
    } else if (intervalId) {
      clearInterval(intervalId)
      onComplete?.()
    }
  }, delay)
}

const typeIntroDots = () => startTyping(TARGET_INTRO_CONTENT.length, 600)
const typeIntroText = () => startTyping(TARGET_INTRO_CONTENT.length - 3, 200, typeIntroDots)

const handleKeyDown = (event: KeyboardEvent) => {
  keyPressed.value = pick(event, ['key', 'keyCode'])
  typeIntroText()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  setTimeout(() => typeIntroText(), 500)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div class="key-display">
    <p v-if="keyPressed.key" class="intro">You pressed:</p>
    <p v-else class="intro">{{ introContent }}</p>
    <div v-if="keyPressed.key">
      <p class="key">{{ keyPressed.key }}</p>
      <p class="keyCode">(key code {{ keyPressed.keyCode }})</p>
    </div>
  </div>
</template>

<style scoped>
.key-display {
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

.key {
  font-size: 12rem;
  margin-bottom: 0;
}

.keyCode {
  font-size: 1rem;
  margin: 0;
}

.intro {
  padding: 12px;
  background: #f3f3f3;
  border-radius: 8px;
  display: inline-block;
}
</style>
