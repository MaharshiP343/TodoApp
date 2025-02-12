let count = 0;

const getValue = () => {
  let imp = document.getElementById("task");
  let lst = document.getElementById("lst");

  console.log("imp :: ", imp);
  let value = imp.value;
  console.log("value :: ", value);

  const lstobj = document.createElement("li");
  //lstobj.innerText = value;
  lstobj.append(value);

  const d1 = document.createElement("div");

  const b1 = document.createElement("button");
  const b2 = document.createElement("button");
  b1.classNam = "B1";
  b2.classNam = "B2";

  console.log(count);
  count = count + 1;
  lstobj.id = count;

  b1.textContent = "edit";
  b2.textContent = "del";
  b2.addEventListener("click", () => {
    console.log("called :", lstobj.id);

    // var lis = document.querySelectorAll("#lst li");
    document.getElementById(lstobj.id).remove();
  });

  d1.append(b1);
  d1.append(b2);

  lstobj.append(d1);

  console.log("lst value", lstobj);
  lst.appendChild(lstobj);
};
