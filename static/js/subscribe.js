/* This function looks to see if the css has changed in this case if 
the css has gone from hidden to block then it is executed */

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        document.getElementById('redirectToWebsiteButton').innerHTML = `<button class="btn btn-primary button" onclick="backbut()" >Back</button>`;
    });    
});
var target = document.getElementById('mce-error-response');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });


var observer2 = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        document.getElementById('autoRedirectMessage').innerHTML = `<p>Please Wait You Will be Automatically Redirected!</p>`;
        document.getElementById('backbuttondiv').scrollIntoView({behavior: 'smooth'})
        document.getElementById('backbuttondiv').innerHTML = `<p>Incase you are not automatically redirected please <a href="#" onclick="backbut()">Click Here!</a></hp>`;
        document.getElementById('subscribeButton').innerHTML = "";
        autoRedirect();
    });    
});
var target2 = document.getElementById('mce-success-response');
observer2.observe(target2, { attributes : true, attributeFilter : ['style'] });


function autoRedirect(){
    setTimeout(backbut, 4000);
}


function backbut(){
    window.location.replace("http://www.eastbristolhops.co.uk");
}

