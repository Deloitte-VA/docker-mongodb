#!/bin/bash
set -e

echo "Enter Version: "
read VERSION

IMAGE=jlgrock/snp-prototype-mongodb

docker build -t $IMAGE:$VERSION .
docker push $IMAGE:$VERSION
