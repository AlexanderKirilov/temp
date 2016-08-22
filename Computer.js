
function Computer(year,price,isNotebook,hardDiskMemory,operationSystem){

   console.log("creating comp");

   var _year = year;
   var _price = price;
   var _isNotebook = isNotebook;
   var _hardDiskMemory = hardDiskMemory;
   var _freeMemory = hardDiskMemory;
   var _operationSystem =operationSystem;

   this.changeOperationSystem = function(newOperationSystem){
      _operationSystem = newOperationSystem;
   }

   this.useMemory = function(memory){
      if(_freeMemory < memory){
         console.log("Not enough free memory!");
         return;
      }

      _freeMemory -= memory;
   }

   this.showInfo = function(){

      var info =   "Year:" + _year +" ," +
         "Price:" + _price +"$ ," +
         "Model:" + _isNotebook? "Laptop":"PC" +" ," +
         "Hard disk memory:" + _hardDiskMemory +"mb ," +
         "Free memory:" + _freeMemory +"mb ," +
         "Operation system:" + _operationSystem;

      console.log(info);
   }
};
