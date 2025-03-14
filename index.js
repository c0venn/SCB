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

async function GetImagesCarpet() {
  try {
    const response = await fetch(photos);
    const data = await response.json();
    console.log(data);
    data.forEach((element) => {
      const div = document.createElement("div");
      div.className = "container text-center p-4";
      const h2 = document.createElement("h2");
      h2.className = "d-flex justify-content-center text-white";
      h2.textContent = element.title;
      div.appendChild(h2);
      element.images.forEach((image) => {
        console.log(image);
        const img = document.createElement("img");
        img.className = "carpetimg img-fluid p-4";
        img.src = image;
        div.appendChild(img);
      });
      carpetGalery.appendChild(div);
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
      const col = document.createElement("div");
      col.className = "photoVertical col-md-4 text-center p-2";
      const img = document.createElement("img");
      img.className = "galery img-fluid";
      img.src = element.src;
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
    
    // Set first item as active
    const firstDiv = document.createElement("div");
    firstDiv.className = "carousel-item active";
    const firstImg = document.createElement("img");
    firstImg.className = "carousel img-fluid";
    firstImg.src = photoHorizontal[0].src;
    firstDiv.appendChild(firstImg);
    carrusel.appendChild(firstDiv);

    // Add rest of the items
    photoHorizontal.slice(1).forEach((element) => {
      const div = document.createElement("div");
      div.className = "carousel-item";
      const img = document.createElement("img");
      img.className = "carousel img-fluid";
      img.src = element.src;
      div.appendChild(img);
      carrusel.appendChild(div);
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
