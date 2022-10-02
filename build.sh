#!/bin/sh

# This is an example of some "process". Here it uses
# pandoc to convert from MarkDown to different formats
# and saves the output into "output_temp"

OUTPUT_DIR="output_temp"

mkdir "$OUTPUT_DIR"

cp -a "./storybook-static/*" OUTPUT_DIR

rm -rf "./storybook-static"
