
// This function takes the page_from and converts it to a global variable
var globalpagename;
function passedpage(page_from){
    window.globalpagename = page_from;
}

/* This function looks to see if the css has changed in this case if 
the css has gone from hidden to block then it is executed */
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        document.getElementById('redirectToWebsiteButton').innerHTML = `<button class="btn btn-secondary buttonsclick button" onclick="backbut()" >Back</button>`;
    });    
});
var target = document.getElementById('mce-error-response');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });


var observer2 = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        document.getElementById('autoRedirectMessage').innerHTML = `<p>Please Wait You Will be Automatically Redirected!</p>
        <p>Incase you are not automatically redirected please <a href="#" onclick="backbut(globalpagename)">Click Here!</a></p>`;
        document.getElementById('backbuttondiv').scrollIntoView({behavior: 'smooth'});
        document.getElementById('subscribeButton').innerHTML = "";
        autoRedirect();
    });    
});
var target2 = document.getElementById('mce-success-response');
observer2.observe(target2, { attributes : true, attributeFilter : ['style'] });

// After 3 seconds the timeout triggers the backbut function and redirects to the landing page
function autoRedirect(){
    setTimeout(backbut, 3000);
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