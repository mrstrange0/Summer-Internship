// Step 2: Image Carousel
const images = [
  "https://picsum.photos/id/1015/500/300",
  "https://picsum.photos/id/1016/500/300",
  "https://picsum.photos/id/1018/500/300",
  "https://picsum.photos/id/1024/500/300"
];

let currentIndex = 0;
const carouselImg = document.getElementById("carousel-img");

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImg.src = images[currentIndex];
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselImg.src = images[currentIndex];
});

// Step 3: Fetch data from a public API
const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", () => {
  jokeText.textContent = "Loading...";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      jokeText.textContent = `${data.setup} — ${data.punchline}`;
    })
    .catch(() => {
      jokeText.textContent = "Oops! Could not fetch a joke. Try again.";
    });
});