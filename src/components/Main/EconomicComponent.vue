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
    <div class="horizontal-line"></div>
    <div class="red-rectangle"></div>
    <h3>ЭКОНОМИКА</h3>
    <div class="economic__container">
      <div v-for="news in economicsNews" :key="news.id" class="economic__item">
        <div class="economic__img">
          <img :src="apiImage" alt="Flag" class="flag-image" />
        </div>
        <div class="economic__text">
          <p class="economic__title">{{ news.title }}</p>
          <p class="economic__subtitle" v-html="news.subtitle"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.economic {
  padding: 1rem;
  margin: 60px 0;
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

  &__container {
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    align-items: start;
  }

  &__item {
    display: flex;
    gap: 10px;
  }
  &__title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &__subtitle {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__text {
    display: flex;
    flex-direction: column;
    max-width: 60%;
    gap: 20px;
  }

  .flag-image {
    width: 467px;
    height: 400px;
    object-fit: cover;
  }
}
</style>
