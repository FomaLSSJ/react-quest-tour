const items = [
  {
    id: 0,
    text: "Что выберешь?",
    answers: [
      {
        text: "Пони",
        next: 1
      },
      {
        text: "JRPG",
        next: 2
      },
      {
        text: "Батла",
        next: 3
      }
    ]
  },
  {
    id: 1,
    text: "Что ты делаешь когда смотришь пони?",
    answers: [
      {
        text: "Просто смотрю",
        next: 101
      },
      {
        text: "Дрочу на них",
        next: 100
      }
    ]
  },
  {
    id: 2,
    text: "Как проходишь JRPG?",
    answers: [
      {
        text: "Задрачиваю до посинения",
        next: 104
      },
      {
        text: "Просто пройти бы",
        next: 101
      }
    ]
  },
  {
    id: 3,
    text: "Как ты играешь в батлу?",
    answers: [
      {
        text: "Просто играю",
        next: 103
      },
      {
        text: "Пиздец бомблю",
        next: 102
      }
    ]
  },
  {
    id: 100,
    text: "Рокет-Покет"
  },
  {
    id: 101,
    text: "Ты Тёмка"
  },
  {
    id: 102,
    text: "Фома-заебал"
  },
  {
    id: 103,
    text: "Sasiska"
  },
  {
    id: 104,
    text: "Смидт"
  }
]

export default {
  items
} 