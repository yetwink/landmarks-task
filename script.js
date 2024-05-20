document.addEventListener("DOMContentLoaded", function () {
    const landmarksWrappers = [...document.querySelectorAll('.lands-card-wrapper-2')],
      landmarksCards_2 = [...document.querySelectorAll('.lands-card-2')],
      landBs_2 = [...document.querySelectorAll('.bg-img.disabled')],
      CardsHider = [...document.querySelectorAll('.lands-card-2-hider')],
      CardsImage = [...document.querySelectorAll('.card-img-2')],
      CardsInfo = [...document.querySelectorAll('.lands-card-info-2')],
      hiddenInfo = [...document.querySelectorAll('.lands-hidden-text')];

    let salamYcardPercent = 32;

    const bigCircle = document.querySelector('.big-circle'),
          smallCircle = document.querySelector('.small-circle'),
          fuckingLine = document.querySelector('.line');


    console.log(bigCircle, smallCircle);
    gsap.registerPlugin(ScrollTrigger);


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.main',
            start: 'top top',
            end: 'bottom+=7000vh top',
            markers: true,
            pin: true,
            scrub: 2,
        }
    });
    
    tl.to('.lands-card', {
        autoAlpha: 1,
        duration: 1,
        clipPath: 'circle(15% at 50% 50%)',
        // yPercent: -5,
        
    })

    tl.to('.lands-card', {
        yPercent: -5,
        // objectPosition: '50% 50%'
    }, '<+=60%')
    
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
        scale: 0.6,
        yPercent: 4,
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
            yPercent: -10,
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
        clipPath: 'circle(1% at 50% 50%)',
    }, '<')

    tl.to(hiddenInfo[0], {
        xPercent: 100,
        duration: 0.5
    },'<')


    for(let i = 0; i < landmarksWrappers.length; i++){

  
        tl.to(hiddenInfo[i], {
            xPercent: 100,
            duration: 0.5
        }, '<')

        tl.to(fuckingLine, {
            yPercent: 100,
            duration: 2.8
        }, '<')



        tl.to(landmarksWrappers[i],{
            y: 30,
            opacity: 1,

            onComplete: () => {
                bigCircle.classList.remove('active')
                smallCircle.classList.remove('active')
            },

        }, '<')


    
    
        tl.to(CardsImage[i],{
            scale: 0.6,
            // y: -50,
        }, '<')


        tl.to(CardsHider[i], {
            clipPath: 'circle(0% at 50% 50%)',
            // duration: 1
        }, '<')


    
        tl.to(landmarksCards_2[i], {
            autoAlpha: 1,
            clipPath: 'circle(15% at 50% 50%)',
            yPercent: 5,

            onStart: () => {
                bigCircle.classList.add('active')
                smallCircle.classList.add('active')
            },
            onEnterBack: () => {
                bigCircle.classList.add('active')
                smallCircle.classList.add('active')
            },
            onLeaveBack: () =>{
                bigCircle.classList.add('active')
                smallCircle.classList.add('active')
            },
    
            onComplete: () => {
                bigCircle.classList.remove('active')
                smallCircle.classList.remove('active')
            },

        }, '<')
    
        // tl.to(CardsHider[i], {
        //     clipPath: 'circle(0% at 50% 50%)',
        //     // duration: 1
        // }, '<')
    
        tl.to(landBs_2[i], {
            opacity: 1,
            duration: 0.5
        }, '<')
        tl.to(CardsInfo[i], {
            opacity: 1,
            // duration: 3
        },'<+=80%')


        if (i == (landmarksCards_2.length - 1)){
            tl.to(CardsImage[i],{
                scale: 1,
            }, )
            tl.to(landmarksCards_2[i],{
                // y: 40,
                duration: 0,
            }, )
            tl.to(landmarksCards_2[i],{
                clipPath: 'circle(100% at 50% 50%)',
            }, '<')


        } else{
            tl.to(landmarksCards_2[i], {
                yPercent: -salamYcardPercent,
                clipPath: 'circle(1% at 50% 50%)',
            },)
            salamYcardPercent-=4;
            // tl.to('lands-card-hider',{
            //     scale: 1,
            // }, '<')
            tl.to(CardsHider[i], {
                clipPath: 'circle(5% at 50% 50%)',
                duration:2.5,
                ease: "none"
                // duration: 4
            }, '<')
        }


    
        tl.to(CardsInfo[i], {
            opacity: 0,
            duration: 0,
            y: -400,
        }, '<')


    }
  });
