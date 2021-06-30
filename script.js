window.onload = function () {
    {

        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var categories;
        var chosenCategory;
        var getHint;
        var word;
        var guess;
        var geusses = [];
        var live;
        var counter;
        var space;


        var showLives = document.getElementById("mylives");
        var showcategory = document.getElementById("scatagory");
        var getHint = document.getElementById("hint");
        var showClue = document.getElementById("clue");

        var buttons = function () {

            myButtons = document.getElementById('buttons');
            letters = document.createElement('ul');
            for (var i = 0; i < alphabet.length; i++) {
                letters.id = 'alphabet';
                list = document.createElement('li');
                list.id = 'letter';
                list.innerHTML = alphabet[i];
                check();
                myButtons.appendChild(letters);
                letters.appendChild(list);
            }
        }

        var selectCat = function () {
            if (chosenCategory === categories[0]) {
                catagoryName.innerHTML = "The chosen category Is best people in becode formation";
            }
            else if (chosenCategory === categories[1]) {
                catagoryName.innerHTML = ("The chosen category Is about favourite foods");
            }
            else if (chosenCategory === categories[2]) {
                catagoryName.innerHTML = ("The chosen category Is about best places in the world");
            }
        }

        result = function () {
            wordHolder = document.getElementById('hold');
            correct = document.createElement('ul');

            for (var i = 0; i < word.length; i++) {
                correct.setAttribute('id', 'guess');
                guess = document.createElement('li');
                guess.setAttribute('class', 'guess');

                if (word[i] === "-") {
                    guess.innerHTML = '-';
                    space = 1;
                }
                else {
                    guess.innerHTML = "_";
                }
                geusses.push(guess);
                wordHolder.appendChild(correct);
                correct.appendChild(guess);
            }
        }

        comments = function () {
            showLives.innerHTML = "Tu as" + " " + lives + " " + "vies";
            if (lives < 1) {
                showLives.innerHTML = "Tu as perdu !";
            }
            for (var i = 0; i < geusses.length; i++) {
                if (counter + space === geusses.length) {
                    showLives.innerHTML = "Tu as gagné !";
                }
            }
        }

        var animate = function () {
            var drawMe = lives;
            drawArray[drawMe]();
        }

        canvas = function () {
            myStickman = document.getElementById("stickman");
            context = myStickman.getContext('2d');
            context.beginPath();
            context.arc(60, 25, 10, 0, Math.PI * 2, true);
            context.stroke();
        }
        head = function () {
            myStickman = document.getElementById("stickman");
            context = myStickman.getContext('2d');
            context.beginPath();
            context.arc(60, 25, 10, 0, Math.PI * 2, true);
            context.stroke();
        }
        draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

            context.moveTo($pathFromx, $pathFromy);
            context.lineTo($pathTox, $pathToy);
            context.stroke();
        }
    }

    frame1 = function () {
        draw(0, 150, 150, 150);
    };

    frame2 = function () {
        draw(10, 0, 10, 600);
    };

    frame3 = function () {
        draw(0, 5, 70, 5);
    };

    frame4 = function () {
        draw(60, 5, 60, 15);
    };

    torso = function () {
        draw(60, 36, 60, 70);
    };

    rightArm = function () {
        draw(60, 46, 100, 50);
    };

    leftArm = function () {
        draw(60, 46, 20, 50);
    };

    rightLeg = function () {
        draw(60, 70, 100, 100);
    };

    leftLeg = function () {
        draw(60, 70, 20, 100);
    };

    drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

    check = function () {
        list.onclick = function () {
            if (lives > 0) {
                var geuss = (this.innerHTML);
                this.setAttribute("class", "active");
                this.onclick = null;
                for (var i = 0; i < word.length; i++) {
                    if (word[i] === geuss) {
                        geusses[i].innerHTML = geuss;
                        counter += 1;
                    }
                }
                var j = (word.indexOf(geuss));
                if (j === -1) {
                    lives -= 1;
                    comments();
                    animate();
                } else {
                    comments();
                }
            }
        }
    }
    play = function () {
        categories = [["marty", "mathieu", "frank", "joao"], ["hamburger", "pizza", "frite", "salade"], ["bruxelles", "charleroi", "dubai", "barcelone", "ankara"]
        ];
        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();
        geusses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    }
    play();

    hint.onclick = function () {
        hints = ["A really good guy", "A cool person but not that cool", "This guy is TOO MUCH STRONG", "This person is godlike"], ["MY favourite food", "Italian best creation ever", "Frenchs stole us this one", "For people who are too fat"], ["Main city in Belgium", "Best city in Belgium", "Porches city", "You can die there if u don't respect rules"]
            ;
        var catagoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "clue: - " + hints[catagoryIndex][hintIndex];
    };

    document.getElementById('reset').onclick = function () {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
    }
}