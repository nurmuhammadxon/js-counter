import { createStore } from "redux";
import "./style.scss";

const initialState = 0;

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RND":
      return action.payload;
    case "CLS":
      return state * 0;
  }
};

const store = createStore(reduce);

const uptUI = () => {
  document.querySelector("#counter").textContent = store.getState();
};

store.subscribe(uptUI);

const inc = () => {
  return { type: "INC" };
};

const dec = () => {
  return { type: "DEC" };
};

const rnd = (value) => {
  return { type: "RND", payload: value };
};

const cls = () => {
  return { type: "CLS" };
};

document.querySelector("#inc").addEventListener("click", () => {
  store.dispatch(inc());
});

document.querySelector("#dec").addEventListener("click", () => {
  store.dispatch(dec());
});

document.querySelector("#rnd").addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 100);
  store.dispatch(rnd(randomNum));
});

document.querySelector("#clear__btn").addEventListener("click", () => {
  store.dispatch(cls());
});
