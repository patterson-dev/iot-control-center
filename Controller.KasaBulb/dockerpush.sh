#!/bin/bash
sudo docker compose build
docker push $DOCKERHUB_USERNAME/iot-control-center:kasa-bulb-controller
sudo kubectl delete pods -l svc=kasa-bulb-controller
