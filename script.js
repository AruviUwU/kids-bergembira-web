// LOADER
window.addEventListener('load', () => {
  setTimeout(() => {
    gsap.to('#loader', {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        document.getElementById('loader').style.display = 'none';
      }
    });
  }, 3000);
});

// CUSTOM CURSOR
const cursor = document.querySelector('.cursor');
const blur = document.querySelector('.cursor-blur');

if (cursor && blur) {
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    blur.style.left = e.clientX - 150 + 'px';
    blur.style.top = e.clientY - 150 + 'px';
  });
}

// HERO ANIMATION
const tl = gsap.timeline();

 tl.from('.hero-left h1', {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

 tl.from('.hero-card', {
  rotate: 15,
  opacity: 0,
  duration: 1.2
});

// SCROLL ANIMATION
 gsap.utils.toArray('.about-card, .member-card, .gallery-grid img').forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 85%'
    },
    y: 80,
    opacity: 0,
    duration: 1
  });
});

// MUSIC

const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

let playing = false;

// START MUSIC ON FIRST CLICK
document.body.addEventListener('click', async () => {

  if (!playing) {

    try {
      await music.play();
      playing = true;
      musicBtn.innerHTML = '🔇';
    } catch(err) {
      console.log(err);
    }
  }

}, { once:true });

// TOGGLE BUTTON
musicBtn.addEventListener('click', () => {

  if (playing) {
    music.pause();
    musicBtn.innerHTML = '🔊';
    playing = false;

  } else {
    music.play();
    musicBtn.innerHTML = '🔇';
    playing = true;
  }

});

// GALLERY ANIMATION

gsap.utils.toArray('.gallery-grid img').forEach((img) => {

  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: 'top 90%',
    },

    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'

  });

});

// LIGHTBOX GALLERY

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.gallery-grid img');
const closeLightbox = document.querySelector('.close-lightbox');

galleryImages.forEach(img => {

  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    document.body.style.overflow = 'hidden';
  });

});

closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// CLOSE WHEN CLICK OUTSIDE
lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox){
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

});