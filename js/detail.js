const detailsContainer = document.querySelector(".single-post-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postID = params.get("id");
console.log(postID);

const url = "https://balawi.one/wp-json/wp/v2/posts/" + postID;

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    createHtml(details);
    const viewImage = document.querySelector(".animal-img");
    const closeImage = document.querySelector(".close-image");
    const detailsDiv = document.querySelector(".details-container");
    viewImage.onclick = function () {
      event.stopPropagation();
      detailsDiv.classList.add("view");
    };
    closeImage.onclick = function () {
      detailsDiv.classList.remove("view");
    };
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();

function createHtml(details) {
  detailsContainer.innerHTML = `
                                  <div class="details-container">
                                     <h1>${details.title.rendered}</h1>
                                     <img class="animal-img" src="${details.featured_media_src_url}" alt="${details.yoast_head_json.og_image[0].alt}"> 
                                     <p> ${details.content.rendered}</p>
                                     <p>Published ${details.date.slice(0, 10)}</P>
                                     <a href=contact.html? class="button take-action box-shadow">TAkE ACTION</a>
                                  </div>
                                  `;
}
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
