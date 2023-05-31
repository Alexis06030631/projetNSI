# School Project

## Description

This is a school project. The aim is to light up an array of leds with a raspberry pi when a human is detected. At the start of execution, the leds display the weather.

## Installation (Only for raspberry pi)

```bash
npm install
```

## Usage

```bash
npm node prod.js
```

## Pinout used for the project

| Pin | Name        | Description                          |
| --- |-------------|--------------------------------------|
| 1 | 3.3V        | Power for led matrix                 |
| 2 | 5V          | Power for motion detector            |
| 3 | GPIO2 (SDA) | I2C used for send data to led matrix |
| 5 | GPIO3 (SCL) | I2C used for send data to led matrix |
| 6 | GND         | Ground for led matrix                |
| 9 | GND         | Ground for motion detector           |
| 11 | GPIO 17     | Motion detector sensor               |
cf: https://fr.pinout.xyz/

## Make By Alexis