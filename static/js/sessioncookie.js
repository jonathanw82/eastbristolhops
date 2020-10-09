// when the onclick(clear_modal()) function is called from the news letter signup modal it adds warning=clicked to the session cookie + expiry
// in this case its 100 days.
/* number of seconds in a day. 24 * 60 * 60 = 86400 sec, 1 sec = 1000 milliseconds, so after calculating expression,result is in milliseconds
   days = 100, (days * 24 * 60 * 60 * 1000 = 100 * 86400000 ms)
*/

function clear_modal(){
  var d = new Date();
  let key = 'signup';
  let value = 'clicked';  
  d.setTime(d.getTime() + (100 * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
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
    }else {}
}});