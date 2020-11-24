document.querySelector("h2").innerText = "Hi welcome to Weekend app ";
let checkBtn = document.querySelector("#check");
let date = new Date();
const getDayName = () => {
  return date.toLocaleDateString("en-EN", { weekday: "long" });
};

const weekend = () => {
  let userName = document.querySelector("#userName");
  let result = document.querySelector(".result");
  result.innerHTML = `Hey ${userName.value}, Today is ${getDayName()}, ${
    5 - date.getDay()
  } days left till weekend`;
  console.log(getDayName());
};

checkBtn.addEventListener("click", weekend);
