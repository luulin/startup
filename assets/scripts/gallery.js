let position = 0; // Start from 0 as array indices are zero-based
const pictures = document.querySelectorAll('.gallery img');
const previewImage = document.querySelector('.gallery-preview');

function nextImage() {
    if (position < pictures.length - 1) {
        position++;
    } else {
        position = 0;
    }
    updateGallery();
}

function prevImage() {
    if (position === 0) {
        position = pictures.length - 1;
    } else {
        position--;
    }
    updateGallery();
}

function updateGallery() {
    pictures.forEach((pic, index) => {
        pic.classList.remove('gallery-pic');
        if (index === position) {
            pic.classList.add('gallery-pic');
        }
    });
    previewImage.src = "assets/img/pic" + (position + 1) + ".jpg"; // Adjusted for 1-based file naming
}

document.querySelector('.btn.next').addEventListener('click', nextImage);
document.querySelector('.btn.prev').addEventListener('click', prevImage);

// Initial update to set the first image as active
updateGallery();
