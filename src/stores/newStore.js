import { defineStore } from 'pinia'
import axios from 'axios'

export const useNewStore = defineStore('newStore', {
  state: () => ({
    main_article: {},
    same_as_article: [],
    latest_news: [],
    economics_news: [],
    apiImage: 'https://allrussia.info/api/public/flags.jpg',
  }),
  actions: {
    async fetchMainArticle() {
      try {
        const response = await axios.get('https://allrussia.info/api/data_main_page')
        this.main_article = response.data.main_article[0]
        this.same_as_article = response.data.same_as_main.slice(0, 3)
      } catch (error) {
        console.error('Error fetching main article:', error)
      }
    },
    async fetchLatestNews() {
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
        this.latest_news = responses
          .map((res) => res.data)
          .flat()
          .sort((a, b) => new Date(b.updated) - new Date(a.updated))
          .slice(0, 4)
      } catch (error) {
        console.error('Error fetching latest news:', error)
      }
    },
    async fetchEconomicsNews() {
      try {
        const response = await axios.get('https://allrussia.info/api/data_news_economics')
        this.economics_news = response.data.slice(0, 2)
      } catch (error) {
        console.error('Error fetching economics news:', error)
      }
    },
  },
  getters: {
    getApiImage: (state) => state.apiImage,
    getEconomicsNews: (state) => state.economics_news,
  },
})
