function Getdata(event) {
  event.preventDefault();
  console.log("hi");

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let phno = document.getElementById("phno").value;
  let gmail = document.getElementById("gmail").value;
  let pass = document.getElementById("pass").value;
  let username = document.getElementById("username").value;
  console.log("hi");

  console.log("Fname:", fname);
  console.log("Lname:", lname);
  console.log("Ph No:", phno);
  console.log("Email:", gmail);
  console.log("Password:", pass);
  console.log("Username:", username);
}
