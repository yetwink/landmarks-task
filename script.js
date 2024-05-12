const landmarksBgs = [...document.querySelectorAll('.landmarks__bgs')],
      landmarksCards = [...document.querySelectorAll('.landmarks__cards')];


console.log(landmarksBgs, landmarksCards);

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    ScrollTrigger: {
        trigger: '.main',
        start: 'top top',
        end: 'bottom top',
        markers: true,
        pin: true,
        scrub: 1,
    }
});

tl.to('.lands-card', {
    autoAlpha: 1,
    duration: 1,
    clipPath: 'circle(15% at 50% 40%)',
})

tl.to('.landmarks__shadow',{
    autoAlpha: 1,
    duration: 0
}, '>')

tl.to('.big-circle', {
    autoAlpha: 1,
},'>')

tl.to('.small-circle', {
    autoAlpha: 1,
    duration: 1
},'>')


tl.to('.card-img',{
    objectPosition: "50% -50%",
    scale: 0.8
}, '<60%')


