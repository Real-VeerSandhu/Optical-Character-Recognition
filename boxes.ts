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
        boundingBox1: locations[0],
        boundingBox2: locations[1],
        boundingBox3: locations[2],
        boundingBox4: locations[3],

     };
    });
    console.log(textsWithBoundingBoxes);
  })
  .catch(err => {
    console.error('Error performing OCR:', err);
  });


//   client
//   .textDetection({
//     image: { content: imageFile },
//   })
//   .then(response => {
//     const textAnnotations = response[0].textAnnotations;
//     // Extract bounding boxes from the detected text annotations
//     const boundingBoxes = textAnnotations.map(annotation => annotation.boundingPoly);
//     console.log(boundingBoxes);
//   })
//   .catch(err => {
//     console.error('Error performing OCR:', err);
//   });
