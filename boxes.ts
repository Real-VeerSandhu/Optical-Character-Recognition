// Full Text Extraction + Bounding Boxes Script

const vision = require('@google-cloud/vision');
const fs = require('fs');

const client = new vision.ImageAnnotatorClient();

const imageFile = fs.readFileSync('./resources/image1_edit.png');

client
  .textDetection({
    image: { content: imageFile },
  })
  .then(response => {
    const textAnnotations = response[0].textAnnotations;
    // Extract text and bounding box associations
    const textsWithBoundingBoxes = textAnnotations.map(annotation => {
      const description = annotation.description;
      const vertices = annotation.boundingPoly.vertices;
      // Extract the x and y coordinates of the vertices
      const locations = vertices.map(vertex => ({
        x: vertex.x,
        y: vertex.y
      }));
      return { text: description, 
        topLeft: locations[0],
        topRight: locations[1],
        bottomRight: locations[2],
        bottomLeft: locations[3],
     };
        // Top-left vertex
        // Top-right vertex
        // Bottom-right vertex
        // Bottom-left vertex
    });
    console.log(textsWithBoundingBoxes);
  })
  .catch(err => {
    console.error('Error performing OCR:', err);
  });