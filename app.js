var rect = document.querySelector(".center");
rect.addEventListener("mousemove", function (details) {

    // console.log(rect.getBoundingClientRect()); //left=205.5,right=605.5,top=225.5,width=400px
    var rectanglelocation = rect.getBoundingClientRect();

    // console.log(details.clientX-rectanglelocation.left);
    var insiderectval = details.clientX - rectanglelocation.left;

    if (insiderectval < rectanglelocation.width / 2) {

        var redcolor = gsap.utils.mapRange(
            0,
            rectanglelocation.width / 2,
            255,
            150,
            insiderectval
        );
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        });
    }
    else {
        var bluecolor = gsap.utils.mapRange(
            rectanglelocation.width / 2,
            rectanglelocation.width,
            90,
            255,
            insiderectval
        );
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        });
    }
});

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
    })
})

































