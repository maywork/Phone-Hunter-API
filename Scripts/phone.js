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

  // slice to get the gist of the data
  console.log(phones);
  // display show all if more than 12
  const showAllContainer = document.getElementById('show-all-container')
  if (phones.length > 12) {
    showAllContainer.classList.remove('hidden');
  } else {
    showAllContainer.classList.add('hidden');
  }

  phones = phones.slice(0, 12);

  phones.forEach(phone => {
    // console.log(phone);
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


const handleSearch2 = () => {
  const searchField = document.getElementById('search-field2');
  const searchText = searchField.value;
  loadPhone(searchText);
}

// loadPhone();