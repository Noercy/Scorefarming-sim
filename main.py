import pygame
import math
import sys
import time
import random 

from animation import * 


pygame.init()

size = width, height = 1600, 900

black = (0, 0, 0)
white = (255,255,255)
purple = (127, 0, 255)
triangleHeight = 200 * math.cos(math.pi / 6)


# resizable 
screen = pygame.display.set_mode(size, flags=pygame.RESIZABLE)

colorArray = [
    '#e25f99', '#ec6aa4','#e6639d','#e3609a', '#e967a1', '#fe7cb6', '#f774ae', '#e5639d', '#ed6ba5'
]

# gets a random function
def getRandomNumber(min, max): 
    return random.uniform(min, max) 





triangleArray = []

def updateTriangle(): 
    for triangle in triangleArray:
        triangle.update()

def drawTriangles(): 
    for triangle in triangleArray:
        triangle.draw(screen)  


for i in range(50):
    x = getRandomNumber(300, 1100)
    y = 930
    dy = getRandomNumber(1, 2)
    color = colorArray[math.floor(random.random() * len(colorArray))]
    triangleArray.append(Triangle(x, y, dy, color))



while True:

    mousePos = pygame.mouse.get_pos()

    for event in pygame.event.get():
        if event.type == pygame.QUIT: 
            sys.exit()

    screen.fill(black) 
    drawTriangles()
    updateTriangle()

    pygame.display.flip()