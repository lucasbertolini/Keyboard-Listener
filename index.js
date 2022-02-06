// variable for checkbox 

var codeSelected = false;

window.addEventListener('keydown', (keyPressed) => {

    const show = document.querySelector('textarea');
    show.scrollTop = show.scrollHeight; //textarea always on bottom 
    
    //check if shift key is pressed
    if(keyPressed.shiftKey){
        if(keyPressed.key == 'Shift' && codeSelected){
            show.innerHTML += `You Pressed ${keyPressed.key}  Key Code: ${keyPressed.keyCode}\n`;
            return;
        }else if(keyPressed.key == 'Shift'){
            show.innerHTML += `You Pressed ${keyPressed.key} \n`;
            return
        }
        if(codeSelected){
            show.innerHTML += `You Pressed ${keyPressed.key} Key Code: ${keyPressed.keyCode}  with SHIFT Pressed\n`
            return;
        }else{
            show.innerHTML += `You Pressed ${keyPressed.key} with SHIFT Pressed \n`;
            return
        }
        //check if control key is pressed
    }else if(keyPressed.ctrlKey){
        if(keyPressed.key == 'Control' && codeSelected){
            show.innerHTML += `You Pressed ${keyPressed.key} Key Code: ${keyPressed.keyCode} \n`;
            return;
        }else if(codeSelected){
            show.innerHTML += `You Pressed ${keyPressed.key} Key Code: ${keyPressed.keyCode} \n`; 
            return
        }else if(keyPressed.ctrlKey){
            show.innerHTML += `You Pressed ${keyPressed.key} with CTRL key PRESSED \n`;
            return 
        }else if(keyPressed.key == 'Control'){
            show.innerHTML += `You Pressed Control key \n`
            return
        }

        //check for Spacebar
    }else if(keyPressed.code == 'Space'){
        if(keyPressed.code == 'Space' && codeSelected){
            show.innerHTML += `You Pressed Spacebar Key Code: ${keyPressed.keyCode}\n`;
            return;
        }else if(keyPressed.code == 'Space'){
            show.innerHTML += `You Pressed SpaceBar \n`
            return
        }
    }

    //check for the checkbox and standard key
    if(codeSelected){
        show.innerHTML += `You Pressed ${keyPressed.key} Key Code: ${keyPressed.keyCode} \n`
        return
    }else{
        show.innerHTML += `You Pressed ${keyPressed.key} \n`;
    }

});

//check if the checkbox is checked and toggle 
window.addEventListener('click', (keyPressed) =>{
    if(keyPressed.target.id == "keyCode"){
        if(codeSelected){
            codeSelected = false;   
           
            return
        }
        codeSelected = true;
       
    }
    

})
