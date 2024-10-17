let users = [];
const api = "https://randomuser.me/api";
const result = 100;

fetch(`${api}?results=${result}`)
  .then((res) => res.json())
  .then((data) => {
    users = data.results;
    display(users);
    document.getElementById("loading").style.display = "none";

    // console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

function display(users) {
//   console.log(users);
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";

  users.map((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img class="card-img" src="${user.picture.large}" alt="${
      user.name.first
    }">
            <p class="card-title">${user.email}</p>
            <p class="card-desc">${
              (user.location.city, user.location.state)
            }</p>
        `;

    cards.appendChild(card);
  });
}

const btnSrch = document.getElementById("btn-search");
const inputSrch = document.getElementById("input-search");

btnSrch.addEventListener("click", (e) => {
  e.preventDefault();
  const value = inputSrch.value;
  const filter = users.filter((user) => {
    return user.email.toLowerCase().includes(value.toLowerCase());
  });
  display(filter);
});

inputSrch.addEventListener("input", () => {
  const value = inputSrch.value;
  const filter = users.filter((user) => {
    return user.email.toLowerCase().includes(value.toLowerCase());
  });
  display(filter);
});
