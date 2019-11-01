const fileInputElement = document.querySelector("#fileInput");

function fileChanged(e) {
  const file = e.files[0];

  const reader = new FileReader();

  reader.onload = function(e) {
    const imageUrl = e.currentTarget.result;
    const imageElement = document.querySelector("#image");
    imageElement.src = imageUrl;
  };
  reader.readAsDataURL(file);
}

const uploadButtonElement = document.querySelector ('#uploadButton');
uploadButtonElement.addEventListener('click', function() {
fileInputElement.click();
 });
