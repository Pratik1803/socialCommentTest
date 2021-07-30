//curtain up animation
let root = document.getElementById("root");
let firstCurtain = document.querySelector(".hide");
let secondCutain = document.querySelector(".blueCurtain");
let text1 = document.querySelector(".one");
let text2 = document.querySelector(".two");
let text3 = document.querySelector(".three");
let tl = new TimelineMax();
tl.to(text1, 0.5, { transform: "translateY(0)" })
    .to(text2, 0.5, { transform: "translateY(0)" }, "-=0.2")
    .to(text3, 0.5, { transform: "translateY(0)" }, "-=0.2")
    .to(firstCurtain, 0.6, { transform: "translateY(-100vh)" }, "+=0.1")
    .to(secondCutain, 0.6, { transform: "translateY(-100vh)" }, "+=0.5")
    .to(root, 0.3, { opacity: "1", pointerEvents: "all" });

//hamburger animation
let line0 = document.getElementById("line-0");
let line1 = document.getElementById("line-1");
let line2 = document.getElementById("line-2");

let navDiv = document.getElementById("nav-ul");
let nav = document.getElementById("header-nav-ul");
let hamburgerBtn = document.getElementById("hamburger");


let btnFlag = false;
let tl1 = new TimelineMax();
hamburgerBtn.addEventListener("click", () => {
    if (!btnFlag) {
        line1.style.transform = "translateX(-10px)";
        line1.style.opacity = "0";
        line0.style.transform = "rotate(-45deg)";
        line2.style.transform = "rotate(45deg)";
        tl1.to(navDiv, 0.3, { width: "60vw" })
            .to(nav, 0.3, { opacity: "1", pointerEvents: 'all' });
        btnFlag = true;
    } else {
        line1.style.transform = "translateX(0px)";
        line1.style.opacity = "1";
        line0.style.transform = "rotate(0deg) translateY(-10px)";
        line2.style.transform = "rotate(0deg) translateY(10px)";
        tl1.to(nav, 0.3, { opacity: "0", pointerEvents: 'none' })
            .to(navDiv, 0.3, { width: "0vw" });
        btnFlag = false;
    }

});

//cursor folow animation
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px ; top: " + e.clientY + "px;";
})