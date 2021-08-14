const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger:text,
        toggleClass:'active',
        start:"top 90%",
        end: "top 20%",
        markers: true
    })
    
  })