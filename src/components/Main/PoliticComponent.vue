<script>
import axios from 'axios'

export default {
  name: 'mainPolitic',
  data() {
    return {
      newsItems: [],
      apiUrlNews: 'https://allrussia.info/api/data_news_politics',
      apiImage: 'https://allrussia.info/api/public/flags.jpg',
    }
  },
  mounted() {
    this.fetchNewsItems()
  },
  methods: {
    async fetchNewsItems() {
      try {
        const response = await axios.get(this.apiUrlNews)
        this.newsItems = response.data
      } catch (e) {
        console.error('Error fetching news items:', e)
      }
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <div class="horizontal-line"></div>
    <div class="red-rectangle"></div>
    <h3>ПОЛИТИКА</h3>

    <div class="container">
      <div v-for="item in newsItems.slice(0, 4)" :key="item.id" class="item">
        <img :src="this.apiImage" class="image" alt="News image" />
        <p class="title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin-bottom: 60px;
  margin-top: 60px;
  padding: 1rem;
  margin: 60px 0;
}
.image {
  max-width: 345px;
  max-height: 245px;
}

.container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.horizontal-line {
  height: 1px;
  opacity: 0.4;
  width: 100%;
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
  margin-top: 16px;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: normal;
}

.title {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 340px;
}

.title:first-child {
  margin-top: 16px;
  margin-bottom: 20px;
}
</style>
