document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline();

  tl.fromTo(
    '.bg-loader',
    {
      width: '100%',
    },
    {
      width: '0%',
      duration: 1,
      ease: Expo.easeInOut,
      delay: 5,
    },
  )
    .fromTo(
      '.bg-video',
      {
        width: '0%',
        opacity: 0,
      },
      {
        width: '100%',
        duration: 2,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      '-=1',
    )
    .fromTo(
      '.logo',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      '-=0.5',
    )
    .fromTo(
      '.nav-list',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      '-=0.5',
    )
    .fromTo(
      '.nav-social',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      '-=0.5',
    )
    .fromTo(
      '.item-1',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      '-=0.5',
    )
    .fromTo(
      '.item-2',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      '-=0.5',
    )
    .fromTo(
      '.item-3',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      '-=0.5',
    )
    .fromTo(
      '.item-4',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      '-=0.5',
    )
    .fromTo(
      '.item-5',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      '-=0.5',
    );
});
