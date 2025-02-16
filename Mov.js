// fetch(
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&api_key=359744bb5c3efbf6336f333857bf59ca"
// )
//   .then((data) => {
//     console.log("Data received:", data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

const xhttpr = new XMLHttpRequest();
xhttpr.open("GET", true);
xhttpr.send();
xhttpr.onload = () => {
  if (xhttpr.status === 200) {
    const response = JSON.parse(xhttpr.response);
    console.log("Data received:", response.results[1]);
    // Process the response data here
    let m1obj = document.getElementById("m1");

    console.log(m1obj);

    response.results.map(myFunction);

    function myFunction(i) {
      title = i.original_title;
      pop = i.popularity;
      lang = i.original_language;
      img = i.poster_path;
      //for img = https://image.tmdb.org/t/p/w500/
      // https://image.tmdb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg
      // m1obj.innerHTML += i.original_title;
      // m1obj.innerHTML += i.popularity;
      // m1obj.innerHTML += i.original_language;
      document.createElement(".");
    }
  } else {
    // Handle error
    console.error("There was a problem with the fetch operation:", error);
  }
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
