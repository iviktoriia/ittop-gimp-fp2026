let currentTeam = "";

const elementsMap = {
  tiles: "🧩 Тайлы",
  background: "🌄 Фоны",
  boss: "🧠 Боссы",
  hero: "🧍 Главные герои",
  npc: "👥 NPC",
  enemy: "🧟 Враги",
  item: "🎒 Предметы",
  ui: "❤️ UI / эффекты"
};

const data = {
  zombie: [
    {
      type: "npc",
      src: "img/zombie/дима-в/нпс.png",
      author: "Дима В"
    },
    {
      type: "npc",
      src: "img/zombie/вова/добрый-нпс.png",
      author: "Вова"
    },
    {
      type: "npc",
      src: "img/zombie/витя/нпс1.png",
      author: "Витя"
    },
    {
      type: "npc",
      src: "img/zombie/витя/нпс2.png",
      author: "Витя"
    },
    {
      type: "background",
      src: "img/zombie/дима-в/фон.png",
      author: "Дима В"
    },
    {
      type: "background",
      src: "img/zombie/вова/фон.png",
      author: "Вова"
    },
    {
      type: "background",
      src: "img/zombie/марк/фон.png",
      author: "Марк"
    },
    {
      type: "enemy",
      src: "img/zombie/вова/злой-нпс.png",
      author: "Вова"
    },
    {
      type: "enemy",
      src: "img/zombie/дима-д/ассет1.png",
      author: "Дима Д"
    },
    {
      type: "enemy",
      src: "img/zombie/дима-д/ассет2.png",
      author: "Дима Д"
    },
    {
      type: "boss",
      src: "img/zombie/марк/босс.png",
      author: "Марк"
    },
    {
      type: "boss",
      src: "img/zombie/дима-д/босс.png",
      author: "Дима Д"
    },
    {
      type: "ui",
      src: "img/zombie/вова/сердце.gif",
      author: "Вова"
    },
    {
      type: "ui",
      src: "img/zombie/вова/меню.gif",
      author: "Вова"
    },
    {
      type: "ui",
      src: "img/zombie/вова/зомби-рука.gif",
      author: "Вова"
    },
    {
      type: "ui",
      src: "img/zombie/матвей/экран-победы.png",
      author: "Матвей"
    },
    {
      type: "ui",
      src: "img/zombie/матвей/экран-поражения.png",
      author: "Матвей"
    },
    {
      type: "ui",
      src: "img/zombie/дима-д/меню.png",
      author: "Дима Д"
    },
    { type: "hero",
      src: "img/zombie/матвей/главный-герой.png",
      author: "Матвей"
    },
    { type: "hero",
      src: "img/zombie/матвей/гг-ассет1.png",
      author: "Матвей"
    },
    { type: "hero",
      src: "img/zombie/матвей/гг-ассет2.png",
      author: "Матвей"
    },
    {
      type: "item",
      src: "img/zombie/матвей/оружие1.png",
      author: "Матвей"
    },
    {
      type: "item",
      src: "img/zombie/матвей/оружие2.png",
      author: "Матвей"
    },
    {
      type: "item",
      src: "img/zombie/дима-д/оружие.png",
      author: "Дима Д"
    },
    {
      type: "item",
      src: "img/zombie/дима-д/деньги.png",
      author: "Дима Д"
    },
    {
      type: "item",
      src: "img/zombie/витя/оружие.jpg",
      author: "Витя"
    },
    {
      type: "tiles",
      src: "img/zombie/дима-д/тайл1.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/дима-д/тайл2.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/дима-д/тайл3.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/дима-д/тайл4.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/дима-д/тайл5.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/дима-д/тайл6.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/матвей/тайл1.png",
      author: "Матвей"
    },
    {
      type: "tiles",
      src: "img/zombie/матвей/тайл2.png",
      author: "Матвей"
    },
    {
      type: "tiles",
      src: "img/zombie/матвей/тайл3.png",
      author: "Матвей"
    },
    {
      type: "tiles",
      src: "img/zombie/матвей/тайл4.png",
      author: "Матвей"
    },
  ],

  horror: [
    {
      type: "npc",
      src: "img/horror/настя/добрый-нпс.png",
      author: "Настя"
    },
    {
      type: "boss",
      src: "img/horror/егор/босс.png",
      author: "Егор"
    },
    {
      type: "boss",
      src: "img/horror/егор/помошник босса.png",
      author: "Егор"
    },
    {
      type: "boss",
      src: "img/horror/юра/босс1.png",
      author: "Юра"
    },
    {
      type: "npc",
      src: "img/horror/юра/босс2.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/егор/тайл1.png",
      author: "Егор"
    },
    {
      type: "tiles",
      src: "img/horror/егор/тайл2.png",
      author: "Егор"
    },
    {
      type: "tiles",
      src: "img/horror/егор/тайл3.png",
      author: "Егор"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл1.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл2.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл3.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл4.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл5.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл6.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл7.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл8.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл9.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл10.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл11.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/юра/тайл12.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/маша/тайл1.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/маша/тайл2.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/маша/тайл3.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/маша/тайл4.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/маша/тайл5.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/маша/тайл6.png",
      author: "Маша"
    },
    {
      type: "background",
      src: "img/horror/юра/фон1.png",
      author: "Юра"
    },
    {
      type: "background",
      src: "img/horror/юра/фон2.png",
      author: "Юра"
    },
    {
      type: "background",
      src: "img/horror/егор/фон для босса.png",
      author: "Егор"
    },
    {
      type: "background",
      src: "img/horror/настя/фон.png",
      author: "Настя"
    },
    {
      type: "item",
      src: "img/horror/егор/оружие.png",
      author: "Егор"
    },
   {
      type: "item",
      src: "img/horror/юра/оружие.png",
      author: "Юра"
    },
    {
      type: "item",
      src: "img/horror/настя/рюкзак.png",
      author: "Настя"
    },
    {
      type: "item",
      src: "img/horror/настя/палатка1.png",
      author: "Настя"
    },
    {
      type: "item",
      src: "img/horror/настя/палатка2.png",
      author: "Настя"
    },
    {
      type: "hero",
      src: "img/horror/настя/гг-полностью.png",
      author: "Настя"
    },
    {
      type: "hero",
      src: "img/horror/настя/гг-голова.png",
      author: "Настя"
    },
    {
      type: "enemy",
      src: "img/horror/маша/злой-нпс.png",
      author: "Маша"
    },
    {
      type: "enemy",
      src: "img/horror/настя/нпс.png",
      author: "Настя"
    },
    {
      type: "ui",
      src: "img/horror/настя/костер.gif",
      author: "Настя"
    },
    {
      type: "ui",
      src: "img/horror/настя/велоцираптор.gif",
      author: "Настя"
    },
    {
      type: "ui",
      src: "img/horror/маша/меню.png",
      author: "Маша"
    },
    {
      type: "ui",
      src: "img/horror/юра/меню1.png",
      author: "Юра"
    },
    {
      type: "ui",
      src: "img/horror/юра/меню2.png",
      author: "Юра"
    },
    {
      type: "ui",
      src: "img/horror/настя/меню.png",
      author: "Настя"
    }
  ]
};

function selectTeam(team) {
  currentTeam = team;

  const elementsNav = document.getElementById("elements");
  elementsNav.innerHTML = "";

  Object.entries(elementsMap).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = () => showElements(key);
    elementsNav.appendChild(btn);
  });

  document.getElementById("gallery").innerHTML =
    `<p class="hint">Выберите тип элементов 👆</p>`;
}

function showElements(type) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  data[currentTeam]
    .filter(item => item.type === type)
    .forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${item.src}">
        <div class="type">${elementsMap[type]}</div>
        <div class="author">Автор: ${item.author}</div>
      `;

      gallery.appendChild(card);
    });
}