<script src="//app-ab??.marketo.com/js/forms2/js/forms2.min.js"></script>
<form id="mktoForm_????"></form>
<script>

var myReferrer;
myReferrer = document.title;


var clientID;
(function(){
var arry = document.cookie.split(";");
var len = arry.length;
for (i=0; i < len;i++){
  var cookie_name = arry[i].split("=")[0];
  var cookie_pram = arry[i].split("=")[1];
      if (cookie_name.match(/_ga$/i)){ 
        var gaid = arry[i].split("=")[1].split(".");
        clientID = gaid[2] + "." + gaid[3];
        console.log("CID;  " + clientID);
      }
    }
})()



MktoForms2.loadForm(
"//app-ab??.marketo.com", "???-???-???", ????,function(form) {


     form.getFormElem().hide();
     form.vals({"clientID" : clientID});
     form.submit();
     form.onSuccess(function(values, followUpUrl) {
       return false;
      });
});</script>
