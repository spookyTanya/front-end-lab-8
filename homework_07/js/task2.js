var attempts=0, guess, prize, total=0, again=true, flag=true, time=1, pr=0;

	var b = confirm('Do you want to play a game?');
	
	if (b==false){
		console.log('You did not become a millionaire');
	} else{
		while(true){
		var x = Math.floor(Math.random() * 5 * time);
		console.log(x);
		console.log('att ='+attempts);
		console.log('prize ='+prize);
			switch(attempts){
					case 0:
						prize = 10 * Math.pow(3,pr);
						break;
					case 1:
						prize = 5 * Math.pow(3,pr);
						break;
					case 2: 
						prize = 2 * Math.pow(3,pr);
						break;
				}
			guess = parseInt(prompt('Enter a number from 0 to ' +(5*time)+ ' \n Attempts left: ' + (3-attempts)+ '\n Total prize: '+total+'$ \n Possible prize on current attempt: '+ prize + '$'));
			attempts++;
			if(guess==x){
				switch(attempts){
					case 1:
						prize = 10 * Math.pow(3,pr);
						break;
					case 2:
						prize = 5 * Math.pow(3,pr);
						break;
					case 3: 
						prize = 2 * Math.pow(3,pr);
						break;
				}
				total+=prize;
				attempts=0;
				var cont = confirm('Do you want to continue?');
				if(cont==false){
					console.log('Thank you for a game. Your prize is: '+total+'$.');
					break;
				}  else {
					pr++;
					time*=2;
				}
		}
		if(guess!=x&&attempts==3){
				total = 0;
				console.log('Thank you for a game. Your prize is: '+total+'$.');
				again = confirm('Do you want to play again?');
				if(again==false){	
					break;
				}
			}
		}
}

/*else{
					//
					attempts=0;
					time++;
					console.log('second');
					console.log(attempts2);
					var y = Math.floor(Math.random() * 10);
					console.log(y);
					while(cont==true){
						switch(attempts2){
								case 0:
									prize1 = 30;
									break;
								case 1:
									prize1 = 15;
									break;
								case 2: 
									prize1 = 6;
									break;
							}
						guess = parseInt(prompt('Enter a number from 0 to 10 \nAttempts left: ' + (3-attempts2)+ '\nTotal prize: '+total+'$ \nPossible prize on current attempt: '+ prize1 + '$'));
						attempts2++;
						if(guess==y){
							switch(attempts2){
								case 1:
									prize1 = 30;
									break;
								case 2:
									prize1 = 15;
									break;
								case 3: 
									prize1 = 6;
									break;
							}
							total+=prize1;
							console.log('Thank you for a game. Your prize is: '+total+'$.');
							flag=false;
							break;
							}
						if(guess!=y&&attempts2==3){
							total=0;
							console.log('Thank you for a game. Your prize is: '+total+'$.');
							flag=false;
							break;
						}
				}
				//
			}*/