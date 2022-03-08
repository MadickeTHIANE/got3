var randomImage = [];
//const path = "";
const path = "/storage/emulated/0/Download/randomToken/";
var tour = 0;
function fillImages() {
  randomImage = [
    [path.concat("a.txt"), path.concat("a.png")],
    [path.concat("a.txt"), path.concat("a.png")],
    [path.concat("b.txt"), path.concat("b.png")],
    [path.concat("b.txt"), path.concat("b.png")],
    [path.concat("c.txt"), path.concat("c.png")],
    [path.concat("c.txt"), path.concat("c.png")],
    [path.concat("d.txt"), path.concat("d.png")],
    [path.concat("d.txt"), path.concat("d.png")],
    [path.concat("e.txt"), path.concat("e.png")],
    [path.concat("f.txt"), path.concat("f.png")],
    [path.concat("g.txt"), path.concat("g.png")],
    [path.concat("g.txt"), path.concat("g.png")],
  ];
  const boutonPioche = document.getElementById("pioche");
  boutonPioche.disabled = tour != 2 ? false : true;
  const boutonRemp = document.getElementById("remplissage");
  boutonRemp.disabled = true;
}
function getRandomImage() {
  tour++;
  if (tour == 2) {
    const boutonSuivant = document.getElementById("suivant");
    boutonSuivant.disabled = false;
    const boutonPioche = document.getElementById("pioche");
    boutonPioche.disabled = true;
  }
  if (randomImage.length != 0) {
    var number = Math.floor(Math.random() * randomImage.length);
    var element = (document.getElementById("result").innerHTML =
      "<div>" +
      '<img src="' +
      randomImage[number][1] +
      '"' +
      'style="width:70%"/>' +
      '<p> <iframe src="' +
      randomImage[number][0] +
      '"' +
      'style="width:100%"/> </p>' +
      "</div>");
    randomImage.splice(number, 1);
    if (randomImage.length < 1) {
      const boutonPioche = document.getElementById("pioche");
      boutonPioche.disabled = true;
      const boutonRemp = document.getElementById("remplissage");
      boutonRemp.disabled = false;
    }
    if (randomImage.length < 1 && tour == 2) {
      const boutonRemp = document.getElementById("remplissage");
      boutonRemp.disabled = true;
    }
    return element;
  }
}
function allowNext() {
  tour = 0;
  const boutonSuivant = document.getElementById("suivant");
  boutonSuivant.disabled = true;
  if (randomImage.length > 0) {
    const boutonPioche = document.getElementById("pioche");
    boutonPioche.disabled = false;
  }
  if (randomImage.length < 1) {
    const boutonRemp = document.getElementById("remplissage");
    boutonRemp.disabled = false;
  }
}
