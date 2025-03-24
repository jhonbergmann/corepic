import Constants from 'expo-constants'
import axios from 'axios'

import {FetchImages, FetchImageDetails} from '@/services/api/interfaces/images'

const API_URL = Constants.expoConfig?.extra?.unsplash.apiUrl
const API_KEY = Constants.expoConfig?.extra?.unsplash.apiKey

export const fetchImages = async ({pageParam = 1, query, language = 'pt'}: {pageParam?: number; query: string; language?: string}): Promise<FetchImages> => {
  const response = await axios.get(`${API_URL}/search/photos`, {
    params: {query, page: pageParam, per_page: 10, client_id: API_KEY, lang: language},
  })
  return response.data
}

export const fetchImageDetails = async (id: string): Promise<FetchImageDetails> => {
  const response = await axios.get(`${API_URL}/photos/${id}`, {
    params: {client_id: API_KEY},
  })
  return response.data
}
