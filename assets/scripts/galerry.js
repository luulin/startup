let position = 1;
const pictures = document.querySelectorAll('.gallery img');
const previewImage = document.querySelector('.gallery-preview');

function nextImage() {
    if (position < pictures.length - 1) {
        position++;
    } else {
        position = 1;
    }
    updateGallery();
}

function prevImage() {
    if (position === 1) {
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
    previewImage.src = "assets/img/pic" + position + ".jpg";
}

document.querySelector('.btn.next').addEventListener('click', nextImage);
document.querySelector('.btn.prev').addEventListener('click', prevImage);