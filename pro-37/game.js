class Game{
    constructor(){} 
    getstate(){
     db.ref("gamestate").on("value",function(data){
       gamestate=data.val()
     },
     function(){}) 
    } 
    updatestate(a){
   db.ref("/").update({"gamestate":a})
    }
    start(){
     if(gamestate==0){
         
     }
    }
   }