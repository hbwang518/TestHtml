var globalClickOne = 0;
var globalClickTwo = 0;

$(function () {
    $('canvas').drawRect({
        layer: true,
        visible: true,
        fillStyle: '#585',
        x: 100, y: 100,
        width: 100, height: 50,
        click: function (layer) {
            alert("abc");
        },
        mouseover: function (layer) {
            $('canvas').setLayer(layer, {
                fillStyle: '#36b'

            }).drawLayers();
        },
        mouseout: function (layer) {
            $('canvas').setLayer(layer, {
                fillStyle: '#585'
            }).drawLayers();
        }
    });

    $('canvas').drawText({
        layer: true,
        fillStyle: 'red',
        strokeStyle: '#25a',
        strokeWidth: 2,
        x: 100, y: 100,
        fontSize: 48,
        fontFamily: 'Verdana, sans-serif',
        text: 'Hello',
        rotate: -90
    });
});

