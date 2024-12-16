<script>
import { useNewStore } from '@/stores/newStore'

export default {
  data() {
    return {
      economicsNews: [],
      apiImage: '',
    }
  },
  async mounted() {
    const store = useNewStore()
    await store.fetchEconomicsNews()
    this.economicsNews = store.economics_news
    this.apiImage = store.apiImage
  },
}
</script>

<template>
  <div class="economic">
    <div class="economic__container">
      <h3>ЭКОНОМИКА</h3>
      <div v-for="news in economicsNews" :key="news.id">
        <div>
          <p class="economic__title">{{ news.title }}</p>
          <img :src="apiImage" alt="Flag" class="flag-image" />
        </div>

        <div>
          <p class="economic__subtitle">{{ news.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
