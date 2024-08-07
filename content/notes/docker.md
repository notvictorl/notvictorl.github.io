---
title: Docker
draft: "true"
date: 2024-08-06
---
Entirely adopted Anwar Mamat's slides on Docker with no changes due to how straightforward the topic is.

Reference
\[1\] Anwar Mamat - CMSC388T

---
## Virtual Machines
- Isolates applications and allocates resources to run that application
- VMs can be shared as images
- Aren't dependent on the Host OS
- Multiple VMs can be run simultaneously using a hypervisor

## Docker Containers
 - Standard unit of software
 - Packages code and dependences
 - Can be shared as Docker Images
 - Multiple containers can be run simultaneously
 - Portable - Can be used with any OS
 - Lightweight - Uses the host operating system
 - Secure - Strong default isolation features
 - Sometimes used with VMs

## Microservices
- Breaks large applications down into smaller executable components
- Easy to maintain and test
- Loosely coupled and can be deployed independently
- Can be combined with serverless architecture (AWS Fargate)

## Why use Docker
- Develop applications that work on any OS
- Easy to share applications among teams
- Easy to scale across multiple servers
- Large applications can be broken into **multiple containers** - one for each microservice
- Great solution for Cloud Computing
- Big community and library of Docker Images

## Serverless
- Removes Dependency on Infrastructure
- Allows developers to focus on application development
- Microservices can be decoupled with different cloud services
- Usually more cost effective
- Probably covered in more in a Cloud Computing class