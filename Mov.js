// fetch(
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
      const lstobj = document.createElement("li");
      //lstobj.textContent = title + <br> + lang;
      // M.appendChild(lstobj);

      let img = document.createElement("img");
      img.className = "imgcss";
      img.src = "https://image.tmdb.org/t/p/w500/" + imgscr;
      lstobj.appendChild(img);

      let d = document.createElement("div");
      d.className = "container";
      let d2 = document.createElement("div");
      d2.className = "bottom-left";
      let d3 = document.createElement("div");
      d3.className = "top-right";
      let d4 = document.createElement("div");
      d4.className = "bottom-right";

      //
      let d5 = document.createElement("div");
      d5.className = "top-left";

      //

      d.appendChild(lstobj);
      d.appendChild(d2);
      d.appendChild(d3);
      d.appendChild(d4);
      d.appendChild(d5);

      d2.innerText = over;
      d3.innerText = release;
      d4.innerText = vote;
      d5.innerText = title;

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
