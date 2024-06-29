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