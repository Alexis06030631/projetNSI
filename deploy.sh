#!/bin/bash

cd .

echo dismounting old environement
docker compose down

echo Run new container...
docker compose up -d --build

echo remove old image
#docker image prune -f
