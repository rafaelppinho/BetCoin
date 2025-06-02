const selectElement = document.getElementById("defaltOption");

selectElement.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    console.log("Selected game type:", selectedValue);

    selectElement.classList.add("option-selected");
});
