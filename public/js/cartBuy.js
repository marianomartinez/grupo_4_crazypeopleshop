window.addEventListener('load', function () {

    //capturo formulario
  
    var pTotal = document.getElementById('totalcompra').textContent
 

    if (pTotal == "$ 0"){
        
        document.getElementById('botonfin').style.visibility = 'hidden';
    }else{
        document.getElementById('botonfin').style.visibility = 'visible';
    }
    

       
        //botonagregar.classList.add('botcarDisabled')
      
    }
)
