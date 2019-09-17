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
    "helpUrl": "https://p5js.org/reference/#/p5/createCanvas"
}
    ,
    

{
  "type": "p5_background",
  "message0": "background %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "clear canvas with color",
  "helpUrl": "https://p5js.org/reference/#/p5/background"
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
  "helpUrl": "https://p5js.org/reference/#/p5/point"
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
    "helpUrl": "https://p5js.org/reference/#/p5/line"
}   
    ,
    {
	"type": "p5_width",
	"message0": "width",
	"output": null,
	"colour": 230,
	"tooltip": "System variable that stores the width of the drawing canvas.",
	"helpUrl": "https://p5js.org/reference/#/p5/width"
    }
    ,
    {
	"type": "p5_height",
	"message0": "height",
	"output": null,
	"colour": 230,
	"tooltip": "System variable that stores the height of the drawing canvas.",
	"helpUrl": "https://p5js.org/reference/#/p5/height"
    }
    
    ,
    {
	"type": "p5_frameCount",
	"message0": "frameCount",
	"output": null,
	"colour": 230,
	"tooltip": "The system variable frameCount contains the number of frames that have been displayed since the program started.",
	"helpUrl": "https://p5js.org/reference/#/p5/frameCount"
    }
    
    ,
        {
	"type": "p5_mouseX",
	"message0": "mouseX",
	"output": null,
	"colour": 230,
	"tooltip": "The system variable mouseX always contains the current horizontal position of the mouse, relative to (0, 0) of the canvas.",
	"helpUrl": "https://p5js.org/reference/#/p5/mouseX"
    }
    
    ,
        {
	"type": "p5_mouseY",
	"message0": "mouseY",
	"output": null,
	"colour": 230,
	"tooltip": "The system variable mouseY always contains the current vertical position of the mouse, relative to (0, 0) of the canvas. ",
	"helpUrl": "https://p5js.org/reference/#/p5/mouseY"
    }
    
    ,
        {
	"type": "p5_pmouseX",
	"message0": "pmouseX",
	"output": null,
	"colour": 230,
	"tooltip": "The system variable pmouseX always contains the horizontal position of the mouse or finger in the frame previous to the current frame, relative to (0, 0) of the canvas.",
	"helpUrl": "https://p5js.org/reference/#/p5/pmouseX"
    }
    
    ,
    {
	"type": "p5_pmouseY",
	"message0": "pmouseY",
	"output": null,
	"colour": 230,
	"tooltip": "The system variable pmouseY always contains the vertical position of the mouse or finger in the frame previous to the current frame, relative to (0, 0) of the canvas.",
	"helpUrl": "https://p5js.org/reference/#/p5/pmouseY"
    }
    
    ,

    {
  "type": "p5_stroke",
  "message0": "stroke %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
	"tooltip": "Sets the color used to draw lines and borders around shapes.",
  "helpUrl": "https://p5js.org/reference/#/p5/stroke"
}
    ,

 {
  "type": "p5_fill",
  "message0": "fill %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
     "tooltip": "Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all shapes drawn after the fill command will be filled with the color orange.",
     "helpUrl": "https://p5js.org/reference/#/p5/fill"
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
	"tooltip": "The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. There can only be one setup() function for each program and it shouldn't be called again after its initial execution. ",
	"helpUrl": "https://p5js.org/reference/#/p5/setup"
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
	"tooltip": "Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called. Note if noLoop() is called in setup(), draw() will still be executed once before stopping. draw() is called automatically and should never be called explicitly. ",
	"helpUrl": "https://p5js.org/reference/#/p5/draw"
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
  "tooltip": "Draws a rectangle to the screen. A rectangle is a four-sided shape with every angle at ninety degrees. By default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height. The way these parameters are interpreted, however, may be changed with the rectMode() function. ",
  "helpUrl": "https://p5js.org/reference/#/p5/rect"
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
  "tooltip": "Calculates the distance between two points, in either two or three dimensions.",
  "helpUrl": "https://p5js.org/reference/#/p5/dist"
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
  "tooltip": "debug object",
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
	"tooltip": "Creates a new p5.Vector (the datatype for storing vectors). This provides a two or three dimensional vector, specifically a Euclidean (also known as geometric) vector. A vector is an entity that has both magnitude and direction.",
	"helpUrl": "https://p5js.org/reference/#/p5/createVector"
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
  "tooltip": "The x, y, or z component of the vector",
  "helpUrl": "https://p5js.org/reference/#/p5.Vector/x"
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
	"tooltip": "Draws text to the screen. Displays the information specified in the first parameter on the screen in the position specified by the additional parameters.",
  "helpUrl": "https://p5js.org/reference/#/p5/text"
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
  "tooltip": "Loads an opentype font file (.otf, .ttf) from a file or a URL, and returns a PFont Object. This method is asynchronous, meaning it may not finish before the next line in your sketch is executed.",
  "helpUrl": "https://p5js.org/reference/#/p5/loadFont"
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
  "tooltip": "Sets the current font that will be drawn with the text() function. ",
  "helpUrl": "https://p5js.org/reference/#/p5/textFont"
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
  "tooltip": "Sets the current alignment for drawing text.",
  "helpUrl": "https://p5js.org/reference/#/p5/textAlign"
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

    ,

    {
  "type": "p5_textsize",
  "message0": "textSize %1",
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
  "tooltip": "Sets/gets the current font size. This size will be used in all subsequent calls to the text() function. Font size is measured in pixels.",
  "helpUrl": "https://p5js.org/reference/#/p5/textSize"
    }
    ,

    {
  "type": "p5_set_textstyle",
  "message0": "textStyle %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "style",
      "options": [
        [
          "NORMAL",
          "NORMAL"
        ],
        [
          "ITALIC",
          "ITALIC"
        ],
        [
          "BOLD",
          "BOLD"
        ],
        [
          "BOLDITALIC",
          "BOLDITALIC"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sets/gets the style of the text for system fonts to NORMAL, ITALIC, BOLD or BOLDITALIC. Note: this may be is overridden by CSS styling. For non-system fonts (opentype, truetype, etc.) please load styled fonts instead.",
  "helpUrl": "https://p5js.org/reference/#/p5/textStyle"
    }
    ,
    {
  "type": "p5_get_textwidth",
  "message0": "textWidth %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "Calculates and returns the width of any character or text string.",
  "helpUrl": "https://p5js.org/reference/#/p5/textWidth"
}
    ,

    {
  "type": "p5_textascent",
  "message0": "textAscent",
  "output": "Number",
  "colour": 230,
  "tooltip": "Returns the ascent of the current font at its current size. The ascent represents the distance, in pixels, of the tallest character above the baseline.",
  "helpUrl": "https://p5js.org/reference/#/p5/textAscent"
    }

    ,

    {
  "type": "p5_textdescent",
  "message0": "textDescent",
  "output": "Number",
  "colour": 230,
  "tooltip": "Returns the descent of the current font at its current size. The descent represents the distance, in pixels, of the character with the longest descender below the baseline.",
  "helpUrl": "https://p5js.org/reference/#/p5/textDescent"
    }


    ,

{
  "type": "p5_font_textbounds",
  "message0": "textBounds %1 font %2 line %3 x %4 y %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "font",
      "check": "p5.Font",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "line",
      "check": "String",
      "align": "RIGHT"
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
  "output": null,
  "colour": 230,
  "tooltip": "Returns a tight bounding box for the given text string using this font (currently only supports single lines)",
  "helpUrl": "https://p5js.org/reference/#/p5.Font/textBounds"
}    

    ,

    {
  "type": "p5_font_texttopoints",
  "message0": "textToPoints %1 font %2 txt %3 x %4 y %5 fontsize %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "font",
      "check": "p5.Font",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "txt",
      "check": "String",
      "align": "RIGHT"
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
      "name": "fontsize",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Computes an array of points following the path for specified text",
  "helpUrl": "https://p5js.org/reference/#/p5.Font/textToPoints"
    }
    ,

    {
  "type": "p5_clear",
  "message0": "clear",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Clears the pixels within a buffer. This function only clears the canvas. ",
  "helpUrl": "https://p5js.org/reference/#/p5/clear"
    }
    ,

    {
  "type": "p5_colormode",
  "message0": "colorMode %1 with max %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "RGB",
          "RGB"
        ],
        [
          "HSB",
          "HSB"
        ],
        [
          "HSL",
          "HSL"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "mode",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "colorMode() changes the way p5.js interprets color data.",
  "helpUrl": "https://p5js.org/reference/#/p5/colorMode"
    }

    ,

    {
  "type": "p5_nofill",
  "message0": "noFill",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Disables filling geometry. If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
  "helpUrl": "https://p5js.org/reference/#/p5/noFill"
    }

    ,

    {
  "type": "p5_nostroke",
  "message0": "noStroke",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Disables drawing the stroke (outline). If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
  "helpUrl": "https://p5js.org/reference/#/p5/noStroke"
    }

    ,

    {
  "type": "p5_color",
  "message0": "color %1 a %2 b %3 c %4 d %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "a",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "c",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "d",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "p5.Color",
  "colour": 230,
  "tooltip": "Creates colors for storing in variables of the color datatype. ",
  "helpUrl": "https://p5js.org/reference/#/p5/color"
    }

    ,

    {
  "type": "p5_alpha",
  "message0": "alpha %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Extracts the alpha value from a color or pixel array.",
  "helpUrl": "https://p5js.org/reference/#/p5/alpha"
}
    ,

    {
  "type": "p5_blue",
  "message0": "blue %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Extracts the blue value from a color or pixel array.",
  "helpUrl": "https://p5js.org/reference/#/p5/blue"
    }

    ,

    {
  "type": "p5_brightness",
  "message0": "brightness %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Extracts the HSB brightness value from a color or pixel array.",
  "helpUrl": "https://p5js.org/reference/#/p5/brightness"
    }

    ,

    {
  "type": "p5_green",
  "message0": "green %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Extracts the green value from a color or pixel array.",
  "helpUrl": "https://p5js.org/reference/#/p5/green"
}
    ,

    {
  "type": "p5_hue",
  "message0": "hue %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Extracts the hue value from a color or pixel array.",
  "helpUrl": "https://p5js.org/reference/#/p5/hue"
    }

    ,

    {
  "type": "p5_lerpcolor",
  "message0": "lerpColor %1 color1 %2 color2 %3 amt %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "color1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color2",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "amt",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Blends two colors to find a third color somewhere between them.",
  "helpUrl": "https://p5js.org/reference/#/p5/lerpColor"
    }

    ,

    {
  "type": "p5_lightness",
  "message0": "lightness %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "Number: the lightness",
  "helpUrl": "https://p5js.org/reference/#/p5/lightness"
}


    ,

    {
  "type": "p5_red",
  "message0": "red %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "Extracts the red value from a color or pixel array.",
  "helpUrl": "https://p5js.org/reference/#/p5/red"
}

    ,

    {
  "type": "p5_saturation",
  "message0": "saturation %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "Extracts the saturation value from a color or pixel array.",
  "helpUrl": "https://p5js.org/reference/#/p5/saturation"
    }

    ,

    {
  "type": "p5_color_tostring",
  "message0": "color %1 toString with format %2",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
      "check": "p5.Color"
    },
    {
      "type": "input_value",
      "name": "format",
      "check": "String"
    }
  ],
	"inputsInline": true,
  "output": "String",
  "colour": 230,
  "tooltip": "This function returns the color formatted as a string. This can be useful for debugging, or for using p5.js with other libraries.",
  "helpUrl": "https://p5js.org/reference/#/p5.Color/toString"
    }
    ,

    {
  "type": "p5_color_set",
  "message0": "color %1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
      "check": "p5.Color"
    },
    {
      "type": "field_dropdown",
      "name": "func",
      "options": [
        [
          "setRed",
          "setRed"
        ],
        [
          "setGreen",
          "setGreen"
        ],
        [
          "setBlue",
          "setBlue"
        ],
        [
          "setAlpha",
          "setAlpha"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "set a color channel to a value",
  "helpUrl": "https://p5js.org/reference/#/p5.Color/setRed"
    }

    ,

    {
  "type": "p5_quad",
  "message0": "quad %1 x1 %2 y1 %3 x2 %4 y2 %5 x3 %6 y3 %7 x4 %8 y4 %9",
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
    },
    {
      "type": "input_value",
      "name": "x3",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y3",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x4",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y4",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Draw a quad. A quad is a quadrilateral, a four sided polygon. It is similar to a rectangle, but the angles between its edges are not constrained to ninety degrees.",
  "helpUrl": "https://p5js.org/reference/#/p5/quad"
    }

    ,

    /*
    {
  "type": "p5_circle",
  "message0": "circle %1 x %2 y %3 d %4",
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
      "name": "d",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Draws a circle to the screen. A circle is a simple closed shape. It is the set of all points in a plane that are at a given distance from a given point, the centre. ",
  "helpUrl": "https://p5js.org/reference/#/p5/circle"
    }

    ,
    */
    
    {
  "type": "p5_ellipse",
  "message0": "ellipse %1 x %2 y %3 w %4 h %5",
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
      "name": "w",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "h",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Draws an ellipse (oval) to the screen. An ellipse with equal width and height is a circle.",
  "helpUrl": "https://p5js.org/reference/#/p5/ellipse"
    }

    ,

    {
  "type": "p5_arc",
  "message0": "arc %1 x %2 y %3 w %4 h %5 start %6 stop %7 %8",
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
      "name": "w",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "h",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "start",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "stop",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "CHORD",
          "CHORD"
        ],
        [
          "PIE",
          "PIE"
        ],
        [
          "OPEN",
          "OPEN"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Draw an arc to the screen. If called with only x, y, w, h, start, and stop, the arc will be drawn and filled as an open pie segment.",
  "helpUrl": "https://p5js.org/reference/#/p5/arc"
    }

    ,

    {
  "type": "p5_square",
  "message0": "square %1 x %2 y %3 s %4",
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
      "name": "s",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Draws a square to the screen. A square is a four-sided shape with every angle at ninety degrees, and equal side size.",
  "helpUrl": "https://p5js.org/reference/#/p5/square"
    }
    ,

    {
  "type": "p5_triangle",
  "message0": "triangle %1 x1 %2 y1 %3 x2 %4 y2 %5 x3 %6 y3 %7",
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
    },
    {
      "type": "input_value",
      "name": "x3",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y3",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "A triangle is a plane created by connecting three points. The first two arguments specify the first point, the middle two arguments specify the second point, and the last two arguments specify the third point.",
  "helpUrl": "https://p5js.org/reference/#/p5/triangle"
    }

    ,

    {
  "type": "p5_rotate",
  "message0": "rotate %1",
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
  "tooltip": "Rotates a shape the amount specified by the angle parameter. This function accounts for angleMode, so angles can be entered in either RADIANS or DEGREES. ",
  "helpUrl": "https://p5js.org/reference/#/p5/rotate"
}


    ,

    {
  "type": "p5_scale",
  "message0": "scale s %1 y %2 z %3",
  "args0": [
    {
      "type": "input_value",
      "name": "s",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "z",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Increases or decreases the size of a shape by expanding and contracting vertices. Objects always scale from their relative origin to the coordinate system. Scale values are specified as decimal percentages.",
  "helpUrl": "https://p5js.org/reference/#/p5/scale"
    }

    ,

    {
  "type": "p5_translate",
  "message0": "translate %1 x %2 y %3 z %4",
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
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Specifies an amount to displace objects within the display window. The x parameter specifies left/right translation, the y parameter specifies up/down translation. ",
  "helpUrl": "https://p5js.org/reference/#/p5/translate"
    }

    ,

    {
  "type": "p5_push",
  "message0": "push",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "The push() function saves the current drawing style settings and transformations, while pop() restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had.",
  "helpUrl": "https://p5js.org/reference/#/p5/push"
}
    ,

    {
  "type": "p5_pop",
  "message0": "pop",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "The push() function saves the current drawing style settings and transformations, while pop() restores these settings. Note that these functions are always used together.",
  "helpUrl": "https://p5js.org/reference/#/p5/pop"
}

    ,

    {
  "type": "p5_constant",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "which",
      "options": [
        [
          "HALF_PI",
          "HALF_PI"
        ],
        [
          "PI",
          "PI"
        ],
        [
          "QUARTER_PI",
          "QUARTER_PI"
        ],
        [
          "TAU",
          "TAU"
        ],
        [
          "TWO_PI",
          "TWO_PI"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "For example, HALF_PI is a mathematical constant with the value 1.57079632679489661923.",
  "helpUrl": "https://p5js.org/reference/#/p5/HALF_PI"
    }
    ,

    {
  "type": "p5_vertex",
  "message0": "vertex %1 x %2 y %3 z %4",
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
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "All shapes are constructed by connecting a series of vertices. vertex() is used to specify the vertex coordinates for points, lines, triangles, quads, and polygons. It is used exclusively within the beginShape() and endShape() functions.",
  "helpUrl": "https://p5js.org/reference/#/p5/vertex"
    }
    ,

    {
  "type": "p5_beginshape",
  "message0": "beginShape %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "how",
      "options": [
        [
          "null",
          "null"
        ],
        [
          "POINTS",
          "POINTS"
        ],
        [
          "LINES",
          "LINES"
        ],
        [
          "TRIANGLES",
          "TRIANGLES"
        ],
        [
          "TRIANGLE_FAN",
          "TRIANGLE_FAN"
        ],
        [
          "TRIANGLE_STRIP",
          "TRIANGLE_STRIP"
        ],
        [
          "QUADS",
          "QUADS"
        ],
        [
          "QUAD_STRIP",
          "QUAD_STRIP"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Using the beginShape() and endShape() functions allow creating more complex forms. beginShape() begins recording vertices for a shape and endShape() stops recording. ",
  "helpUrl": "https://p5js.org/reference/#/p5/beginShape"
    }


    ,

    {
  "type": "p5_endshape",
  "message0": "endShape %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "CLOSE",
          "CLOSE"
        ],
        [
          "null",
          "null"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "The endShape() function is the companion to beginShape() and may only be called after beginShape(). ",
  "helpUrl": "https://p5js.org/reference/#/p5/endShape"
    }

    ,

    {
  "type": "p5_curvevertex",
  "message0": "curveVertex %1 x %2 y %3 z %4",
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
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Specifies vertex coordinates for curves. This function may only be used between beginShape() and endShape() and only when there is no MODE parameter specified to beginShape().",
  "helpUrl": "https://p5js.org/reference/#/p5/curveVertex"
    }

    ,

    {
  "type": "p5_ellipsemode",
  "message0": "ellipseMode %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "CENTER",
          "CENTER"
        ],
        [
          "RADIUS",
          "RADIUS"
        ],
        [
          "CORNER",
          "CORNER"
        ],
        [
          "CORNERS",
          "CORNERS"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Modifies the location from which ellipses are drawn by changing the way in which parameters given to ellipse() are interpreted.",
  "helpUrl": "https://p5js.org/reference/#/p5/ellipseMode"
    }

    ,

    {
  "type": "p5_nosmooth",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "noSmooth",
          "noSmooth"
        ],
        [
          "smooth",
          "smooth"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Draws all geometry with jagged (aliased) edges. Note that smooth() is active by default in 2D mode, so it is necessary to call noSmooth() to disable smoothing of geometry, images, and fonts.",
  "helpUrl": "https://p5js.org/reference/#/p5/noSmooth"
    }

    ,

    {
  "type": "p5_rectmode",
  "message0": "rectMode %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "CORNER",
          "CORNER"
        ],
        [
          "CORNERS",
          "CORNERS"
        ],
        [
          "CENTER",
          "CENTER"
        ],
        [
          "RADIUS",
          "RADIUS"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Modifies the location from which rectangles are drawn by changing the way in which parameters given to rect() are interpreted.",
  "helpUrl": "https://p5js.org/reference/#/p5/rectMode"
    }

    ,

    {
  "type": "p5_strokecap",
  "message0": "strokeCap %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "ROUND",
          "ROUND"
        ],
        [
          "SQUARE",
          "SQUARE"
        ],
        [
          "PROJECT",
          "PROJECT"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sets the style for rendering line endings. ",
  "helpUrl": "https://p5js.org/reference/#/p5/strokeCap"
    }

    ,

    {
  "type": "p5_strokejoin",
  "message0": "strokeJoin %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "MITER",
          "MITER"
        ],
        [
          "BEVEL",
          "BEVEL"
        ],
        [
          "ROUND",
          "ROUND"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sets the style of the joints which connect line segments. ",
  "helpUrl": "https://p5js.org/reference/#/p5/strokeJoin"
    }

    ,

    {
  "type": "p5_strokeweight",
  "message0": "strokeWeight %1",
  "args0": [
    {
      "type": "input_value",
      "name": "val",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sets the width of the stroke used for lines, points, and the border around shapes. All widths are set in units of pixels.",
  "helpUrl": "https://p5js.org/reference/#/p5/strokeWeight"
    }

    ,

    {
  "type": "p5_bezier",
  "message0": "bezier %1 x1 %2 y1 %3 x2 %4 y2 %5 x3 %6 y3 %7 x4 %8 y4 %9",
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
    },
    {
      "type": "input_value",
      "name": "x3",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y3",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x4",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y4",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Draws a cubic Bezier curve on the screen. ",
  "helpUrl": "https://p5js.org/reference/#/p5/bezier"
    }

    ,

    {
  "type": "p5_curve",
  "message0": "curve %1 x1 %2 y1 %3 x2 %4 y2 %5 x3 %6 y3 %7 x4 %8 y4 %9",
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
    },
    {
      "type": "input_value",
      "name": "x3",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y3",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x4",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y4",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Draws a curved line on the screen between two points, given as the middle four parameters.",
  "helpUrl": "https://p5js.org/reference/#/p5/curve"
    }
    
    
]);  // END JSON EXTRACT (Do not delete this comment.)

