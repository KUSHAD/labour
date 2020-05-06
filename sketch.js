var database;
var form;
var labour;
function setup() {
	createCanvas(windowWidth, windowHeight);
	form = new Form();
	database=firebase.database();
}
function draw() {
	form.display();
	form.button.mousePressed(()=>{
		form.hide();
		form.update();
	})
}
