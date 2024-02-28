import {gsap} from "gsap";


export const welcomePageAnimation = () => {

    gsap.timeline()
        .fromTo(".bgImgAnimation",{opacity: 0},{opacity:1, duration:0.5})
        .fromTo(".logoAnimation",{opacity: 0, yPercent: 30},{opacity:1, duration:1, yPercent:0})
        .to('.descriptionAnimation', {
            duration: 3,
            text: {
                value: "Join us at FRIENDS, where we cultivate a vibrant community through engaging weekly meetings on thought-provoking topics, fostering meaningful connections and enriching your university experience",
            },})
        .fromTo('.buttonAnimation',{opacity: 0},{opacity:1, duration:0.5})

}

