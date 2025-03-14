// Combine all image sources
const galleryImages = [
    // Horizontal images
    {
        id: 1,
        src: "https://github.com/c0venn/SCB/blob/main/images/1.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 2,
        src: "https://github.com/c0venn/SCB/blob/main/images/2.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 3,
        src: "https://github.com/c0venn/SCB/blob/main/images/3.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 5,
        src: "https://github.com/c0venn/SCB/blob/main/images/5.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 6,
        src: "https://github.com/c0venn/SCB/blob/main/images/6.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 7,
        src: "https://github.com/c0venn/SCB/blob/main/images/7.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 8,
        src: "https://github.com/c0venn/SCB/blob/main/images/8.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 9,
        src: "https://github.com/c0venn/SCB/blob/main/images/9.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 10,
        src: "https://github.com/c0venn/SCB/blob/main/images/10.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 11,
        src: "https://github.com/c0venn/SCB/blob/main/images/11.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 12,
        src: "https://github.com/c0venn/SCB/blob/main/images/12.jpg?raw=true",
        orientation: "horizontal"
    },
    {
        id: 13,
        src: "https://github.com/c0venn/SCB/blob/main/images/13.jpg?raw=true",
        orientation: "horizontal"
    },
    // Vertical images
    {
        id: 31,
        src: "https://github.com/c0venn/SCB/blob/main/images/v31.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 34,
        src: "https://github.com/c0venn/SCB/blob/main/images/v34.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 37,
        src: "https://github.com/c0venn/SCB/blob/main/images/v37.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 5,
        src: "https://github.com/c0venn/SCB/blob/main/images/v5.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 7,
        src: "https://github.com/c0venn/SCB/blob/main/images/v7.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 11,
        src: "https://github.com/c0venn/SCB/blob/main/images/v11.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 12,
        src: "https://github.com/c0venn/SCB/blob/main/images/v12.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 14,
        src: "https://github.com/c0venn/SCB/blob/main/images/v14.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 15,
        src: "https://github.com/c0venn/SCB/blob/main/images/v15.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 20,
        src: "https://github.com/c0venn/SCB/blob/main/images/v20.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 22,
        src: "https://github.com/c0venn/SCB/blob/main/images/v22.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 23,
        src: "https://github.com/c0venn/SCB/blob/main/images/v23.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 24,
        src: "https://github.com/c0venn/SCB/blob/main/images/v24.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 25,
        src: "https://github.com/c0venn/SCB/blob/main/images/v25.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 26,
        src: "https://github.com/c0venn/SCB/blob/main/images/v26.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 28,
        src: "https://github.com/c0venn/SCB/blob/main/images/v28.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 32,
        src: "https://github.com/c0venn/SCB/blob/main/images/v32.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 36,
        src: "https://github.com/c0venn/SCB/blob/main/images/v36.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 38,
        src: "https://github.com/c0venn/SCB/blob/main/images/v38.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 39,
        src: "https://github.com/c0venn/SCB/blob/main/images/v39.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 40,
        src: "https://github.com/c0venn/SCB/blob/main/images/v40.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 41,
        src: "https://github.com/c0venn/SCB/blob/main/images/v41.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 42,
        src: "https://github.com/c0venn/SCB/blob/main/images/v42.jpg?raw=true",
        orientation: "vertical"
    },
    {
        id: 43,
        src: "https://github.com/c0venn/SCB/blob/main/images/v43.jpg?raw=true",
        orientation: "vertical"
    }
];

let currentImageIndex = 0;

// Function to create gallery items with lightbox
function createGalleryItem(image, index) {
    return `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="gallery-item ${image.orientation}">
                <img src="${image.src}" 
                     class="img-fluid" 
                     alt="Street Chilean Ball - Imagen ${image.id}"
                     data-orientation="${image.orientation}"
                     data-index="${index}"
                     onclick="openLightbox(${index})">
            </div>
        </div>
    `;
}

// Function to load gallery with filters
function loadGallery(filter = 'all') {
    const galleryGrid = document.querySelector('.gallery-grid .row');
    let filteredImages = galleryImages;
    
    if (filter !== 'all') {
        filteredImages = galleryImages.filter(img => img.orientation === filter);
    }
    
    const galleryHTML = filteredImages.map((image, index) => createGalleryItem(image, index)).join('');
    galleryGrid.innerHTML = galleryHTML;
}

// Function to navigate through images in lightbox
function navigateImage(direction) {
    const filteredImages = getCurrentFilteredImages();
    currentImageIndex = (currentImageIndex + direction + filteredImages.length) % filteredImages.length;
    updateLightboxImage(filteredImages[currentImageIndex].src);
}

// Function to get current filtered images
function getCurrentFilteredImages() {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    return activeFilter === 'all' ? galleryImages : galleryImages.filter(img => img.orientation === activeFilter);
}

// Function to update lightbox image
function updateLightboxImage(src) {
    const lightboxImg = document.querySelector('.lightbox-content img');
    if (lightboxImg) {
        lightboxImg.src = src;
    }
}

// Lightbox functionality
function openLightbox(index) {
    currentImageIndex = index;
    const filteredImages = getCurrentFilteredImages();
    const image = filteredImages[index];
    
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div class="lightbox-nav lightbox-prev" onclick="navigateImage(-1)">&#10094;</div>
            <div class="lightbox-nav lightbox-next" onclick="navigateImage(1)">&#10095;</div>
            <img src="${image.src}" alt="Imagen ampliada">
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.remove();
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
}

// Handle keyboard navigation
function handleKeyPress(e) {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    switch (e.key) {
        case 'ArrowLeft':
            navigateImage(-1);
            break;
        case 'ArrowRight':
            navigateImage(1);
            break;
        case 'Escape':
            lightbox.remove();
            break;
    }
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('¡Mensaje enviado con éxito!');
            e.target.reset();
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    } catch (error) {
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
        console.error('Error:', error);
    }
});

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    
    // Add filter buttons event listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            loadGallery(filter);
            
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Remove keyboard event listener when lightbox is closed
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-lightbox') || e.target.classList.contains('lightbox')) {
            document.removeEventListener('keydown', handleKeyPress);
        }
    });
}); 