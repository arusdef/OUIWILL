var controller = new ScrollMagic.Controller();

var introTween = new TweenMax.fromTo('#home .intro div', 0.5, {opacity:0,x:-20}, {opacity:1,x:0,ease:Power4.easeOut});
var showreelTween = new TweenMax.staggerFromTo('#home .showreel h2, #home .showreel .play-btn', 0.5, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeOut}, 0.2);
var clientTween = new TweenMax.staggerFromTo('#home .clients .row > div', 0.25, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeOut}, 0.1);
var workTween = new TweenMax.staggerFromTo('#home .single-work', 1, {opacity:0}, {opacity:1,ease:Power4.easeInOut}, 0.1);
var newsTween = new TweenMax.staggerFromTo('#home .single-news', 0.75, {opacity:0}, {opacity:1,ease:Power4.easeInOut}, 0.1);
var carreersTween = new TweenMax.fromTo('#home .carreers .light-btn', 0.25, {opacity:0,scale:0.6}, {opacity:1,scale:1,ease:Elastic.easeInOut});

var introScene = new ScrollMagic.Scene({triggerElement: "#home .intro"})
    .addTo(controller)
    .setTween(introTween);
    
var showreelScene = new ScrollMagic.Scene({triggerElement: "#home .showreel"})
    .addTo(controller)
    .setTween(showreelTween);
    
var clientsScene = new ScrollMagic.Scene({triggerElement: "#home .clients", triggerHook: 'onEnter', offset: 200})
    .addTo(controller)
    .setTween(clientTween);
    
var workScene = new ScrollMagic.Scene({triggerElement: "#home .single-work", triggerHook: 'onEnter', offset: 150})
    .addTo(controller)
    .setTween(workTween);
    
var newsScene = new ScrollMagic.Scene({triggerElement: "#home .news", triggerHook: 'onEnter', offset: 150})
    .addTo(controller)
    .setTween(newsTween);
    
var carreersScene = new ScrollMagic.Scene({triggerElement: "#home .carreers p"})
    .addTo(controller)
    .setTween(carreersTween);