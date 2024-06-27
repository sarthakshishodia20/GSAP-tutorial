function page1Animation(){
    let tl=gsap.timeline()

tl.from("nav h1,nav h4,nav button",{
    y:-40,
    duration:0.6,
    delay:1,
    opacity:0,
    stagger:0.2
})
tl.from(".centerPart1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
})
tl.from(".centerPart1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})
tl.from(".centerPart1 button",{
    x:-100,
    opacity:0,
    duration:0.4
})
tl.from(".centerPart2 img",{
    opacity:0,
    x:200,
    duration:0.5
},"-=1") // agr timeline ke andr delay daalna ho to h aise daalte hai

tl.from(".section1Bottom img",{
    opacity:0,
    x:300,
    stagger:-0.15,
    duration:0.6
})

}
page1Animation();


function page2Animation(){
    let tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 0%",
            scrub:2,
        }
    })
    
    tl2.from(".services",{
        x:900,
        opacity:0,
        duration:0.5,
    })
    
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:0.5
    },"sarthak")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:0.5
    },"sarthak")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:0.5
    },"shishodia")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:0.5
    },"shishodia")
    
}

page2Animation();








