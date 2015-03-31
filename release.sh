#!/bin/bash
set -e

echo "Enter Version: "
read VERSION

IMAGE=jlgrock/snp-prototype-mongodb

docker build -t $IMAGE .
docker push $IMAGE:$VERSION
