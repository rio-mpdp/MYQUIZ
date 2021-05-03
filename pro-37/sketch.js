var s,db,pos,bg,bg2,gamestate=0,stb,questions,index,ci,o1,o2,o3,o,bgg,q,b,b1,b2,b3,bg3,sb,w,jr
var wr,j,gb,sd,ll,rr,uu,mm,player,qw,gbb,x,xx,qqw,gg,j,playerscore=0,p,ss,ww,www
function preload(){
bg=loadImage("maxresdefault.jpg");sb=loadImage("right1.jpg");bg2=loadImage("b2.jpg")
bg3=loadImage("bp.jpg");q=loadImage("gj.png");w=loadImage("w.jpg")
wr=loadImage("wrong.jpg");jr=loadImage("jr.jpg");j=loadImage("bac.jpg");
gb=loadImage("hylt.gif");gbb=loadImage("q1.jpg");gg=loadImage("gr.jpg")
sd=loadImage("blin.jpg");qw=loadImage("ye.jpg");qqw=loadImage("jjjr.jpg")
ll=loadImage("l1.gif");mm=loadImage("we.gif");x=loadImage("whiwhi.gif")
rr=loadImage("abb.gif");uu=loadImage("lili.gif");xx=loadImage("hello.gif")
}
function setup(){
createCanvas(1000,600)
db=firebase.database()
images=[bg2,jr,ll,gb,sd,uu,x,xx,rr,mm]
bgg=[bg3,j,gg,gbb,qw,bg3,qw,qw,bg3,bg3]
index=0
ci=sb

questions=[
 ["#WHEN DID BLACKPINK DEBUT?","August 8,2016","August 9,2016","August 7,2016","August 10,2016",1],
 ["#WHO IS THE MAIN VOCALIST?","Jennie","Rose","Jisoo","Lisa",2],
 ["#BLACKPINK'S CATCHPHRASE:","Blackpink in the House","Blackpink is the Revolution","Blackpink in your area","Blackpink is coming to town",3],
 ["#WHO IS THE MAIN DANCER?","Jisoo","Rose","Jennie","Lisa",4],
 ["#WHAT IS THE FANDOM NAME?","Blink","Army","Pinks","Links",1],
 ["#WHO SANG THE HELIUM SONG?","Lisa","Rose","Jennie","Jisoo",4],
 ["#BP'S 1ST WIN WAS:","21st,August(Whistle)","20st,August(Boombayah)","22st,August(How you like that)","23st,August(Kill this love)",1],
 ["#BLACKPINK IS UNDER _ENT.?","SM","YG","HYPE","JYP",2],
 ["#JENNIE'S SOLO DEBUT SONG:","ON THE GROUND","GONE","SOLO","STAY",3],
 ["#GUESS THE M/V SCENE:","Ddu-du-ddu","Kill this love","Whistle","Pretty savage",2]
 ]

 n=createButton("PRESS TO CONTINUE");n.position(800,500);n.hide()
 nl=createButton("PRESS TO CONTINUE");nl.position(800,400);nl.hide()
 button=createButton("PRESS TO START");button.position(450,300);button.hide()
 b=createButton("A");b.position(480,200);b.hide()
 b1=createButton("B");b1.position(480,250);b1.hide()
 b2=createButton("C");b2.position(480,300);b2.hide()
 b3=createButton("D");b3.position(480,350);b3.hide()
label=createElement("h1");
label.position(width/2-10,50);
label.hide()
label5=createElement("h1");
label5.html("#QUESTION 5")
label5.position(width/2-10,50);
label5.hide()
label1=createElement("h1");
label1.html("#QUESTION 2")
label1.position(width/2-10,50);
label1.hide()
label2=createElement("h1");
label2.html("#QUESTION 3")
label2.position(width/2-10,50);
label2.hide()
label3=createElement("h1");
label3.html("#QUESTION 4")
label3.position(width/2-10,50);
label3.hide()
l2=createElement("h1");
//l2.html("#WHEN DID BLACKPINK DEBUT?")
l2.position(width/2-10,100);
l2.hide()

o=createElement("h1");
o.html("Jennie")
o.position(width/2+10,170);o.hide()
o1=createElement("h1")
o1.html("Rose")
o1.position(width/2+10,220)
o1.hide()
o2=createElement("h1")
o2.html("Jisoo")
o2.position(width/2+10,270)
o2.hide()
o3=createElement("h1")
o3.html("Lisa")
o3.position(width/2+10,320)
o3.hide()
textfield=createInput("enter name")
textfield.position(width/2,150)
textfield.hide()
db.ref("gamestate").on("value",readgs)
db.ref("playerscore").on("value",readps)

}
function draw(){
background(220)
if(gamestate==0){ 
 image(bg,0,0,width,height)
 button.show();n.hide();textfield.show()
 button.mousePressed(function(){

 label.hide();button.hide()
 writegs(1)})
 }
if(gamestate==1){
background(bgg[index])

label.html("#QUESTION "+(index+1))
l2.html(questions[index][0])
o.html(questions[index][1])
o1.html(questions[index][2])
o2.html(questions[index][3])
o3.html(questions[index][4])
image(images[index],0,0,width/2-30,600)
label.show();l2.show();o.show();o1.show();o2.show()
o3.show();b.show();b1.show();b2.show();b3.show() 

b.mousePressed(function(){
 checkans(1)})
b1.mousePressed(function(){
 checkans(2)})
b2.mousePressed(function(){
 checkans(3)})
b3.mousePressed(function(){
checkans(4)})
textfield.hide()
var name=textfield.value()
  
writeps()
p= new Player()
p.playername=name
p.updatename()
}
if(gamestate==2){
image(ci,0,0,width,height)
label.hide();l2.hide();
o.hide();o1.hide();o2.hide();o3.hide()
b.hide();b1.hide();b2.hide();b3.hide();n.show()
n.mousePressed(function(){
index+=1

writegs(1)
if(index==questions.length){
  writegs(3)
}})

}
if(gamestate==3){
background("pink")
n.hide()
image(q,0,0,width,height)

}

drawSprites()   
}
function checkans(a){
 if(a==questions[index][5]){
   ci=sb
  
  }else{ci=wr} 
  playerscore+=10
  playerscore+=0
writegs(2)
}
function writegs(g){
  db.ref("/").update({gamestate:g})
   }
   function writeps (){
    db.ref("/").update({playerscore:playerscore}) 
  }
  function readgs (d) {
    gamestate=d.val()    
    }
    function readps(a){
       playerscore=a.val()
    }
 