var pickedColor ,clickedColor, gameMode = "easy", tryes = 0, resetAll, colors, colorsArray, squares = $('.square'), colors = { salmon: "rgb(250, 128, 114)", beige: "rgb(245, 245, 220)", violet: "rgb(238, 130, 238)", white: "rgb(255, 255, 255)", red: "rgb(255, 0, 0)", orange: "rgb(255, 168, 1)", yellow: "rgb(255, 255, 0)", cyan: "rgb(0, 255, 255)", blue: "rgb(0, 0, 255)", black: "rgb(0, 0, 0)", amaranth: "rgb(10, 10, 10)", brown: "rgb(165, 42, 42)", chocolate: "rgb(210, 105, 30)", green: "rgb(0, 128, 0)", olive: "rgb(128, 128, 0)", silver: "rgb(192, 192, 192)" },colorsArray = [ "salmon", "beige", "violet", "white", "red", "orange", "yellow", "cyan", "blue", "black", "amaranth", "brown", "chocolate", "green", "olive", "silver" ], selectedColors = [], pickeColor, won = false;
function idAndAtt(selector, text) {
  $(selector).text(text);
}

function pickRandomColor() {
  pickeColor = Math.floor(Math.random() * colorsArray.length), pickeColor = colorsArray[pickeColor], pickeColor = { name: pickeColor, rgbValue: colors[pickeColor] };
}
function changeSquaresColor() {
  for (var i = 0; i < squares.length; i++) {
    pickRandomColor();
    selectedColors.push(pickeColor);
    $(squares[i]).css("background", pickeColor.rgbValue);
  }
  pickedColor = selectedColors[Math.floor(Math.random() * squares.length)].name, pickedColor = { name: pickedColor, rgbValue: colors[pickedColor] };
  if (gameMode === "easy") {
    idAndAtt("#colorDisplay", pickedColor.name);
  }else {
    idAndAtt("#colorDisplay", pickedColor.rgbValue);
  }
}

$('.square').click(function() {
  tryes++;
  if (this.style.background === pickedColor.rgbValue && won === false) {
    won = true;
    idAndAtt("#reset", "Play Again!");
    idAndAtt("#message", "You win this time!");
    $('.square').css("background", pickedColor.rgbValue);
  }else if (won) {
    resetAll();
  }else {
    if (tryes > 3) {
      idAndAtt("#message", "Not Smart!!");
    }else {
      idAndAtt("#message", "Try Again!");
    }
  }
});

function GameMode(firtsId, secId, mode) {
  $(firtsId).addClass("selected");
  $(secId).removeClass("selected");
  gameMode = mode;
  resetAll();
}
$('#hardBtn').click(function() { GameMode("#hardBtn", "#easyBtn", "hard"); });
$('#easyBtn').click(function() { GameMode("#easyBtn", "#hardBtn", "easy"); });

function resetAll () {
  idAndAtt("#reset", "New Colors");
  idAndAtt("#message", "");
  tryes = 0, won = false, selectedColors = [];
  changeSquaresColor();
}
$(function () { resetAll(); });
