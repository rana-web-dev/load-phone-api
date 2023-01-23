
// Load phones by search with phones name
const leadPhones = async (brand) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${brand}`;
    const res = await fetch(url);
    const loadData = await res.json();
    const data = loadData.data;
    displayData(data);
    searchPhones(data);
}
leadPhones();

// // Load all phones
// async function allPhones() {
//     const res = await fetch("https://openapi.programming-hero.com/api/phones?search=samsung");
//     const phones = await res.json();
//     const data = phones.data;
//     allPhonesShow(data);
// }
// allPhones()

// // Show all phones with by grid layout
// function allPhonesShow(phones) {
//     const container = document.querySelector(".phones");
//     phones.forEach(phone => {
//         const div = document.createElement("div");
//         div.innerHTML = `
//         <div>
//         <h4>${phone.phone_name}</h4>
//         <img src=${phone.image} alt="">
//         </div>
//         `
//         container.appendChild(div);
//     })
// }

// Search Phones button
function searchPhones(phones) {
    const inputValue = document.querySelector(".container input").value;
    const notFound = document.querySelector(".not-found h2");
    if (phones.length === 0) {
        notFound.innerText = "Phones Not found."
    } else {
        notFound.innerText = "";
    }
    leadPhones(inputValue);
}
searchPhones();

// Show phones with by grid layout
function displayData(phones) {
    const container = document.querySelector(".phones");
    container.textContent = "";
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement("div");
        div.innerHTML = `
        <div>
        <h4>${phone.phone_name}</h4>
        <img src=${phone.image} alt="">
        </div>
        `
        container.appendChild(div);
    })
    
}
displayData();

