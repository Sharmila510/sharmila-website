
  var attempts = 0;

  function propose(response) {
    var questionElement = document.getElementById('question');
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var img = document.getElementById('image')
    
    // If the user says 'yes'
    if (response === 'yes') {
      questionElement.innerText = "I love you too!";
      img.src="2nd.gif"

      yesButton.style.display = 'none'; // Hide the 'Yes' button
      noButton.style.display = 'none'; // Hide the 'No' button
    } 
    // If the user says 'no'
    else if (response === 'no') {
      attempts++;
      switch (attempts) {
        case 1:
          noButton.innerText = "Would you like to reconsider?...";
          img.src="3rd.gif"

          break;
        case 2:
          noButton.innerText = "Are you sure...";
          img.src="4th.gif"
          break;
        case 3:
          noButton.innerText = "You can take your time...";
          img.src="5th.gif"
          break;
          case 4:
          noButton.innerText = "You know that I LOVE YOU?...";
          img.src="6th.gif"
          break;
          case 5:
          noButton.innerText = "babe...";
          img.src="7th.gif"
          break;
          case 6:
          noButton.innerText = "I'm asking again...";
          img.src="8th.gif"
          break;

        default:
          questionElement.innerText = "DO YOU LOVE ME?";
          img.src="9th.gif"
          noButton.style.display = 'none'; // Hide the 'No' button
          break;
      }
    } 
    // If the user enters anything other than 'yes' or 'no'
    else {
      questionElement.innerText = "Invalid response. Please refresh and try again.";
    }
  }
