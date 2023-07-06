function open3Table() {
    // Get the names of the players
    var player1 = prompt("Enter the name of player 1:");
    var player2 = prompt("Enter the name of player 2:");
    var player3 = prompt("Enter the name of player 3:");
  
    // Construct the URL for the table page with query parameters for player names
    var url = "threeTable.html?player1=" + player1 + "&player2=" + player2 + "&player3=" + player3;
  
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
  
    inputs.forEach(function(input, index) {
      var value = parseInt(input.value);
      if (isNaN(value)) {
        value = 0;
      }
      if (index % 3 == 0) {
        player1Score += value;
      } else if (index % 3 == 1) {
        player2Score += value;
      } else {
        player3Score += value;
      }
    });
  
    var player1ScoreElement = document.getElementById("player1score");
    var player2ScoreElement = document.getElementById("player2score");
    var player3ScoreElement = document.getElementById("player3score");
  
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    player3ScoreElement.textContent = player3Score;
  }
  
  function addRow() {
    var tableBody = document.querySelector("tbody");
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td><input value=''></td><td><input value=''></td><td><input value=''></td>";
    tableBody.appendChild(newRow);
  
    // Add event listener to the new row inputs
    var newInputs = newRow.querySelectorAll("input");
    newInputs.forEach(function(input) {
      input.addEventListener("change", function() {
        calculateScore();
      });
    });
  }
  