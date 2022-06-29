const itemImages = require.context("../assets/img");

let data = [
  {
    id: 1,
    name: "Polerón Orange-White",
    price: 20000,
    description: "Polerón línea Fuk-Off",
    stock: 5,
    img: itemImages("./foto_1.jpg"),
  },
  {
    id: 2,
    name: "Polerón Yellow-Jungle",
    price: 22000,
    description: "Polerón línea Woozy",
    stock: 10,
    img: itemImages("./foto_2.jpg"),
  },
  {
    id: 3,
    name: "Polerón Simple-Jungle",
    price: 20000,
    description: "Polerón línea Fuk-Off",
    stock: 8,
    img: itemImages("./foto_3.jpg"),
  },
  {
    id: 4,
    name: "Polerón Freedom-Black",
    price: 15000,
    description: "Polerón línea Urban-X",
    stock: 12,
    img: itemImages("./foto_4.jpg"),
  },
];

export const getFetch = new Promise((resolve, rejected) => {
  let url = data;
  if (url === data) {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  } else {
    rejected("400 not found");
  }
});
