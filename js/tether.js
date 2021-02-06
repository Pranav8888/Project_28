class Tether{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.tether = Constraint.create(options);
        World.add(world, this.tether);
    }

    fly(){
        this.tether.bodyA = null;
    }

    display(){
        if(this.tether.bodyA){
            var pointA = this.tether.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}