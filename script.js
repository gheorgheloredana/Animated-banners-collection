//banner 1
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const bannerone = ["PROMOTIONS UP TO -50%! WE HAVE ADDED MORE ITEMS!"];

const el = document.getElementById("bannerone");
   
let sleepTime = 70;

let BannerText = 0;

const writeLoop = async () => {
    while (true) {
        let currentBanner =bannerone[BannerText];

        for (let i = 0; i < currentBanner.length; i++ ) {
            el.innerText = currentBanner.substring(0, i + 1);
            await sleep (sleepTime);
        }

        await sleep(sleepTime * 10);
    }
};

writeLoop();



//banner 5
let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");

window.onscroll = () => {
  let pos = window.scrollY - 1300;
  line1.style.left = `${pos}px`;
  line2.style.right = `${pos}px`;
};


//banner 3
const text = document.querySelector(".line-6");
const stringText = text.textContent;
const splitText = stringText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 60);

function onTick() {
  const spans = text.querySelectorAll("span");
  const span = spans[char];
  span.classList.add("fade");
  char++;
  if (char === spans.length) {
    char = 0;
    spans.forEach((span) => {
      span.classList.remove("fade");
    });
  }
}

timer = setInterval(onTick, 300);