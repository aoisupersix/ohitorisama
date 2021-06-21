window.addEventListener('load', () => {
  // NOTE:
  // The number of people seems to change dynamically after the page loads,
  // so if you change it right after the page loads, it won't be reflected.
  // So, I'm trying to delay the process by about 0.5 seconds to update it (very messy).
  setTimeout(() => {

    // Select one person for the number of people.
    const numOfPeople = document.querySelector(
      'select#dyn_adult_num'
    ) as HTMLSelectElement
    if (numOfPeople !== null) {
      numOfPeople.value = '1'
      numOfPeople.dispatchEvent(new Event('change'))
    }

    // Uncheck Undate.
    const dateUndecidedCheckbox = document.querySelector(
      'input#datecheck'
    ) as HTMLInputElement
    if (dateUndecidedCheckbox !== undefined) {
      dateUndecidedCheckbox.checked = false
      dateUndecidedCheckbox.dispatchEvent(new Event('change'))
    }

  }, 500)
}, true)
