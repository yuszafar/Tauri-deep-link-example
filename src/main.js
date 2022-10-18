const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
});

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

const { getMatches } = window.__TAURI__.cli

getMatches().then((matches) => {
  console.log("arg received")
  console.log(matches['args']['arg1'])
  // do something with the { args, subcommand } matches
})

window.greet = greet;
