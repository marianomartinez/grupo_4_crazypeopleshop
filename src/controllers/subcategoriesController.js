const path = require('path');
const fs = require('fs');



const subcategoriesController = {
    // POR AHORA NO NECESITAMOS SHOW DE SUBCATEGORIAS
    // showSubcategory: function (req, res) {
    //     // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')));
    //     // let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
    //     // let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));

    //     // let categoriaId = req.params.id;
    //     // let categoriaShow = categoriasActuales.find(categoria => categoria.id_categoria == categoriaId);
    //     // let subCategorias = subcategoriasActuales.filter(subcategoria => subcategoria.id_categoria == categoriaId);
        
    //     // //const galleryShow = productos.filter(producto => producto.id == subCategorias.id);
    //     // let galleryShow = [];
    //     // productos.forEach(producto => {
    //     //     for (i = 0; i < subCategorias.length; i++){
    //     //         if(producto.id == subCategorias[i].id){
    //     //             galleryShow.push(producto)
                    
    //     //         }
    //     //     }    
    //     // });

    //     let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/productos.json')));
    //     let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
    //     let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));

    //     let categoriaId = req.params.id;
    //     let categoriaShow = categoriasActuales.find(categoria => categoria.id_categoria == categoriaId);
    //     let subCategorias = subcategoriasActuales.filter(subcategoria => subcategoria.id_categoria == categoriaId);

    //     //const galleryShow = productos.filter(producto => producto.id == subCategorias.id);
    //     let galleryShow = [];
    //     productos.forEach(producto => {
    //         if (producto.id_categoria == categoriaShow.id_categoria) {
    //             galleryShow.push(producto)
    //         }
    //     });
        
    //     res.render(path.resolve(__dirname, '../views/categories/categoryShow'), {productos: productos, galleryShow: galleryShow,Title: categoriaShow.categoria});
    // },
    crud: function (req, res) {
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
        res.render(path.resolve(__dirname, '../views/subcategories/subcategoriesCRUD'), { Title: 'Sub Categorías', categorias: categorias, subcategorias: subcategorias });
    },
    add: function (req, res) {
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
        res.render(path.resolve(__dirname, '../views/subcategories/subcategoriesCRUD_add'), {Title: 'Subcategorías', categorias: categorias, subcategorias: subcategorias});
    },
    show: function (req, res) {
        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
        let subcategoriaId = req.params.id;
        let subcategoriaShow = subcategoriasActuales.find(subcategoria => subcategoria.id == subcategoriaId);
        let categoriaShow = categoriasActuales.find(categoria => categoria.id_categoria == subcategoriaShow.id_categoria);
        res.render(path.resolve(__dirname, '..', 'views', 'subcategories', 'subcategoriesCRUD_display'), { categoriaShow: categoriaShow, subcategoriaShow: subcategoriaShow, Title: 'Subcategoría-Visualizar' })
    },
    delete: function (req, res) {
        let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
        let subcategoriaId = req.params.id;
        const subcategoriasNuevos = subcategoriasActuales.filter(subcategoria => subcategoria.id != subcategoriaId)

        let subcategoriasJSON = JSON.stringify(subcategoriasNuevos, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../models/subcategorias.json'), subcategoriasJSON)
        res.redirect('/subcategories/crud');
    },
    save: function (req, res) {
        let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')))
        let subcategoriaUltimo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')))

        subcategoriaUltimo = subcategoriaUltimo.pop();




        let subcategoriaNuevo = {
            id: subcategoriaUltimo.id + 1,
            id_categoria: Number(req.body.categoria),
            subcategoria: req.body.subcategoria,
            descripcion: req.body.descripcion,
            imagen: req.file ? req.file.filename : ""
        }

        subcategoriasActuales.push(subcategoriaNuevo);

        let subcategoriaJSON = JSON.stringify(subcategoriasActuales, null, 2);

        fs.writeFileSync(path.resolve(__dirname, '../models/subcategorias.json'), subcategoriaJSON);
        res.redirect('/subcategories/crud');

    },
    edit: function (req, res) {
        let categoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')));
        let subcategoriaId = req.params.id;
        let subcategoriaEdit = subcategoriasActuales.find(subcategoria => subcategoria.id == subcategoriaId);
        // let categoriaEdit = categoriasActuales.find(categoria => categoria.id_categoria == subcategoriaEdit.id_categoria);
        res.render(path.resolve(__dirname, '..', 'views', 'subcategories', 'subcategoriesCRUD_edit'), { categorias: categoriasActuales, subcategoriaEdit: subcategoriaEdit, Title: 'Subcategoria-Edición'})

    },
    update: function (req, res) {

        let subcategoriasActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/subcategorias.json')))
        req.body.id = req.params.id;
        let subcategoriaUpdate = subcategoriasActuales.map(subcategoria => {    //id nombre descripcion precio imagen
            if (subcategoria.id == req.body.id) {
                subcategoria.id_categoria = Number(req.body.categoria),
                subcategoria.subcategoria = req.body.subcategoria,
                subcategoria.descripcion = req.body.descripcion,
                subcategoria.imagen = req.file ? req.file.filename : ""

                //return producto = req.body;
            }
            return subcategoria;
        });
        subcategoriaJSON = JSON.stringify(subcategoriaUpdate, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../models/subcategorias.json'), subcategoriaJSON);
        res.redirect('/subcategories/crud');

    }

}
module.exports = subcategoriesController;