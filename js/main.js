//Make sure DOM fully loads first
document.addEventListener('DOMContentLoaded', function () {
  const randomDogBtn = document.getElementById('randomdogbtn')
  const allBreedsBtn = document.getElementById('allbreedsbtn')
  const backBtn = document.getElementById('backbtn')

  if (randomDogBtn) {
    randomDogBtn.addEventListener('click', function () {
      window.location.href = 'random.html'
    })
  }

  if (allBreedsBtn) {
    allBreedsBtn.addEventListener('click', function () {
      window.location.href = 'breeds.html'
    })
  }

  if (backBtn) {
    backBtn.addEventListener('click', function () {
      window.location.href = 'index.html'
    })
  }

  const randomDogFetchBtn = document.querySelector('button')
  if (randomDogFetchBtn) {
    randomDogFetchBtn.addEventListener('click', fetchRandomDog)
  }

  function fetchRandomDog() {
    const loadingMessage = document.getElementById('loading-message')
    const dogImage = document.getElementById('dog-image')
    const dogBreed = document.getElementById('dog-breed')
    loadingMessage.style.display = 'block'
    dogImage.style.display = 'none'

    const url = `/.netlify/functions/fetchDog`

    fetch(url)
      .then((res) => res.json()) // Parse response as JSON
      .then((data) => {
        console.log('API Response:', data)
        if (data && data.length > 0 && data[0].url) {
          const dog = data[0]
          dogImage.src = dog.url

          loadingMessage.style.display = 'none'
          dogImage.style.display = 'block'

          // Check for dog breed name
          if (dog.breeds && dog.breeds.length > 0) {
            const breedName = dog.breeds[0].name
            console.log('Dog Breed:', breedName)
            dogBreed.textContent = `Dog Breed: ${breedName}`
          } else {
            console.log('No breed information available')
            dogBreed.textContent = `Dog Breed: Unknown`
          }
        } else {
          loadingMessage.textContent = 'No dog image found. Please try again.'
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
        loadingMessage.textContent = 'Failed to load image. Please try again.'
      })
  }
})
