const vision = require('@google-cloud/vision');
const fs = require('fs');

// Create a client for the Cloud Vision API
const client = new vision.ImageAnnotatorClient();

// Read the image file from the file system
const imageFile = fs.readFileSync('./resources/image1_edit.png');

// Perform text detection
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
        topLeft: locations[0], // Top-left vertex
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