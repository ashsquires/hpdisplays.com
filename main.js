const btn = document.getElementById('learn');

btn.addEventListener('click', () => window.scrollTo({
  top: 800,
  behavior: 'smooth',
}));

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //document.getElementById("homenavbar").style.height = "75px";
    document.getElementById("homenavbar").classList.add('smoothshrink');
  } else {
    //document.getElementById("homenavbar").style.height = "82px";
    document.getElementById("homenavbar").classList.remove('smoothshrink');
  }
};

const border = e => {
  e.target.style.borderBottum = '2px solid #2588DD'
};

const fo = document.getElementById('entry.1454564185');

fo.addEventListener('click', border());
