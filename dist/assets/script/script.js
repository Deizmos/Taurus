'use strict';

if (document.getElementById('pic') !== undefined) {
    var R = function R(max, min) {
        return Math.random() * (max - min) + min;
    };

    var Pic = document.getElementById('pic').cloneNode();
    document.getElementById('container').appendChild(Pic);
    var line = document.createElement('div');line.className = 'line';
    document.getElementById('container').appendChild(line);

    var tl = new TimelineMax({ repeat: -1 });

    for (var i = 50; i--;) {
        tl.to(Pic, R(0.03, 0.17), { opacity: R(0, 0.1), y: R(-1.5, 1.5) });
    };

    tl.to(line, tl.duration(), { opacity: R(0.1, 0.15), x: R(0, 800), ease: RoughEase.ease.config({ strength: 0.5, points: 10, randomize: true, taper: "none" }), repeat: 1, yoyo: true }, 0);

    ;

    //

    var noise = function noise() {
        var canvas = void 0,
            ctx = void 0;

        var wWidth = void 0,
            wHeight = void 0;

        var noiseData = [];
        var frame = 0;

        var loopTimeout = void 0;

        // Create Noise
        var createNoise = function createNoise() {
            var idata = ctx.createImageData(wWidth, wHeight);
            var buffer32 = new Uint32Array(idata.data.buffer);
            var len = buffer32.length;

            for (var _i = 0; _i < len; _i++) {
                if (Math.random() < 0.5) {
                    buffer32[_i] = 0xff000000;
                }
            }

            noiseData.push(idata);
        };

        // Play Noise
        var paintNoise = function paintNoise() {
            if (frame === 9) {
                frame = 0;
            } else {
                frame++;
            }

            ctx.putImageData(noiseData[frame], 0, 0);
        };

        // Loop
        var loop = function loop() {
            paintNoise(frame);

            loopTimeout = window.setTimeout(function () {
                window.requestAnimationFrame(loop);
            }, 1000 / 25);
        };

        // Setup
        var setup = function setup() {
            wWidth = window.innerWidth;
            wHeight = window.innerHeight;

            canvas.width = wWidth;
            canvas.height = wHeight;

            for (var _i2 = 0; _i2 < 10; _i2++) {
                createNoise();
            }

            loop();
        };

        // Reset
        var resizeThrottle = void 0;
        var reset = function reset() {
            window.addEventListener('resize', function () {
                window.clearTimeout(resizeThrottle);

                resizeThrottle = window.setTimeout(function () {
                    window.clearTimeout(loopTimeout);
                    setup();
                }, 200);
            }, false);
        };

        // Init
        var init = function () {
            canvas = document.getElementById('noise');
            ctx = canvas.getContext('2d');

            setup();
        }();
    };

    noise();
}
'use strict';

var $cursor = $('.cursor');

function moveCursor(e) {
    $cursor.addClass('is-moving');

    TweenLite.to($cursor, 0.10, {
        left: e.pageX,
        top: e.pageY,
        ease: Power4.easOut
    });

    clearTimeout(timer);

    var timer = setTimeout(function () {
        $cursor.removeClass('is-moving');
    }, 300);
}

$(window).on('mousemove', moveCursor);
'use strict';

var glitchTexts = [];
var possibleChar = ['!', '@', '#', '$', '%', '&', ')', '(', '_', '+', '?', '€', '®', '¿', '©'];
var glitchDuration = 70; // how long the effect should last (in miliseconds)
var check_time = true,
    check_time2 = false,
    check_time3 = false;
$('.layer-top a').hover(function () {
    check_time3 = false;
    var thsCursor = $(this);
    if (check_time === true && check_time2 === false) {
        check_time2 = true;
        var Text = $(this).text().trim();
        var Text1 = Text.split(' ');
        var ths = $(this);
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
                    var timerId2 = setInterval(function () {
                        itemSymbol[count2] = textData[count2];
                        ths.html(itemSymbol);

                        count2++;
                        if (count2 > textData.length) {
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
}, function () {});

$(document).on('mousemove', function (e) {
    if ($(".layer-top").has(e.target).length === 0) {
        check_time = true;
        check_time2 = false;
        check_time3 = true;
    }
});

var pathObjVk = {
    "pathAnimationVk": {
        "strokepath": [{
            "path": "M0 40 L 30 10 H 150",
            "duration": 250
        }],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjInst = {
    "pathAnimationInst": {
        "strokepath": [{
            "path": "M0 40 L 30 10 H 150",
            "duration": 250
        }],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjSp = {
    "pathAnimationSp": {
        "strokepath": [{
            "path": "M0 40 L 30 10 H 95",
            "duration": 150
        }],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjTw = {
    "pathAnimationTw": {
        "strokepath": [{
            "path": "M0 40 L 30 10 H 120",
            "duration": 150
        }],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjFb = {
    "pathAnimationFb": {
        "strokepath": [{
            "path": "M0 40 L 30 10 H 135",
            "duration": 120
        }],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjBlog = {
    "pathAnimationBlog": {
        "strokepath": [{
            "path": "M0 40 L 30 10 H 95",
            "duration": 150
        }],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjFAQ = {
    "pathAnimationFAQ": {
        "strokepath": [{
            "path": "M0 40 L 30 10 H 155",
            "duration": 180
        }],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

var pathObjVac = {
    "pathAnimationVac": {
        "strokepath": [{
            "path": "M0 40 L 30 10 H 125",
            "duration": 180
        }],
        "dimensions": {
            "width": 180,
            "height": 30
        }
    }
};

$('.vk-hover').hover(function () {
    $('.vk-hover .hover__social p').text('');
    $('#pathAnimationVk').lazylinepainter({
        "svgData": pathObjVk,
        "strokeWidth": 1,
        "strokeColor": "#ffffff"
    }).lazylinepainter('paint');

    $(function () {
        $('.vk-hover .hover__social p').text('');
        var text = $('.vk-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j = 0;
        var itemText = '';
        setInterval(function () {
            if (j < text1.length) {
                itemText += text1[j];
                $('.vk-hover .hover__social p').text(itemText);
                j++;
            } else {
                itemText = '';
            }
        }, 25);
    });
});

$('.insta-hover').hover(function () {
    $('.insta-hover .hover__social p').text('');
    $('#pathAnimationInst').lazylinepainter({
        "svgData": pathObjInst,
        "strokeWidth": 1,
        "strokeColor": "#ffffff"
    }).lazylinepainter('paint');

    $(function () {
        $('.insta-hover .hover__social p').text('');
        var text = $('.insta-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j = 0;
        var itemText = '';
        setInterval(function () {
            if (j < text1.length) {
                itemText += text1[j];
                $('.insta-hover .hover__social p').text(itemText);
                j++;
            } else {
                itemText = '';
            }
        }, 25);
    });
});

$('.spark-hover').hover(function () {
    $('.spark-hover .hover__social p').text('');
    $('#pathAnimationSp').lazylinepainter({
        "svgData": pathObjSp,
        "strokeWidth": 1,
        "strokeColor": "#ffffff"
    }).lazylinepainter('paint');

    $(function () {
        $('.spark-hover .hover__social p').text('');
        var text = $('.spark-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j = 0;
        var itemText = '';
        setInterval(function () {
            if (j < text1.length) {
                itemText += text1[j];
                $('.spark-hover .hover__social p').text(itemText);
                j++;
            } else {
                itemText = '';
            }
        }, 25);
    });
});

$('.tw-hover').hover(function () {
    $('.tw-hover .hover__social p').text('');
    $('#pathAnimationTw').lazylinepainter({
        "svgData": pathObjTw,
        "strokeWidth": 1,
        "strokeColor": "#ffffff"
    }).lazylinepainter('paint');

    $(function () {
        $('.tw-hover .hover__social p').text('');
        var text = $('.tw-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j = 0;
        var itemText = '';
        setInterval(function () {
            if (j < text1.length) {
                itemText += text1[j];
                $('.tw-hover .hover__social p').text(itemText);
                j++;
            } else {
                itemText = '';
            }
        }, 25);
    });
});

$('.fb-hover').hover(function () {
    $('.fb-hover .hover__social p').text('');
    $('#pathAnimationFb').lazylinepainter({
        "svgData": pathObjFb,
        "strokeWidth": 1,
        "strokeColor": "#ffffff"
    }).lazylinepainter('paint');

    $(function () {
        $('.fb-hover .hover__social p').text('');
        var text = $('.fb-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j = 0;
        var itemText = '';
        setInterval(function () {
            if (j < text1.length) {
                itemText += text1[j];
                $('.fb-hover .hover__social p').text(itemText);
                j++;
            } else {
                itemText = '';
            }
        }, 25);
    });
});

$('.blog-hover').hover(function () {
    $('.blog-hover .hover__social p').text('');
    $('#pathAnimationBlog').lazylinepainter({
        "svgData": pathObjBlog,
        "strokeWidth": 1,
        "strokeColor": "#ffffff"
    }).lazylinepainter('paint');

    $(function () {
        $('.blog-hover .hover__social p').text('');
        var text = $('.blog-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j = 0;
        var itemText = '';
        setInterval(function () {
            if (j < text1.length) {
                itemText += text1[j];
                $('.blog-hover .hover__social p').text(itemText);
                j++;
            } else {
                itemText = '';
            }
        }, 25);
    });
});

$('.faq-hover').hover(function () {
    $('.faq-hover .hover__social p').text('');
    $('#pathAnimationFAQ').lazylinepainter({
        "svgData": pathObjFAQ,
        "strokeWidth": 1,
        "strokeColor": "#ffffff"
    }).lazylinepainter('paint');

    $(function () {
        $('.faq-hover .hover__social p').text('');
        var text = $('.faq-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j = 0;
        var itemText = '';
        setInterval(function () {
            if (j < text1.length) {
                itemText += text1[j];
                $('.faq-hover .hover__social p').text(itemText);
                j++;
            } else {
                itemText = '';
            }
        }, 25);
    });
});

$('.vacancies-hover').hover(function () {
    $('.vacancies-hover .hover__social p').text('');
    $('#pathAnimationVac').lazylinepainter({
        "svgData": pathObjVac,
        "strokeWidth": 1,
        "strokeColor": "#ffffff"
    }).lazylinepainter('paint');

    $(function () {
        $('.vacancies-hover .hover__social p').text('');
        var text = $('.vacancies-hover .hover__social p').attr('data-text').trim();
        var text1 = text.trim().split('');
        var j = 0;
        var itemText = '';
        setInterval(function () {
            if (j < text1.length) {
                itemText += text1[j];
                $('.vacancies-hover .hover__social p').text(itemText);
                j++;
            } else {
                itemText = '';
            }
        }, 25);
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(function () {
    if ($('.TAURUS').hasClass('glitch2')) {
        $('.TAURUS').removeClass('glitch2');
    } else {
        $('.TAURUS').addClass('glitch2');
    }
}, getRandomInt(2000, 15000));

setInterval(function () {
    if ($('.logo__title__taurus').hasClass('glitch-img')) {
        $('.logo__title__taurus').removeClass('glitch-img');
    } else {
        $('.logo__title__taurus').addClass('glitch-img');
    }
}, getRandomInt(500, 7000));
//# sourceMappingURL=script.js.map
