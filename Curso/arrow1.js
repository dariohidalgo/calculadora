 enviar2 = () => {
    
    var div1 = $(".div1")
    var n1 = $(".input3")
    var n2 = $(".input4")
    var num1 = (+n1.val())
    var num2 = (+n2.val())

    var calculo = 0 
    var texto = $(".p1")
   

    if (num1 > num2){

         calculo = (num1) - (num2)

    }else {

         calculo = (num1) + (num2)

    }
    texto.text ("resultado ="  + calculo)

 }


 




