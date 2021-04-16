class Ground{
constructor(){
var options = {isStatic : true
}
this.body= Bodies.rectangle(0,380,1000,20,options);
World.add(world,this.body);
}

display(){
var pos = this.body.position;
rect(pos.x,pos.y,this.width,this.height);
fill(255);
}
}