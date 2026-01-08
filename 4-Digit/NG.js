
      const number = NumberGenrate();
      let digitCount = 0;//to count no of digit entered
      let screenDisplay = ['', '','',''];
      const guesses =[];
       function NumberGenrate()
      {
        const min =0;
        const max =9999;
        const random = Math.floor(Math.random() * (max - min) + min);
        return random;
      }
      function guessHandler() //Action after guess button is clicked
      {
        
       if(screenDisplay.some(digit => digit === ''))//check if any digit is empty
          {
            alert("Please enter a 4-digit number");
            return;
          }
          else//if all digits are entered
      {
        const guess = screenDisplay.join('');
        for(let i=0;i<=guesses.length;i++)//to check if number is already guessed
          {
            if(guesses[i][1][0] === guess) 
            alert('Number is Alreaduy Guessed')
          clearScreen();
          return;
          }
        guesses.push([guess,processGuess(guess)]);
       console.log(guesses);
       renderGuesses();
        clearScreen();
       if(guesses[guesses.length-1][1][1] == 4)
       {
        document.querySelector('.IO').innerHTML = `
        <div class="End">
        YOU WIN !!!!!!!!<br>
        GUESSES: ${guesses.length}<br>
        THE NUMBER IS ${number}<br>
        <button onclick="window.location.reload();
">
         PLAY AGAIN
        </button>
        <button onclick="window.location.href='index.html';">
         BACK TO MENU
        </button>
        </div>`
        ;
        document.getElementById("demo").setAttribute("class", "EndBody");  
       }
       
      }
         }
      
      function processGuess(guess)//Process the guess
      {
         
        let dig=0;
        //no. of number matching
        let same=0;
        //no. of number in correct spot

        const v = number;
        // Duplicate OG number
        const c =guess;
        // Duplicate Guess number
        var NumD =[];
        //Nested Loop to check no. of number matching
        
        for(let i=1;i<=4;i++)
        {
            let curr = Math.floor((c%Math.pow(10,i))/Math.pow(10,i-1));
            //to find i th didgit of number
            
             if(check(curr,NumD,v,i))
              {
             {
                 for(let j=1;j<=4;j++)
             {

           let currc = Math.floor((v%Math.pow(10,j))/Math.pow(10,j-1));
           
           //to find j th digit of guess
           if(curr===currc)
           {

            dig++;
            console.log(dig)
            //increment no of digits matching
            if(i===j)
            {
                same++;
                //increment no. of digits in correct spot
            }
                
           }

          }
            }
            
              
           }
          else if(curr ===  Math.floor((v%Math.pow(10,i))/Math.pow(10,i-1)))//To check if position is correct
                {
                    same++;
                    //increment no. of digits in correct spot
                }
                NumD.push(curr);
           }
           return[dig,same];//return no. of digits matching and no. of digits in correct spot
           
          }
        
        
      
      function check(curr,NumD,v,i)//Check if digit is already checked
      {
        let count = 0;
        for(let k=0;k<=NumD.length-1;k++)
           {

            if(curr===NumD[k])//To check repeats
            {
               count++;
                
                
            }
                 
      }
           if (count === 0)
           {
             return 0==0;
           }
           else
           {
             return 7==0 ;
           }
                                  }
      function display(Num)//Display the number on screen
        {
          if(digitCount < 4)
          
          screenDisplay[digitCount] = Num;
          digitCount++;    
          
          updateDisplay();            
          
        
        }
        function updateDisplay() //Update the display
        {
          document.querySelector('.Digit1').innerHTML = screenDisplay[0];
          document.querySelector('.Digit2').innerHTML = screenDisplay[1];
          document.querySelector('.Digit3').innerHTML = screenDisplay[2];
          document.querySelector('.Digit4').innerHTML = screenDisplay[3];
        }
        function clearScreen()
        {
          screenDisplay = ['', '','',''];
          digitCount = 0;
          updateDisplay();
        }
        function renderGuesses()//Render the guesses
        {
          let guessHtml = `<div>ALL GUESSES !!</div>`
          for(let i=0;i<guesses.length;i++)
          {
            const guess = guesses[i];
            guessHtml+=`<div>Guess ${i+1} : ${guess[0]}  - ${guess[1][0]}/${guess[1][1]}</div>`
            
          }
          document.querySelector('.Guesses').innerHTML = guessHtml;
        }
        
    