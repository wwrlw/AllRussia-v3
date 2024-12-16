<template>
  <div>
    <Header></Header>
    <div class="theme-switcher">
      <span>{{ isDark ? '🌙' : '🌞' }}</span>
      <button @click="toggleTheme" class="toggle-button">
        {{ isDark ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </div>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<script>
import { computed } from 'vue'
import Footer from './components/Footer.vue'
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
    Footer,
  },
}
</script>

<style>
body {
  transition:
    background-color 0.3s,
    color 0.3s;
}

.theme-switcher {
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 1em 0;
}

.toggle-button {
  background-color: transparent;
  border: 2px solid #ccc;
  color: #333;
  padding: 8px 20px;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
}

.toggle-button:hover {
  background-color: #333;
  color: #fff;
  border-color: #333;
}

/* Add smooth transitions for icons */
.theme-switcher span {
  font-size: 24px;
  transition: transform 0.3s ease-in-out;
}

.theme-switcher button {
  font-size: 16px;
}

body.dark-mode {
  background-color: #333;
  color: white;
}

body.light-mode {
  background-color: #fff;
  color: #000;
}
</style>
