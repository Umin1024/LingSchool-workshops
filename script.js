
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

function closeLightbox() {
    lightbox.classList.remove('active');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});


const strip = document.getElementById('imageStrip');
const total = strip.querySelectorAll('img').length;
document.getElementById('imgCounter').textContent = total;


strip.addEventListener('scroll', () => {
    const imgs = strip.querySelectorAll('img');
    let current = 1;
    imgs.forEach((img, i) => {
        if (img.offsetLeft - strip.scrollLeft < strip.clientWidth / 2) {
            current = i + 1;
        }
    });
    document.getElementById('imgCounter').textContent = current + ' / ' + total;
});