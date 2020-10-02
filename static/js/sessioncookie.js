//when the onclick fuction is called from the news letter signup modal it adds warning=clicked to the session cookie
function clear_modal(){
    document.cookie = 'signup=clicked';
}
/* When the landing page is first scrolled down, a session cookie is checked to see if there is an 
entry that displays the modal, if the modal has been displayed */

$(window).scroll(function(){
  
  if ($(this).scrollTop() > 100) {
    let x = document.cookie;
    let b = x.split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => 
      ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), 
      {});
    if (b.signup != 'clicked'){
        $("#newslettersignup").modal('show');
    }
}});
