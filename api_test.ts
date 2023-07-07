// Text Extraction (All)

async function extract_text(filePath) {
    const vision = require('@google-cloud/vision');
  
    const client = new vision.ImageAnnotatorClient();
  
    const [result] = await client.textDetection(filePath);
    const detections = result.textAnnotations;
    // console.log('Text:');
    // detections.forEach(text => console.log(text));


    return detections
}

// boundingPoly

extract_text('./resources/image1_edit.png')
.then(r => {
console.log('result: ', r);

})
.catch(e => {
    console.log('error: ', e);
    
});


