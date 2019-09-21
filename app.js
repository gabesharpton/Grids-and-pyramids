function board (){
    for(i = 0; i < 64; i++)
    {let div = document.createElement('div');
    document.body.appendChild(div);
        if(i % 2 === 0)
            {
                let div = document.createElement('div')
                div.setAttribute('class', 'red');
                document.body.appendChild(div);
            }
        else
            {
                let div = document.createElement('div')
                div.setAttribute('class', 'black');
                document.body.appendChild(div);
            }
    }
    }
    
    // for(j = 64; j > 0; j--)
    // {
    // }
    
    
    
    
    //let red = document.getElementsByClassName('red')
    red = function(red) {
    red.style.backgroundColor = 'red';
    }
    
    //let black = document.getElementsByClassName('black')
    black = function(black) {
    black.style.backgroundColor = 'black';
    
    }
    
    board();
    
    