import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import { getAllCategory, addCategory } from '../../actions';
import Input from '../../components/UI/Input';

const Category = (props) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const [categoryName, setcategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log('Category.js')
        dispatch(getAllCategory());

    }, []);

    const handleClose = () => {
        const form = new FormData();


        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('CategoryImage', categoryImage);
        dispatch(addCategory(form));

        // const cat = {
        //     categoryName,
        //     parentCategoryId,
        //     categoryImage
        // };

       


        setShow(false);
    }
    const handleShow = () => setShow(true);

    const showCategories = (categories) => {

        let categorylist = [];
        for (let category of categories) {
            categorylist.push(
                <li key ={category.name}>
                    {category.name}
                    {category.children.length >0 && <ul>{showCategories(category.children)}</ul>}
                    
                </li>
               
            );
        }
        return categorylist;
    }

    const createCategoryList = (categories, options = []) => {
        for(let category of categories){
            options.push({value:category._id, name:category.name });
            if(category.children.length > 0){
                createCategoryList(category.children, options)
            }
        }
        
        return options;
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }





    return (
        <div>
            <h1>categories</h1>
            <button onClick={handleShow}>Add</button>

            <ul>
                
                    {showCategories(category.categories)}
                
            </ul>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        value={categoryName}
                        placeholder={'Category Name'}
                        onChange={(e) => setcategoryName(e.target.value)}
                    />

                    <select 
                    className = "form-control"
                    value = {parentCategoryId}
                    onChange = {(e) => setParentCategoryId(e.target.value)}>

                        <option>Select category</option>
                        {
                            createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)    
                        }
                    </select>

                    <input type="file" name= "categoryImage" onChange={handleCategoryImage} />



                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Category;
