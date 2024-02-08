// // Unsplash API
// let count = 5;
// const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
// let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
// // Check if all images were loaded
// function imageLoaded() {
//   imagesLoaded++;
//   if (imagesLoaded === totalImages) {
//     ready = true;
//     loader.hidden = true;
//     count = 30
//     apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
//   }
// }


// // -------------------------------------
// let isInitialLoad = true // NEW LINE ****
// // Unsplash API
// let initialCount = 5;
// const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
// let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${initialCount}`;
// // NEW Block****
// function updateAPIURLWithNewCount (picCount) {
//   apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${picCount}`;
// }
// // NEW Block*****
// // Check if all images were loaded
// function imageLoaded() {
//   imagesLoaded++;
//   if (imagesLoaded === totalImages) {
//     ready = true;
//     loader.hidden = true;
//   }
// }
// .......
// // Get photos from Unsplash API
// async function getPhotos() {
//   try {
//     const response = await fetch(apiUrl);
//     photosArray = await response.json();
//     displayPhotos();
//     if (isInitialLoad) { // NEW LINE ****
//       updateAPIURLWithNewCount(30) // NEW LINE ****
//       isInitialLoad = false // NEW LINE ****
//     } // NEW LINE ****
//   } catch (error) {
//     // Catch Error Here
//   }
// }