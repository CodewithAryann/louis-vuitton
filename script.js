function HomepageAnimation() {
    gsap.set(".slidesm", { scale: 2 })


    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        }
    })
    tl
        .to(".vidodiv", {

            '--clip': "0%",
            ease: Power2,
        }, 'a')
        .to(".slidesm", {
            scale: 1,
            ease: Power2
        }, 'a')
        .to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power2

        }, 'b')
        .to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power2

        }, 'b')

}
function realAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        xPercent: -230,
        ease: Power4
    })
}
function teamAnimation() {
    document.querySelectorAll(".listelem")
        .forEach(function (el) {
            el.addEventListener("mousemove", function (dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    ease: Power4,
                    duration: .5
                })
            })
            el.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 0,
                    ease: Power4,
                    duration: .5
                })
            })

        })
}
function ParaAnimation() {
    var clutter = "";
    document.querySelector(".textpara")
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector(".textpara").innerHTML = clutter;
    gsap.set(".textpara span", {
        opacity: .1
    })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 30%",
            end: "bottom 110%",
            scrub: 1
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
}
function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsulesAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            markets: true,
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

function themechange(){
    let themeStack = [];

    document.querySelectorAll(".section").forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function() {
                // Push the current theme to the stack before changing to the new theme
                themeStack.push(document.body.getAttribute("theme") || "");
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function() {
                // Pop the previous theme from the stack and apply it
                document.body.setAttribute("theme", themeStack.pop() || "");
            }
        });
    });
}

themechange();
loco();
HomepageAnimation();
realAnimation();
teamAnimation();
ParaAnimation();
capsulesAnimation();