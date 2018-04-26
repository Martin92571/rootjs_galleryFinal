/* your javascript goes here */

var pictures;
if (window.localStorage.galleryPhotos) {
	pictures =localStorage.getItem('galleryPhotos').split(",");



}else {
     pictures = [
        'images/landscape-1.jpg',
        'images/landscape-10.jpg',
        'images/landscape-11.jpg',
        'images/landscape-13.jpg',
        'images/landscape-15.jpg',
        'images/landscape-17.jpg',
        'images/landscape-18.jpg',
        'images/landscape-19.jpg',
        'images/landscape-2.jpg',
        'images/landscape-3.jpg',
        'images/landscape-8.jpg',
        'images/landscape-9.jpg',
        'images/pexels-photo-132037.jpeg',
        'images/pretty.jpg',
    ];
}
$(document).ready(initiateApp);
function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/

    $('#gallery').sortable({
		    update: function(e) {
        	var galleryPhotos = $('#gallery').children();
        	var pictures = [];
        		for(var i = 0; i < galleryPhotos.length; i++) {
            			pictures.push("images"+galleryPhotos[i].style.backgroundImage.slice(11,galleryPhotos[i].style.backgroundImage.length-2));
            			}
        		localStorage.setItem('galleryPhotos', pictures);



                makeGallery(pictures);
        		}


    	});

    makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	$("#gallery").html("");
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section
for(var i=0;i<imageArray.length;i++){
	var figSchema={
		class:'imageGallery col-xs-12 col-sm-6 col-md-4 displayImage',
          style:'background-image:url('+imageArray[i]+');'
	}
    var figure=$("<figure>",figSchema);
	var figCap=$("<figcaption></figcaption>").text(imageArray[i].substring(7,imageArray[i].lastIndexOf(".")));
    $(figure).append(figCap);
	$("#gallery").append(figure);


}
$(".displayImage").each(function(){
	$(this).on("click",displayImage)
})


}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	$(".modal-body").children("img").on("click",function (){

      $(".modal").modal("hide");
	})
}

function displayImage(){

     var imgsrc=$(this).attr("style");

     var urldirect=imgsrc.substring(imgsrc.indexOf('(')+1,imgsrc.lastIndexOf(')'));

     var urlName=imgsrc.substring(28,imgsrc.lastIndexOf("."));
     $(".modal-title").text(urlName);
     $("div.modal-body>img").attr("src",urldirect);
     $(".modal").modal('show');
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}





