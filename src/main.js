import { createStore, bindActionCreators } from "redux";
import { reduce } from "./reduce";
import * as actions from "./actions";

const store = createStore(reduce);
const { dispatch, getState, subscribe } = store;

const uptUI = () => {
  document.querySelector("#counter").textContent = getState();
};

subscribe(uptUI);

const { inc, dec, rnd, cls } = bindActionCreators(actions, dispatch);

document.querySelector("#inc").addEventListener("click", inc);
document.querySelector("#dec").addEventListener("click", dec);
document.querySelector("#rnd").addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 100);
  rnd(randomNum);
});
document.querySelector("#clear__btn").addEventListener("click", cls);