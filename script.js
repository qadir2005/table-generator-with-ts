var tableForm = document.querySelector("#table-form");
var formInput = document.querySelector(".input_value");
var tableDiv = document.querySelector(".table_box");
tableForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var tableNum = Number(formInput.value);
    var fullTable = "";
    for (var index = 1; index <= 10; index++) {
        var number = tableNum * index;
        var tableGenerate = "".concat(tableNum, " X ").concat(index, " = ").concat(number);
        fullTable += "<p>".concat(tableGenerate, "</p>");
    }
    tableDiv.innerHTML = fullTable;
});
