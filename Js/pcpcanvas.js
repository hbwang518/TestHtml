var globalClickOne = 0;
var globalClickTwo = 0;

$(function () {
    for (var i = 0; i < 20; i++) {
        var x = 45 + (20 * i);
        var y = 200;
        var width = 14;
        var height = -10 - (7 * i);
        var outColor = '#6c0';
        var overColor = '#999999';
        var outStrokeStyle = '#c33';
        var outStokeWidth = 2;
        var overStrokeStyle = '#c66';
        var overStokeWidth = 2;
        drawRect(i, outColor, overColor, x, y, width, height, outStrokeStyle, outStokeWidth, overStrokeStyle, overStokeWidth);
        
    };
});

function drawRect(index, outColor, overColor, x, y, width, height, outStrokeStyle, outStokeWidth, overStrokeStyle, overStokeWidth) {
    $('canvas').drawRect({
        layer: true,
        fromCenter: false,
        fillStyle: outColor,
        strokeStyle: outStrokeStyle,
        strokeWidth: outStokeWidth,
        x: x, y: y,
        width: width, height: height,
        mouseover: function (layer) {
            mouseoverChangeColor(index, outColor, overColor, x, y, width, height, outStrokeStyle, outStokeWidth, overStrokeStyle, overStokeWidth);
        }
    });
}

function mouseoverChangeColor(index, outColor, overcolor, x, y, width, height, outStrokeStyle, outStokeWidth, overStrokeStyle, overStokeWidth) {
    drawImage(x, y, height);
    $('canvas').drawRect({
        layer: true,
        fromCenter: false,
        fillStyle: overcolor,
        strokeStyle: overStrokeStyle,
        strokeWidth: overStokeWidth,
        x: x, y: y,
        width: width, height: height,
        mouseout: function (layer) {
            mouseoutChangeColor(index, outColor, overcolor, x, y, width, height, outStrokeStyle, outStokeWidth, overStrokeStyle, overStokeWidth);
        },
        click: function (layer) {
            alert("abc");
        }
    })
}

function mouseoutChangeColor(index, outColor, overcolor, x, y, width, height, outStrokeStyle, outStokeWidth, overStrokeStyle, overStokeWidth) {
    $('canvas').drawRect({
        layer: true,
        fromCenter: false,
        fillStyle: outColor,
        strokeStyle: outStrokeStyle,
        strokeWidth: outStokeWidth,
        x: x, y: y,
        width: width, height: height,
        mouseover: function (layer) {
            mouseoverChangeColor(index, outColor, overcolor, x, y, width, height, outStrokeStyle, outStokeWidth, overStrokeStyle, overStokeWidth);
        },
        click: function (layer) {
            alert("abc");
        }
    })
}

function changeColor(color, nextColor) {
    $('canvas').drawRect({
        layer: true,
        fillStyle: color,
        x: 100, y: 100,
        width: 100, height: 80,
        click: function (layer) {
            changeColor(nextColor, color);
        }
    })
}

function drawImage(x, y, height) {
    $('canvas').drawImage({
        source: 'image/arrow2.png',
        x: x+2, y: -50 + y + height,
        width: 10,
        height: 50,
        fromCenter: false
    });
}

function drawImage1(x, y, height) {
    $('canvas').drawImage({
        layer: true,
        source: 'image/arrow1.png',
        x: x + 2, y: -50 + y + height,
        width: 10,
        height: 50,
        fromCenter: false
    });
}