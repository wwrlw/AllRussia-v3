<template>
  <div class="main">
    <div class="main__wrapper">
      <div v-if="items.length > 0">
        <div v-for="(item, index) in items" :key="index" class="item">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { getNewsPolitics } from '@/api/server'

const items = ref([])
const shouldReload = ref(true)

const fetchData = () => {
  getNewsPolitics()
    .then((res) => {
      items.value = res.data
    })
    .catch((error) => {
      console.error('Ошибка загрузки данных:', error)
    })
}

onMounted(() => {
  fetchData()
})

watch(shouldReload, (newVal) => {
  if (newVal) {
    fetchData()
    shouldReload.value = false
  }
})
</script>

<style lang="scss" scoped>
.main__wrapper {
  padding: 1rem;
}
.item {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
}
</style>
