#!/usr/bin/env python

import colorsys
import time

from module import RGBMatrix5x5

print("""
RGBMatrix5x5 - Glorious Rainbows!

Lights up your matrix with a glorious rainbow.
""")

rgbmatrix5x5 = RGBMatrix5x5()

spacing = 360.0 / 5.0
hue = 0

rgbmatrix5x5.set_clear_on_exit()
rgbmatrix5x5.set_brightness(0.8)

pixel = 6
print('G')
rgbmatrix5x5.set_pixel(1,0, 0, 255, 0)
rgbmatrix5x5.show()

input("Press Ctrl+C to exit !")