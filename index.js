const container = document.querySelector(".row");
const carpetGalery = document.querySelector(".carpetGalery");
const carrusel = document.querySelector(".carousel-inner");

let photos = "data.json";

const sourceHorizontal = [
  {
    id: 1,
    src: "https://github.com/c0venn/SCB/blob/main/images/1.jpg?raw=true",
  },
  {
    id: 2,
    src: "https://github.com/c0venn/SCB/blob/main/images/2.jpg?raw=true",
  },
  {
    id: 3,
    src: "https://github.com/c0venn/SCB/blob/main/images/3.jpg?raw=true",
  },
  {
    id: 5,
    src: "https://github.com/c0venn/SCB/blob/main/images/5.jpg?raw=true"
  },
  {
    id: 6,
    src: "https://github.com/c0venn/SCB/blob/main/images/6.jpg?raw=true"
  },
  {
    id: 7,
    src: "https://github.com/c0venn/SCB/blob/main/images/7.jpg?raw=true"
  },
  {
    id: 8,
    src: "https://github.com/c0venn/SCB/blob/main/images/8.jpg?raw=true"
  },
  {
    id: 9,
    src: "https://github.com/c0venn/SCB/blob/main/images/9.jpg?raw=true"
  },
  {
    id: 10,
    src: "https://github.com/c0venn/SCB/blob/main/images/10.jpg?raw=true"
  },
  {
    id: 11,
    src: "https://github.com/c0venn/SCB/blob/main/images/11.jpg?raw=true"
  },
  {
    id: 12,
    src: "https://github.com/c0venn/SCB/blob/main/images/12.jpg?raw=true"
  },
  {
    id: 13,
    src: "https://github.com/c0venn/SCB/blob/main/images/13.jpg?raw=true"
  }
];
const sourceVertical = [
  {
    id: 0,
    src: "https://github.com/c0venn/SCB/blob/main/images/v27.jpg?raw=true",
  },
  {
    id: 29,
    src: "https://github.com/c0venn/SCB/blob/main/images/v29.jpg?raw=true",
  },
  {
    id: 31,
    src: "https://github.com/c0venn/SCB/blob/main/images/v31.jpg?raw=true",
  },
  {
    id: 33,
    src: "https://github.com/c0venn/SCB/blob/main/images/v33.jpg?raw=true",
  },
  {
    id: 34,
    src: "https://github.com/c0venn/SCB/blob/main/images/v34.jpg?raw=true",
  },
  {
    id: 37,
    src: "https://github.com/c0venn/SCB/blob/main/images/v37.jpg?raw=true",
  },
  {
    id: 1,
    src: "https://github.com/c0venn/SCB/blob/main/images/v1.jpg?raw=true",
  },
  {
    id: 2,
    src: "https://github.com/c0venn/SCB/blob/main/images/v2.jpg?raw=true",
  },
  {
    id: 3,
    src: "https://github.com/c0venn/SCB/blob/main/images/v3.jpg?raw=true",
  },
  {
    id: 4,
    src: "https://github.com/c0venn/SCB/blob/main/images/v4.jpg?raw=true",
  },
  {
    id: 5,
    src: "https://github.com/c0venn/SCB/blob/main/images/v5.jpg?raw=true",
  },
  {
    id: 6,
    src: "https://github.com/c0venn/SCB/blob/main/images/v6.jpg?raw=true",
  },
  {
    id: 7,
    src: "https://github.com/c0venn/SCB/blob/main/images/v7.jpg?raw=true",
  },
  {
    id: 8,
    src: "https://github.com/c0venn/SCB/blob/main/images/v8.jpg?raw=true",
  },
  {
    id: 9,
    src: "https://github.com/c0venn/SCB/blob/main/images/v9.jpg?raw=true",
  },
  {
    id: 10,
    src: "https://github.com/c0venn/SCB/blob/main/images/v10.jpg?raw=true",
  },
  {
    id: 11,
    src: "https://github.com/c0venn/SCB/blob/main/images/v11.jpg?raw=true",
  },
  {
    id: 12,
    src: "https://github.com/c0venn/SCB/blob/main/images/v12.jpg?raw=true",
  },
  {
    id: 13,
    src: "https://github.com/c0venn/SCB/blob/main/images/v13.jpg?raw=true",
  },
  {
    id: 14,
    src: "https://github.com/c0venn/SCB/blob/main/images/v14.jpg?raw=true",
  },
  {
    id: 15,
    src: "https://github.com/c0venn/SCB/blob/main/images/v15.jpg?raw=true",
  },
  {
    id: 16,
    src: "https://github.com/c0venn/SCB/blob/main/images/v16.jpg?raw=true",
  },
  {
    id: 17,
    src: "https://github.com/c0venn/SCB/blob/main/images/v17.jpg?raw=true",
  },
  {
    id: 18,
    src: "https://github.com/c0venn/SCB/blob/main/images/v18.jpg?raw=true",
  },
  {
    id: 19,
    src: "https://github.com/c0venn/SCB/blob/main/images/v19.jpg?raw=true",
  },
  {
    id: 20,
    src: "https://github.com/c0venn/SCB/blob/main/images/v20.jpg?raw=true",
  },
  {
    id: 21,
    src: "https://github.com/c0venn/SCB/blob/main/images/v21.jpg?raw=true",
  },
  {
    id: 22,
    src: "https://github.com/c0venn/SCB/blob/main/images/v22.jpg?raw=true",
  },
  {
    id: 23,
    src: "https://github.com/c0venn/SCB/blob/main/images/v23.jpg?raw=true",
  },
  {
    id: 24,
    src: "https://github.com/c0venn/SCB/blob/main/images/v24.jpg?raw=true",
  },
  {
    id: 25,
    src: "https://github.com/c0venn/SCB/blob/main/images/v25.jpg?raw=true",
  },
  {
    id: 26,
    src: "https://github.com/c0venn/SCB/blob/main/images/v26.jpg?raw=true",
  },
  {
    id: 27,
    src: "https://github.com/c0venn/SCB/blob/main/images/v28.jpg?raw=true",
  },
  {
    id: 30,
    src: "https://github.com/c0venn/SCB/blob/main/images/v30.jpg?raw=true",
  },
  {
    id: 32,
    src: "https://github.com/c0venn/SCB/blob/main/images/v32.jpg?raw=true",
  },
  {
    id: 35,
    src: "https://github.com/c0venn/SCB/blob/main/images/v35.jpg?raw=true",
  },
  {
    id: 36,
    src: "https://github.com/c0venn/SCB/blob/main/images/v36.jpg?raw=true",
  },
  {
    id: 38,
    src: "https://github.com/c0venn/SCB/blob/main/images/v38.jpg?raw=true"
  },
  {
    id: 39,
    src: "https://github.com/c0venn/SCB/blob/main/images/v39.jpg?raw=true"
  },
  {
    id: 40,
    src: "https://github.com/c0venn/SCB/blob/main/images/v40.jpg?raw=true"
  },
  {
    id: 41,
    src: "https://github.com/c0venn/SCB/blob/main/images/v41.jpg?raw=true"
  },
  {
    id: 42,
    src: "https://github.com/c0venn/SCB/blob/main/images/v42.jpg?raw=true"
  },
  {
    id: 43,
    src: "https://github.com/c0venn/SCB/blob/main/images/v43.jpg?raw=true"
  }
];

async function GetImagesCarpet() {
  try {
    fetch(photos)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          div = document.createElement("div");
          div.className = "container text-center p-4";
          h2 = document.createElement("h2");
          h2.className = "d-flex justify-content-center text-white";
          h2.textContent = `${element.title}`;
          div.appendChild(h2);
          element.images.forEach((image) => {
            console.log(image);
            img = document.createElement("img");
            img.className = "carpetimg img-fluid p-4";
            img.src = `${image}`;
            div.appendChild(img);
          });
          carpetGalery.appendChild(div);
        });
      });
  } catch (error) {
    console.log(error);
  }
}

const getCarpet = new Promise((resolve, reject) => {
  if (photos.length === 0) {
    reject(new Error("datos no encontrados"));
  } else {
    resolve(photos);
  }
});
async function fetchPhotos() {
  try {
    const photosV = await getVertical;
    photosV.forEach((element) => {
      col = document.createElement("div");
      col.className = "photoVertical col-md-4 text-center p-2";
      img = document.createElement("img");
      img.className = "galery img-fluid";
      img.src = `${element.src}`;
      container.appendChild(col);
      col.appendChild(img);
    });
  } catch (error) {
    console.log(error);
  }
}

const getVertical = new Promise((resolve, reject) => {
  if (sourceVertical.length === 0) {
    reject(new Error("datos no encontrados"));
  } else {
    resolve(sourceVertical);
  }
});

async function fetchPhotosHorizontal() {
  try {
    const photoHorizontal = await getHorizontal;
    photoHorizontal.forEach((element) => {
      div = document.createElement("div");
      div.className = "carousel-item";
      img = document.createElement("img");
      img.className = "carousel img-fluid";
      img.src = `${element.src}`;
      carrusel.appendChild(div);
      div.appendChild(img);
    });
  } catch (error) {
    console.log(error);
  }
}

const getHorizontal = new Promise((resolve, reject) => {
  if (sourceHorizontal.length === 0) {
    reject(new Error("datos no encontrados"));
  } else {
    resolve(sourceHorizontal);
  }
});

fetchPhotos();
fetchPhotosHorizontal();
