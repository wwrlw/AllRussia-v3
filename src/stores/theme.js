import { ref } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

const setTheme = (newTheme) => {
  theme.value = newTheme
  localStorage.setItem('theme', newTheme)
  document.documentElement.classList.toggle('dark-theme', newTheme === 'dark')
}

export { theme, setTheme }
