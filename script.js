let inputFile = document.getElementById("input-file");
let profileImg = document.getElementById("profile-img");

inputFile.onchange = function () {
    profileImg.src = URL.createObjectURL(inputFile.files[0])
}