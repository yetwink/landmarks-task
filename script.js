document.addEventListener("DOMContentLoaded", function () {
    const landmarksWrappers = [...document.querySelectorAll('.lands-card-wrapper-2')],
      landmarksCards_2 = [...document.querySelectorAll('.lands-card-2')],
      landBs_2 = [...document.querySelectorAll('.bg-img.disabled')],
      CardsHider = [...document.querySelectorAll('.lands-card-2-hider')],
      CardsImage = [...document.querySelectorAll('.card-img-2')],
      CardsInfo = [...document.querySelectorAll('.lands-card-info-2')],
      hiddenInfo = [...document.querySelectorAll('.lands-hidden-text')];

    let salamYcardPercent = 42;

    const bigCircle = document.querySelector('.big-circle'),
          smallCircle = document.querySelector('.small-circle'),
          fuckingLine = document.querySelector('.line');


    console.log(bigCircle, smallCircle);
    gsap.registerPlugin(ScrollTrigger);


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.main',
            start: 'top top',
            end: 'bottom+=6500vh top',
            markers: true,
            pin: true,
            scrub: 1,
        }
    });
    
    tl.to('.lands-card', {
        autoAlpha: 1,
        duration: 1,
        clipPath: 'circle(15% at 50% 45%)',
        
    })
    
    tl.to('.landmarks__shadow',{
        autoAlpha: 1,
        duration: 0
    }, '<')
    
    tl.to('.big-circle', {
        autoAlpha: 1,
    },'<')
    
    tl.to('.small-circle', {
        autoAlpha: 1,
        duration: 1
    },'<')
    
    
    tl.to('.card-img',{
        scale: 0.8,
        y: 100,
        onComplete: () => {
            bigCircle.classList.add('active')
            smallCircle.classList.add('active')
        }
    }, '<60%')
    
    tl.to('.lands-card-info', {
        opacity: 1,
    })

    landmarksWrappers.forEach(el => {
        tl.to(el, {
            opacity: 1,
            duration: 0
        })
    }, '<')

    tl.to('.lands-card', {
        yPercent: -47,
        clipPath: 'circle(1% at 50% 50%)',

        onEnter: () => {
            bigCircle.classList.remove('active')
            smallCircle.classList.remove('active')
        },

    },)

    tl.to('.lands-card-info', {
        opacity: 0,
        duration: 0,
        // y: -450,
        yPercent: -47
    }, '<')
    tl.to('.lands-card-hider', {
        scale: 1,
        opacity: 1
    }, '<')

    tl.to(hiddenInfo[0], {
        opacity: 1,
    }, '<')


    for(let i = 0; i < landmarksWrappers.length; i++){

        if (i > 0){
            tl.to(hiddenInfo[i], {
                opacity: 1,
            }, '<')
        }
        tl.to(fuckingLine, {
            yPercent: 100,
            duration: 1
        }, '<')



        tl.to(landmarksWrappers[i],{
            y: 30,
            opacity: 1,

        }, '<')
    
    
        tl.to(CardsImage[i],{
            scale: 0.6,
            y: -50,
        }, '<')
    
        tl.to(landmarksCards_2[i], {
            autoAlpha: 1,
            duration: 1,
            clipPath: 'circle(15% at 50% 45%)',

            onStart: () => {
                bigCircle.classList.remove('active')
                smallCircle.classList.remove('active')
            },
            onEnterBack: () => {
                bigCircle.classList.remove('active')
                smallCircle.classList.remove('active')
            },
            onLeaveBack: () =>{
                bigCircle.classList.remove('active')
                smallCircle.classList.remove('active')
            },
    
            onComplete: () => {
                bigCircle.classList.add('active')
                smallCircle.classList.add('active')
            },

        }, '<')
    
        tl.to(CardsHider[i], {
            scale: 0,
            duration: 1
        }, '<')
    
        tl.to(landBs_2[i], {
            opacity: 1,
            duration: 0.5
        }, '<')
        tl.to(CardsInfo[i], {
            opacity: 1,
        },)


        if (i == (landmarksCards_2.length - 1)){
            tl.to(CardsImage[i],{
                scale: 1,
            }, )
            tl.to(landmarksCards_2[i],{
                y: 40,
                duration: 0,
            }, )
            tl.to(landmarksCards_2[i],{
                clipPath: 'circle(100% at 50% 50%)',
            }, '<')


        } else{
            tl.to(landmarksCards_2[i], {
                yPercent: -salamYcardPercent,
                clipPath: 'circle(1% at 50% 50%)',
            })
            salamYcardPercent-=4;
            tl.to('lands-card-hider',{
                scale: 1,
            }, '<')
            tl.to(CardsHider[i], {
                scale: 1,
                duration: 1
            }, '<')
        }


    
        tl.to(CardsInfo[i], {
            opacity: 0,
            duration: 0,
            y: -400,
        }, '<')


    }
  });