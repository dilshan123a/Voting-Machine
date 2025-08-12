let bjp_votes = 0;
let congress_votes = 0;
let aap_votes = 0;
let jdu_votes = 0;

let bjp_result = document.getElementById("bjpResult");
let congress_result = document.getElementById("congressResult");
let aap_result = document.getElementById("aapResult");
let jdu_result = document.getElementById("jduResult");

document.getElementById("bjpVote").addEventListener("click", () => {
    bjp_votes++;
    bjp_result.innerHTML = "Voters: " + bjp_votes;
});

document.getElementById("congressVote").addEventListener("click", () => {
    congress_votes++;
    congress_result.innerHTML = "Voters: " + congress_votes;
});

document.getElementById("aapVote").addEventListener("click", () => {
    aap_votes++;
    aap_result.innerHTML = "Voters: " + aap_votes;
});

document.getElementById("jduVote").addEventListener("click", () => {
    jdu_votes++;
    jdu_result.innerHTML = "Voters: " + jdu_votes;
});

document.getElementById("showResult").addEventListener("click", () => {
    let votes = [
        { name: "BJP", count: bjp_votes, element: bjp_result },
        { name: "Congress", count: congress_votes, element: congress_result },
        { name: "AAP", count: aap_votes, element: aap_result },
        { name: "JDU", count: jdu_votes, element: jdu_result }
    ];

    let maxVotes = Math.max(bjp_votes, congress_votes, aap_votes, jdu_votes);
    let winners = votes.filter(v => v.count === maxVotes && maxVotes > 0);

    votes.forEach(v => v.element.innerHTML = "");

    if (winners.length === 1) {
        winners[0].element.innerHTML = winners[0].name + " won elections";
    } else if (winners.length > 1) {
        winners.forEach(v => v.element.innerHTML = "Tie");
    } else {
        votes.forEach(v => v.element.innerHTML = "No Result");
    }

    bjp_votes = 0;
    congress_votes = 0;
    aap_votes = 0;
    jdu_votes = 0;
});

 function setRandomBackground() {
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      document.body.style.background = randomColor;
    }

    // Page load hote hi random background set
    setRandomBackground();

    // Har 2 second me background change
    setInterval(setRandomBackground, 3000);
