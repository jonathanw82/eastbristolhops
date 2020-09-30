/* This function starts when the page loads and enables the autoscroll funtion */ 

$(document).ready(function(){
    // this Function runs the scroll to top icon.
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn(1000);
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

/* This function will inject the video section into the wiki page for ph testing info */

function showvideos(){
    // this function injects the html with the videos and changes the attribute 
    // of the show videos button to hide videos.
    // It also changes the value of the button to a different name.

    document.getElementById('videos').innerHTML = `<hr color="white"><div class="row"><div class="col-sm-6"><div class="soilphvideo">
            <div>Torsi Wooldridge on soil PH</div><iframe class="soilphvideoplayer" src="https://www.youtube.com/embed/h-IsLZCmWEY" \ frameborder="1"
                    allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
            </div></div><div class="col-sm-6"><div class="soilphvideo"><div>How to use a PH meter</div>  
            <iframe class="soilphvideoplayer" src="https://www.youtube.com/embed/Xu2qVNiG300" frameborder="1"
                    allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></div><hr color="white">`;

    document.getElementById('showvidbutton').setAttribute('onclick','hidevideos()');
    let butname = document.getElementById('showvidbutton');
    butname.value = "Hide Videos";
};

/* This function will hide the video section on the wiki page */

function hidevideos(){
    // This function hides the videos and changes the button attribute back to showvideos onclick.
    // It also changes the value of the button to a different name
    document.getElementById('videos').innerHTML = "";
    document.getElementById('showvidbutton').setAttribute('onclick','showvideos()');
    let butname = document.getElementById('showvidbutton');
    butname.value = "Show Videos";
}