function getIt(){
  $('p').on("click",function(){
      alert("Hey!")
    })
}

function frameIt(){
  $('img').on("load",function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $(document).on('keydown', function(key){
    if(key.which==71){
      alert('g was pressed!')
    }
  })
}

function submitIt(){
  $(document).on('submit', function(e){
    
      alert('your form is going to be submitted now.')
    
  })
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
});
