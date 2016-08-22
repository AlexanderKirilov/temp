

   
   var laptop = new Computer(2014,2300,true,1000,"iOS");
   var pc = new Computer(2010,1300,false,2000,"WINDOWS 7");

   laptop.showInfo();
   pc.showInfo();

   laptop.useMemory(100);
   laptop.useMemory(1000);

   pc.changeOperationSystem("WINDOWS 10");

   laptop.showInfo();
   pc.showInfo();
