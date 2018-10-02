(function($) {

    var $body = $('body'),
        $plant = $('#plant'),
        path = [{x:-30, y:80},{x:-30, y:-180},{x:-30, y:50}],
        $stemMask = $('#stemmask'),
        $h1 = $('h1'),
        $leafInsideMask01 = $('#leaf1insideMask'),
        $leafInsideMask02 = $('#leaf2insideMask'),
        $leafInsideMask03 = $('#leaf3insideMask'),
        $leafInsideMask04 = $('#leaf4insideMask'),
        $leafInsideMask05 = $('#leaf5insideMask'),
        $leafInsideMask06 = $('#leaf6insideMask'),
        $stage = $('#stage'),
        $MainMask = $('#MainMask'),
        $girl = $('#girl'),
        $smile = $('#smile'),
        $lips = $('#lips'),
        $lefteye = $('#lefteye'),
        $righteye = $('#righteye'),
        $eyeballLeft = $('#eyeball-left'),
        $eyeballRight = $('#eyeball-right'),
        $head = $('#head'),
        $vase = $('#vase'),
        $circle = $('#circle'),
        $enter = $('#enter'),

        mainTl = new TimelineMax();


    function clearStage(){
        var clearTl = new TimelineMax();

        clearTl
            .set($plant, {x:50, y:80,scale: 0.5, transformOrigin: 'center center'})
            .set($girl, {autoAlpha: 1, x: '1400%', scale: 1.3, transformOrigin: 'bottom center'})
            .set($stage, {y: 150, scale:1, autoAlpha:0})
            .set($vase, {x: -30, scale:1.5, autoAlpha:0})
            .set($enter, {autoAlpha:0})
            .set($MainMask, {attr: {x: 1458}})


            //leaf
            .set($leafInsideMask01, {attr: {y: 730, rotation: 30}})
            .set($leafInsideMask02, {attr: {y: 696}})
            .set($leafInsideMask03, {attr: {y: 605}})
            .set($leafInsideMask04, {attr: {y: 560}})
            .set($leafInsideMask05, {attr: {y: 475}})
            .set($leafInsideMask06, {attr: {y: 438}})
            .set($stemMask, {attr: {y: 750, rotation:30}})
            ;


        return clearTl;
    }

    function getIntroTl(){
        var introTL = new TimelineMax();

        introTL
            .set($h1, {y: '-=100px'})
            .to($girl, 0.8, {x: '40%', ease: Power4.easeInOut})
            .fromTo($h1, 0.5, {x: '-46%', autoAlpha: 0}, {x: '-80%', autoAlpha: 1})
            .fromTo($smile, 0.4, {scaleX: 0.7, transformOrigin: 'center center'}, {scaleX: 1, ease: Power4.easeInOut})
            .fromTo($lips, 0.4, {scaleX: 0.6, transformOrigin: 'center center'}, {scaleX: 1, ease: Power4.easeInOut}, '-=0.4')
            .fromTo($lefteye, 0.4, {y: '-1px', transformOrigin: 'center center'}, { y: '2px', ease: Power4.easeInOut}, '-=0.4')
            .fromTo($righteye, 0.4, {y: '-1px', transformOrigin: 'center center'}, { y: '2px', ease: Power4.easeInOut}, '-=0.4')
            .fromTo($eyeballLeft, 0.4, {scaleY: 1, transformOrigin: 'center center'}, { scaleY: 0.8, ease: Power4.easeInOut}, '-=0.4')
            .fromTo($eyeballRight, 0.4, {scaleY: 1, transformOrigin: 'center center'}, { scaleY: 0.8, ease: Power4.easeInOut}, '-=0.4')
            .fromTo($head, 0.4, {rotation: 0, transformOrigin: '60% 65%'}, { rotation: 3, ease: Power4.easeInOut}, '-=0.4')
            .add('zoom-out')
            .to($girl, 1, {x: '0%', scale:1, ease: Power4.easeInOut}, 'zoom-out+=1')
            .to($h1, 0.5, {autoAlpha: 0}, 'zoom-out+=1')
            .to($MainMask, 1, {attr: {x:831}, ease: Power4.easeInOut}, 'zoom-out+=1')
            .set($body, {className: '+=is-active'}, 'zoom-out+=1')
            .set($h1, {y:'-=100px', x:'+=250px', text: "I'm a freelance designer."})
            .fromTo($head, 0.4, {rotation: 0, transformOrigin: '60% 65%'}, { rotation: -1, ease: Power4.easeInOut}, '-=0.4')
            .add('text-in')
            .to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut}, 'text-in')
            .to($h1, 0.2, {y: '+=20px', autoAlpha: 0, ease:Power4.easeInOut}, '+=1.5')
            .set($h1, {y:'-=10px', x:'-=100px', text: 'For me,'})
            .to($h1, 0.3, {y: '-=20px', autoAlpha: 1, ease:Power4.easeInOut})
            .to($h1, 0.2, {y: '+=20px', autoAlpha: 0, ease:Power4.easeInOut}, '+=1')
            .set($h1, {y:'-=10px', x:'+=60px', text: 'design is everything.'})
            .to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut})
            .to($h1, 0.2, {y: '+=20px', autoAlpha: 0, ease:Power4.easeInOut}, '+=1')
            .to($stage, 0.2, {scale: 2, autoAlpha: 1, transformOrigin: 'bottom center', ease: Power0.none}, '-=0.2')

            .to($vase, 1, {bezier:{curviness: 1, values: path}, ease: SlowMo.ease.config(0.3, 0.4, false), autoAlpha:1})
            .to($circle, 1, {scale: 0, autoAlpha:0, transformOrigin: 'bottom center', ease: Power4.easeInOut}, '-=1')
            .to($enter, 0.4, {autoAlpha: 1, ease: Power0.easeInOut}, '-=0.2')



            ;


        return introTL;
    }

    function getFillLeafTl(){
        var fillLeafTL = new TimelineMax();

        // Get path length
        fillLeafTL
            .to($stemMask, 2, {attr: {y:300}, ease:Power0.easeNone}, 'vase')
            .to($leafInsideMask01, 2, {attr: {y:600}, ease:Power0.easeNone}, '-=2')
            ;

        return fillLeafTL;
    }

    function init(){
        mainTl
            .add(clearStage())
            .add(getIntroTl(), 'scene-intro')
            .add(getFillLeafTl(), 'fillLeaf');
    }
    init();

})(jQuery);
