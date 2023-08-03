gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const sections = gsap.utils.toArray('section');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    })

    gsap.to('.logo', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 1500,
            scrub: 0.5,
        }
    })

    gsap.to('.line', {
        height: '10rem',
        scrollTrigger: {
            trigger: '.line',
            scrub: 0.5,
            start: 'center center',
            end: 2000,
        }
    })

    document.querySelectorAll('.character').forEach(el => {

        gsap.to(el.querySelector('.caption'), {
            x: 0,
            y: 0,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.caption'),
                start: 'top bottom',
                end: '+=1000',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.quote'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.quote'),
                start: 'top bottom',
                end: '+=20%',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.nickname'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.nickname'),
                start: 'top bottom',
                end: '+=10%',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.block'), {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.block'),
                start: 'top bottom',
                end: '+=' + window.innerWidth,
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('img'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('img'),
                start: 'top bottom',
                end: '+=50%',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.huge-text'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.huge-text'),
                start: 'top bottom',
                end: '+=100%',
                scrub: 0.5,
            }
        })

    })

})