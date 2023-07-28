// Label Detection (General)

async function quickstart() {
  const vision = require('@google-cloud/vision');

  const client = new vision.ImageAnnotatorClient();

  const [result] = await client.labelDetection('./resources/image1_edit.png');
  const labels = result.labelAnnotations;
  console.log('Labels: ');
  labels.forEach(label => console.log(label.description));
}

quickstart();