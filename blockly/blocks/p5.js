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

    
    
    
]);  // END JSON EXTRACT (Do not delete this comment.)

