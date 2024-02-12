//1. Create an async function called getCountries
//  - retrieve the name, capital, population and flags for all countries from this url : https://restcountries.com/v3.1/all?fields=name,flag,capital,population,region
//  - Convert the response to JSON.
//  - pass the data to the displayCountries function.
//  - Catch any errors and log them to the console.

//2. Create a displayCountries function that takes in an array of countries.
//  - Loop over the array of countries.
//      - Create a div for each country.
//      - Add the country name and flag to the div with the provided HTML structure.
//      - Add the created div to the `.countries` container element.

//3. Call the getCountries function.

// the html structure is:    <!-- example structure -->
// <!--
// <div class="country">
//   <h3 class="country-name">Netherlands</h3>
//   <img class="country-flag" src="https://flagcdn.com/nl.svg" />
//   <div class="content">
//     <h3>Capital</h3>
//     <p>Amsterdam</p>
//     <h3>Population</h3>
//     <p>16.655.799</p>
//     <h3>Region</h3>
//     <p>Europe</p>
//   </div>
// </div>

// 1. Create an async function called getCountries
// async function getCountries() {
//     try {
//       const response = await fetch('https://restcountries.com/v3.1/all');
//       const data = await response.json();
//       displayCountries(data);
//     // console.log(data.country)
//     } catch (error) {
//       console.error('Error fetching countries:', error);
//     }
//   }
  
//   // 2. Create a displayCountries function
//   function displayCountries(data) {
//     const countriesContainer = document.querySelector('.countries');
    
//     data.forEach(country => {
//         console.log(country.name)
//       // Create a div for each country
//       const countryDiv = document.createElement('div');
//       countryDiv.classList.add('countries');
  
//       // Add country name and flag to the div
//       countryDiv.innerHTML = `
//         <h3 class="country-name">${country.name.common}</h3>
//         <img class="country-flag" src="${country.flags.svg}" />
//         <div class="content">
//           <h3>Capital</h3>
//           <p>${country.capital}</p>
//           <h3>Population</h3>
//           <p>${country.population}</p>
//           <h3>Region</h3>
//           <p>${country.region}</p>
//         </div>
//       `;
//         console.log(countryDiv)
//         countriesContainer.insertAdjacentHTML('beforeend', countryDiv.outerHTML);

//     //   // Add the created div to the .countries container element
//     //   countriesContainer.appendChild(countryDiv);
//     });
//   }

// 1. Create an async function called getCountries
async function getCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      displayCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  
  // 2. Create a displayCountries function
  function displayCountries(data) {
    const countriesContainer = document.querySelector('.countries');
    let count = 0;
  
    data.forEach(country => {
      if (count < 6) {
        // Create a div for each country
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
  
        // Add country name and flag to the div
        countryDiv.innerHTML = `
          <h3 class="country-name">${country.name.common}</h3>
          <img class="country-flag" src="${country.flags.svg}" />
          <div class="content">
            <h3>Capital</h3>
            <p>${country.capital}</p>
            <h3>Population</h3>
            <p>${country.population}</p>
            <h3>Region</h3>
            <p>${country.region}</p>
          </div>
        `;
  
        // Add the created div to the .countries container element
        countriesContainer.insertAdjacentHTML('beforeend', countryDiv.outerHTML);
        count++;
      }
    });
  }
  
  // 3. Call the getCountries function
  getCountries();
