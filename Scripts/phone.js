// previous fetch alternative => works same

const loadPhone = async (searchText) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await response.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = phones => {
  // console.log(phones[0].brand);

  // 1. get the container
  const phonesContainer = document.getElementById('phones-container');
  // clear container before append
  phonesContainer.textContent = '';

  phones.forEach(phone => {
    console.log(phone);
    // 2. create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    // 3. set innerHTML
    phoneCard.innerHTML = `
    <figure>
    <img src="${phone.image}" alt="phones" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>${phone.slug}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    // 4 append to parent
    phonesContainer.appendChild(phoneCard);
  });
}


// handle search button
const handleSearch = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
}

// loadPhone();