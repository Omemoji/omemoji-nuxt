import jsonData from '@/data/artworks.json'

// 状態の管理
export const state = () => ({
  data: jsonData,
})

// getters
export const getters = {
  getArtwork: (state) => {
    return state.data
  },
}