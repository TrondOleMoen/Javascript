let temperature = 15;
if (temperature <= 0) {
  console.log("It's freezing!");
} else if (temperature >= 1 && temperature <= 15) {
  console.log("It's cold!");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's pleasant!");
} else {
  console.log("It's hot!");
}

let userRole = "moderator";
("admin");
("user");
switch (userRole) {
  case "moderator":
    console.log("Welcome, Moderator!");
    break;
  case "admin":
    console.log("Welcome, Admin!");
    break;
  case "user":
    console.log("Welcome, User!");
    break;
  default:
    console.log("Welcome, Unknown role!");
    break;
}
