// const { response } = require("express");
// const fetch = require("node-fetch");

// console.log("Client side javascript file is loaded!");

const search = document.querySelector("input");
const weatherForm = document.querySelector("form");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
weatherForm.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = "Loading ...";
    messageTwo.textContent = "";

    fetch("http://localhost:3000/weather?address=" + location).then(
      (response) => {
        response.json().then((data) => {
          if (data.error) {
            messageOne.textContent = data.error;
          } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            // console.log(data.forecast);
            // console.log(data.address);
          }
        });
      }
    );
  },
  false
);