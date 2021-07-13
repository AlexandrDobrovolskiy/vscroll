const { style } = document.querySelector('#s2inner');
s1 = document.querySelector('#s1');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > s1.clientHeight) {
    style.setProperty('--scroll',(window.pageYOffset - s1.clientHeight) / (document.body.offsetHeight - window.innerHeight - s1.clientHeight));
  } else {
    style.setProperty('--scroll', 0);
  }
}, false);


// LOTTIE

LottieInteractivity.create({
  mode: 'scroll',
  player: '#l1',
  actions: [
    {
      visibility: [0, 1],
      type: 'seek',
      frames: [0, 60],
    },
  ],
});

LottieInteractivity.create({
  mode: 'scroll',
  player: '#l2',
  actions: [
    {
      visibility: [0,1],
      type: 'seek',
      frames: [0, 60],
    },
  ],
});

LottieInteractivity.create({
  mode: 'scroll',
  player: '#l3',
  actions: [
    {
      visibility: [0,1],
      type: 'seek',
      frames: [0, 60],
    },
  ],
});

LottieInteractivity.create({
  mode: 'scroll',
  player: '#l4',
  actions: [
    {
      visibility: [0,1],
      type: 'seek',
      frames: [0, 60],
    },
  ],
});
