---
title: Topics in RTL Design
date: 2024-01-01
---
# State Machines
State machines are the most common building block for control logic and is used in simple to complex modules.

Changing from one state to the next based on current state and some input.
> Example: Regular Expressions from CMSC330

They exist in Mealy and Moore machines but often changed in minute ways like algorithms to better suit the design parameters, such as maximum achievable frequency, resource utilization, power consumption, ease of editing or scaling.
# FIFO
> FIFO: First In, First Out

The FIFO is one of the basic building blocks for FPGA designs and has two general types: Synchronous and Asynchronous.

FIFOs can be used for:
- Crossing clock domains
- Buffering data before sending it off chip (to DRAM/SRAM)
- Buffering data for software to look at later
- Storing data for later processing

Similar to a pipe or queue, it will take in data and allow order to be preserved and reduce latency at the corresponding clock instead of waiting for data.

--- 
Last Updated September 8, 2024.

References
\[1\] [The Data Bus](https://thedatabus.in/interview_list)
\[2\] ENEE244
\[3\] CMSC330
\[4\] [nandland](https://nandland.com/lesson-8-what-is-a-fifo/)
