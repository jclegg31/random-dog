document.querySelector('button').addEventListener('click', fetchRandomDog)

function fetchRandomDog() {
  const loadingMessage = document.getElementById('loading-message')
  const dogImage = document.getElementById('dog-image')
  loadingMessage.style.display = 'block'
  dogImage.style.display = 'none'

  const url = `/.netlify/functions/fetchDog`

  fetch(url)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      console.log(data)
      const dog = data[0]
      dogImage.src = dog.url
      loadingMessage.style.display = 'none'
      dogImage.style.display = 'block'
      //document.querySelector('h3').innerText = data.explanation
    })
    .catch((err) => {
      console.log(`error ${err}`)
      loadingMessage.textContent = 'Failed to load image. Please try again.'
    })
}
