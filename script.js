gsap.to('.blur', {

  opacity: 1,
  scrollTrigger: {
    trigger: '.blur',
    scroller: 'body',
    start: 'top -30%',
    end: 'bottom bottom',
    scrub: 2,
    marker: true,
  }
});




let tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });
tl.from(".ltp span", {
  y: 100,
  opacity: 0,
  duration: 0.1,
  stagger: {
    each: 0.09,
    from: "start"
  }
})
  .from(".lth span", {
    y: 100,
    opacity: 0,
    duration: 0.2,
    stagger: {
      each: 0.09,
      from: "start"
    }
  }, "-=0.2");

tl.from('.layp', {
  y: 100,
  opacity: 0,
  duration: 0.3,
  stagger: {
    each: 0.02,
    from: "start"
  }
}, "-=0.2");

tl.from('.divv', {
  y: 100,
  opacity: 0,
  duration: 0.3,
  stagger: {
    each: 0.02,
    from: "start"
  }
}, "-=0.2");

tl.from('nav', {
  y: -100,
  opacity: 0,
  duration: 0.1,
  stagger: {
    each: 0.02,
    from: "center"
  }
}, "-=0.2");






// ===========about============



gsap.from('#sum', {
  y: 150,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: '.about',
    scroller: 'body',
    start: 'top 50%',
    end: 'top 20%',
    scrub: true,
  }
})


gsap.from('.abp', {
  y: 150,
  opacity: 0,
  duration: 0.6,
  stagger: 0.6,
  scrollTrigger: {
    trigger: '.about',
    scroller: 'body',
    start: 'top 50%',
    end: 'top 20%',
    scrub: true,

  }
})

gsap.from('.a2', {
  y: 80,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: '.a2',
    scroller: 'body',
    start: 'top 80%',
    end: 'top 60%',
    scrub: true,

  }
})


// ==========projects=============
gsap.from('#kk1', {
  y: 150,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: '.pro',
    scroller: 'body',
    start: 'top 80%',
    end: 'top 60%',
    scrub: true,
  }
})

gsap.utils.toArray('.spp1').forEach(el => {
  gsap.from(el, {
    y: 150,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: el,
      scroller: 'body',
      start: 'top 85%',
      end: 'top 60%',
      scrub: true,
  
    }
  });
});
gsap.utils.toArray('.spp2').forEach(el => {
  gsap.from(el, {
    y: 150,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: el,
      scroller: 'body',
      start: 'top 75%',
      end: 'top 60%',
      scrub: true,
    }
  });
});
gsap.utils.toArray('.spp3').forEach(el => {
  gsap.from(el, {
    y: 150,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: el,
      scroller: 'body',
      start: 'top 75%',
      end: 'top 60%',
      scrub: true,
    }
  });
});

gsap.utils.toArray('.sp1').forEach(btn => {
  gsap.from(btn, {
    y:150,
     opacity:0,
      duration:0.6,
    scrollTrigger:
    { trigger: btn,
       scroller:'body',
        start:'top 75%',
         end:'top 60%',
          scrub:true }
  });
});
gsap.utils.toArray('.im2').forEach(box => {
  gsap.from(box, {
    y: 150,
     opacity: 0,
      duration: 0.6,
    scrollTrigger: 
    { trigger: box,
       scroller: 'body', 
       start: 'top 75%', 
       end: 'top 60%', 
       scrub: true }
  });
});


gsap.utils.toArray('.ll .link1').forEach(item => {
  gsap.from(item, {
    y: 150,
     opacity: 0,
      duration: 0.3,
    scrollTrigger: 
    { trigger: item, 
      scroller: 'body',
       start: 'top 90%',
        end: 'top 10%',
         scrub: true,
        
       } 
         
  });
});




//============skills==============
gsap.from('.hs', {
  y: 150,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: '.skill',
    scroller: 'body',
    start: 'top 50%',
    end: 'top 20%',
    scrub: true,
  }
})

gsap.from('.dis2  > *', {
  y: 150,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.skill',
    scroller: 'body',
    start: 'top 50%',
    end: 'top 20%',
    scrub: true,
  }
})
gsap.from('.g3', {
  y: 150,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.skill',
    scroller: 'body',
    start: 'top 50%',
    end: 'top 20%',
    scrub: true,
  }
})


// ==========lang ================
gsap.from('.lf2', {
  x: -800,
  duration: 0.9,
})
gsap.from('.lf3', {
  x: -800,
  duration: 0.9,
})
gsap.from('.lf4', {
  x: -800,
  duration: 0.9,

})
gsap.from('.lang1 > *', {
  y: 150,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: '.lang',
    scroller: 'body',
    start: 'top 50%',
    end: 'top 20%',
    scrub: true,
  }
})
gsap.from('.edu', {
  y: 150,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: '.edu',
    scroller: 'body',
    start: 'top 80%',
    end: 'top 60%',
    scrub: true,
  },
  stagger: 0.3,
})

// gsap.from('.link', {
//   y: 150,
//   opacity: 0,
//   duration: 0.6,
//   scrollTrigger: {
//     trigger: '.link',
//     scroller: 'body',
//     start: 'top 100%',
//     end: 'top 20%',
//     scrub: true,
//   }
// });
gsap.from('.dis3 .s1', {
  opacity: 0,
  duration: 0.9,
  scrollTrigger: {
    trigger: '.dis3',
    scroller: 'body',
    start: 'top 80%',
    end: 'top 60%',
    scrub: true,
  },
  stagger: 0.3,
})