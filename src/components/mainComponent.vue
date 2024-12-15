<template>
  <div class="main">
    <div class="main__wrapper">
      <div class="main__section">
        <div class="main__section-logo">ALLRUSSIA</div>
        <div class="main__section-title">Мы открываем Россию заново! Вместе с вами!</div>
      </div>

      <div class="main__article">
        <div class="main__article-wrapper">
          <p class="main-article-subtitle" v-html="main_article.subtitle"></p>
          <h3 class="main__article-title">{{ main_article.title }}</h3>
          <div class="vertical-line"></div>
        </div>

        <div class="main__same">
          <p class="main__same-p">Похожие новости</p>
          <ul class="main__same-title">
            <li v-for="article in same_as_article" :key="article.id">
              {{ article.title }}
            </li>
          </ul>
        </div>
      </div>

      <div class="item item_2">
        <div class="horizontal-line"></div>
        <div class="red-rectangle"></div>
        <h3 class="item_2-title">Последние новости</h3>

        <p class="item_2-subtitle" v-html="latest_news[1]?.subtitle || 'Загрузка...'"></p>

        <p class="asd font-bold">
          {{ latest_news[0] ? getTimeAgo(latest_news[0].updated) : 'Загрузка...' }}
        </p>
        <div v-for="item in latest_news" :key="item.id" class="news-item">
          <div class="w-[345px] h-[0px] border border-[#aaaaaa] mb-2 mt-2"></div>
          <p class="item_2-list">{{ item.title }}</p>
        </div>
      </div>

      <div v-for="(article, index) in same_as_article.slice(0, 3)" :key="index" class="item item_3">
        <div class="item-block">
          <p class="dsa" v-html="article.subtitle"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const main_article = ref({})
const same_as_article = ref([])
const latest_news = ref([])

const fetchMainArticle = async () => {
  try {
    const response = await axios.get('https://allrussia.info/api/data_main_page')
    main_article.value = response.data.main_article[0]
    same_as_article.value = response.data.same_as_main.slice(0, 3)
  } catch (error) {
    console.error('Error fetching main article:', error)
  }
}

const fetchLatestNews = async () => {
  try {
    const categories = [
      'politics',
      'economics',
      'science_education',
      'culture_history',
      'sport',
      'tourism',
    ]
    const requests = categories.map((category) =>
      axios.get(`https://allrussia.info/api/data_news_${category}`),
    )

    const responses = await Promise.all(requests)
    latest_news.value = responses
      .map((res) => res.data)
      .flat()
      .sort((a, b) => new Date(b.updated) - new Date(a.updated))
      .slice(0, 4)
  } catch (error) {
    console.error('Error fetching latest news:', error)
  }
}

const getTimeAgo = (dateString) => {
  const now = new Date()
  const date = new Date(dateString)
  const diffInSeconds = Math.floor((now - date) / 1000)

  if (diffInSeconds < 60) return `${diffInSeconds} секунд назад`
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} минут назад`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} часов назад`
  return `${Math.floor(diffInSeconds / 86400)} дней назад`
}

onMounted(() => {
  fetchMainArticle()
  fetchLatestNews()
})
</script>

<style lang="scss" scoped>
.main {
  &__wrapper {
    padding: 1rem;
  }
  .item {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
  }
  &__section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-image: url('@/assets/main.png');
    background-size: cover;
    background-position: center;
    color: --vt-c-white;
    &-logo {
      font-size: 200px;
      font-weight: bold;
    }
    &-title {
      font-size: 36px;
      font-weight: bold;
    }
  }
  &__article {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    align-items: center;
  }
}
</style>
