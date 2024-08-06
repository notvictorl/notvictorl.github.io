---
title: Distributed Systems
date: 2024-01-01
---
Some notes on distributed systems as I always have been curious on how to apply it.  
Mostly adapted from CMSC412's overview of Distributed Systems.

Reference:  
\[1\] Professor Ashok K Agrawala - CMSC412 slides on Distributed Systems

---
# Overview

> A **distributed system** is a collection of loosely coupled nodes interconnected by a communications network.

In this case, nodes could represent processors, computers, machines, hosts, etc.

Sites represent the location of the machine and node refer to a specific system.  
Generally, a client node at one site will want to use a resource a server contains at a different site.

Nodes exist in one of these different configurations:
- Client-Server - Server has a resource that a client would like to use
- Peer-to-Peer - Each node shares equal responsibilities and can act as both clients and servers
- Hybrid

Communication over the network occurs through message passing.

All higher level functions of a standalone system can be expanded to encompass a distributed system.

> [!warning] To Be Continued
