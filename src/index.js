import { sum } from "./modules/sum";

const root = document.querySelector("#root")

root.style.background = 'yellow';

root.textContent = sum(6, -10).toString()