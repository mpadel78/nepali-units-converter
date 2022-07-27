function convert(){
  
 var number = document.getElementById("inputValue").value;
  
 var selectedInput= document.getElementById("input");
 var input= selectedInput[selectedInput.selectedIndex].value;
  
  var selectedOutput = document.getElementById("output");
 var output= selectedOutput[selectedOutput.selectedIndex].value;
  
  if (input==1 & output==2){
    number = number*20;
  }
  else if (input==1 & output==3){
    number= number*400;
  }
  else if (input==1 & output==4){
    number= number*208;
  }
  else if (input==1 & output==5){
    number= number*72900;
  }
  else if (input==2 & output==1){
    number= number/20;
  }
  else if (input==2 & output==3){
    number= number*20;
  }
  else if (input==2 & output==4){
    number= number*10.4;
  }
  else if (input==2 & output==5){
    number= number*3645;
  }
  else if (input==3 & output==1){
    number= number/400;
  }
   else if (input==3 & output==2){
    number= number/20;
  }
   else if (input==3 & output==4){
    number= number*0.52;
  }
    else if (input==3 & output==5){
    number= number*182.25;
  }
    else if (input==4 & output==1){
    number= number/208;
  }
    else if (input==4 & output==2){
    number= number/10.4;
  }
    else if (input==4 & output==3){
    number= number/0.52;
  }
    else if (input==4 & output==5){
    number= number*342.25;
  }
    else if (input==5 & output==1){
    number= number/72900;
  }
    else if (input==5 & output==2){
    number= number/3645;
  }
   else if (input==5 & output==3){
    number= number/182.25;
  }
    else if (input==5 & output==4){
    number= number/342.25;
  }
  else{
    number=number*1;
  }
 
 
 
 
 
 
 
 
 

  
  
  
  document.getElementById("result").innerHTML= number;
      


}