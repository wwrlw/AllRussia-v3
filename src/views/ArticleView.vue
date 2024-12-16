<template>
  <div class="article-detail">
    <div v-if="article">
      <h1 class="article-title">{{ article.title }}</h1>
      <p class="article-subtitle" v-html="article.subtitle"></p>
      <div v-html="article.content"></div>
    </div>
    <div v-else>
      <p>Загрузка...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const article = ref(null)

const fetchArticle = async () => {
  try {
    const articleId = route.params.id
    const response = await axios.get(`https://allrussia.info/api/article/${articleId}`)
    article.value = response.data
  } catch (error) {
    console.error('Error fetching article:', error)
  }
}

onMounted(() => {
  fetchArticle()
})
</script>

<style scoped>
.article-detail {
  margin: 20px;
}

.article-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.article-subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.article-content {
  font-size: 1rem;
  line-height: 1.6;
}

.article-content img {
  max-width: 100%;
  margin: 10px 0;
}
</style>
