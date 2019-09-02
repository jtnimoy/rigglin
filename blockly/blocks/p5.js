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
    
    ,

    {
  "type": "p5_dist",
  "message0": "dist %1 x1 %2 y1 %3 x2 %4 y2 %5",
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
  "output": "Number",
  "colour": 230,
  "tooltip": "calculate distance between two points",
  "helpUrl": "calculate distance between two points"
    }
    ,
    {
  "type": "p5_wantspvector",
  "message0": "wantspvector %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
	"check": "p5.Vector"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

    ,

    {
	"type": "p5_createvector",
	"message0": "createVector %1 x %2 y %3 z %4",
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
		"name": "z",
		"check": "Number",
		"align": "RIGHT"
	    }
	],
	"output": "p5.Vector",
	"colour": 230,
	"tooltip": "create a new PVector",
	"helpUrl": "create a new PVector"
    }


    ,

    {
  "type": "p5_vector_get",
  "message0": "get %1 %2 of p5.Vector %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "varname",
      "options": [
        [
          "x",
          "x"
        ],
        [
          "y",
          "y"
        ],
        [
          "z",
          "z"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "that",
      "check": "p5.Vector"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "get a component of a p5.Vector",
  "helpUrl": "get a component of a p5.Vector"
    }
    
    ,

    {
  "type": "p5_text",
  "message0": "text %1 string %2 x %3 y %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "string",
      "check": "String"
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
  "colour": 230,
  "tooltip": "render text on the canvas",
  "helpUrl": "render text on the canvas"
    }

    ,

{
  "type": "p5_loadfont",
  "message0": "loadFont %1 or URL %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "assets/inconsolata.otf",
          "assets/inconsolata.otf"
        ],
        [
          "assets/AbrilFatface-Regular.otf",
          "assets/AbrilFatface-Regular.otf"
        ],
        [
          "assets/Compagnon-Light.otf",
          "assets/Compagnon-Light.otf"
        ],
        [
          "assets/Compagnon-Roman.otf",
          "assets/Compagnon-Roman.otf"
        ],
        [
          "assets/D-DINCondensed-Bold.otf",
          "assets/D-DINCondensed-Bold.otf"
        ],
        [
          "assets/GlacialIndifference-Regular.otf",
          "assets/GlacialIndifference-Regular.otf"
        ],
        [
          "assets/VictorMono-Medium.otf",
          "assets/VictorMono-Medium.otf"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "output": "p5.Font",
  "colour": 230,
  "tooltip": "load a font file",
  "helpUrl": "load a font file"
}
    ,
    {
  "type": "p5_textfont",
  "message0": "textFont %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "p5.Font"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "change the font of the rendered text",
  "helpUrl": "change the font of the rendered text"
}
    ,

    {
  "type": "p5_textalign",
  "message0": "textAlign %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "horizAlign",
      "options": [
        [
          "LEFT",
          "LEFT"
        ],
        [
          "CENTER",
          "CENTER"
        ],
        [
          "RIGHT",
          "RIGHT"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "vertAlign",
      "options": [
        [
          "TOP",
          "TOP"
        ],
        [
          "BOTTOM",
          "BOTTOM"
        ],
        [
          "CENTER",
          "CENTER"
        ],
        [
          "BASELINE",
          "BASELINE"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

    ,

    {
  "type": "p5_textleading",
  "message0": "textLeading %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sets/gets the spacing, in pixels, between lines of text. This setting will be used in all subsequent calls to the text() function.",
  "helpUrl": "https://p5js.org/reference/#/p5/textLeading"
    }

    
    
]);  // END JSON EXTRACT (Do not delete this comment.)

