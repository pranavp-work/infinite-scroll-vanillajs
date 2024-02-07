const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'crSjGO0gX6hgB8ZZO0LNQTVnqVRKI-NT-VTpuVNKp1M';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set the attributes to DOM
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links & photos, add to DOM.
function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.full,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Now, need to put <img> inside <a>, then put both inside imageContainer element.
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();
    } catch (error) {
        // Catch error here
        console.log("Come again later!", error);
    }
}

// On Load
getPhotos();