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
xhttpr.open("GET", "", true);
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
      console.log(i.original_title);
      console.log(i.popularity);
      console.log(i.original_language);
      // m1obj.innerHTML += i.original_title;
      // m1obj.innerHTML += i.popularity;
      // m1obj.innerHTML += i.original_language;
    }
  } else {
    // Handle error
    console.error("There was a problem with the fetch operation:", error);
  }
};
