const { style } = document.querySelector('#s2inner');
s1 = document.querySelector('#s1');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > s1.clientHeight) {
    style.setProperty('--scroll',(window.pageYOffset - s1.clientHeight) / (document.body.offsetHeight - window.innerHeight - s1.clientHeight));
  } else {
    style.setProperty('--scroll', 0);
  }
}, false);
