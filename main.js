/**
 * Created by andreykastelmacher on 24/08/17.
 */

$(document).ready(function(){
    'use strict';
     paper.install(window);
     paper.setup(document.getElementById('mainCanvas'));



    var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50)
        { c = Shape.Circle(x, y, 20); c.fillColor = 'black';

        }
    }

    var c = Shape.Circle(200, 200, 80); c.fillColor = 'black';
    var text = new PointText(200, 205); text.justification = 'center'; text.fillColor = 'white'; text.fontSize = 20;
    text.content = 'hello world';

    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 15); c.fillColor = 'green';
    };

     console.log('main.js loaded');




});


