function usersBlockGenerator(filteredData) {
  const usersBlock = document.getElementById("usersContainer");
  usersBlock.innerHTML = "";

  filteredData.forEach((u) => {
    const usBlock = document.createElement("div");
    usBlock.classList.add("user");

    const nameUser = document.createElement("p");
    nameUser.textContent = `Имя: ${u.name}`;
    usBlock.appendChild(nameUser);

    const emailUser = document.createElement("p");
    emailUser.textContent = `Почта: ${u.email}`;
    usBlock.appendChild(emailUser);

    const cityUser = document.createElement("p");
    cityUser.textContent = `Город: ${u.city}`;
    usBlock.appendChild(cityUser);

    usersBlock.appendChild(usBlock);
  });
}

function filtredUsers(data, searchValue) {
  return data.filter(user =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
}

function fetchUsersData() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const options = {
    method: "GET",
  };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const filteredData = data.map((user) => ({
        name: user.name,
        email: user.email,
        city: user.address.city,
      }));
      usersBlockGenerator(filteredData);

      const searchInput = document.getElementById('searchInput')

      searchInput.addEventListener('input', ()=>{
        const searchValue = searchInput.value.trim()
        const filtred = filtredUsers(filteredData, searchValue)
        usersBlockGenerator(filtred)
      })
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

fetchUsersData();
