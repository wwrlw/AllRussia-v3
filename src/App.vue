<template>
  <div>
    <Header></Header>
    <button @click="toggleTheme">
      {{ isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
    </button>
  </div>
  <RouterView></RouterView>
</template>

<script>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { theme, setTheme } from '@/stores/theme'
import Header from './components/Header.vue'

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
  components: {
    Header,
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
