document.querySelector('button').addEventListener('click', fetchRandomDog)

function fetchRandomDog() {
  const loadingMessage = document.getElementById('loading-message')
  const dogImage = document.getElementById('dog-image')
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
      } else {
        loadingMessage.textContent = 'No dog image found. Please try again.'
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`)
      loadingMessage.textContent = 'Failed to load image. Please try again.'
    })
}
