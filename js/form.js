class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('play');
        this.greeting = createElement('h3');
  
    }
    display (){
       var title = createElement('h2');
       title.html("car Racing Game");
       title.position(130,0);

       //var input = createInput("Name");
      this.input.position(130,160);

       //var button = createButton('play');
       this.button.position(250,200);

       //var greeting = createElement('h3');

       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
            player.name = this.input.value();
           playerCount ++;
           player.index = playerCount;
           player.update();
           player.updateCount(playerCount);

           this.greeting.html( "Hello " + player.name);
           this.greeting.position(130,160);
       })
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();  
    }
}