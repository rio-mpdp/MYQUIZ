class Player{
 constructor(){
     this.playernumber=0
     this.playername=""
 }

 updatename(){
    db.ref("players/player"+ this.playernumber).update({"name":this.playername})
  }
  updatescore(c){
      db.ref("players/player").update({"score":c})
  }
}