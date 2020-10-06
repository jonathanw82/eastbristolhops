/* This function will inject the video section into the wiki page for ph testing info */

function showvideos(){
    // this function injects the html with the videos and changes the attribute 
    // of the show videos button to hide videos.
    // It also changes the value of the button to a different name.

    document.getElementById('videos').innerHTML = `<div class="row"><div class="col-sm-6"><div class="soilphvideo">
            <div class="videoheading">Torsi Wooldridge on soil PH</div><iframe class="soilphvideoplayer" src="https://www.youtube.com/embed/h-IsLZCmWEY" \ frameborder="1"
                    allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
            </div></div><div class="col-sm-6"><div class="soilphvideo"><div class="videoheading">How to use a PH meter</div>  
            <iframe class="soilphvideoplayer" src="https://www.youtube.com/embed/Xu2qVNiG300" frameborder="1"
                    allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></div>`;

    document.getElementById('showvidbutton').setAttribute('onclick','hidevideos()');
    let butname = document.getElementById('showvidbutton');
    butname.value = "Hide Videos";
    butname.classList.add("vidbut"); // addes a class to the button after the js injection to move the lower margin.

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

/* This function displays the pests sections */

function pest(pest){
    
    if (pest == 'aphids'){
        document.getElementById('pestdisplay').innerHTML = aphids;
        document.getElementById('pestdisplay').scrollIntoView({behavior: 'smooth'});
    }
    else if (pest == 'sooty'){
        document.getElementById('pestdisplay').innerHTML = sooty;
        document.getElementById('pestdisplay').scrollIntoView({behavior: 'smooth'});
    }
    else if  (pest == 'mosaic'){
        document.getElementById('pestdisplay').innerHTML = mosaic;
        document.getElementById('pestdisplay').scrollIntoView({behavior: 'smooth'});
    }
    else if  (pest == 'vert'){
        document.getElementById('pestdisplay').innerHTML = vert;
        document.getElementById('pestdisplay').scrollIntoView({behavior: 'smooth'});
    }
    else if  (pest == 'mildew'){
        document.getElementById('pestdisplay').innerHTML = mildew;
        document.getElementById('pestdisplay').scrollIntoView({behavior: 'smooth'});
    }
    else if  (pest == 'nute'){
        document.getElementById('pestdisplay').innerHTML = nute;
        document.getElementById('pestdisplay').scrollIntoView({behavior: 'smooth'});
    };
}

/* This function Closes the pests section */
function pestclose(){
    document.getElementById('pestdisplay').innerHTML = "";
    document.getElementById('pestbuttons').scrollIntoView({behavior: 'smooth', block: 'center'});
}


