// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let height = $("#input_height");
let width = $("#input_width");
const submitButton = $("#sizePicker input[type=button]")

/************* Height & Width functions *************/

height.keyup(function(){
	heightValue = height.val();
	$(height).attr("value", heightValue);
});

width.keyup(function(){
	widthValue = width.val();
	$(width).attr("value", widthValue);
});


/************* Grid function *************/

const table = $("#pixel_canvas");

function makeGrid() {
for(let i=1; i<=heightValue; i++){
	$("table").append("<tr></tr>");
	for(let j=1; j<=widthValue; j++){
		$("tr:last").append("<td></td>");
	};
};
};

/***** Alternate way, using InsertRow/Cell *****/

/*const table = document.getElementById('table_id');
for (let i = 0; i < 10; i++) {
    // Inserts 10 rows into the table
    const row = table.insertRow(i);
    for (let j = 0; j < 10; j++) {
        // Inserts 10 cells into each of the rows
        const cell = row.insertCell(j);
    }
}*/



submitButton.click(function(){
	$("table").empty();
	makeGrid();
});



/************* Color function *************/



let colorPicker = $("#colorPicker");


$("table").on("click", "td", function(){
	let colorChange = colorPicker.val();
	$(this).css("background-color", colorChange);
});
















