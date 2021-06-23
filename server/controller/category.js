const Category = require('../models/category');
const slugify = require('slugify');
const shortid = require("shortid");


function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if(parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined);
    }else{
        category = categories.filter(cat =>cat.parentId == parentId);
    }
    for(let cate of category){
        categoryList.push({ 
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            children: createCategories(categories, cate._id)
        });
    }
    return categoryList;
};

exports.addCategory =  (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: `${slugify(req.body.name)}-${shortid.generate()}`
    };
    if(req.file){
        categoryObj.categoryImage = "http://localhost:5000/public/" + req.file.filename;
    }
 if(req.body.parentId) {
     categoryObj.parentId = req.body.parentId;
 }   
 const cat = new Category(categoryObj);
 cat.save((error, category) => {
     if(error) return res.status(400).json({ error});
     if(category) {
         return res.status(201).json({ category });
     }
 });


}

exports.getCategory = (req, res) => {
    Category.find({})
    .exec((error, category) => {
        if(error) return res.status(400).json({ error });

        if(category) {
            const categoryList = createCategories(category);

            return res.status(200).json({ categoryList });
        }
    });
}

exports.updateCategory = async (req, res) => {

    const {name, parentId, _id, type} = req.body;
    const updateCategories = []
    if(name instanceof Array){
        for(let i=0; i<name.length; i++){


        const category = {
            name: name[i],
            type: type[i]
        };
        if(parentId[i] !== ""){
            category.parentId = parentId[i];
        }

        const updateCategory = await Category.findOneAndUpdate({_id: _id[i]}, category, {new: true});
        updateCategories.push(updateCategory);
     }
    return res.status(201).json({ updateCategories: updateCategories });
    }
    else{
        const category = {
            name,
            type
        };
        if(parentId !==""){
            category.parentId = parentId;
        }
        const updateCategory = await Category.findOneAndUpdate({_id }, category, {new: true});
        return res.status(201).json({ updateCategory});

    }
}

exports.deleteCategory = async (req, res) => {
    const {ids} = req.body.payload;
    const deleteCategories = []
    for(let i=0; i<ids.length; i++) {
        const deleteCategory = await Category.findByIdAndDelete({_id: ids});
        deleteCategories.push(deleteCategory);
    }
    if(deleteCategories.length == ids.length) {
         res.status(201).json({ message: "Delete Success"});
    }
    else{
         res.status(400).json({ message:"Delete Failed"})
    }
}