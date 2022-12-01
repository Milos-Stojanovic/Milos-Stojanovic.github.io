let answers = [4, 1, 2, 4, 3, 2, 3, 1, 4, 2];
let answered = [];
let correctMessages = [];
let score = 0


/* forming messages for correct answers */
correctMessages.push("Kareem Abdul-Jabbar won the award a record six times. Both Bill Russell and Michael Jordan won the award five times, while Wilt Chamberlain won the award four times.")
correctMessages.push("Sidney Moncrief is the only guard to have won this award twice. All other guard winners have won it only once.")
correctMessages.push("Tim Duncan never recorded an official quadruple-double, though it is debatable whether he accomplished the feat in Game 6 of 2003 NBA Finals.")
correctMessages.push("Interesting fact: although Lebron averages 27-7-7 for his career, he never had a game when he posted exactly 27 points, 7 assists and 7 rebounds.")
correctMessages.push("Not only does Jamal Crawford hold this record with 4, but he also has most 4-point plays in NBA history with 54. Next two players on that list are James Harden with 36 and JJ Redick with 25.")
correctMessages.push("Charles Barkley was given the nickname “The Round Mound Of Rebound” at the University of Auburn because of his large body and ability to rebound the basketball. Barkley was an excellent rebounder during his playing career, and he is still considered one of the best ever.")
correctMessages.push("Patrick McCaw is the last player to accomplish this feat, winning two titles with Warriors in 2017 and 2018, and then with the Raptors in 2019.")
correctMessages.push("Nikola Jokić passed Wilt Chamberlain on the all-time triple-double list by a center with 79 on 4th of November 2022.")
correctMessages.push("Lakers and Celtics have both won 17 titles, which gives them higher chance of winning a title then Hornets, Nets, Clippers and Timberwolves have of winning a single regular-season game")
correctMessages.push("James Naismith was an Canadian-American physical educator, physician, Christian chaplain and sports coach. In 1891 he designed the game of basketball while he was teaching at the International YMCA Training School.")

function checkAnswer(question, answer) {
    if (answered.includes(question, 0)) return; /* question already answered */
    if (answer == answers[question-1]) {
        /* dodaj poene */

        /* promena boje dugmeta */
        changeButtonColor(question, answer, true)
    }
    else {
        /* promena boje dugmeta */
        changeButtonColor(question, answer, false)
    }
    answered.push(question)
}

function changeButtonColor(question, answer, correct) {
    let button = document.getElementById("q"+question+"-"+answer)
    let message = document.getElementById("m"+question)
    button.className = "answered"
    if (correct){
        button.style.backgroundColor = "green";
        message.className = "message-correct";
        message.innerHTML = correctMessages[question-1];
    }
    else {
        button.style.backgroundColor = "red";
        message.className = "message-correct";
        message.innerHTML = correctMessages[question-1];
        button = document.getElementById("q"+question+"-"+answers[question-1])
        button.style.backgroundColor = "green";
    }
    message.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});

    /* change colors of other buttons */
    for (let i = 1; i < 5; i++) {
        if (i == answer) continue;
        button = document.getElementById("q"+question+"-"+i)
        button.className = "answered"
    }
}

/*wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
        alert("DUGMEEE!");
        
        // now check if answer is right for given question
        for (let i = 0; i < numOfQuestions; i++) {
            if (event.target.innerHTML.contains("D:") && answers[i] == 4){
                alert("TAKOEE!");
            }
        }
    }
});*/