<script>
import axios from 'axios'

export default {
  name: 'mainTeach',
  data() {
    return {
      articles: [],
      loading: true,
      error: null,
      apiUrlNews: 'https://allrussia.info/api/data_news_science_education',
      apiImage: 'https://allrussia.info/api/public/flags.jpg',
    }
  },
  async mounted() {
    await this.fetchMainTeach()
  },
  methods: {
    async fetchMainTeach() {
      try {
        const response = await axios.get(this.apiUrlNews)
        this.articles = response.data
        this.loading = false
      } catch (e) {
        console.error('Error fetching articles:', e)
        this.error = 'Не удалось загрузить данные'
        this.loading = false
      }
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <div class="horizontal-line"></div>
    <div class="red-rectangle"></div>
    <h3>НАУКА И ОБРАЗОВАНИЕ</h3>

    <div v-if="loading">Загрузка...</div>
    <div v-if="error">{{ error }}</div>

    <div v-if="!loading && !error" class="container">
      <div class="main-article">
        <img :src="articles[0]?.image || apiImage" alt="Main article image" />
        <h3 class="main-title">{{ articles[0]?.title }}</h3>
        <p class="main-subtitle">{{ articles[0]?.subtitle }}</p>
        <p class="main-text">{{ articles[0]?.content }}</p>
      </div>

      <div class="secondary">
        <div class="secondary-articles-left">
          <div v-for="article in articles.slice(1, 3)" :key="article.id" class="secondary-article">
            <img :src="article.image || apiImage" alt="Article image" />
            <h4 class="secondary-title">{{ article.title }}</h4>
            <p class="secondary-subtitle">{{ article.subtitle }}</p>
          </div>
        </div>
        <div class="secondary-articles-right">
          <div v-for="article in articles.slice(3, 5)" :key="article.id" class="secondary-article">
            <img :src="article.image || apiImage" alt="Article image" />
            <h4 class="secondary-title">{{ article.title }}</h4>
            <p class="secondary-subtitle">{{ article.subtitle }}</p>
          </div>
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
  margin: 60px 0;
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
  margin-bottom: 16px;
}

h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
}

.container {
  display: flex;
  justify-content: start;
  gap: 30px;
  align-items: start;
  width: 100%;
}

.main-article {
  display: flex;
  flex-direction: column;
  max-width: 620px;
}

.main-article img {
  max-width: 650px;
  height: auto;
  object-fit: cover;
  margin-bottom: 16px;
}

.main-title {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.main-subtitle {
  font-size: 16px;
  margin-bottom: 16px;
}

.main-text {
  font-size: 14px;
  color: #555;
}

/* Второстепенные статьи */
.secondary {
  display: flex;
  justify-content: start;
  gap: 20px;
}

.secondary-article {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  align-items: start;
}

.secondary-article img {
  max-width: 400px;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 8px;
}

.secondary-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}

.secondary-subtitle {
  font-size: 12px;
  color: #555;
  padding-bottom: 10px;
}
</style>
