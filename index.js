const container = document.querySelector('.row')
const carrusel = document.querySelector('.carousel-inner')

const sourceHorizontal = [
    {
        id: 1,
        src: "https://github.com/c0venn/SCB/blob/main/images/2.jpg?raw=true"
    },
    {
        id: 2,
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
    },
    {
        id: 10,
        src: "https://github.com/c0venn/SCB/blob/main/images/v10.jpg?raw=true"
    },
    {
        id: 11,
        src: "https://github.com/c0venn/SCB/blob/main/images/v11.jpg?raw=true"
    },
    {
        id: 12,
        src: "https://github.com/c0venn/SCB/blob/main/images/v12.jpg?raw=true"
    },
    {
        id: 13,
        src: "https://github.com/c0venn/SCB/blob/main/images/v13.jpg?raw=true"
    },
    {
        id: 14,
        src: "https://github.com/c0venn/SCB/blob/main/images/v14.jpg?raw=true"
    },
    {
        id: 15,
        src: "https://github.com/c0venn/SCB/blob/main/images/v15.jpg?raw=true"
    },
    {
        id: 16,
        src: "https://github.com/c0venn/SCB/blob/main/images/v16.jpg?raw=true"
    },
    {
        id: 17,
        src: "https://github.com/c0venn/SCB/blob/main/images/v17.jpg?raw=true"
    },
    {
        id: 18,
        src: "https://github.com/c0venn/SCB/blob/main/images/v18.jpg?raw=true"
    },
    {
        id: 19,
        src: "https://github.com/c0venn/SCB/blob/main/images/v19.jpg?raw=true"
    },
    {
        id: 20,
        src: "https://github.com/c0venn/SCB/blob/main/images/v20.jpg?raw=true"
    },
    {
        id: 21,
        src: "https://github.com/c0venn/SCB/blob/main/images/v21.jpg?raw=true"
    },
    {
        id: 22,
        src: "https://github.com/c0venn/SCB/blob/main/images/v22.jpg?raw=true"
    },
    {
        id: 23,
        src: "https://github.com/c0venn/SCB/blob/main/images/v23.jpg?raw=true"
    },
    {
        id: 24,
        src: "https://github.com/c0venn/SCB/blob/main/images/v24.jpg?raw=true"
    },
    {
        id: 25,
        src: "https://github.com/c0venn/SCB/blob/main/images/v25.jpg?raw=true"
    },
    {
        id: 26,
        src: "https://github.com/c0venn/SCB/blob/main/images/v26.jpg?raw=true"
    }
]
async function fetchPhotos() {
    try {
        const photosV = await getVertical;
        photosV.forEach(element => {
            col = document.createElement('div')
            col.className = "photoVertical col-md-4 text-center p-2"
            img = document.createElement('img')
            img.className = "galery img-fluid"
            img.src = `${element.src}`
            container.appendChild(col)
            col.appendChild(img)
        });

    } catch (error) {
        console.log(error);
    }
}

const getVertical = new Promise((resolve, reject) => {
    if (sourceVertical.length === 0) {
        reject(new Error('datos no encontrados'))
    } else {
        resolve(sourceVertical)
    }
})

async function fetchPhotosHorizontal() {
    try {
        const photoHorizontal = await getHorizontal
        photoHorizontal.forEach(element => {
            div = document.createElement('div')
            div.className = "carousel-item"
            img = document.createElement('img')
            img.className = "carousel img-fluid"
            img.src = `${element.src}`
            carrusel.appendChild(div)
            div.appendChild(img)
        });
    } catch (error) {
        console.log(error)
    }
}

const getHorizontal = new Promise((resolve, reject) => {
    if (sourceHorizontal.length === 0) {
        reject(new Error('datos no encontrados'))
    } else {
        resolve(sourceHorizontal)
    }
})

fetchPhotos();
fetchPhotosHorizontal();

