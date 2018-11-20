function getIt(){
  $('p').on("click",function(){
    if($('p').click){
      alert("Hey!")
      return;
    }
  })
}

$(document).ready(function(){
return getIt
});
