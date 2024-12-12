<template>
  <div>
    <button @click="toggleTheme">
      {{ isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { theme, setTheme } from '@/stores/theme'

export default {
  setup() {
    const isDark = computed(() => theme.value === 'dark')

    const toggleTheme = () => {
      setTheme(isDark.value ? 'light' : 'dark')
    }

    return {
      isDark,
      toggleTheme,
    }
  },
}
</script>

<style>
body {
  transition:
    background-color 0.3s,
    color 0.3s;
}
</style>
