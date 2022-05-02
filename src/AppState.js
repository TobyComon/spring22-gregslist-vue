import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  cars: [],
  car: null,
  houses: [],
  house: null,
  jobs: [],
  job: null,
})
