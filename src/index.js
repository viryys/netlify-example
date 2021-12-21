import { sum } from "./modules/sum";

const root = document.querySelector("#root")

root.style.background = 'red';

root.textContent = sum(6, -10).toString()