<script>
import axios from 'axios'

export default {
  name: 'mainCulture',
  data() {
    return {
      articles: [],
      loading: true,
      error: null,
      apiUrlNews: 'https://allrussia.info/api/data_news_culture_history',
      apiImage: 'https://allrussia.info/api/public/flags.jpg',
    }
  },
  async mounted() {
    await this.fetchMainCulture()
  },
  methods: {
    async fetchMainCulture() {
      try {
        const response = await axios.get(this.apiUrlNews)
        this.articles = response.data
        this.loading = false
      } catch (e) {
        console.error('Error fetching articles:', e)
        this.error = 'Failed to load data'
        this.loading = false
      }
    },
  },
}
</script>

<template>
  <div>
    <div class="wrapper">
      <div class="horizontal-line"></div>
      <div class="red-rectangle"></div>
      <h3>КУЛЬТУРА И ИСТОРИЯ</h3>

      <div v-if="loading">Загрузка...</div>
      <div v-if="error">{{ error }}</div>

      <div v-if="!loading && !error" class="container">
        <div v-for="article in articles" :key="article.id" class="item">
          <img :src="this.apiImage" alt="Article image" class="images" />
          <h3 class="title">{{ article.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin-bottom: 60px;
  margin-top: 60px;
  padding: 1rem;
}
.images {
  max-width: 345px;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 357px;
}

.horizontal-line {
  height: 1px;
  width: 1440px;
  background-color: #000;
  margin: 0 auto;
}

.red-rectangle {
  width: 88px;
  height: 8px;
  background-color: #aa0000;
  margin-bottom: 10px;
}

h3 {
  font-size: 24px;
  font-weight: normal;
}

.item > p {
  font-family: 'Roboto Condensed';
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
}
.title {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
