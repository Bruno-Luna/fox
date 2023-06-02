const img = document.querySelector('img')
const button = document.querySelector('button')

const raffleImage = () => {
  const promise = fetch('https://randomfox.ca/floof/')

  promise.then(response => response.json())
             .then(data => img.setAttribute('src', data.image))
             .catch(err => console.error(err.message))
             .finally(console.info('Requisição finalizada!'))
}

raffleImage()

button.addEventListener('click', raffleImage)


