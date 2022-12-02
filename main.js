        
        let boxes =[]
        let usedBoxes = []
        let container = document.querySelector('.container')
        // let speed = 1

        let holder= document.querySelector('.holder')
        let enter = document.createElement('h1')
        enter.textContent = 'How many bricks would you like to generate?'
        enter.id = 'heading'
        holder.appendChild(enter)
        
        let input = document.createElement('input')
        input.type = 'number'
        holder.appendChild(input)
        let speedMessage = document.createElement('h1')
        speedMessage.textContent = "Please set your speed."
        holder.appendChild(speedMessage)
      
       let speed = document.createElement('select')
       let option1 = document.createElement('option')
        option1.text = "SLOW"
        let option2 = document.createElement('option')
        option2.text ="MODERATE"
        let option3 = document.createElement('option')
        option3.text ="FAST"
        holder.appendChild(speed)
        // form.appendChild(speed)
        speed.add(option1)
        speed.add(option2)
        speed.add(option3)
        speed.id = 'speed'
      
        let button = document.createElement('button')
        button.textContent = 'GO!'
       holder.appendChild(button)



        button.addEventListener('click', () => {
            let pace = 0
            if(speed.value === 'SLOW'){
                pace = 1000
            } else if (speed.value === 'MODERATE'){
                pace = 50
            } else if (speed.value === 'FAST'){
                pace = 1
            }
            speed.style.display = 'none'
            speedMessage.style.display = 'none'
            enter.style.display = 'none'
            container.style.opacity = 1
            let number = input.value
            input.style.display = 'none'
            button.style.display = 'none'
            for(let i=0; i< number; i++){
            let boxers = document.createElement('div')
            boxers.classList.add('box')
            boxers.id = `box${i + 1}`
            container.appendChild(boxers)
            boxes.push(boxers)
            
        }
        function brickBreaker(one){
            one.style.backgroundColor = 'transparent'
        }
        for(let one of boxes){
            one.addEventListener('click', () => {
                    brickBreaker(one)
                    let reveal = setInterval(()=>{
                        chooseABox(one)
                    }, pace)
                    document.body.addEventListener('contextmenu', (e)=> {
                    e.preventDefault()
                    console.log('right click!')
                    clearInterval(reveal)
                })
    function checkIfDone(array1, array2) {
    if(array2.every(elem => array1.indexOf(elem) > -1)){
        clearInterval(reveal)
    }
    
    
    }
                checkIfDone(usedBoxes, boxes)
                // if(usedBoxes.length == boxes.length){
                //     clearInterval(reveal)
                // }
                }
                )

        }
        })

    function chooseABox(one){
        let chosen = Math.floor(Math.random()* (boxes.length + 1))
        if(usedBoxes.includes(`div#box${chosen +1}`)) {
            console.log(chosen)
            chooseABox(one)
        }   else {
            boxes[chosen].style.backgroundColor = 'transparent'
        }
        usedBoxes.push(`div#box${chosen +1}`)     
    }




