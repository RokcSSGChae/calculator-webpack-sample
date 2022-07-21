import {
  calculate,
  isEqual,
  isInit,
  isNumber,
  isOperator,
} from "./util/CalculatorUtil.js";

let curNumber = "";
let prevNumber = "";
let operator = "";

const displayCommand = (command) => {
  document.querySelector("textarea").innerText = command;
};

document.addEventListener("click", (e) => {
  const $el = e.target;
  const command = $el.innerText;
  if ($el.tagName === "BUTTON") {
    switch (true) {
      case isEqual(command):
        try {
          curNumber = calculate(prevNumber, curNumber, operator);
          displayCommand(curNumber);
        } catch (error) {
          displayCommand(error);
        }
        break;

      case isNumber(command):
        curNumber += $el.innerText;
        displayCommand(curNumber);
        break;

      case isOperator(command):
        operator = $el.innerText;
        prevNumber = curNumber;
        curNumber = "";
        displayCommand(operator);
        break;

      case isInit(command):
        curNumber = "";
        prevNumber = "";
        operator = "";
        displayCommand("");
        break;
    }
  }
});
