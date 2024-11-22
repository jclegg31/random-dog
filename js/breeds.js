document.addEventListener('DOMContentLoaded', function () {
  fetchDogBreeds()

  const backBtn = document.getElementById('backbtn')
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      window.location.href = 'index.html'
    })
  }
})

function fetchDogBreeds() {
  const loadingMessage = document.getElementById('loading-message')
  const breedList = document.getElementById('breed-list')
  loadingMessage.style.display = 'block'

  const url = `https://api.thedogapi.com/v1/breeds`

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log('Breeds API Response:', data)
      if (data && data.length > 0) {
        data.forEach((breed) => {
          const listItem = document.createElement('li')
          listItem.textContent = breed.name
          breedList.appendChild(listItem)
        })
        loadingMessage.style.display = 'none'
      } else {
        loadingMessage.textContent = 'No breed information available.'
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`)
      loadingMessage.textContent =
        'Failed to load breed information. Please try again.'
    })
}
