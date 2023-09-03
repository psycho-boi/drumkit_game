
for (var i = 0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function play(){
   
    // this.style.color = "white"

    var btnHtml = this.innerHTML

    playsound(btnHtml)
    })

}

document.addEventListener("keydown", function(event){
    playsound(event.key)
})


function playsound(key){
    switch (key) {
        case 'w':
                var tone1 = new Audio ('sounds/tom-1.mp3')
                tone1.play()            
            break;
        case 'a':
                var tone1 = new Audio ('sounds/tom-2.mp3')
                tone1.play()            
            break;
        case 's':
                var tone1 = new Audio ('sounds/tom-3.mp3')
                tone1.play()            
            break;
        case 'd':
                var tone1 = new Audio ('sounds/tom-4.mp3')
                tone1.play()            
            break;
        case 'j':
                var tone1 = new Audio ('sounds/crash.mp3')
                tone1.play()            
            break;
        case 'k':
                var tone1 = new Audio ('sounds/kick-bass.mp3')
                tone1.play()            
            break;
        case 'l':
                var tone1 = new Audio ('sounds/snare.mp3')
                tone1.play()            
            break;
    
        default:
            break;
            }
}
