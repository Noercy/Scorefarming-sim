import pygame
import math 



class Triangle():
    def __init__(self, x, y, dy, color):
        self.x = x
        self.y = y 
        self.dy = -dy
        self.color = color  
        self.height = 200 * math.cos(math.pi / 6)
    
    def draw(self, surface):
        pygame.draw.polygon(surface, self.color, [(100+self.x, self.y), (300+self.x, self.y), (200+self.x, self.y - self.height)])
        
    def update(self): 
        if(self.y < 0):
            self.y = 930
        self.y += self.dy
        