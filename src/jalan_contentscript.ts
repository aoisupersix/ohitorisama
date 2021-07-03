import { getBucket } from '@extend-chrome/storage'
import { JalanStore } from './models/jalan_store'

const store = getBucket<JalanStore>('store')

window.addEventListener('load', async () => {
  const numOfPeople = document.querySelector(
    'select#dyn_adult_num'
  ) as HTMLSelectElement
  if (numOfPeople !== null) {
    // Select one person for the number of people.
    // NOTE:
    // The number of people seems to change dynamically after the page loads,
    // so if you change it right after the page loads, it won't be reflected.
    // So, I'm trying to delay the process by about 0.5 seconds to update it (very messy).
    setTimeout(async () => {
      const defaultValue = await store.get(({ numOfPeople }) => numOfPeople ?? '1')
      numOfPeople.value = defaultValue
      numOfPeople.dispatchEvent(new Event('change'))
    }, 500)

    // Save the number of people selected by the user to local storage.
    numOfPeople.addEventListener('change', () => {
      store.set({ numOfPeople: numOfPeople.value })
    })
  }

  // Uncheck Undate.
  const dateUndecidedCheckbox = document.querySelector(
    'input#datecheck'
  ) as HTMLInputElement
  if (dateUndecidedCheckbox !== undefined) {
    const defaultValue = await store.get(({ undate }) => undate ?? false)
    dateUndecidedCheckbox.checked = defaultValue
    dateUndecidedCheckbox.dispatchEvent(new Event('change'))
  }

  // Save the user-selected undate checkbox value to local storage.
  dateUndecidedCheckbox.addEventListener('change', () => {
    store.set({ undate: dateUndecidedCheckbox.checked })
  })
})
