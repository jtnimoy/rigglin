
'use strict';

goog.provide('Blockly.JavaScript.p5');
goog.require('Blockly.JavaScript');


Blockly.JavaScript['p5_createCanvas'] = function(block) {
    var value_width = Blockly.JavaScript.valueToCode(block,'width',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_height = Blockly.JavaScript.valueToCode(block,'height',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code =
	'P5_WIDTH  = ' + value_width  + ';\n' + //record the globals
	'P5_HEIGHT = ' + value_height + ';\n' + 
	'P5.inject("sketch.createCanvas(" + '//inject as usual
	+ value_width + ' + "," +'
	+ value_height + ' + ");");\n' +
	'onresize();\n'; // force the layout to go again
    return code;
    
};


Blockly.JavaScript['p5_background'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    var code = 'P5.inject("sketch.background(\'"+'+ value_color +'+"\');");\n';
    return code;
};



Blockly.JavaScript['p5_stroke'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    var code = 'P5.inject("sketch.stroke(\'"+'+ value_color +'+"\');");\n';
    return code;
};

Blockly.JavaScript['p5_fill'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    var code = 'P5.inject("sketch.fill(\'"+'+ value_color +'+"\');");\n';
    return code;
};




Blockly.JavaScript['p5_point'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block,'x',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block,'y',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.inject("sketch.point(" + '
	+ value_x + ' + "," +'
	+ value_y + ' + ");");\n';
    return code;
    
};



Blockly.JavaScript['p5_line'] = function(block) {
    var value_x1 = Blockly.JavaScript.valueToCode(block,'x1',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y1 = Blockly.JavaScript.valueToCode(block,'y1',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x2 = Blockly.JavaScript.valueToCode(block,'x2',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y2 = Blockly.JavaScript.valueToCode(block,'y2',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.inject("sketch.line(" + '
	+ value_x1 + ' + "," +'
	+ value_y1 + ' + "," +'
	+ value_x2 + ' + "," +'
	+ value_y2 + ' + ");");\n';
    
    return code;
};



Blockly.JavaScript['p5_rect'] = function(block) {
    
    var v1 = Blockly.JavaScript.valueToCode(block,'x',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var v2 = Blockly.JavaScript.valueToCode(block,'y',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var v3 = Blockly.JavaScript.valueToCode(block,'width',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var v4 = Blockly.JavaScript.valueToCode(block,'height',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.inject("sketch.rect(" + '
	+ v1 + ' + "," +'
	+ v2 + ' + "," +'
	+ v3 + ' + "," +'
	+ v4 + ' + ");");\n';
    
    return code;
};



Blockly.JavaScript['p5_width'] = function(block) {
    var code = 'P5_WIDTH';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_height'] = function(block) {
    var code = 'P5_HEIGHT';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_frameCount'] = function(block) {
    var code = 'P5_FRAMECOUNT';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_mouseX'] = function(block) {
    var code = 'P5_MOUSEX';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_mouseY'] = function(block) {
    var code = 'P5_MOUSEY';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_pmouseX'] = function(block) {
    var code = 'P5_PMOUSEX';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_pmouseY'] = function(block) {
    var code = 'P5_PMOUSEY';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_setup'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'P5_handler_setup = function() {\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_draw'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'P5_handler_draw = function() {\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_dist'] = function(block) {
    var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);

    
    var functionName = Blockly.JavaScript.provideFunction_(
	'dist',
	['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(x1,y1,x2,y2) {',
         '  var xx = x1 - x2;',
	 '  var yy = y1 - y2;',
         '  return Math.sqrt(xx*xx+yy*yy);',
         '}']);
    
    var code = functionName + '('
	+ value_x1 + ','
	+ value_y1 + ','
	+ value_x2 + ','
	+ value_y2
	+ ')';
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    
    //var code = '...;\n';
    //return code;
};
