function locomotiveAnimation (){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
locomotiveAnimation();

function navbarAnimation() {
    gsap.to("#nav-1 svg", {
      transform: "translateY(-100%)",
      duration: 0.5,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
        
      },
    });
    gsap.to("#nav-2 #nav-links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
        },
      });
      gsap.to("#nav-2 #icons", {
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true,
        },
    });
    
    gsap.to("#nav", {
      y: "-100%", 
      duration: 0.2,
      scrollTrigger: {
          trigger: "#page6",
          scroller: "#main",
          start: "top 0",
          end: "top 100%",
          toggleActions: "play none none reverse",
      },
  });
}

navbarAnimation();

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();
  
function loadinganimation () {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3,
    })
    gsap.from("#page1 #img", {
        scale: 0.9,
        opacity: 0,
        delay: 0.8,
        duration: 0.5,
      });  
}
loadinganimation();

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

function emailValidation() {

  document.getElementById('email-field').addEventListener('focus', function() {
    if (this.value === 'enter your email address for good') {
      this.value = '';
    }
    document.getElementById('error-msg').style.display = 'none';
  });

  document.getElementById('email-field').addEventListener('blur', function() {
    var email = this.value;
    var regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/ ;
    if (regex.test(email)) {
      
      document.getElementById('error-msg').style.color = 'green';
      document.getElementById('error-msg').innerText = 'Valid email address!';
    } else {
      
      document.getElementById('error-msg').style.color = 'red';
      document.getElementById('error-msg').innerText = 'Invalid email address!';
    }
    document.getElementById('error-msg').style.display = 'block';
  });

}

emailValidation();

