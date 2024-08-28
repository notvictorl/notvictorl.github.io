---
draft: "true"
title: Scripting and Automation
---
Scripting and Automation in order to speed up FPGA development workflow

# Makefile

# Python

```python
from fpga import Project

# Create a new FPGA project
project = Project('vivado', 'example_project')

# Set the target device
project.set_part('xc7z010-1-clg400')

# Add HDL source files
project.add_files('src/top.v')
project.add_files('src/module1.v')
project.add_files('src/module2.v')

# Add constraint files
project.add_files('constraints/example.xdc')

# Set the top-level module
project.set_top('top')

# Generate the bitstream
project.generate()

# Program the FPGA
project.program()

```