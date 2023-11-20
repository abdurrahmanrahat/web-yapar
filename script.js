let inputFile = document.getElementById("input-file");
let profileImg = document.getElementById("profile-img");
let profileImgEmpty = document.getElementById("profile-img-empty");

inputFile.onchange = function () {
    profileImgEmpty.src = URL.createObjectURL(inputFile.files[0])
}

// cropping image
const cropper = new Cropper(profileImg, {
    aspectRatio: 0,
    viewMode: 0,
})

// action after click
document.getElementById("cropped-img-btn").addEventListener("click", () => {
    let croppedImg = cropper.getCroppedCanvas().toDataURL("image/png");
    
    document.getElementById("cropped-output-img").src = croppedImg;
})