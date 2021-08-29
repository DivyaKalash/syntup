import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import { getAllCategory, addCategory, updateCategories } from '../../actions';
import Input from '../../components/UI/Input';
import CheckboxTree from 'react-checkbox-tree';
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";

const Category = (props) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId,] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false);

    // useEffect(() => {
    //     console.log('Category.js')
    //     dispatch(getAllCategory());

    // }, []);

    const handleClose = () => {
        const form = new FormData();


        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('CategoryImage', categoryImage);
        dispatch(addCategory(form)).then((result) => {
            if (result) {
                dispatch(getAllCategory());
            }
        });

        // const cat = {
        //     categoryName,
        //     parentCategoryId,
        //     categoryImage
        // };



        setCategoryName("");
    setParentCategoryId("");
        setShow(false);
    }


    const handleShow = () => setShow(true);

    const showCategories = (categories) => {

        let categorylist = [];
        for (let category of categories) {
            categorylist.push(
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && showCategories(category.children)
                }
            );
        }
        return categorylist;
    }

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name, parentId: category.parentId, type: category.type });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }


    const updateCategory = () => {
        updateCheckedAndExpandedCategories();
        setUpdateCategoryModal(true);
        // const categories = createCategoryList(category.categories);
        // const checkedArray = [];
        // const expandedArray = [];
        // checked.length > 0 && checked.forEach((categoryId, index) => {
        //     const category = categories.find((category, _index) => categoryId == category.value)
        //     category && checkedArray.push(category);
        // })
        // expanded.length > 0 && expanded.forEach((categoryId, index) => {
        //     const category = categories.find((category, _index) => categoryId == category.value)
        //     category && expandedArray.push(category);
        // })

        // setCheckedArray(checkedArray);
        // setExpandedArray(expandedArray);



        // console.log({ checked, expanded, categories, checkedArray, expandedArray });
    };

    const updateCheckedAndExpandedCategories = () => {
        const categories = createCategoryList(category.categories);
        const checkedArray = [];
        const expandedArray = [];
        checked.length > 0 &&
          checked.forEach((categoryId, index) => {
            const category = categories.find(
              (category, _index) => categoryId == category.value
            );
            category && checkedArray.push(category);
          });
        expanded.length > 0 &&
          expanded.forEach((categoryId, index) => {
            const category = categories.find(
              (category, _index) => categoryId == category.value
            );
            category && expandedArray.push(category);
          });
        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);
      };

    const handleCategoryInput = (key, value, index, type) => {
        if (type == "checked") {
            const updatedCheckedArray = checkedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item);
            setCheckedArray(updatedCheckedArray);
        } else if (type == "expanded") {
            const updatedExpandedArray = expandedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item);
            setExpandedArray(updatedExpandedArray);
        }
    };

    const updateCategoriesForm = () => {
        const form = new FormData();

        expandedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append("type", item.type);
        });
        checkedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append("type", item.type);
        });
        dispatch(updateCategories(form));

        setUpdateCategoryModal(false);
    };

    const renderUpdateCategoriesModal = () => {
        return (
            <div>
                {/* Edit Category */}

                <Modal show={updateCategoryModal}
                    handleClose={updateCategoriesForm}
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                                <h6>Expanded</h6>
                            </Col>
                        </Row>
                        {
                            expandedArray.length > 0 &&
                            expandedArray.map((item, index) =>
                                <Row key={index}>
                                    <Col>
                                        <Input
                                            value={item.name}
                                            placeholder={'Category Name'}
                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'expanded')}
                                        />
                                    </Col>
                                    <Col>
                                        <select
                                            className="form-control"
                                            value={item.parentId}
                                            onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')}>

                                            <option>Select category</option>
                                            {
                                                createCategoryList(category.categories).map(option =>
                                                    <option key={option.value} value={option.value}>{option.name}</option>)
                                            }
                                        </select>
                                    </Col>

                                    <Col>

                                        <select
                                            className="form-control"
                                            value={item.type}
                                            onChange={(e) =>
                                            handleCategoryInput(
                                                "type",
                                                e.target.value,
                                                index,
                                                "expanded"
                                            )
                                            }
                                        >
                                            <option value="">Select Type</option>
                                            <option value="store">Store</option>
                                            <option value="product">Product</option>
                                            <option value="page">Page</option>
                                        </select>

                                    </Col>
                                </Row>
                            )
                        }
                        <h6>Checked Categories</h6>
                        {
                            checkedArray.length > 0 &&
                            checkedArray.map((item, index) =>
                                <Row key={index}>
                                    <Col>
                                        <Input
                                            value={item.name}
                                            placeholder={'Category Name'}
                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'checked')}
                                        />
                                    </Col>
                                    <Col>
                                        <select
                                            className="form-control"
                                            value={item.parentId}
                                            onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')}>

                                            <option>Select category</option>
                                            {
                                                createCategoryList(category.categories).map(option =>
                                                    <option key={option.value} value={option.value}>{option.name}</option>)
                                            }
                                        </select>
                                    </Col>

                                    <Col>

                                        <select
                                            className="form-control"
                                            value={item.type}
                                            onChange={(e) =>
                                            handleCategoryInput(
                                                "type",
                                                e.target.value,
                                                index,
                                                "checked"
                                            )
                                            }
                                        >
                                            <option value="">Select Type</option>
                                            <option value="store">Store</option>
                                            <option value="product">Product</option>
                                            <option value="page">Page</option>
                                        </select>

                                    </Col>
                                </Row>
                            )
                        }







                        {/* <input type="file" name= "categoryImage" onChange={handleCategoryImage} /> */}



                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" onClick={updateCategoriesForm}>
                            Update Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    const renderAddCategoryModal = () => {
        return (
            <div> 
                            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        value={categoryName}
                        placeholder={'Category Name'}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />

                    <select
                        className="form-control"
                        value={parentCategoryId}
                        onChange={(e) => setParentCategoryId(e.target.value)}>

                        <option>Select category</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </select>

                    <input type="file" name="categoryImage" onChange={handleCategoryImage} />



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





    return (
        <div style={{marginTop: "75px", marginLeft: "100px"}}>
            {/* <h1>categories</h1> */}
            <button onClick={handleShow}>Add</button>

            <CheckboxTree

                nodes={showCategories(category.categories)}

                checked={checked}
                expanded={expanded}
                onCheck={(checked) => { setChecked(checked) }}
                onExpand={(expanded) => { setExpanded(expanded) }}


                icons={{
                    check: <AiFillCheckCircle />,
                    uncheck: <AiOutlineCheckCircle />,
                    expandClose: <BiRightArrow />,
                    expandOpen: <BiDownArrow />,
                    halfCheck: <AiOutlineCheckCircle />,

                }}
            />

            {/*edit button ka idhar h */}

            <Row>
                <button>Delete</button>
                <button onClick={updateCategory}>Edit</button>
            </Row>
        {renderAddCategoryModal()}
           {renderUpdateCategoriesModal()} 



        </div>
    );
}

export default Category;
