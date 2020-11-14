// This function takes the page_from and converts it to a global variable
var globalpagename;
function passedpage(page_from){
    window.globalpagename = page_from;
}


/* This function looks to see what the globalpagename is and then goes to that url useing
 Flask Jsglue */
 function backbut(){
    if (globalpagename == 'about'){
        window.location.replace(Flask.url_for('about'));
    }
    else if (globalpagename == 'index'){
        window.location.replace(Flask.url_for('index'));
    }
    else if (globalpagename == 'contact'){
        window.location.replace(Flask.url_for('contact'));
    }
    else if (globalpagename == 'subscribe'){
        window.location.replace(Flask.url_for('subscribe'));
    }
    else if (globalpagename == 'None'){
        window.location.replace(Flask.url_for('index'));
    }
}