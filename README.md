# snp-prototype-mongodb
A project for standing up MongoDB in a docker container.  This is bootstrapped with a large amount of generated ontology data.

This is used to support the [Semantic Normalization Prototype](https://github.com/jlgrock/snp-prototype).  Documentation on how to use this can also be found there.  

Development Procedures:
  - `sudo docker build -t jlgrock/snp-prototype-mongodb`

Release Procedures:
  - `sudo docker build -t jlgrock/snp-prototype-mongodb`
  - `sudo docker push jlgrock/snp-prototype-mongodb:[VERSION]` (replacing [VERSION] wit the actual version number)

Run Procedures:
  - see [Docker Hub](https://registry.hub.docker.com/u/jlgrock/snp-prototype-mongodb/)

Travis-CI Build Status
---------------------
![Build Status](https://travis-ci.org/Deloitte-VA/snp-prototype-mongodb.svg?branch=master)
