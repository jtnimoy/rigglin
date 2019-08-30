'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.Constants.Colour.HUE = 20;

Blockly.defineBlocksWithJsonArray([


{
    "type": "p5_createCanvas",
    "message0": "createCanvas %1 width %2 height %3",
    "args0": [
	{
	    "type": "input_dummy"
	},
	{
	    "type": "input_value",
	    "name": "width",
	    "check": "Number",
	    "align": "RIGHT"
	},
	{
	    "type": "input_value",
	    "name": "height",
	    "check": "Number",
	    "align": "RIGHT"
	}
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "create a canvas",
    "helpUrl": "call this function to create a processing canvas"
}
    ,
    

{
  "type": "p5_background",
  "message0": "background %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
      "check": "Colour"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "clear canvas with color",
  "helpUrl": "clear canvas with color"
}    ,
    

{
  "type": "p5_point",
  "message0": "point %1 x %2 y %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "draw a point",
  "helpUrl": "call this function to draw a point"
}
    ,
    
{
    "type": "p5_line",
    "message0": "line %1 x1 %2 y1 %3 x2 %4 y2 %5",
    "args0": [
	{
	    "type": "input_dummy"
	},
	{
	    "type": "input_value",
	    "name": "x1",
	    "check": "Number",
	    "align": "RIGHT"
	},
	{
	    "type": "input_value",
	    "name": "y1",
	    "check": "Number",
	    "align": "RIGHT"
	},
	{
	    "type": "input_value",
	    "name": "x2",
	    "check": "Number",
	    "align": "RIGHT"
	},
	{
	    "type": "input_value",
	    "name": "y2",
	    "check": "Number",
	    "align": "RIGHT"
	}
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "draw a line",
    "helpUrl": "call this function to draw a line from x1,y1 to x2,y2"
}   
    ,
    {
	"type": "p5_width",
	"message0": "width",
	"output": null,
	"colour": 230,
	"tooltip": "width of canvas",
	"helpUrl": "width of canvas"
    }
    ,
    {
	"type": "p5_height",
	"message0": "height",
	"output": null,
	"colour": 230,
	"tooltip": "height of canvas",
	"helpUrl": "height of canvas"
    }
    
    ,
        {
	"type": "p5_frameCount",
	"message0": "frameCount",
	"output": null,
	"colour": 230,
	"tooltip": "number of frames since beginning of run",
	"helpUrl": "number of frames since beginning of run"
    }
    
    ,
        {
	"type": "p5_mouseX",
	"message0": "mouseX",
	"output": null,
	"colour": 230,
	"tooltip": "horizontal component of mouse position",
	"helpUrl": "horizontal component of mouse position"
    }
    
    ,
        {
	"type": "p5_mouseY",
	"message0": "mouseY",
	"output": null,
	"colour": 230,
	"tooltip": "vertical component of mouse position",
	"helpUrl": "vertical component of mouse position"
    }
    
    ,
        {
	"type": "p5_pmouseX",
	"message0": "pmouseX",
	"output": null,
	"colour": 230,
	"tooltip": "previous horizontal component of mouse position",
	"helpUrl": "previous horizontal component of mouse position"
    }
    
    ,
        {
	"type": "p5_pmouseY",
	"message0": "pmouseY",
	"output": null,
	"colour": 230,
	"tooltip": "previous vertical component of mouse position",
	"helpUrl": "previous vertical component of mouse position"
    }
    
    ,

    {
  "type": "p5_stroke",
  "message0": "stroke %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
      "check": "Colour"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "change stroke color",
  "helpUrl": "change stroke color"
}
    ,

 {
  "type": "p5_fill",
  "message0": "fill %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
      "check": "Colour"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "change fill color",
  "helpUrl": "change fill color"
 }

    ,

    {
	"type": "p5_setup",
	"message0": "setup %1 %2",
	"args0": [
	    {
		"type": "input_dummy"
	    },
	    {
		"type": "input_statement",
		"name": "NAME"
	    }
	],
	"colour": 230,
	"tooltip": "setup event",
	"helpUrl": "setup event"
    }
    
    ,
    {
	"type": "p5_draw",
	"message0": "draw %1 %2",
	"args0": [
	    {
		"type": "input_dummy"
	    },
	    {
		"type": "input_statement",
		"name": "NAME"
	    }
	],
	"colour": 230,
	"tooltip": "setup event",
	"helpUrl": "setup event"
    }
    
    ,
    {
  "type": "p5_rect",
  "message0": "rect %1 x %2 y %3 width %4 height %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "height",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "clear canvas with color",
  "helpUrl": "clear canvas with color"
    }
    
    
]);  // END JSON EXTRACT (Do not delete this comment.)
