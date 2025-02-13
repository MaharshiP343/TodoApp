function Getdata(event) {
  event.preventDefault();
  console.log("hi");

  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let phno = document.getElementById("phno");
  let gmail = document.getElementById("gmail");
  let pass = document.getElementById("pass");
  let username = document.getElementById("username");
  console.log("hi");

  console.log("Fname:", fname.value);
  console.log("Lname:", lname.value);
  console.log("Ph No:", phno.value);
  console.log("Email:", gmail.value);
  console.log("Password:", pass.value);
  console.log("Username:", username.value);
}
