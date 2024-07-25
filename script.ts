const tableForm = document.querySelector("#table-form") as HTMLFormElement;
const formInput = document.querySelector(".input_value") as HTMLInputElement;
const tableDiv = document.querySelector(".table_box") as HTMLDivElement;

tableForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const tableNum: number = Number(formInput.value);
    let fullTable = "";

    for (let index = 1; index <= 10; index++) {
        const number = tableNum * index;
        const tableGenerate = `${tableNum} X ${index} = ${number}`;
        fullTable += `<p>${tableGenerate}</p>`;
    }

    tableDiv.innerHTML = fullTable;
});
