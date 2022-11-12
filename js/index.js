// images\visual_impairment_simulate\color_blindness\Blue Cone Monochromacy.png
var galleryCaptions=['Blue Cone Monochromacy','Blue Blind Tritanopia','Blue Weak Tritanomaly','Green Blind Deuteranopia','Green Weak Deuteranomaly','Monochromacy Achromatopsia','Red Blind Protanopia','Red Weak Protanomaly'];
var galleryImages=['Blue Cone Monochromacy.png','Blue-Blind-Tritanopia.png','Blue-Weak-Tritanomaly.png','Green-Blind-Deuteranopia.png','Green-Weak-Deuteranomaly.png','Monochromacy-Achromatopsia.png','Red-Blind-Protanopia.png','Red-Weak-Protanomaly.png'];
for(var i=0;i<galleryImages.length;i++){
    galleryImages[i]="./images/visual_impairment_simulate/color_blindness/"+galleryImages[i];
}
let currentImage=0 // counter for which Image is displaying
function showNext(){
    console.log(currentImage);
    currentImage=(currentImage+1)%galleryCaptions.length;
    document.getElementById("imageGallery").src=galleryImages[currentImage];
    document.getElementById("captionGallery").innerHTML=galleryCaptions[currentImage];
}
function showPrevious(){
    console.log(currentImage);
    currentImage=(currentImage-1)
    if(currentImage<0){
        currentImage+=galleryCaptions.length;
    }
    currentImage=currentImage%galleryCaptions.length;
    document.getElementById("imageGallery").src=galleryImages[currentImage];
    document.getElementById("captionGallery").innerHTML=galleryCaptions[currentImage];
}
document.addEventListener('keydown',(event)=>{
    let key=event.key;
    if(key=='ArrowDown'|| key=='ArrowRight'|| key==' '){
        showNext()
    }
    else if(key=='ArrowUp'|| key=='ArrowLeft'){
        showPrevious();
    }
});

//add an onclick events to the arrow length to navigate through the images
document.getElementById("nextImage").onclick=showNext;
document.getElementById("previousImage").onclick=showPrevious;
