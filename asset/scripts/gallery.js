let position = 1;
const pictures = document.querySelectorAll('.galery img');
const previewImage = document.querySelector('.gallery-preview');

function nextImage() {
    if (position < pictures.length - 1) {
        position++;
    } else {
        position = 1;
        //pictures[0].src = "assets/pictures/pic1.jpg";
    }
    updateGallery();
}

function prevImage() {
    if (position === 1) {
        position = pictures.length - 1;
    } else {
        position--;
        //pictures[0].src = "assets/pictures/pic" + position + ".jpg";
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
    previewImage.src = "/asset/img/pic" + position + ".jpg";
}

document.querySelector('.btn.next').addEventListener('click', nextImage);
document.querySelector('.btn.prev').addEventListener('click', prevImage);