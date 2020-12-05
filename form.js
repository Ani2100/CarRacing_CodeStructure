class Form{
    constructor(){

    }

display(){
    var title = createElement("H2")
    title.html("Car Racing Game")
    title.position(500,0)
    var input = createInput("Name ")
    input.position(500,160)
    var button = createButton("Play")
    button.position(500,200)
    var greeting = createElement("H3")
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playerCount ++
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("Hello "+name)
        greeting.position(500,160)

    })
    
}
}