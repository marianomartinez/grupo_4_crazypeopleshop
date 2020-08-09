const path = require('path');
const fs = require('fs');
const db = require('../database/models/')

const Subcategory = db.Subcategory;
const Category = db.Subcategory;
//Express validator
let { check, validationResult, body } = require('express-validator');



const subcategoriesController = {
    
    crud: function (req, res) {

        Subcategory.findAll({
            include: [{ association: "category" }]
        })
            .then(subcategorias => {
                res.render(path.resolve(__dirname, '../views/subcategories/subcategoriesCRUD'), { Title: 'Subcategorias', subcategorias: subcategorias });
            })
            .catch(error => res.send(error))
       

    },
    show: function (req, res) {

        Subcategory
            .findByPk(req.params.id, {
                include: [{ association: "category" }]
            })
            .then(subcategoriaShow => {
                res.render(path.resolve(__dirname, '..', 'views', 'subcategories', 'subcategoriesCRUD_display'), { subcategoriaShow: subcategoriaShow, Title: 'Categoría-Visualizar' })
            })

    },
    add: function (req, res) {
        res.render(path.resolve(__dirname, '../views/categories/categoriesCRUD_add'), {
            Title: 'Categoría-Crear'
        });
    },
    delete: function (req, res) {

        Category
            .destroy({
                where: {
                    id: req.params.id
                },
                force: true
            }).then(confirm => {
                res.redirect('/categories/crud');
            })
    },
    save: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const _body = req.body
            _body.image = req.file ? req.file.filename : 'categoriavacia.jpg'
            Category
                .create(_body)
                .then(categoria => {
                    res.redirect('/categories/crud');
                })

        }
        else {

            return res.render(path.resolve(__dirname, '../views/categories/categoriesCRUD_add'),
                {
                    Title: 'Nueva Categoría',
                    errors: errors.mapped(),
                    old: req.body
                });

        }

    },
    edit: function (req, res) {
       
        let Querycategorias = Category.findAll();
        let QuerysubcategoriaEdit = Subcategory.findByPk(req.params.id)

        Promise.all([Querycategorias,QuerysubcategoriaEdit])
        .then(function([categorias,subcategoriaEdit]){
        res.render(path.resolve(__dirname, '..', 'views', 'subcategories', 'subcategoriesCRUD_edit'), { subcategoriaEdit: subcategoriaEdit,categorias:categorias, Title: 'Subcategoria-Editar' })

        }
    
        )
    },
    update: function (req, res) {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const _body = req.body
            _body.image = req.file ? req.file.filename : req.body.image_old
            Category
                .update(_body, {
                    where: { id: req.params.id }
                })
                .then(categoria => {
                    res.redirect('/categories/crud');
                })

        }
        else {

            Category
                .findByPk(req.params.id)
                .then(categoriaEdit => {
                    res.render(path.resolve(__dirname, '..', 'views', 'categories', 'categoriesCRUD_edit'), { categoriaEdit: categoriaEdit, Title: 'Categoria-Edición', errors: errors.mapped() })
                })

        }



    }

}
module.exports = subcategoriesController;