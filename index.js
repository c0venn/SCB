const container = document.querySelector('.row')

const sourceHorizontal = [
    {
        id: 1,
        src: "https://github.com/c0venn/SCB/blob/main/images/1.jpg?raw=true"
    },
    {
        id: 2,
        src: "https://github.com/c0venn/SCB/blob/main/images/2.jpg?raw=true"
    },
    {
        id: 3,
        src: "https://github.com/c0venn/SCB/blob/main/images/3.jpg?raw=true"
    }
]
const sourceVertical = [
    {
        id: 1,
        src: "https://github.com/c0venn/SCB/blob/main/images/v1.jpg?raw=true"
    },
    {
        id: 2,
        src: "https://github.com/c0venn/SCB/blob/main/images/v2.jpg?raw=true"
    },
    {
        id: 3,
        src: "https://github.com/c0venn/SCB/blob/main/images/v3.jpg?raw=true"
    },
    {
        id: 4,
        src: "https://github.com/c0venn/SCB/blob/main/images/v4.jpg?raw=true"
    },
    {
        id: 5,
        src: "https://github.com/c0venn/SCB/blob/main/images/v5.jpg?raw=true"
    },
    {
        id: 6,
        src: "https://github.com/c0venn/SCB/blob/main/images/v6.jpg?raw=true"
    },
    {
        id: 7,
        src: "https://github.com/c0venn/SCB/blob/main/images/v7.jpg?raw=true"
    },
    {
        id: 8,
        src: "https://github.com/c0venn/SCB/blob/main/images/v8.jpg?raw=true"
    },
    {
        id: 9,
        src: "https://github.com/c0venn/SCB/blob/main/images/v9.jpg?raw=true"
    }
]
async function fetchPhotos() {
  try {
    const photos = await getPhotos;
    photos.forEach(element => {
        col = document.createElement('div')
        col.className = "photoVertical col-md-4 text-center p-2"
        img = document.createElement('img')
        img.className = "galery img-fluid"
        img.src = `${element.src}`
        container.appendChild(col)
        col.appendChild(img)
    });
  }catch(error) {
    console.log(error);
  }
}

const getPhotos = new Promise((resolve, reject) => {
    if(sourceVertical.length === 0) {
        reject(new Error('datos no encontrados'))
    } else {
        resolve(sourceVertical)
    }
})

fetchPhotos();


