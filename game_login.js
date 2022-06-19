// Create function addUser()
function addUser() {

  player1_name = document.getUserById("player1_name_input").value;
  player2_name = document.getUserById("player2_name_input").value;

  // Get value of user by id player1_name_input and player2_name_input

  // Store these values locally
  localStorage.setItem("player1_name",player1_name);
  localStorage.setItem("player2_name",player2_name);


  //Assign 
  window.location = "game_page.html";


}