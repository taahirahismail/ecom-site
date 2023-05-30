let products = [
  {
    id: 1,
    img: "https://i.postimg.cc/rs0kHs47/book1.jpg",
    title: "Meet Me at the Lake",
    author: "Carley Fortune",
    desc: "NY Times bestseller, a charming story about a hard-working woman, looking for an escape from her busy life, and finds comfort in staring out at a lake. Little does she know, that lake will be more than just a place to gather thoughts, but that love may meet her there.",
    price: "R300"
  },
  {
    id: 2,
    img: "https://i.postimg.cc/dtCFm7wy/book2.jpg",
    title: "The Inheritance Games",
    author: "Jennifer Lynn Barnes",
    desc: "Jennifer Lynn Barnes, a New York Times best-selling author, does it again in this historical fantasy novel. People be fighting about inheritance (as it goes) and who is meant to take the crown once the king dies. There are some swordfights and such things, you know?",
    price: "R350"
  },
  {
    id: 3,
    img: "https://i.postimg.cc/KzYFnJ8G/book3.jpg",
    title: "Hello Beautiful",
    author: "Ann Napolitano",
    desc: "A tale about coming to terms with the way you look. It's easy to believe that you're beautiful if you tell yourself enough. Positive self-talk and all that. That's essentially all the main character does. But read it anyways, Ann is a NY Times bestselling author, so you know it's going to be good.",
    price: "R270"
  },
  {
    id: 4,
    img: "https://i.postimg.cc/wxZHm58z/book4.jpg",
    title: "Token",
    author: "Beverley Kendall",
    desc: "We love to see a powerful woman using her beauty and her brains. If you don't, I don't fw you and you probably won't like this book, but you should read it anyways because you need to understand the power women hold. Actually, we'll just add it to your cart anyway. And yes, you must pay full price, no discounts here. Thank you. Also, this is a New York Times bestseller.",
    price: "R400"
  },
  {
    id: 5,
    img: "https://i.postimg.cc/fLgs5mVx/book5.jpg",
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    desc: "Bonnie Garmus takes chemistry to a whole other level in this spicy romance novel that will leave you gasping for breath. Like, your toes will be curling and your s/o is gonna have some work to do after reading what these people are doing in the lab. Super unsanitary work, bad lab practice tbh, but at least it's fiction. Also, if you don't have someone to help you out, just imagine the scenario and help yourself. And, you guessed it, this novel is one of the NY Times bestsellers.",
    price: "R500"
  },
];

let showProducts = document.querySelector(".products");
products.forEach((data) => {
  showProducts.innerHTML += `
    <div class ="card border-2 rounded-3 m-3 p-3 d-flex align-items-center justify-content-center products-card">
    <div class ="book-img">
    <img src="${data.img}">
    </div>
    <div class ="mt-3 p-2 border-1 rounded-3 bg-blue book-info">
    <h2>${data.title}</h2>
    <p>by ${data.author}</p>
    <p>${data.desc}</p>
    <div class="d-flex align-items-center justify-content-between">
    <strong>${data.price}</strong>
    <button class="bg-danger border-2 rounded-2 border-danger p-2">Buy Now</button>
    </div>
    </div>
    </div>`;
});
