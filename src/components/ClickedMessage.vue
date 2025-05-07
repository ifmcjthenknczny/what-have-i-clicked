<script setup lang="ts">
import { useMobile } from '@/composables/useMobile'
import { pick } from '@/helpers'
import { ref, onMounted, onUnmounted, computed } from 'vue'

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

const { isMobile } = useMobile()

const fontSizeRem = computed(() => {
  const BASE_SIZE = 12
  const MIN_SIZE = 2
  const REDUCTION_FACTOR = 1.1
  const MAX_CHARS_FOR_BASE_SIZE = 3;
  if (!keyPressed.value.key || !isMobile) {
    return `${BASE_SIZE}rem`
  }

  const reduction = Math.max(MAX_CHARS_FOR_BASE_SIZE, keyPressed.value.key.length) * REDUCTION_FACTOR

  return `${Math.max(12 - reduction, MIN_SIZE)}rem`
})

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
      <div class="key" :style="`font-size: ${fontSizeRem};`">{{ keyPressed.key }}</div>
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
  margin-bottom: 0;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-top: 9rem;
}

@media (max-width: 768px) {
  .key {
    margin-top: 5rem;
  }
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
