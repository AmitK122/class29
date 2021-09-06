class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.s1 = loadImage("sprites/sling1.png")
        this.s2 = loadImage("sprites/sling2.png")
        this.s3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
      //  imageMode(CENTER)
        image (this.s1,200,30)
        image (this.s2,175,30)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
           stroke(83,39,15)
           if (pointA.x>200){
            line(pointA.x+20, pointA.y, pointB.x, pointB.y-40);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-40);
            image (this.s3,pointA.x+20,pointA.y-10,20,30)
           }
           else{ 
            line(pointA.x-20, pointA.y, pointB.x, pointB.y-40);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-40);
            image (this.s3,pointA.x-30,pointA.y-10,20,30)}
          
           
        }
    }
    
}