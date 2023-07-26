# Label Detection

import os
from google.cloud import vision

def get_vision(id: int):
    return str((id % 6) * 24 + 3)

def run_quickstart() -> vision.EntityAnnotation:
    """Provides a quick start example for Cloud Vision."""

    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    # The name of the image file to annotate
    file_name = os.path.abspath("resources/wakeupcat.jpg")

    # Loads the image into memory
    with open(file_name, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    # Performs label detection on the image file
    response = client.label_detection(image=image)
    labels = response.label_annotations

    print("Labels:")
    for label in labels:
        print(label.description)
        print('label: {}')

    return labels

if __name__ == "__main__":
    run_quickstart()