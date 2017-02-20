#!/usr/bin/env ruby

require 'yaml'
require 'logger'

l = Logger.new(STDERR)
l.level = Logger::DEBUG

slides_d = "_slides"
images_d = "images"

images = Dir["#{images_d}/*.jpg"]

images.each do |image|
  slide_name = File.basename(image, '.*') + '.md'
  l.info("Slide name: #{slide_name}")
  slide_data = {
    "layout" => "imageslide",
    "image" => {
      "src" => image,
      "alt" => slide_name
    }
  }
  File.write(File.join(slides_d, slide_name), slide_data.to_yaml + "\n---\n")
end
