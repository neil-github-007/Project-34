class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.normalImage=loadImage("monster1.png");
		this.fallingImage = loadImage("monster2.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			if(this.body.position.x < 1200) {
				imageMode(CENTER);
				image(this.normalImage, 0,0,this.r, this.r);
			}
			else{
				imageMode(CENTER);
				image(this.fallingImage, 0,0,this.r, this.r);
			}	
			pop()
			
	}
}
