import axios from 'axios'

export const BASE_URL = 'https://allrussia.info/api/'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getNewsPolitics = () => apiClient.get('data_news_politics')
export const getNewsEconomics = () => apiClient.get('data_news_economics')
export const getNewsScienceEducation = () => apiClient.get('data_news_science_education')
export const getNewsCultureHistory = () => apiClient.get('data_culture_history')
export const getNewsSport = () => apiClient.get('data_news_sport')
export const getNewsTourism = () => apiClient.get('data_news_tourism')
export const getNewsPartners = () => apiClient.get('data_news_partners')
export const getNewsProjects = () => apiClient.get('data_news_projects')
export const getNewsMainPage = () => apiClient.get('data_main_page')

export default {
  getNewsPolitics,
  getNewsEconomics,
  getNewsScienceEducation,
  getNewsCultureHistory,
  getNewsSport,
  getNewsTourism,
  getNewsPartners,
  getNewsProjects,
  getNewsMainPage,
}
