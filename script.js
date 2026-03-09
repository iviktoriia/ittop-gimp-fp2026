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
      src: "img/zombie/dima-v/npc.png",
      author: "Дима В"
    },
    {
      type: "npc",
      src: "img/zombie/vova/dobriy-npc.png",
      author: "Вова"
    },
    {
      type: "npc",
      src: "img/zombie/vitya/npc1.png",
      author: "Витя"
    },
    {
      type: "npc",
      src: "img/zombie/vitya/npc2.png",
      author: "Витя"
    },
    {
      type: "background",
      src: "img/zombie/dima-v/fon.png",
      author: "Дима В"
    },
    {
      type: "background",
      src: "img/zombie/vova/fon.png",
      author: "Вова"
    },
    {
      type: "background",
      src: "img/zombie/mark/fon.png",
      author: "Марк"
    },
    {
      type: "enemy",
      src: "img/zombie/vova/zloy-npc.png",
      author: "Вова"
    },
    {
      type: "enemy",
      src: "img/zombie/dima-d/asset1.png",
      author: "Дима Д"
    },
    {
      type: "enemy",
      src: "img/zombie/dima-d/asset2.png",
      author: "Дима Д"
    },
    {
      type: "boss",
      src: "img/zombie/mark/boss.png",
      author: "Марк"
    },
    {
      type: "boss",
      src: "img/zombie/dima-d/boss.png",
      author: "Дима Д"
    },
    {
      type: "ui",
      src: "img/zombie/vova/serdce.gif",
      author: "Вова"
    },
    {
      type: "ui",
      src: "img/zombie/vova/menu.gif",
      author: "Вова"
    },
    {
      type: "ui",
      src: "img/zombie/vova/zombi-ruka.gif",
      author: "Вова"
    },
    {
      type: "ui",
      src: "img/zombie/matvey/ekran-pobedy.png",
      author: "Матвей"
    },
    {
      type: "ui",
      src: "img/zombie/matvey/ekran-porazheniya.png",
      author: "Матвей"
    },
    {
      type: "ui",
      src: "img/zombie/dima-d/menu.png",
      author: "Дима Д"
    },
    { 
      type: "hero",
      src: "img/zombie/matvey/glavniy-geroy.png",
      author: "Матвей"
    },
    { 
      type: "hero",
      src: "img/zombie/matvey/gg-asset1.png",
      author: "Матвей"
    },
    { 
      type: "hero",
      src: "img/zombie/matvey/gg-asset2.png",
      author: "Матвей"
    },
    {
      type: "item",
      src: "img/zombie/matvey/oruzhie1.png",
      author: "Матвей"
    },
    {
      type: "item",
      src: "img/zombie/matvey/oruzhie2.png",
      author: "Матвей"
    },
    {
      type: "item",
      src: "img/zombie/dima-d/oruzhie.png",
      author: "Дима Д"
    },
    {
      type: "item",
      src: "img/zombie/dima-d/dengi.png",
      author: "Дима Д"
    },
    {
      type: "item",
      src: "img/zombie/vitya/oruzhie.jpg",
      author: "Витя"
    },
    {
      type: "tiles",
      src: "img/zombie/dima-d/tile1.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/dima-d/tile2.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/dima-d/tile3.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/dima-d/tile4.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/dima-d/tile5.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/dima-d/tile6.png",
      author: "Дима Д"
    },
    {
      type: "tiles",
      src: "img/zombie/matvey/tile1.png",
      author: "Матвей"
    },
    {
      type: "tiles",
      src: "img/zombie/matvey/tile2.png",
      author: "Матвей"
    },
    {
      type: "tiles",
      src: "img/zombie/matvey/tile3.png",
      author: "Матвей"
    },
    {
      type: "tiles",
      src: "img/zombie/matvey/tile4.png",
      author: "Матвей"
    },
  ],

  horror: [
    {
      type: "npc",
      src: "img/horror/nastya/dobriy-npc.png",
      author: "Настя"
    },
    {
      type: "boss",
      src: "img/horror/egor/boss.png",
      author: "Егор"
    },
    {
      type: "boss",
      src: "img/horror/egor/pomoshchnik-bossa.png",
      author: "Егор"
    },
    {
      type: "boss",
      src: "img/horror/yura/boss1.png",
      author: "Юра"
    },
    {
      type: "npc",
      src: "img/horror/yura/boss2.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/egor/tile1.png",
      author: "Егор"
    },
    {
      type: "tiles",
      src: "img/horror/egor/tile2.png",
      author: "Егор"
    },
    {
      type: "tiles",
      src: "img/horror/egor/tile3.png",
      author: "Егор"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile1.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile2.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile3.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile4.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile5.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile6.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile7.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile8.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile9.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile10.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile11.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/yura/tile12.png",
      author: "Юра"
    },
    {
      type: "tiles",
      src: "img/horror/masha/tile1.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/masha/tile2.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/masha/tile3.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/masha/tile4.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/masha/tile5.png",
      author: "Маша"
    },
    {
      type: "tiles",
      src: "img/horror/masha/tile6.png",
      author: "Маша"
    },
    {
      type: "background",
      src: "img/horror/yura/fon1.png",
      author: "Юра"
    },
    {
      type: "background",
      src: "img/horror/yura/fon2.png",
      author: "Юра"
    },
    {
      type: "background",
      src: "img/horror/egor/fon-dlya-bossa.png",
      author: "Егор"
    },
    {
      type: "background",
      src: "img/horror/nastya/fon.png",
      author: "Настя"
    },
    {
      type: "item",
      src: "img/horror/egor/oruzhie.png",
      author: "Егор"
    },
   {
      type: "item",
      src: "img/horror/yura/oruzhie.png",
      author: "Юра"
    },
    {
      type: "item",
      src: "img/horror/nastya/ryukzak.png",
      author: "Настя"
    },
    {
      type: "item",
      src: "img/horror/nastya/palatka1.png",
      author: "Настя"
    },
    {
      type: "item",
      src: "img/horror/nastya/palatka2.png",
      author: "Настя"
    },
    {
      type: "hero",
      src: "img/horror/nastya/gg-polnostyu.png",
      author: "Настя"
    },
    {
      type: "hero",
      src: "img/horror/nastya/gg-golova.png",
      author: "Настя"
    },
    {
      type: "enemy",
      src: "img/horror/masha/zloy-npc.png",
      author: "Маша"
    },
    {
      type: "enemy",
      src: "img/horror/nastya/npc.png",
      author: "Настя"
    },
    {
      type: "ui",
      src: "img/horror/nastya/koster.gif",
      author: "Настя"
    },
    {
      type: "ui",
      src: "img/horror/nastya/velotsiraptor.gif",
      author: "Настя"
    },
    {
      type: "ui",
      src: "img/horror/masha/menu.png",
      author: "Маша"
    },
    {
      type: "ui",
      src: "img/horror/yura/menu1.png",
      author: "Юра"
    },
    {
      type: "ui",
      src: "img/horror/yura/menu2.png",
      author: "Юра"
    },
    {
      type: "ui",
      src: "img/horror/nastya/menu.png",
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