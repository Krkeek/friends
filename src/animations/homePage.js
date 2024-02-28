import {gsap} from "gsap";
export const homePageAnimation = () => {

    gsap.timeline()

        .fromTo('.containerAnimation',{x:"-50vw"},{x:0, duration:1})
        .fromTo('.navElementAnimation',{yPercent:-50, opacity:0},{yPercent:0,opacity:1, stagger:0.5, duration:0.5},'=-0.5')
        .fromTo('.followUsAnimation',{opacity: 0},{opacity:1},"=-0.7")
        .fromTo('.socialAnimation',{opacity: 0, yPercent: -50},{opacity:1, yPercent:0},'=-0.5')
        .fromTo('.topBarContainerAnimation',{x:"100vw"},{x:0, duration:1.4},"=-2")
        .fromTo('.buttonAnimation',{opacity: 0},{opacity:1, duration:1})
        .fromTo('.highLightedTitleAnimation',{yPercent:-40, opacity:0},{yPercent:0,opacity:1})
        .fromTo('.eventAnimation',{x:'100vw', opacity:0},{x:0, stagger:0.5, opacity:1})
}

