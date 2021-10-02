const blogUrl = "https://balawi.one/wp-json/wp/v2/posts?per_page=10";

const blogContainer = document.querySelector(".blog-container");
const button = document.querySelector("#button");

async function getBlogPosts() {
  try {
    const blogResponse = await fetch(blogUrl);
    const getBlogResults = await blogResponse.json();
    console.log(getBlogResults);

    for (let i = 0; i < getBlogResults.length; i++) {
      blogContainer.innerHTML += ` <div class="blog-posts-wrapper" >
                                   <a href="detail.html?id=${getBlogResults[i].id}">
                                      <img class="onhover-animal-img" src="${getBlogResults[i].featured_media_src_url}" alt="${getBlogResults[i].yoast_head_json.og_image[0].alt}">
                                      <h2>${getBlogResults[i].title.rendered}</h2>
                                     </a>
                                     <p>Published ${getBlogResults[i].date.slice(0, 10)}</P>
                                   </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}
getBlogPosts();

let numberToOffset = 2;

button.onclick = function () {
  numberToOffset += 8;
  const viewMoreUrl = `https://balawi.one/wp-json/wp/v2/posts?per_page=2&offset=${numberToOffset}`;

  async function viewMorePosts() {
    try {
      const blogResponse = await fetch(viewMoreUrl);
      const getBlogResults = await blogResponse.json();
      console.log(getBlogResults);

      for (let i = 0; i < getBlogResults.length; i++) {
        blogContainer.innerHTML += ` <div class="blog-posts-wrapper" >
                                    <a  href="detail.html?id=${getBlogResults[i].id}">
                                      <img src="${getBlogResults[i].featured_media_src_url}" alt="${getBlogResults[i].yoast_head_json.og_image[0].alt}">
                                      <h2>${getBlogResults[i].title.rendered}</h2>
                                     </a>
                                     <p>Published ${getBlogResults[i].date}</P>
                                   </div>`;
      }
    } catch (error) {
      console.log(error);
    }
  }
  viewMorePosts();
};
