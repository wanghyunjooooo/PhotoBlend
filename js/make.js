function previewImage(event) {
    const uploadBox = document.getElementById('upload-box');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const imgElement = document.createElement('img');
        imgElement.src = reader.result;
        uploadBox.innerHTML = '';
        uploadBox.appendChild(imgElement);
        imgElement.style.display = 'block';
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}
