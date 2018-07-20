(function($) {

    var $plant = $('#plant'),
        $stem = $('#stemmask'),
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

        mainTl = new TimelineMax();


    function clearStage(){
        var clearTl = new TimelineMax();

        clearTl
            .set($plant, {x:50, y:80,cscale: 0.5, transformOrigin: 'center center'})
            .set($girl, {autoAlpha: 1, x: '1400%', scale: 1.3, transformOrigin: 'bottom center'})
            .set($stage, {autoAlpha:0.5})
            .set($MainMask, {attr: {x: 1458}})

            //leaf
            .set($leafInsideMask01, {attr: {y: 730}})
            .set($leafInsideMask02, {attr: {y: 696}})
            .set($leafInsideMask03, {attr: {y: 605}})
            .set($leafInsideMask04, {attr: {y: 560}})
            .set($leafInsideMask05, {attr: {y: 475}})
            .set($leafInsideMask06, {attr: {y: 438}})
            .set($stem, {attr: {y: 750}})
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
            ;


        return introTL;
    }

    function init(){
        mainTl
            .add(clearStage())
            .add(getIntroTl(), 'scene-intro');
    }
    init();

})(jQuery);
