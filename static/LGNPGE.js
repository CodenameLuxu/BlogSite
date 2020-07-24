$( document ).ready(function() {
   $('#loginForm').submit(function() {
     Hash()
     return true;
   });

   var observer = new MutationObserver(function(mutation){
     console.log('Change detected');
     console.log(mutation);
     window.location.replace("http://127.0.0.1:5000/logout");
     });

     observer.observe(document.querySelector('.loginButtons'), {
        childList: true,
        attributes: true,
        subtree: true,
        characterData: true,
        attributeOldValue: true,
        characterDataOldValue: true
     });
});


function Hash() {
  var pw=document.getElementsByName("password")[0].value=CryptoJS.SHA1(document.getElementsByName("password")[0].value);
}
