<template>
  <div class="main">
    <div class="main__section">
      <div class="main__section-logo">ALLRUSSIA</div>
      <div class="main__section-title">Мы открываем Россию заново! Вместе с вами!</div>
    </div>
    <div class="main__wrapper">
      <div class="main__left">
        <div class="main__article">
          <div class="main__article-wrapper">
            <div class="">
              <h3 class="main__article-title">{{ main_article.title }}</h3>
              <p class="main-article-subtitle" v-html="main_article.subtitle"></p>
              <h4 class="similar-news-title">Похожие новости</h4>
              <ul class="similar-news-list">
                <li v-for="article in same_as_article" :key="article.id" class="similar-news-item">
                  <router-link :to="`/article/${article.id}`">{{ article.title }}</router-link>
                </li>
              </ul>
            </div>
            <img
              class="item_1-img"
              src="@/images/assets/comunicacion%20politica%20(1)%201.png"
              alt="123"
              style="max-width: 660px"
            />
            <div class="vertical-line"></div>
          </div>
        </div>

        <div class="latest-news">
          <div v-for="item in latest_news.slice(0, 3)" :key="item.id" class="latest-news-item">
            <img src="@/images/assets/1.png" alt="Новость" class="latest-news-image" />
            <div>
              <p class="latest-news-text">
                <router-link :to="`/article/${item.id}`">{{ item.title }}</router-link>
              </p>
              <p class="latest-news-time">{{ getTimeAgo(item.updated) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="main__right">
        <div class="featured-news">
          <h3 class="featured-news-title">Последние новости</h3>
          <img
            src="@/images/assets/284320788be7027b8bea3f687155b7fb%201.png"
            alt="Изображение новости"
            class="featured-news-image"
          />
          <p class="featured-news-text" v-html="latest_news[1]?.subtitle || 'Загрузка...'"></p>
          <p class="featured-news-time">{{ getTimeAgo(latest_news[1]?.updated) }}</p>
          <div v-for="item in latest_news.slice(0, 3)" :key="item.id" class="featured-news-item">
            <p class="featured-news-title-small">
              <router-link :to="`/article/${item.id}`">{{ item.title }}</router-link>
            </p>
          </div>
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
    display: flex;
    justify-content: start;
    gap: 30px;
  }

  .item {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
  }
  .latest-news {
    display: flex;
    margin-top: 20px;
    gap: 20px;
    &-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &-image {
      max-width: 320px;
      height: auto;
      object-fit: cover;
    }

    &-text {
      max-width: 300px;
      font-size: 14px;
      color: #333;
    }

    &-time {
      font-size: 12px;
      color: #999;
    }
  }
  .similar-news-title {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }

  .similar-news-list {
    list-style: none;
    padding: 0;

    .similar-news-item {
      position: relative;
      padding-left: 15px;
      padding-right: 4px;
      margin-bottom: 5px;
      color: #333;

      &::before {
        content: '●';
        color: red;
        position: absolute;
        left: 0;
      }
    }
  }
  .featured-news {
    &-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    &-image {
      width: 100%;
      margin-bottom: 10px;
    }

    &-text {
      font-size: 14px;
      color: #666;
    }

    &-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &-title-small {
      font-size: 14px;
      color: #333;
    }

    &-time {
      font-size: 12px;
      color: #999;
    }
  }

  &__section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 600px;
    background-image: url('@/images/assets/main.png');
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
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
  &__left {
    max-width: 1075px;
  }
  &__article {
    display: flex;
    align-items: center;
    &-title {
      font-family: 'Roboto Condensed';
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      padding-bottom: 20px;
    }

    &-wrapper {
      display: flex;
      justify-content: start;
    }
  }
}
</style>
