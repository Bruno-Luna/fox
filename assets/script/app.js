const img = document.querySelector('img')
const button = document.querySelector('button')

const raffleImage = () => {
  const promisse = fetch('https://randomfox.ca/floof/')

  promisse.then(response => response.json())
             .then(data => img.setAttribute('src', data.image))
             .catch(err => console.error(err.message))
             .finally(console.info('Requisição finalizada!'))
}

raffleImage()

button.addEventListener('click', raffleImage)


