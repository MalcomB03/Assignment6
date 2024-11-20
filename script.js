// Define the images and descriptions in an array
const images = [
    { src: "usca1.png", description: "USC Aiken" },
    { src: "usca2.jpg", description: "In front of penland" },
    { src: "usca3.jpg", description: "Science center" },
    { src: "usca4.jpg", description: "Visit USC Aiken!" },
  
];

let currentIndex = 0; // Start at the first image

// Function to update the image and description
function updateImage() {
    const imageElement = document.getElementById('current-image');
    const descriptionElement = document.getElementById('description');
    
    // Set the image source and description based on currentIndex
    imageElement.style.opacity = 0; // Start with opacity 0 for fade effect
    setTimeout(() => {
        imageElement.src = images[currentIndex].src;
        descriptionElement.textContent = images[currentIndex].description;
        imageElement.style.opacity = 1; // Fade in the new image
    }, 500); // Wait for the current image to fade out before changing it
}

// Function to move to the previous image
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

// Function to move to the next image
function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

// Event listeners for arrows
document.getElementById('left-arrow').addEventListener('click', prevImage);
document.getElementById('right-arrow').addEventListener('click', nextImage);

// Optionally, handle dot navigation (if you'd like dots as well)
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateImage();
    });
});

// Initial image setup
updateImage();

    