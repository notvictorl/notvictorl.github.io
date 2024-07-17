---
title: C to Verilog
date: 2024-07-13
---
> [!warning] Disclaimer
> I am still drafting this and could be one of my hardest projects so who knows how this goes.  
> For now it is my thoughts alone and how far I am taking the project.

> "If I wrote my code in something like C++, I would still be writing code."  
> — Shane from [Stuff Made Here](https://www.youtube.com/@StuffMadeHere)

So, I want to build a C to HDL tool or high-level synthesis in general, but designing one proves to be much harder than anticipated.

I was thinking of maybe switching to programming this in OCaml as I am most familiar with designing a compiler in that currently from CMSC330.

My plan is to take C-esque software language to Verilog hardware language  
(likely will not compile in C)

To Start:
1. Lexer - To Tokenize C language
2. Parser - Check Grammar
3. Translator - Instead of Evaluate take the parsed code and convert to Verilog language

OCaml or any functional programming language work similarly to that of an FPGA board which always has an output for every input.

Considering to use both C++ and OCaml each for different purposes.