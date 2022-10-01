#!/bin/sh

# This is an example of some "process". Here it uses
# pandoc to convert from MarkDown to different formats
# and saves the output into "output_temp"

OUTPUT_DIR="output_temp"
TARGET_DIR="storybook-static"

mkdir "$OUTPUT_DIR" && yarn build-storybook

cp -a TARGET_DIR OUTPUT_DIR
