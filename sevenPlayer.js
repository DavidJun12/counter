function open7Table() {
    // Get the names of the players
    var player1 = prompt("Enter the name of player 1:");
    var player2 = prompt("Enter the name of player 2:");
    var player3 = prompt("Enter the name of player 3:");
    var player4 = prompt("Enter the name of player 4:");
    var player5 = prompt("Enter the name of player 5:");
    var player6 = prompt("Enter the name of player 6:");
    var player7 = prompt("Enter the name of player 7:");




  
    // Construct the URL for the table page with query parameters for player names
    var url = "sevenTable.html?player1=" + player1 + "&player2=" + player2 + "&player3=" + player3 + "&player4=" + player4 + "&player5=" + player5 + "&player6=" + player6 + "&player7=" + player7;
  
    // Open the table page in a new window
    var newWindow = window.open(url, "_blank");
  
    // Add event listener to receive message from table page
    window.addEventListener("message", function(event) {
      if (event.origin !== window.location.origin) {
        return;
      }
  
      // If message is to add a new row, call addRow function
      if (event.data === "add-row") {
        addRow();
      }
    });
  }
  
  function calculateScore() {
    var inputs = document.querySelectorAll("input");
    var player1Score = 0;
    var player2Score = 0;
    var player3Score = 0;
    var player4Score = 0;
    var player5Score = 0;
    var player6Score = 0;
    var player7Score = 0;




  
    inputs.forEach(function(input, index) {
      var value = parseInt(input.value);
      if (isNaN(value)) {
        value = 0;
      }
      if (index % 7 == 0) {
        player1Score += value;
      } else if (index % 7 == 1) {
        player2Score += value;
      } else if (index % 7 == 2) {
        player3Score += value;
      } else if (index % 7 == 3) {
        player4Score += value;
      } else if (index % 7 == 4) {
        player5Score += value;
      } else if (index % 7 == 5) {
        player6Score += value;
      } else {
        player7Score += value;
      }
    });
  
    var player1ScoreElement = document.getElementById("player1score");
    var player2ScoreElement = document.getElementById("player2score");
    var player3ScoreElement = document.getElementById("player3score");
    var player4ScoreElement = document.getElementById("player4score");
    var player5ScoreElement = document.getElementById("player5score");
    var player6ScoreElement = document.getElementById("player6score");
    var player7ScoreElement = document.getElementById("player7score");




  
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    player3ScoreElement.textContent = player3Score;
    player4ScoreElement.textContent = player4Score;
    player5ScoreElement.textContent = player5Score;
    player6ScoreElement.textContent = player6Score;
    player7ScoreElement.textContent = player7Score;




  }
  
  function addRow() {
    var tableBody = document.querySelector("tbody");
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td><input value=''></td><td><input value=''></td><td><input value=''></td><td><input value=''></td><td><input value=''><td><input value=''></td></td><td><input value=''></td>";
    tableBody.appendChild(newRow);
  
    // Add event listener to the new row inputs
    var newInputs = newRow.querySelectorAll("input");
    newInputs.forEach(function(input) {
      input.addEventListener("change", function() {
        calculateScore();
      });
    });
  }
  