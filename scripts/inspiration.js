
function addimage() {
    // get all of the hidden images and put them in a list (kind of)
    var images = document.getElementsByClassName("hiddenImage");
    if (images.length == 0){
        alert("There are no more photos to add.")
    }
    // get the position of last element in the list of classes
    var lastImageIndex=images.length-1;
    //remove the class "hiddenImage" from the last element, thus displaying it
    images[lastImageIndex].classList.remove("hiddenImage");
    //
}
