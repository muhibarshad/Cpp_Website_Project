
//function for head choose
document.getElementById('head').addEventListener
    ('click', function hea() {
        document.getElementById('toss-result').innerHTML = `<h1>
    Computer choose the TAIL </h1>`
        document.getElementById('head').value = "head";
        document.getElementById('pic').style.display = "block";
    })
//function for the tail choose
document.getElementById('tail').addEventListener
    ('click', function head() {
        document.getElementById('toss-result').innerHTML = `<h1>
    Computer choose the HEAD </h1>`
        document.getElementById('head').value = "tail";
        document.getElementById('pic').style.display = "block";
    }
    )

//function for the tally mark
document.getElementById('btn-go').addEventListener
    ('click', function () {
        let user_tally = document.getElementById('your-tally').value;
        let computer_tally = document.getElementById('computer-tally').value = Math.floor(Math.random() * 5 + 1);
        let sum;
        let user_tossValue = user_toss();
        sum = parseInt(user_tally) + parseInt(computer_tally);
        //Display for the game
        document.getElementById('game-start').style.display = "block";
        document.getElementById('tally-result').style.display = "block";
        document.getElementById('comp-ani').style.display = "block";
        //game start here

        if (sum % 2 == 0) {
            if (user_tossValue == 2) {
                document.getElementById('tally-result').innerHTML = `Tail Won the toss!
            <br> so,you win the toss and do batting first`
                document.getElementById('heading-game').innerHTML = `You play first: `
                document.getElementById('your-score').innerHTML = `Your Score = `
                document.getElementById('computer-score').innerHTML = `Computer Score = `
                //functions for the user input and computer random number
                //For the one input
                let bool = false;
                document.getElementById('one').addEventListener('click', function () {
                    if (bool == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value++;
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let one = document.getElementById('one').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (one == computer) {
                            bool = true;
                            two = true;
                            three = true;
                            five = true;
                            six = true;
                            four = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (bool == true) {
                        //total-computer score
                        let flag = true;
                        if (flag == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 1) {
                                flag = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `Congratulations!You won the match`;
                                    document.getElementById('win').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                                else if (comp == value) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>`
                            }
                        }
                    }
                })



                //for the two number


                let two = false;
                document.getElementById('two').addEventListener('click', function () {
                    if (two == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(2);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let twoo = document.getElementById('two').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (twoo == computer) {
                            two = true;
                            bool = true;
                            three = true;
                            five = true;
                            six = true;
                            four = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (two == true) {
                        //total-computer score
                        let flagTwo = true;
                        if (flagTwo == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppTwo = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 2) {
                                flagTwo = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cppTwo) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `Congratulations!You won the match`;
                                    document.getElementById('win').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score = ${cppTwo}</h2>
                                    <h2>Computers score = ${comp}</h2>`

                                }
                                else if (comp == value) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>`                                    
                                }
                            }
                            else if (comp > cppTwo) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cppTwo}</h2>
                                <h2>Computers score = ${comp}</h2>`                               
                            }
                        }
                    }
                })



                //for the third number





                let three = false;
                document.getElementById('three').addEventListener('click', function () {
                    if (three == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(3);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let threee = document.getElementById('three').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (threee == computer) {
                            three = true;
                            two = true;
                            five = true;
                            four = true;
                            six = true;
                            bool = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (three == true) {
                        //total-computer score
                        let flagthree = true;
                        if (flagthree == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 3) {
                                flagthree = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`Congratulations!You won the match`;
                                    document.getElementById('win').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${cpp}</h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                                else if (comp == cpp) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>` 
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>` 
                            }
                        }
                    }
                })


                //for the five number




                let five = false;
                document.getElementById('five').addEventListener('click', function () {
                    if (five == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(5);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let fivee = document.getElementById('five').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (fivee == computer) {
                            three = true;
                            two = true;
                            five = true;
                            four = true;
                            six = true;
                            bool = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (five == true) {
                        //total-computer score
                        let flagfive = true;
                        if (flagfive == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 5) {
                                flagfive = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`Congratulations!You won the match`;
                                    document.getElementById('win').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${cpp}</h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                                else if (comp == cpp) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>` 
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>` 
                            
                            }
                        }
                    }
                })



                //for the four number

                let four = false;
                document.getElementById('four').addEventListener('click', function () {
                    if (four == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(4);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let fourr = document.getElementById('four').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (fourr == computer) {
                            three = true;
                            two = true;
                            five = true;
                            four = true;
                            six = true;
                            bool = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (four == true) {
                        //total-computer score
                        let flagfour = true;
                        if (flagfour == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 4) {
                                flagfour = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                   //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`Congratulations!You won the match`;
                                    document.getElementById('win').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${cpp}</h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                                else if (comp == cpp) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                     //dialog box
                                     document.getElementById('contanier-8').style.display = 'block';
                                     document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                     document.getElementById('lose').style.display = 'block';
                                     document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                     <h2>Computers score = ${comp}</h2>` 
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>`                                 
                            }
                        }
                    }
                })

                //for the six number
                let six = false;
                document.getElementById('six').addEventListener('click', function () {
                    if (six == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(6);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let sixx = document.getElementById('six').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (sixx == computer) {
                            three = true;
                            two = true;
                            five = true;
                            four = true;
                            six = true;
                            bool = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (six == true) {
                        //total-computer score
                        let flagsix = true;
                        if (flagsix == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 6) {
                                flagsix = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                   //display dialog-box
                                   document.getElementById('contanier-8').style.display='block';
                                   document.getElementById('innerhtml').innerHTML=`Congratulations!You won the match`;
                                   document.getElementById('win').style.display='block';
                                   document.getElementById('score').innerHTML=`<h2>Your score = ${cpp}</h2>
                                   <h2>Computers score = ${comp}</h2>`                                    
                                }
                                else if (comp == cpp) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>` 
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>`                                 
                            
                            }
                        }
                    }
                })








            }
            else if (user_tossValue == 1) {
                document.getElementById('tally-result').innerHTML = `Tail Won the toss!
            <br> so,you lose the toss and do bowling first`
                document.getElementById('heading-game').innerHTML = `Computer Play First`
                document.getElementById('your-score').innerHTML = `Your Score = `
                document.getElementById('computer-score').innerHTML = `Computer Score = `
                //functions for the computer and user turns 
                //for the one function
                let bool_else = false;
                document.getElementById('one').addEventListener('click', function () {
                    if (bool_else == false) {
                        //computer-turn
                        let comp_else = parseInt(document.getElementById('total-computer').value);
                        let computer_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cpp_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computer_else;
                        comp_else = parseInt(comp_else) + parseInt(computer_else);
                        document.getElementById('total-computer').value = comp_else;
                        if (computer_else == 1) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (bool_else == true) {
                        //your-turn
                        let flag_else = true;
                        if (flag_else == true) {
                            let value_else = parseInt(document.getElementById('total-your').value);
                            value_else++;
                            document.getElementById('total-your').value = value_else;
                            //computer random number;
                            let one_else = document.getElementById('one').value;
                            let computer_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computer_else;
                            if (one_else == computer_else) {
                                flag_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (value_else < cpp_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                   //display dialog-box
                                   document.getElementById('contanier-8').style.display='block';
                                   document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                   document.getElementById('lose').style.display='block';
                                   document.getElementById('score').innerHTML=`<h2>Your score = ${value_else}</h2>
                                   <h2>Computers score = ${cpp_else}</h2>`                                    
                                }
                                else if (value_else == cpp_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${value_else} </h2>
                                    <h2>Computers score = ${cpp_else}</h2>` 
                                }

                            }
                            else if (value_else > cpp_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                 //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${value_else}</h2>
                                <h2>Computers score = ${cpp_else}</h2>` 
                            }
                        }
                    }
                })



                //for the second number
                let booltwo_else = false;
                document.getElementById('two').addEventListener('click', function () {
                    if (booltwo_else == false) {
                        //computer-turn
                        let comptwo_else = parseInt(document.getElementById('total-computer').value);
                        let computertwo_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cpptwo_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computertwo_else;
                        comptwo_else = parseInt(comptwo_else) + parseInt(computertwo_else);
                        document.getElementById('total-computer').value = comptwo_else;
                        if (computertwo_else == 2) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (booltwo_else == true) {
                        //your-turn
                        let flagtwo_else = true;
                        if (flagtwo_else == true) {
                            let valuetwo_else = parseInt(document.getElementById('total-your').value);
                            valuetwo_else = parseInt(valuetwo_else) + parseInt(2);
                            document.getElementById('total-your').value = valuetwo_else;
                            //computer random number;
                            let two_else = document.getElementById('two').value;
                            let computertwo_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpptwo_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computertwo_else;
                            if (two_else == computertwo_else) {
                                flagtwo_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuetwo_else < cpptwo_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                   //display dialog-box
                                   document.getElementById('contanier-8').style.display='block';
                                   document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                   document.getElementById('lose').style.display='block';
                                   document.getElementById('score').innerHTML=`<h2>Your score = ${valuetwo_else}</h2>
                                   <h2>Computers score = ${cpptwo_else}</h2>` 
                                }
                                else if (valuetwo_else == cpptwo_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuetwo_else} </h2>
                                    <h2>Computers score = ${cpptwo_else}</h2>` 
                                }

                            }
                            else if (valuetwo_else > cpptwo_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuetwo_else}</h2>
                                <h2>Computers score = ${cpptwo_else}</h2>` 
                            
                            }
                        }
                    }
                })





                //for the third number
                let boolthree_else = false;
                document.getElementById('three').addEventListener('click', function () {
                    if (boolthree_else == false) {
                        //computer-turn
                        let compthree_else = parseInt(document.getElementById('total-computer').value);
                        let computerthree_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cppthree_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computerthree_else;
                        compthree_else = parseInt(compthree_else) + parseInt(computerthree_else);
                        document.getElementById('total-computer').value = compthree_else;
                        if (computerthree_else == 3) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (boolthree_else == true) {
                        //your-turn
                        let flagthree_else = true;
                        if (flagthree_else == true) {
                            let valuethree_else = parseInt(document.getElementById('total-your').value);
                            valuethree_else = parseInt(valuethree_else) + parseInt(3);
                            document.getElementById('total-your').value = valuethree_else;
                            //computer random number;
                            let three_else = document.getElementById('three').value;
                            let computerthree_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppthree_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computerthree_else;
                            if (three_else == computerthree_else) {
                                flagthree_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuethree_else < cppthree_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                   //display dialog-box
                                   document.getElementById('contanier-8').style.display='block';
                                   document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                   document.getElementById('lose').style.display='block';
                                   document.getElementById('score').innerHTML=`<h2>Your score = ${valuethree_else}</h2>
                                   <h2>Computers score = ${cppthree_else}</h2>` 
                                }
                                else if (valuethree_else == cppthree_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuethree_else} </h2>
                                    <h2>Computers score = ${cppthree_else}</h2>` 
                                }

                            }
                            else if (valuethree_else > cppthree_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuethree_else}</h2>
                                <h2>Computers score = ${cppthree_else}</h2>`
                            }
                        }
                    }
                })









                //for the four number
                let boolfour_else = false;
                document.getElementById('four').addEventListener('click', function () {
                    if (boolfour_else == false) {
                        //computer-turn
                        let compfour_else = parseInt(document.getElementById('total-computer').value);
                        let computerfour_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cppfour_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computerfour_else;
                        compfour_else = parseInt(compfour_else) + parseInt(computerfour_else);
                        document.getElementById('total-computer').value = compfour_else;
                        if (computerfour_else == 4) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (boolfour_else == true) {
                        //your-turn
                        let flagfour_else = true;
                        if (flagfour_else == true) {
                            let valuefour_else = parseInt(document.getElementById('total-your').value);
                            valuefour_else = parseInt(valuefour_else) + parseInt(4);
                            document.getElementById('total-your').value = valuefour_else;
                            //computer random number;
                            let four_else = document.getElementById('four').value;
                            let computerfour_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppfour_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computerfour_else;
                            if (four_else == computerfour_else) {
                                flagfour_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuefour_else < cppfour_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                    document.getElementById('lose').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${valuefour_else}</h2>
                                    <h2>Computers score = ${cppfour_else}</h2>`                                    
                                }
                                else if (valuefour_else == cppfour_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
//dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuefour_else} </h2>
                                    <h2>Computers score = ${cppfour_else}</h2>` 
                                }

                            }
                            else if (valuefour_else > cppfour_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuefour_else}</h2>
                                <h2>Computers score = ${cppfour_else}</h2>`
                            }
                        }
                    }
                })





                //for the five number
                let boolfive_else = false;
                document.getElementById('five').addEventListener('click', function () {
                    if (boolfive_else == false) {
                        //computer-turn
                        let compfive_else = parseInt(document.getElementById('total-computer').value);
                        let computerfive_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cppfive_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computerfive_else;
                        compfive_else = parseInt(compfive_else) + parseInt(computerfive_else);
                        document.getElementById('total-computer').value = compfive_else;
                        if (computerfive_else == 5) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (boolfive_else == true) {
                        //your-turn
                        let flagfive_else = true;
                        if (flagfive_else == true) {
                            let valuefive_else = parseInt(document.getElementById('total-your').value);
                            valuefive_else = parseInt(valuefive_else) + parseInt(5);
                            document.getElementById('total-your').value = valuefive_else;
                            //computer random number;
                            let five_else = document.getElementById('five').value;
                            let computerfive_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppfive_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computerfive_else;
                            if (five_else == computerfive_else) {
                                flagfive_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuefive_else < cppfive_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                    document.getElementById('lose').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${valuefive_else}</h2>
                                    <h2>Computers score = ${cppfive_else}</h2>` 
                                }
                                else if (valuefive_else == cppfive_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuefive_else} </h2>
                                    <h2>Computers score = ${cppfive_else}</h2>`
                                }

                            }
                            else if (valuefive_else > cppfive_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuefive_else}</h2>
                                <h2>Computers score = ${cppfive_else}</h2>`
                            }
                        }
                    }
                })







                //for the six number
                let boolsix_else = false;
                document.getElementById('six').addEventListener('click', function () {
                    if (boolsix_else == false) {
                        //computer-turn
                        let compsix_else = parseInt(document.getElementById('total-computer').value);
                        let computersix_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cppsix_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computersix_else;
                        compsix_else = parseInt(compsix_else) + parseInt(computersix_else);
                        document.getElementById('total-computer').value = compsix_else;
                        if (computersix_else == 6) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (boolsix_else == true) {
                        //your-turn
                        let flagsix_else = true;
                        if (flagsix_else == true) {
                            let valuesix_else = parseInt(document.getElementById('total-your').value);
                            valuesix_else = parseInt(valuesix_else) + parseInt(6);
                            document.getElementById('total-your').value = valuesix_else;
                            //computer random number;
                            let six_else = document.getElementById('six').value;
                            let computersix_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppsix_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computersix_else;
                            if (six_else == computersix_else) {
                                flagsix_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuesix_else < cppsix_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                    document.getElementById('lose').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${valuesix_else}</h2>
                                    <h2>Computers score = ${cppsix_else}</h2>`
                                }
                                else if (valuesix_else == cppsix_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuesix_else} </h2>
                                    <h2>Computers score = ${cppsix_else}</h2>`
                                }

                            }
                            else if (valuesix_else > cppsix_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuesix_else}</h2>
                                <h2>Computers score = ${cppsix_else}</h2>`
                            }
                        }
                    }
                })















            }

        }



























        else if (sum % 2 != 0) {
            if (user_tossValue == 1) {
                document.getElementById('tally-result').innerHTML = `Head Won the toss!
            <br> so,you win the toss and do batting first`
                document.getElementById('heading-game').innerHTML = `You play first:`
                document.getElementById('your-score').innerHTML = `Your Score = `
                document.getElementById('computer-score').innerHTML = `Computer Score = `
                //functions for the user input and computer random number
                //For the one input
                let bool = false;
                document.getElementById('one').addEventListener('click', function () {
                    if (bool == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value++;
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let one = document.getElementById('one').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (one == computer) {
                            bool = true;
                            two = true;
                            three = true;
                            five = true;
                            six = true;
                            four = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (bool == true) {
                        //total-computer score
                        let flag = true;
                        if (flag == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 1) {
                                flag = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `Congratulations!You won the match`;
                                    document.getElementById('win').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                                else if (comp == value) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>`
                            }
                        }
                    }
                })



                //for the two number


                let two = false;
                document.getElementById('two').addEventListener('click', function () {
                    if (two == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(2);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let twoo = document.getElementById('two').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (twoo == computer) {
                            two = true;
                            bool = true;
                            three = true;
                            five = true;
                            six = true;
                            four = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (two == true) {
                        //total-computer score
                        let flagTwo = true;
                        if (flagTwo == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppTwo = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 2) {
                                flagTwo = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cppTwo) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `Congratulations!You won the match`;
                                    document.getElementById('win').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score = ${cppTwo}</h2>
                                    <h2>Computers score = ${comp}</h2>`

                                }
                                else if (comp == value) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>`                                    
                                }
                            }
                            else if (comp > cppTwo) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cppTwo}</h2>
                                <h2>Computers score = ${comp}</h2>`                               
                            }
                        }
                    }
                })



                //for the third number





                let three = false;
                document.getElementById('three').addEventListener('click', function () {
                    if (three == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(3);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let threee = document.getElementById('three').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (threee == computer) {
                            three = true;
                            two = true;
                            five = true;
                            four = true;
                            six = true;
                            bool = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (three == true) {
                        //total-computer score
                        let flagthree = true;
                        if (flagthree == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 3) {
                                flagthree = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`Congratulations!You won the match`;
                                    document.getElementById('win').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${cpp}</h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                                else if (comp == cpp) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>` 
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>` 
                            }
                        }
                    }
                })


                //for the five number




                let five = false;
                document.getElementById('five').addEventListener('click', function () {
                    if (five == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(5);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let fivee = document.getElementById('five').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (fivee == computer) {
                            three = true;
                            two = true;
                            five = true;
                            four = true;
                            six = true;
                            bool = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (five == true) {
                        //total-computer score
                        let flagfive = true;
                        if (flagfive == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 5) {
                                flagfive = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`Congratulations!You won the match`;
                                    document.getElementById('win').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${cpp}</h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                                else if (comp == cpp) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>` 
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>` 
                            
                            }
                        }
                    }
                })



                //for the four number

                let four = false;
                document.getElementById('four').addEventListener('click', function () {
                    if (four == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(4);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let fourr = document.getElementById('four').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (fourr == computer) {
                            three = true;
                            two = true;
                            five = true;
                            four = true;
                            six = true;
                            bool = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (four == true) {
                        //total-computer score
                        let flagfour = true;
                        if (flagfour == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 4) {
                                flagfour = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                   //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`Congratulations!You won the match`;
                                    document.getElementById('win').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${cpp}</h2>
                                    <h2>Computers score = ${comp}</h2>`
                                }
                                else if (comp == cpp) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                     //dialog box
                                     document.getElementById('contanier-8').style.display = 'block';
                                     document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                     document.getElementById('lose').style.display = 'block';
                                     document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                     <h2>Computers score = ${comp}</h2>` 
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>`                                 
                            }
                        }
                    }
                })

                //for the six number
                let six = false;
                document.getElementById('six').addEventListener('click', function () {
                    if (six == false) {
                        let value = parseInt(document.getElementById('total-your').value);
                        value = parseInt(value) + parseInt(6);
                        document.getElementById('total-your').value = value;
                        //computer random number;
                        let sixx = document.getElementById('six').value;
                        let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                        document.getElementById('computer-turn').value = computer;
                        if (sixx == computer) {
                            three = true;
                            two = true;
                            five = true;
                            four = true;
                            six = true;
                            bool = true;
                            document.getElementById('heading-game').innerHTML = `YOU ARE OUT ,NOW COMPUTER PLAY: `
                            alert('you are out and now computer play');
                        }
                    }
                    else if (six == true) {
                        //total-computer score
                        let flagsix = true;
                        if (flagsix == true) {
                            let comp = parseInt(document.getElementById('total-computer').value);
                            let computer = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp = parseInt(document.getElementById('total-your').value);
                            document.getElementById('computer-turn').value = computer;
                            comp = parseInt(comp) + parseInt(computer);
                            document.getElementById('total-computer').value = comp;
                            if (computer == 6) {
                                flagsix = false;
                                document.getElementById('heading-game').innerHTML = `Computer is out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (comp < cpp) {
                                    document.getElementById('result').innerHTML = `Congratulations!You won the match`
                                    alert('Congratulations!You won the match');
                                   //display dialog-box
                                   document.getElementById('contanier-8').style.display='block';
                                   document.getElementById('innerhtml').innerHTML=`Congratulations!You won the match`;
                                   document.getElementById('win').style.display='block';
                                   document.getElementById('score').innerHTML=`<h2>Your score = ${cpp}</h2>
                                   <h2>Computers score = ${comp}</h2>`                                    
                                }
                                else if (comp == cpp) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${cpp} </h2>
                                    <h2>Computers score = ${comp}</h2>` 
                                }
                            }
                            else if (comp > cpp) {
                                document.getElementById('heading-game').innerHTML = `Computer Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `OOPS!You lose the match and computer wins`
                                alert('OOPS!You lose the match and computer wins');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `OOPS!You lose the match and computer wins`;
                                document.getElementById('lose').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${cpp}</h2>
                                <h2>Computers score = ${comp}</h2>`                                 
                            
                            }
                        }
                    }
                })





            }
            else if (user_tossValue == 2) {
                document.getElementById('tally-result').innerHTML = `Head Won the toss!
            <br> so,you lose the toss and do bowling first`
                document.getElementById('heading-game').innerHTML = `Computer Play First`
                document.getElementById('your-score').innerHTML = `Your Score = `
                document.getElementById('computer-score').innerHTML = `Computer Score = `






                //functions for the computer and user turns 
                //for the one function
                let bool_else = false;
                document.getElementById('one').addEventListener('click', function () {
                    if (bool_else == false) {
                        //computer-turn
                        let comp_else = parseInt(document.getElementById('total-computer').value);
                        let computer_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cpp_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computer_else;
                        comp_else = parseInt(comp_else) + parseInt(computer_else);
                        document.getElementById('total-computer').value = comp_else;
                        if (computer_else == 1) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (bool_else == true) {
                        //your-turn
                        let flag_else = true;
                        if (flag_else == true) {
                            let value_else = parseInt(document.getElementById('total-your').value);
                            value_else++;
                            document.getElementById('total-your').value = value_else;
                            //computer random number;
                            let one_else = document.getElementById('one').value;
                            let computer_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpp_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computer_else;
                            if (one_else == computer_else) {
                                flag_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (value_else < cpp_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                   //display dialog-box
                                   document.getElementById('contanier-8').style.display='block';
                                   document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                   document.getElementById('lose').style.display='block';
                                   document.getElementById('score').innerHTML=`<h2>Your score = ${value_else}</h2>
                                   <h2>Computers score = ${cpp_else}</h2>`                                    
                                }
                                else if (value_else == cpp_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${value_else} </h2>
                                    <h2>Computers score = ${cpp_else}</h2>` 
                                }

                            }
                            else if (value_else > cpp_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                 //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${value_else}</h2>
                                <h2>Computers score = ${cpp_else}</h2>` 
                            }
                        }
                    }
                })



                //for the second number
                let booltwo_else = false;
                document.getElementById('two').addEventListener('click', function () {
                    if (booltwo_else == false) {
                        //computer-turn
                        let comptwo_else = parseInt(document.getElementById('total-computer').value);
                        let computertwo_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cpptwo_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computertwo_else;
                        comptwo_else = parseInt(comptwo_else) + parseInt(computertwo_else);
                        document.getElementById('total-computer').value = comptwo_else;
                        if (computertwo_else == 2) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (booltwo_else == true) {
                        //your-turn
                        let flagtwo_else = true;
                        if (flagtwo_else == true) {
                            let valuetwo_else = parseInt(document.getElementById('total-your').value);
                            valuetwo_else = parseInt(valuetwo_else) + parseInt(2);
                            document.getElementById('total-your').value = valuetwo_else;
                            //computer random number;
                            let two_else = document.getElementById('two').value;
                            let computertwo_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cpptwo_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computertwo_else;
                            if (two_else == computertwo_else) {
                                flagtwo_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuetwo_else < cpptwo_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                   //display dialog-box
                                   document.getElementById('contanier-8').style.display='block';
                                   document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                   document.getElementById('lose').style.display='block';
                                   document.getElementById('score').innerHTML=`<h2>Your score = ${valuetwo_else}</h2>
                                   <h2>Computers score = ${cpptwo_else}</h2>` 
                                }
                                else if (valuetwo_else == cpptwo_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuetwo_else} </h2>
                                    <h2>Computers score = ${cpptwo_else}</h2>` 
                                }

                            }
                            else if (valuetwo_else > cpptwo_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuetwo_else}</h2>
                                <h2>Computers score = ${cpptwo_else}</h2>` 
                            
                            }
                        }
                    }
                })





                //for the third number
                let boolthree_else = false;
                document.getElementById('three').addEventListener('click', function () {
                    if (boolthree_else == false) {
                        //computer-turn
                        let compthree_else = parseInt(document.getElementById('total-computer').value);
                        let computerthree_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cppthree_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computerthree_else;
                        compthree_else = parseInt(compthree_else) + parseInt(computerthree_else);
                        document.getElementById('total-computer').value = compthree_else;
                        if (computerthree_else == 3) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (boolthree_else == true) {
                        //your-turn
                        let flagthree_else = true;
                        if (flagthree_else == true) {
                            let valuethree_else = parseInt(document.getElementById('total-your').value);
                            valuethree_else = parseInt(valuethree_else) + parseInt(3);
                            document.getElementById('total-your').value = valuethree_else;
                            //computer random number;
                            let three_else = document.getElementById('three').value;
                            let computerthree_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppthree_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computerthree_else;
                            if (three_else == computerthree_else) {
                                flagthree_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuethree_else < cppthree_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                   //display dialog-box
                                   document.getElementById('contanier-8').style.display='block';
                                   document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                   document.getElementById('lose').style.display='block';
                                   document.getElementById('score').innerHTML=`<h2>Your score = ${valuethree_else}</h2>
                                   <h2>Computers score = ${cppthree_else}</h2>` 
                                }
                                else if (valuethree_else == cppthree_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuethree_else} </h2>
                                    <h2>Computers score = ${cppthree_else}</h2>` 
                                }

                            }
                            else if (valuethree_else > cppthree_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuethree_else}</h2>
                                <h2>Computers score = ${cppthree_else}</h2>`
                            }
                        }
                    }
                })









                //for the four number
                let boolfour_else = false;
                document.getElementById('four').addEventListener('click', function () {
                    if (boolfour_else == false) {
                        //computer-turn
                        let compfour_else = parseInt(document.getElementById('total-computer').value);
                        let computerfour_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cppfour_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computerfour_else;
                        compfour_else = parseInt(compfour_else) + parseInt(computerfour_else);
                        document.getElementById('total-computer').value = compfour_else;
                        if (computerfour_else == 4) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (boolfour_else == true) {
                        //your-turn
                        let flagfour_else = true;
                        if (flagfour_else == true) {
                            let valuefour_else = parseInt(document.getElementById('total-your').value);
                            valuefour_else = parseInt(valuefour_else) + parseInt(4);
                            document.getElementById('total-your').value = valuefour_else;
                            //computer random number;
                            let four_else = document.getElementById('four').value;
                            let computerfour_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppfour_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computerfour_else;
                            if (four_else == computerfour_else) {
                                flagfour_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuefour_else < cppfour_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                    document.getElementById('lose').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${valuefour_else}</h2>
                                    <h2>Computers score = ${cppfour_else}</h2>`                                    
                                }
                                else if (valuefour_else == cppfour_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
//dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuefour_else} </h2>
                                    <h2>Computers score = ${cppfour_else}</h2>` 
                                }

                            }
                            else if (valuefour_else > cppfour_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuefour_else}</h2>
                                <h2>Computers score = ${cppfour_else}</h2>`
                            }
                        }
                    }
                })





                //for the five number
                let boolfive_else = false;
                document.getElementById('five').addEventListener('click', function () {
                    if (boolfive_else == false) {
                        //computer-turn
                        let compfive_else = parseInt(document.getElementById('total-computer').value);
                        let computerfive_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cppfive_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computerfive_else;
                        compfive_else = parseInt(compfive_else) + parseInt(computerfive_else);
                        document.getElementById('total-computer').value = compfive_else;
                        if (computerfive_else == 5) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (boolfive_else == true) {
                        //your-turn
                        let flagfive_else = true;
                        if (flagfive_else == true) {
                            let valuefive_else = parseInt(document.getElementById('total-your').value);
                            valuefive_else = parseInt(valuefive_else) + parseInt(5);
                            document.getElementById('total-your').value = valuefive_else;
                            //computer random number;
                            let five_else = document.getElementById('five').value;
                            let computerfive_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppfive_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computerfive_else;
                            if (five_else == computerfive_else) {
                                flagfive_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuefive_else < cppfive_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                    document.getElementById('lose').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${valuefive_else}</h2>
                                    <h2>Computers score = ${cppfive_else}</h2>` 
                                }
                                else if (valuefive_else == cppfive_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuefive_else} </h2>
                                    <h2>Computers score = ${cppfive_else}</h2>`
                                }

                            }
                            else if (valuefive_else > cppfive_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuefive_else}</h2>
                                <h2>Computers score = ${cppfive_else}</h2>`
                            }
                        }
                    }
                })







                //for the six number
                let boolsix_else = false;
                document.getElementById('six').addEventListener('click', function () {
                    if (boolsix_else == false) {
                        //computer-turn
                        let compsix_else = parseInt(document.getElementById('total-computer').value);
                        let computersix_else = parseInt(Math.floor(Math.random() * 6 + 1));
                        let cppsix_else = parseInt(document.getElementById('total-your').value);
                        document.getElementById('computer-turn').value = computersix_else;
                        compsix_else = parseInt(compsix_else) + parseInt(computersix_else);
                        document.getElementById('total-computer').value = compsix_else;
                        if (computersix_else == 6) {
                            bool_else = true;
                            booltwo_else = true;
                            boolthree_else = true;
                            boolfour_else = true;
                            boolfive_else = true;
                            boolsix_else = true;
                            document.getElementById('heading-game').innerHTML = `Computer is out ,and its your' turn now: `
                            alert('Computer is out ,and its your turn now:');
                        }
                    }
                    else if (boolsix_else == true) {
                        //your-turn
                        let flagsix_else = true;
                        if (flagsix_else == true) {
                            let valuesix_else = parseInt(document.getElementById('total-your').value);
                            valuesix_else = parseInt(valuesix_else) + parseInt(6);
                            document.getElementById('total-your').value = valuesix_else;
                            //computer random number;
                            let six_else = document.getElementById('six').value;
                            let computersix_else = parseInt(Math.floor(Math.random() * 6 + 1));
                            let cppsix_else = parseInt(document.getElementById('total-computer').value);
                            document.getElementById('computer-turn').value = computersix_else;
                            if (six_else == computersix_else) {
                                flagsix_else = false;
                                document.getElementById('heading-game').innerHTML = `You are out! `
                                document.getElementById('game-end').style.display = 'block';
                                if (valuesix_else < cppsix_else) {
                                    document.getElementById('result').innerHTML = `OOPS!You lose the match,and computer wins.`
                                    alert('OOPS!You lose the match,and computer wins');
                                    //display dialog-box
                                    document.getElementById('contanier-8').style.display='block';
                                    document.getElementById('innerhtml').innerHTML=`OOPS!You lose the match,and computer wins.`;
                                    document.getElementById('lose').style.display='block';
                                    document.getElementById('score').innerHTML=`<h2>Your score = ${valuesix_else}</h2>
                                    <h2>Computers score = ${cppsix_else}</h2>`
                                }
                                else if (valuesix_else == cppsix_else) {
                                    document.getElementById('result').innerHTML = `Match is tie `
                                    alert('Match is tie');
                                    //dialog box
                                    document.getElementById('contanier-8').style.display = 'block';
                                    document.getElementById('innerhtml').innerHTML = `MAtch is tie`;
                                    document.getElementById('lose').style.display = 'block';
                                    document.getElementById('score').innerHTML = `<h2>Your score =${valuesix_else} </h2>
                                    <h2>Computers score = ${cppsix_else}</h2>`
                                }

                            }
                            else if (valuesix_else > cppsix_else) {
                                document.getElementById('heading-game').innerHTML = `You Wins! `
                                document.getElementById('game-end').style.display = 'block';
                                document.getElementById('result').innerHTML = `Congratulations ! You won the match:`
                                alert('Congratulations ! You won the match:');
                                //dialog box
                                document.getElementById('contanier-8').style.display = 'block';
                                document.getElementById('innerhtml').innerHTML = `Congratulations ! You won the match:`;
                                document.getElementById('win').style.display = 'block';
                                document.getElementById('score').innerHTML = `<h2>Your score = ${valuesix_else}</h2>
                                <h2>Computers score = ${cppsix_else}</h2>`
                            }
                        }
                    }
                })
















            }
        }

    })
//some made up functions
function user_toss() {
    let user = document.getElementById('head').value;
    let n = 0;
    if (user == "head") {
        n = 1;
    }
    else if (user == "tail") {
        n = 2;
    }
    return n;
}
document.getElementById('hand').addEventListener('mouseout', function () {
    document.getElementById('hand').style.fontSize = '40px';
})
document.getElementById('hand').addEventListener('mouseover', function () {
    document.getElementById('hand').style.fontSize = '50px';
})

document.getElementById('croxx').addEventListener('click', function () {
    document.getElementById('contanier-8').style.display = 'none';
})
