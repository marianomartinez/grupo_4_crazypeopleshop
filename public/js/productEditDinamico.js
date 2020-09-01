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
    
    let productId = document.querySelector('#productId').value;
    let stockReturn = document.querySelector('#stockReturn');
    let relReturn = document.querySelector('#relReturn');
    let selectedSize = document.querySelector('#selectedSize');
    let otherSizesRow = document.querySelector('#otherSizesRow');
    selectedSize.addEventListener('change', async function () {
        let sizes = await fetch(`http://localhost:3000/api/productSizes/${productId}`);
        let sizeData = await sizes.json();
        sizeData.forEach(rel => {
            if(rel.sizeId == selectedSize.value){
                let thisSizeStock = `<label for="inputZip">Stock</label>
                                    <input type="text" class="form-control" name="stock" value="${rel.stock}"><span id="errorStock"></span>`;
                let thisSizeRel = `<label for="relId">ProductSizeStock-Relation</label>
                                    <input type="text" name="relId" value="${rel.id}">`;
                stockReturn.innerHTML = thisSizeStock;
                relReturn.innerHTML = thisSizeRel;
            };
        });
        if (selectedSize.value == 'otherSizes') {
            otherSizesRow.classList.remove('d-none');
            let sizeList = await fetch(`http://localhost:3000/api/sizeList`);
            let sizeListData = await sizeList.json();
            let filteredSizeList = sizeListData;
            for (let i = 0; i < sizeListData.length; i++) {
                for (let j = 0; j < sizeData.length; j++) {
                    if (sizeListData[i].id == sizeData[j].sizeId) {
                        filteredSizeList.splice(i, 1);
                    }
                }
            }
            filteredSizeList.forEach(otherSize => {
                var sizeOption = document.createElement("option");
                sizeOption.value = otherSize.id;
                sizeOption.text = otherSize.eusize;
                otherSizes.add(sizeOption);
            })
        }
    });
});