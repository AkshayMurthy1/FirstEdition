class Game{
    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
        
        this.leadeboardTitle = createElement("h2");
    
    }
    start(){
        
        form = new Form;
        form.display()
        paddle1 = createSprite(width*11/12, height/2, 100, 10);
        paddle1.addImage(paddle1_img)
        paddle1.scale = 0.5
        
        paddle2 = createSprite(width*1/12, height/2, 100, 10);
        paddle2.addImage(paddle2_img)
        paddle2.scale = 0.2
        
        paddles = [paddle1, paddle2];


    }

    play(){
        drawSprites()
    }






}