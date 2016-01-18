var questionArray = [
  ["In politics:", "a. I don't care ", "b. I have very strong opinions ", "c. Galactic Senate is better than an Empire ", "d. I'm racist, but I want to be president"], 
  ["On a lazy day:", "a. I want to just sleep in the sunlight ", "b. I buy stuff ", "c. I hang out with firends ", "d. I watch movies"], 
  ["My friends:", "a. make fun of me ", "b. like being with me ", "c. prank me ", "d. I don't have friends"],
  ["My major is:", "a. sciences ", "b. politics/communications ", "c. buisness ", "d. other"],
  ["In my free time:", "a. I go on adventures with my friends ", "b. I read a good book ", "c. I watch a movie ", "d. I work. Free time is for the lazy"]
];

//populate document
for (var i = 0; i < questionArray.length; i++){
  document.write("<form><span class='question'>" + questionArray[i][0] + "</span><br>");
  for (var x = 1; x < 5; x++){
    document.write("<input type='radio' class='answer' name='answer' value='" + questionArray[i][x] + "'>" + questionArray[i][x] + "<br>");

  }
  document.write("</form><br>");
}

var characterAnswer = [
	[0, 0, 0, 0, 'https://media.giphy.com/media/6clI1ljdm4YxO/giphy.gif'],
	[0, 1, 1, 1, 'https://media.giphy.com/media/H2ZHF0zIrCJLG/giphy.gif'],
	[0, 2, 2, 2, 'https://media.giphy.com/media/Vg0JstydL8HCg/giphy.gif'],
	[0, 3, 3, 3, 'https://media.giphy.com/media/MMQrQQ87G2MmY/giphy.gif']
	
];

//add click check event listeners
var inputs = document.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', check);
}

var userAnswers = [];

//check questions answers
function check(){
  userAnswers = [];
  var c = 0;
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].checked) {
      userAnswers.push(i%4);
      c++;
    }
  }
  if(c==questionArray.length) rate();
}

//rate the answers per char
function rate(){
  console.log(userAnswers);
  for(var i = 0; i < userAnswers.length; i++){
    for(var j = 0; j < characterAnswer.length; j++){
      characterAnswer[j][5] = 0;
      for(var x = 0; x < 5; x++){
        if(userAnswers[i] == characterAnswer[j][x])
          characterAnswer[j][5]++;
      }
    }
  }
  answer();
}

function answer(){
  var a = 0, t;
  for(var j = 0; j < characterAnswer.length; j++){
    if(characterAnswer[j][5] > a) {
      a = characterAnswer[j][5];
      t = characterAnswer[j][4];
    }
  } 
  //var gif = "<p>" + t + "</p>";
  //console.log(gif);
  var img = document.createElement("img");
  img.src = t;

  var src = document.getElementById("header")

  $('#quiz_gif').attr('src', t);
  $('#quiz_gif').css('min-width', '700px');
  // change style min-width: 700px;


  var gif = '<img src="' + t + '" id="answerGif" >';
}