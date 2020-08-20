window.addEventListener('load',() => {
    let selectedCat = document.querySelector('#selectedCat');
    let dynamicSubcat = document.querySelector('#dynamicSubcat');

    selectedCat.addEventListener('change', async function () {
        let subcatValue = await fetch(`http://localhost:3000/api/subcategories/${this.value}`);
        let subcatData = await subcatValue.json();
        dynamicSubcat.innerHTML = '<option disabled selected> Seleccione Subcategoría </option>';
        subcatData.forEach(subcategoria => {
            var option = document.createElement("option");
            option.value = subcategoria.id;
            option.text = subcategoria.name;
            dynamicSubcat.add(option);
        })
    })
});