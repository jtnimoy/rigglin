points = []


def generatePoints():
    global points
    points = []
    for i in range(0,500):
        points += [
                   [
                    ((noise(i * 0.1,1000, frameCount*0.01))-0.2) * width*2,
                    ((noise(2000,i * 0.1, frameCount*0.01))-0.2) * height*2,
                    random(100)
                    ]
                   ]
def setup():
    global points
    generatePoints()
    size(1760,212,OPENGL)
    
def draw():
    global points
    background(0xC7 , 0x43 , 0x75)
    for i in points:
        pushMatrix()
        translate(i[0] , i[1] , i[2])
        stroke(0)
        point(0,0)
        popMatrix()
    
        for j in points:
            if j != i:
                d = dist(j[0],j[1],j[2], i[0],i[1],i[2])
                if d < mouseX:
                    stroke(d * 0.2, 255, d * 2 , 128)
                    line(j[0],j[1],j[2],i[0],i[1],i[2]) 
def keyPressed():
    saveFrame()
def mousePressed():
    generatePoints()
    #saveFrame()
