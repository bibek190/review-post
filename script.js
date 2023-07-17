const reviews = [
  {
    id: 1,
    name: "Bibek Shre",
    job: "Frontend Developer",
    img: "images/image1.jpg",
    text: "Est autem assumenda ut velit atque aut officiis fuga.In repellendus eaque et sapiente nostrum ut expedita illo. Eos repudiandae quia quo galisum quidem et dolorem similique eos consequuntur eius eum tempora assumenda qui nihil suscipit. ",
  },
  {
    id: 2,
    name: "Sean Mong",
    job: "UX/UI Designer",
    img: "images/image2.jpg",
    text: "money is tje it atque aut officiis fuga.In repellendus eaque et sapiente nostrum ut expedita illo. Eos repudiandae quia quo galisum quidem et dolorem similique eos consequuntur eius eum tempora assumenda qui nihil suscipit. ",
  },
  {
    id: 3,
    name: "Chiran Siran",
    job: "Software Engineer",
    img: "images/image3.jpg",
    text: "there is an  ut velit atque aut officiis fuga.In repellendus eaque et sapiente nostrum ut expedita illo. Eos repudiandae quia quo galisum quidem et dolorem similique eos consequuntur eius eum tempora assumenda qui nihil suscipit. ",
  },
  {
    id: 4,
    name: "Kali bu",
    img: "images/image4.jpg",
    job: "Backend-developer",
    text: "Sun is more a ut velit atque aut officiis fuga.In repellendus eaque et sapiente nostrum ut expedita illo. Eos repudiandae quia quo galisum quidem et dolorem similique eos consequuntur eius eum tempora assumenda qui nihil suscipit. ",
  },
];

const img = document.getElementById("person-image");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 4);
  //   console.log(randomNum);
  currentItem = randomNum;
  showPerson(currentItem);
});

const showPerson = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};
