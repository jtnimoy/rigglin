
'use strict';

goog.provide('Blockly.JavaScript.p5');
goog.require('Blockly.JavaScript');


Blockly.JavaScript['p5_createCanvas'] = function(block) {
    var value_width = Blockly.JavaScript.valueToCode(block,'width',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_height = Blockly.JavaScript.valueToCode(block,'height',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code =
	'P5.createCanvas('+ value_width + ',' + value_height + ');\n' +
	'onresize();\n'; // force the layout to go again
    return code;
    
};


Blockly.JavaScript['p5_background'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    console.log( value_color );
    var code = 'P5.background(' + value_color +  ');\n';
    console.log( code );
    return code;
};



Blockly.JavaScript['p5_stroke'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    var code = 'P5.stroke('+ value_color +');\n';
    return code;
};

Blockly.JavaScript['p5_fill'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    var code = 'P5.fill('+ value_color +');\n';
    return code;
};




Blockly.JavaScript['p5_point'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block,'x',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block,'y',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.point('
	+ value_x + ','
	+ value_y + ');\n';
    return code;
    
};



Blockly.JavaScript['p5_line'] = function(block) {
    var value_x1 = Blockly.JavaScript.valueToCode(block,'x1',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y1 = Blockly.JavaScript.valueToCode(block,'y1',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x2 = Blockly.JavaScript.valueToCode(block,'x2',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y2 = Blockly.JavaScript.valueToCode(block,'y2',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.line('
	+ value_x1 + ','
	+ value_y1 + ','
	+ value_x2 + ','
	+ value_y2 + ');\n';
    
    return code;
};



Blockly.JavaScript['p5_rect'] = function(block) {
    
    var v1 = Blockly.JavaScript.valueToCode(block,'x',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var v2 = Blockly.JavaScript.valueToCode(block,'y',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var v3 = Blockly.JavaScript.valueToCode(block,'width',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var v4 = Blockly.JavaScript.valueToCode(block,'height',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.rect('
	+ v1 + ','
	+ v2 + ','
	+ v3 + ','
	+ v4 + ');\n';
    
    return code;
};



Blockly.JavaScript['p5_width'] = function(block) {
    var code = 'P5.width';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_height'] = function(block) {
    var code = 'P5.height';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_frameCount'] = function(block) {
    var code = 'P5.frameCount';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_mouseX'] = function(block) {
    var code = 'P5.mouseX';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_mouseY'] = function(block) {
    var code = 'P5.mouseY';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_pmouseX'] = function(block) {
    var code = 'P5.pmouseX';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_pmouseY'] = function(block) {
    var code = 'P5.pmouseY';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_setup'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'P5.setup = function() {\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_draw'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'P5.draw = function() {\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_dist'] = function(block) {
    var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.dist('
	+ value_x1 + ','
	+ value_y1 + ','
	+ value_x2 + ','
	+ value_y2
	+ ')';
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['p5_createvector'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.createVector('
	+ value_x + ','
	+ value_y + ','
	+ value_z +')';
    
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_vector_get'] = function(block) {
  var dropdown_varname = block.getFieldValue('varname');
  var value_that = Blockly.JavaScript.valueToCode(block, 'that', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_that + '.' + dropdown_varname;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_text'] = function(block) {
  var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.text(' + value_string + ',' + value_x + ',' + value_y + ')';
    return code;
};

Blockly.JavaScript['p5_loadfont'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);

    console.log(value_url);
    var code;
    if(value_url){
	code = 'P5.loadFont(' + value_url + ')';
    }else{
	code = 'P5.loadFont("' + dropdown_name + '")';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['p5_textfont'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
  // TODO: Assemble JavaScript into code variable.
    var code = 'P5.textFont('+value_name+');\n';
    console.log(code);
    console.log(value_name);
  return code;
};




Blockly.JavaScript['p5_textalign'] = function(block) {
    var dropdown_horizalign = block.getFieldValue('horizAlign');
    var dropdown_vertalign = block.getFieldValue('vertAlign');
    // TODO: Assemble JavaScript into code variable.
    var code = 'P5.textAlign('+dropdown_horizalign+','+dropdown_vertalign+');\n';
    console.log(code);
    return code;
};



Blockly.JavaScript['p5_textleading'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    var code = 'P5.textLeading(' + value_name + ');\n';
  return code;
};


Blockly.JavaScript['p5_textsize'] = function(block) {
  var text_size = block.getFieldValue('size');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'P5.textSize('+value_name+');\n';
  return code;
};
