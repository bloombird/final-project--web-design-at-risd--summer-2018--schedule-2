(function($) {

    var $plant = $('#plant'),
        $stem = $('#stemmask'),
        $leafInsideMask01 = $('#leaf1insideMask'),
        $leafInsideMask02 = $('#leaf2insideMask'),
        $leafInsideMask03 = $('#leaf3insideMask'),
        $leafInsideMask04 = $('#leaf4insideMask'),
        $leafInsideMask05 = $('#leaf5insideMask'),
        $leafInsideMask06 = $('#leaf6insideMask'),
        mainTl = new TimelineMax();


    function clearStage(){
        var clearTl = new TimelineMax();

        clearTl
            .set($plant, {x:0, y:80,cscale: 0.5, transformOrigin: 'center center'})
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

    function init(){
        mainTl.add(clearStage());
    }
    init();

})(jQuery);
