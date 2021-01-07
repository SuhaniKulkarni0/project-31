class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true,
            density:1
        }

        
        this.body = Bodies.circle(x,y,10,options)

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        //translate(pos.x,pos.y)
        //rotate(angle)
        fill("white")
        ellipseMode(CENTER)
        ellipse(pos.x, pos.y,10,10)


    }
}