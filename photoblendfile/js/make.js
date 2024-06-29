document.getElementById('fileUpload').addEventListener('change', function() {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            const uploadIcon = document.getElementById('uploadIcon');
            preview.src = e.target.result;
            preview.style.display = 'block';
            uploadIcon.style.display = 'none';
            document.getElementById('uploadButton').style.display = 'inline-block';
        }
        reader.readAsDataURL(file);
    } else {
        const preview = document.getElementById('preview');
        const uploadIcon = document.getElementById('uploadIcon');
        preview.style.display = 'none';
        uploadIcon.style.display = 'block';
        document.getElementById('uploadButton').style.display = 'none';
    }
});

document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    }).then(response => response.text())
    .then(data => {
        alert(data);
    }).catch(error => {
        console.error('Error:', error);
        alert('Failed to upload file');
    });
});



function showUploadMessage() {
    // Create elements for popup
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerText = "Uploaded!";

    // Append popup to overlay and then to the body
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Optional: Remove popup and overlay after some time
    setTimeout(() => {
        overlay.remove();
    }, 500); // Remove after 2 seconds (adjust as needed)
}


