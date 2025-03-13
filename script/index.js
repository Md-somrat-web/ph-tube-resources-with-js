function loadCategories() {
  //   Face the Data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json())
    .then((data) => displayVideos(data.videos));
}

const loadCategoryVideos = (id) => {
  const url = `
  https://openapi.programming-hero.com/api/phero-tube/category/${id}
  `;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedButton = document.getElementById(`btn-${id}`);
      console.log(clickedButton);
      displayVideos(data.category);
    });
};

const loadVideoDetails = (videoId) => {
  console.log(videoId);
  const url = `
  https://openapi.programming-hero.com/api/phero-tube/videos/${videoId}
  
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video));
};

const displayVideoDetails = (video) => {
  console.log(video);
};

function displayCategories(categories) {
  //   get yhe Container
  const categoryContainer = document.getElementById("category-container");

  //   loop operation
  for (let cat of categories) {
    // console.log(cat);
    // create Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `



    <button id="btn-${cat.category_id}"onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    
    `;
    // append the Element
    categoryContainer.append(categoryDiv);
  }
}
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";

  if (videos.lenght == 0) {
    videoContainer.innerHTML = `
       <div
        class="py-5 col-span-full flex flex-col items-center justify-center text-center"
      >
        <img class="w-[120px] items-center" src="Icon.png" alt="" />
        <h1 class="text-2xl font-bold">
          Oops!! Sorry, There is no content here
        </h1>
      </div>
    
   
    `;
    return;
  }

  videos.forEach((video) => {
    console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
     <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover"   src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-sm rounded text-white bg-black p-1"
            >3hrs 56 min ago</span
          >
        </figure>

        <div class="flex gap-2 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>  
          <div class="intro">
            <h2 class="text-sm font-semibold">Midnight Serenade</h2>
            <p class="text-sm text-gray-400 flex gap-1">
            ${video.authors[0].profile_name}
              <img
                class="w-5 h-5"
                src="https://img.icons8.com/?size=100&id=2AuMnRFVB9b1&format=png&color=000000"
                alt=""
              />
            </p>
            <p class="text-sm text-gray-400">${video.others.views}91K views</p>
          </div>
        </div>
        <button onclick="loadVideoDetails('${video.video_id}') class="btn btn-block">Show Details</button>
      </div>
    
  

    
    `;
    videoContainer.append(videoCard);
  });
};

loadCategories();
