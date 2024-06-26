document.getElementById('fileUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const imgElement = document.querySelector('.upload-box img');
        imgElement.src = e.target.result;
    };
    reader.readAsDataURL(file);
});
