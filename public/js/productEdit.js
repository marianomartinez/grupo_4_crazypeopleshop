window.addEventListener('load',() => {
    let selectedCat = document.querySelector('#selectedCat');
    let dynamicSubcat = document.querySelector('#dynamicSubcat');
    let productId = document.querySelector('#productId').value;
    let stockReturn = document.querySelector('#stockReturn');
    let relReturn = document.querySelector('#relReturn');
    
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
    
    let selectedSize = document.querySelector('#selectedSize');
    selectedSize.addEventListener('change', async function () {
        let sizes = await fetch(`http://localhost:3000/api/productSizes/${productId}`);
        let sizeData = await sizes.json();
        sizeData.forEach(rel => {
            if(rel.sizeId == selectedSize.value){
            let thisSizeStock = `<label for="inputZip">Stock</label>
                                <input type="text" class="form-control" name="stock" value="${rel.stock}">`;
                                 
            let thisSizeRel = `<label for="relId">ProductSizeStock-Relation</label>
                                <input type="text" name="relId" value="${rel.id}">`;
            stockReturn.innerHTML = thisSizeStock;
            relReturn.innerHTML = thisSizeRel;
        }});

    });
});