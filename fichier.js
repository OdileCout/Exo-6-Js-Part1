//c'est une fonction qui va prendre les éléments rentrer de l'id "submit" du fichier html, ensuite on lui assigne une ecoute d'évenement quand l'utilisateur clique sur le bouton
 document.getElementById('submit').addEventListener('click', getNumber);
 //On crée une fonction
 function getNumber(){
   var firstNumber = document.getElementById('firstNumber').value;
   var secondNumber = document.getElementById('firstNumber').value;
   //On sécurise le formulaire en le forcant a réagir seulement à des nombres
   if(secondNumber == '0'){
     alert('le deuxième chiffre doit être différent de 0');
 }else if((isNaN(firstNumber) == false) && (isNaN(secondNumber) == false)){
 var result = firstNumber % secondNumber;
 //On demande le resultat
 alert ('resultat ' + result);
 }
 else{
    alert('Veillez saisir un nombre');
 }
 }
