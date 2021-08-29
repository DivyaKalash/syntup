import React,{useEffect} from 'react'
import "../Css/menu-header.css";
import {useSelector,useDispatch} from 'react-redux';
import {getAllCategory} from '../actions';

const MenuHeader = (props) => {
 const category = useSelector(state => state.category);
 const dispatch = useDispatch();

 useEffect(() => {
dispatch(getAllCategory());
 }, []);
    const showCategories = (categories) => {

        let categorylist = [];
        for (let category of categories) {
            categorylist.push(
                // {
                //     label: category.name,
                //     value: category._id,
                //     children: category.children.length > 0 && showCategories(category.children)
                // }
                <li key={category.name}>
                    {
                        category.parentId ? <a className="menuText" href={category.slug}>{category.name}</a> :
                        <span>{category.name}</span>
                    }
     
{category.children.length > 0 ? (<ul>{showCategories(category.children)}</ul>) : null }
                </li>
            );
        }
        return categorylist;
    }
    return (
        <div className="menuHeader">
            <ul>
                {category.categories.length > 0 ? showCategories(category.categories) : null}
            </ul>
        </div>
    )
}

export default MenuHeader;



