var glitchTexts = [];
var possibleChar = ['!', '@', '#', '$', '%', '&', ')', '(', '_', '+', '?', '€', '®', '¿', '©'];
var glitchDuration = 70; // how long the effect should last (in miliseconds)
var check_time = true,
    check_time2 = false,
    check_time3 = false;
$('.layer-top a').hover(function() {
    check_time3 = false;
    var thsCursor = $(this);
    if(check_time === true && check_time2 === false) {
        check_time2 = true;
        var Text = $(this).text().trim();
        var Text1 = Text.split(' ');
        var ths=$(this);
        Text1.forEach(function (item) {
            var randChar = 100;
            var charArr = item.length;
            var numChar = Math.ceil(charArr / 100 * randChar);
            var indexOfChar = [];
            for (var i = 0; i < numChar; i++) {
                var a = Math.floor(Math.random() * charArr);
                while (indexOfChar.includes(a)) {
                    a = Math.floor(Math.random() * charArr);
                }
                indexOfChar[i] = a;
            }
            var itemSymbol = item.split("");
            var count = 0;
            var timerId = setInterval(function () {
                itemSymbol[indexOfChar[count]] = '<span>' + possibleChar[Math.floor(Math.random() * (possibleChar.length - 1))] + '</span>';
                ths.html(itemSymbol);
                if (check_time3 === true) {

                    ths.html(ths.attr('data-name'));
                    var count2 = 0;
                    var textData = ths.attr('data-name').trim().split('');
                    var timerId2=setInterval(function() {
                        itemSymbol[count2] = textData[count2];
                        ths.html(itemSymbol);

                        count2++;
                        if(count2 > textData.length) {
                            clearInterval(timerId2);
                        }
                    }, glitchDuration);
                    check_time = true;
                    check_time2 = false;
                    check_time3 = false;

                    clearTimeout(timerId);

                }
                count++;
                if (count > itemSymbol.length) {
                    count = 0;
                }


            }, glitchDuration);

        });
    }
}, function() {
});


$(document).on('mousemove', function (e) {
    if($(".layer-top").has(e.target).length === 0){
        check_time = true;
        check_time2 = false;
        check_time3 = true;
    }
});

var pathObjVk = {
    "pathAnimationVk": {
        "strokepath": [
            {
                "path": "M0 40 L 30 10 H 150",
                "duration": 250
            }
        ],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjInst = {
    "pathAnimationInst": {
        "strokepath": [
            {
                "path": "M0 40 L 30 10 H 150",
                "duration": 250
            }
        ],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjSp = {
    "pathAnimationSp": {
        "strokepath": [
            {
                "path": "M0 40 L 30 10 H 95",
                "duration": 150
            }
        ],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjTw = {
    "pathAnimationTw": {
        "strokepath": [
            {
                "path": "M0 40 L 30 10 H 120",
                "duration": 150
            }
        ],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjFb = {
    "pathAnimationFb": {
        "strokepath": [
            {
                "path": "M0 40 L 30 10 H 135",
                "duration": 120
            }
        ],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjBlog = {
    "pathAnimationBlog": {
        "strokepath": [
            {
                "path": "M0 40 L 30 10 H 95",
                "duration": 150
            }
        ],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjFAQ = {
    "pathAnimationFAQ": {
        "strokepath": [
            {
                "path": "M0 40 L 30 10 H 155",
                "duration": 180
            }
        ],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjVac = {
    "pathAnimationVac": {
        "strokepath": [
            {
                "path": "M0 40 L 30 10 H 125",
                "duration": 180
            }
        ],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};


$('.vk-hover').hover(function() {
    $('.vk-hover .hover__social p').text('');
    $('#pathAnimationVk').lazylinepainter(
        {
            "svgData": pathObjVk,
            "strokeWidth": 1,
            "strokeColor": "#ffffff"
        }).lazylinepainter('paint');

    $(function(){
        $('.vk-hover .hover__social p').text('');
        var text = $('.vk-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j=0;
        var itemText = '';
        setInterval(function(){
            if(j<text1.length){
                itemText += text1[j];
                $('.vk-hover .hover__social p').text(itemText);
                j++;
            }
            else {
                itemText = '';
            }
        },25);
    });
});

$('.insta-hover').hover(function() {
    $('.insta-hover .hover__social p').text('');
    $('#pathAnimationInst').lazylinepainter(
        {
            "svgData": pathObjInst,
            "strokeWidth": 1,
            "strokeColor": "#ffffff"
        }).lazylinepainter('paint');

    $(function(){
        $('.insta-hover .hover__social p').text('');
        var text = $('.insta-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j=0;
        var itemText = '';
        setInterval(function(){
            if(j<text1.length){
                itemText += text1[j];
                $('.insta-hover .hover__social p').text(itemText);
                j++;
            }
            else {
                itemText = '';
            }
        },25);
    });
});


$('.spark-hover').hover(function() {
    $('.spark-hover .hover__social p').text('');
    $('#pathAnimationSp').lazylinepainter(
        {
            "svgData": pathObjSp,
            "strokeWidth": 1,
            "strokeColor": "#ffffff"
        }).lazylinepainter('paint');

    $(function(){
        $('.spark-hover .hover__social p').text('');
        var text = $('.spark-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j=0;
        var itemText = '';
        setInterval(function(){
            if(j<text1.length){
                itemText += text1[j];
                $('.spark-hover .hover__social p').text(itemText);
                j++;
            }
            else {
                itemText = '';
            }
        },25);
    });
});

$('.tw-hover').hover(function() {
    $('.tw-hover .hover__social p').text('');
    $('#pathAnimationTw').lazylinepainter(
        {
            "svgData": pathObjTw,
            "strokeWidth": 1,
            "strokeColor": "#ffffff"
        }).lazylinepainter('paint');

    $(function(){
        $('.tw-hover .hover__social p').text('');
        var text = $('.tw-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j=0;
        var itemText = '';
        setInterval(function(){
            if(j<text1.length){
                itemText += text1[j];
                $('.tw-hover .hover__social p').text(itemText);
                j++;
            }
            else {
                itemText = '';
            }
        },25);
    });
});

$('.fb-hover').hover(function() {
    $('.fb-hover .hover__social p').text('');
    $('#pathAnimationFb').lazylinepainter(
        {
            "svgData": pathObjFb,
            "strokeWidth": 1,
            "strokeColor": "#ffffff"
        }).lazylinepainter('paint');

    $(function(){
        $('.fb-hover .hover__social p').text('');
        var text = $('.fb-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j=0;
        var itemText = '';
        setInterval(function(){
            if(j<text1.length){
                itemText += text1[j];
                $('.fb-hover .hover__social p').text(itemText);
                j++;
            }
            else {
                itemText = '';
            }
        },25);
    });
});

$('.blog-hover').hover(function() {
    $('.blog-hover .hover__social p').text('');
    $('#pathAnimationBlog').lazylinepainter(
        {
            "svgData": pathObjBlog,
            "strokeWidth": 1,
            "strokeColor": "#ffffff"
        }).lazylinepainter('paint');

    $(function(){
        $('.blog-hover .hover__social p').text('');
        var text = $('.blog-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j=0;
        var itemText = '';
        setInterval(function(){
            if(j<text1.length){
                itemText += text1[j];
                $('.blog-hover .hover__social p').text(itemText);
                j++;
            }
            else {
                itemText = '';
            }
        },25);
    });
});

$('.faq-hover').hover(function() {
    $('.faq-hover .hover__social p').text('');
    $('#pathAnimationFAQ').lazylinepainter(
        {
            "svgData": pathObjFAQ,
            "strokeWidth": 1,
            "strokeColor": "#ffffff"
        }).lazylinepainter('paint');

    $(function(){
        $('.faq-hover .hover__social p').text('');
        var text = $('.faq-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j=0;
        var itemText = '';
        setInterval(function(){
            if(j<text1.length){
                itemText += text1[j];
                $('.faq-hover .hover__social p').text(itemText);
                j++;
            }
            else {
                itemText = '';
            }
        },25);
    });
});

$('.vacancies-hover').hover(function() {
    $('.vacancies-hover .hover__social p').text('');
    $('#pathAnimationVac').lazylinepainter(
        {
            "svgData": pathObjVac,
            "strokeWidth": 1,
            "strokeColor": "#ffffff"
        }).lazylinepainter('paint');

    $(function(){
        $('.vacancies-hover .hover__social p').text('');
        var text = $('.vacancies-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j=0;
        var itemText = '';
        setInterval(function(){
            if(j<text1.length){
                itemText += text1[j];
                $('.vacancies-hover .hover__social p').text(itemText);
                j++;
            }
            else {
                itemText = '';
            }
        },25);
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(function(){
    if($('.TAURUS').hasClass('glitch2')){
        $('.TAURUS').removeClass('glitch2');
    } else {
        $('.TAURUS').addClass('glitch2');
    }
},getRandomInt(2000, 15000));

setInterval(function(){
    if($('.logo__title__taurus').hasClass('glitch-img')){
        $('.logo__title__taurus').removeClass('glitch-img');
    } else {
        $('.logo__title__taurus').addClass('glitch-img');
    }
},getRandomInt(500, 7000));



