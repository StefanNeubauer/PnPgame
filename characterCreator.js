

function loadImage() {
    const input = document.getElementById('imageInput');
    const container = document.getElementById('image-container');

    // Check if a file is selected
    if (input.files.length > 0) {
        const file = input.files[0];

        // Check if the selected file is an image
        if (file.type.startsWith('image/')) {
            // Clear previous image
            container.innerHTML = '';

            // Create an image element
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.alt = 'User Selected Image';

            // Set CSS properties for resizing
            img.style.maxWidth = '100%';  // Ensure the image fits the container width
            img.style.maxHeight = '100%'; // Ensure the image fits the container height

            // Append the image to the container
            container.appendChild(img);
        } else {
            alert('Please select a valid image file.');
        }
    } else {
        alert('Please select an image file.');
    }
}