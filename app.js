const img = document.querySelector('img')

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://randomfox.ca/floof/");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    img.setAttribute('src', xhr.response.image)
  } else {
    console.error(`Error: ${xhr.status}`);
  }
};

