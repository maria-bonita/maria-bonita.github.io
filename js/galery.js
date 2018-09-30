// Get the modal
var modal = document.getElementById('imgDivDisplay');

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg');

var images=document.querySelectorAll('.img-galery')
var modalImg = document.getElementById("img01");

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
} 
}

modal.onclick = function() { 
  modal.style.display = "none";
}