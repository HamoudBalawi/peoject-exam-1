const url = "https://balawi.one/wp-json/wp/v2/posts?per_page=12";
const carousel = document.querySelector(".carousel");

async function getPost() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);

    console.log(getResults);
  } catch (error) {
    console.log(error);
  }
}
getPost();

function createHTML(posts) {
  posts.forEach(function (post) {
    carousel.innerHTML += ` <div class="slider-images">
                            <a href="detail.html?id=${post.id}">              
                            <img class="animal-img onhover-animal-img" src="${post.featured_media_src_url}" alt="${post.yoast_head_json.og_image[0].alt}">
                            </a>
                            </div>`;
  });
}

const navButtons = document.querySelectorAll(".carousel-button");
const imagesNumber = document.querySelectorAll(".slider-images").length;

let index = 0;
let translateX = 0;

// Carousel

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "prev") {
      if (index !== 0) {
        index--;
        translateX += 102;
      }
    } else {
      if (index !== 3) {
        index++;
        translateX -= 102;
      }
    }
    carousel.style.transform = `translateX(${translateX}%)`;
  });
});
/* Nav open/close button */
const closeButton = document.querySelector(".close");
const openButton = document.querySelector(".fa-hamburger");
const nav = document.querySelector("nav");
closeButton.onclick = function () {
  event.stopPropagation();
  nav.style.display = "none";
  closeButton.style.display = "none";
};
openButton.onclick = function () {
  event.stopPropagation();
  nav.style.display = "block";
  closeButton.style.display = "block";
};

// Recent Events

const urlLatest = "https://balawi.one/wp-json/wp/v2/posts?categories=28";
const latestContainer = document.querySelector(".latest-posts-container");

async function getLatestPost() {
  try {
    const latestResponse = await fetch(urlLatest);
    const getLatestResults = await latestResponse.json();
    console.log(getLatestResults);
    latestContainer.innerHTML = "";
    for (let i = 0; i < getLatestResults.length; i++) {
      latestContainer.innerHTML += ` <div class="latest-post">
                                       <img src="${getLatestResults[i].featured_media_src_url}" alt="${getLatestResults[i].yoast_head_json.og_image[0].alt}">
                                       <h2>${getLatestResults[i].title.rendered}</h2>
                                       <p>${getLatestResults[i].excerpt.rendered}</p>
                                       <a href="detail.html?id=${getLatestResults[i].id}">Learn More</a>
                                      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}
getLatestPost();

// Single Post
const urlSingle = "https://balawi.one/wp-json/wp/v2/posts?categories=29";
const singleContainer = document.querySelector(".single-post-container");
async function singlePost() {
  try {
    const singleResponse = await fetch(urlSingle);
    const singleResults = await singleResponse.json();
    singlePostHTML(singleResults);
    console.log(singleResults);
  } catch (error) {
    console.log(error);
  }
}
singlePost();

function singlePostHTML(single) {
  singleContainer.innerHTML = "";
  single.forEach(function (singlePost) {
    singleContainer.innerHTML += ` <div class="single-post">           
                                     <img class="single-posta-img" src="${singlePost.featured_media_src_url}" alt="${singlePost.yoast_head_json.og_image[0].alt}">
                                     <div class="single-post-text box-shadow">
                                     <h2>${singlePost.title.rendered}</h2>
                                     <p>${singlePost.excerpt.rendered}</p>
                                     <a href="detail.html?id=${singlePost.id}">Learn More</a>
                                     </div>
                                   </div>`;
  });
}

// Posts by country
const urlCountries = "https://balawi.one/wp-json/wp/v2/posts?per_page=12";
const countriesContainer = document.querySelector(".countries-container");
async function getCountriesPost() {
  try {
    const countriesResponse = await fetch(urlCountries);
    const getCountriesResults = await countriesResponse.json();
    createCountriestHTML(getCountriesResults);
    console.log(getCountriesResults);
  } catch (error) {
    console.log(error);
  }
}

getCountriesPost();
function createCountriestHTML(countries) {
  countriesContainer.innerHTML = "";
  countries.forEach(function (countriesPost) {
    countriesContainer.innerHTML += ` <div class="countries-post">
                                     <a href="detail.html?id=${countriesPost.id}">              
                                     <img class="countries-animal-img" src="${countriesPost.featured_media_src_url}" alt="${countriesPost.yoast_head_json.og_image[0].alt}">
                                     </a>
                                   </div>`;
  });
}
