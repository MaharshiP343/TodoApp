//env try
// console.log("hi", process.env);
// require("dotenv").config();
// console.log("hi", process.env);

import { API_MOVIE_KEY } from "./keys";

console.log("Hi", API_MOVIE_KEY); // Output: Hello, world!

const xhttpr = new XMLHttpRequest();
xhttpr.open(
  "GET",
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&api_key=" +
    process.env.API_MOVIE_KEY,
  true
);
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
      imgscr = i.poster_path;
      over = i.overview;
      vote = i.vote_average;
      release = i.release_date;

      let M = document.getElementById("MB");

      //for img = https://image.tmdb.org/t/p/w500/
      // https://image.tmdb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg
      // m1obj.innerHTML += i.original_title;
      // m1obj.innerHTML += i.popularity;
      // m1obj.innerHTML += i.original_language;
      const lstobj = document.createElement("div");
      //lstobj.textContent = title + <br> + lang;
      // M.appendChild(lstobj);

      let img = document.createElement("img");
      img.className = "imgcss";
      img.src = "https://image.tmdb.org/t/p/w500/" + imgscr;
      lstobj.appendChild(img);

      let d = document.createElement("div");
      d.className = "container";

      let t1 = document.createElement("div");
      t1.className = "top";
      let m1 = document.createElement("div");
      m1.className = "middle";
      let b1 = document.createElement("div");
      b1.className = "bottom";

      let d2 = document.createElement("div");
      d2.className = "bottom-left"; //overview
      let d3 = document.createElement("div");
      d3.className = "top-right"; // release
      let d4 = document.createElement("div");
      d4.className = "bottom-right"; // vote
      let d5 = document.createElement("div");
      d5.className = "top-left"; //name

      m1.appendChild(lstobj);
      t1.appendChild(d3);
      t1.appendChild(d5);
      b1.appendChild(d2);
      b1.appendChild(d4);

      d2.innerText = over;
      d3.innerText = release;
      d4.innerText = vote;
      d5.innerText = title;

      d.append(t1);
      d.append(m1);
      d.append(b1);

      M.append(d);

      // let ptitle = document.createElement("p");
      // ptitle.className = "all";
      // ptitle.textContent = title;

      // let plang = document.createElement("p");
      // ptitle.className = "pall";
      // plang.textContent = lang;

      // let ppop = document.createElement("p");
      // popp.className = "all";
      // ppop.textContent = pop;

      // lstobj.appendChild(ptitle);
      // lstobj.appendChild(plang);
      // lstobj.appendChild(ppop);

      // ptext.append(document.writeln(title));
      // ptext.append(document.writeln(lang));
      // ptext.append(document.writeln(pop));
    }
  } else {
    // Handle error
    console.error("There was a problem with the fetch operation:", error);
  }
};
