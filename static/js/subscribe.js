// window.onload = function() {
//     document.getElementById('mce-success-response').addEventListener('submit', function(event) {
        
//     });
// }

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        document.getElementById('redirectToWebsiteButton').innerHTML = `<a  href="{{ url_for('index')}}" >Back</a>`;
    });    
});

var target = document.getElementById('mce-error-response');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });
