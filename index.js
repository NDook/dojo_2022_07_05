const scores = [
    {
      "player": "Maggie",
      "score": 762
    },
    {
      "player": "Annie",
      "score": 102
    },
    {
      "player": "Sanchez",
      "score": 882
    },
    {
      "player": "Dee",
      "score": 609
    }
  ];

function updateScore (array, name, points) {
  array.map(element => {
    element.player == name ? element.score += points : "";
  })
    //deuxième méthodes
    //array.filter((element) => element.player == name).map((player) => (player.score += points)) 
    return array;
}

function podium (scores) {
    const triScore = scores.sort((a, b) => b.score - a.score);
        return triScore.slice(0, 3);
        
};



console.log(updateScore(scores, "Sanchez", 100))
console.log(podium(scores))  
  /* 
  
  Should return 
  
  [
    {
      "player": "Maggie",
      "score": 762
    },
    {
      "player": "Annie",
      "score": 102
    },
    {
      "player": "Sanchez",
      "score": 982 (100 has been added here)
    },
    {
      "player": "Dee",
      "score": 609
    }
  ]
  
  */

  