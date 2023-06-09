import { useEffect, useRef, useState } from 'react';
import { useCategories } from '../../../hooks/queries/useCategories'
import './CategoriesFilter.css'

const CategoriesFilter = ({ formId, onChangeCategories, initialCategories = [] }) => {
    const { data, isLoading, isError, error } = useCategories();
    const [categoryIdList, setCategoryIdList] = useState(initialCategories);
    const isFirstRender = useRef(true);

    const addToList = (categoryId) => {
        const copyList = [...categoryIdList];
        copyList.push(categoryId);
        
        const copyNoRepeats = [...new Set(copyList)];
        if (copyNoRepeats.length === data.length) setCategoryIdList([]);
        else setCategoryIdList(copyNoRepeats);
    }

    const removeFromList = (categoryId) => {
        const newList = categoryIdList.filter(id => id != categoryId);
        setCategoryIdList(newList);
    } 

    const handleChange = (isCheked, categoryId) => {
        if(!categoryId) setCategoryIdList([]);
        if(isCheked) addToList(categoryId);
        else removeFromList(categoryId);
    }

    const handleEmpty = (isCheked) => {
        if (isCheked) setCategoryIdList([]);
    }

    useEffect(() => {
        if (isFirstRender.current) isFirstRender.current = false;
        else onChangeCategories();
    }, [categoryIdList, onChangeCategories]);

    if  (isLoading) return <p>Loading categories...</p>

    if (isError) return <p>{error.message ?? 'No categories'}</p>  

 return (
    <fieldset form={formId}>
        <length>Categories</length>

        <div>
            <input type="checkbox" onChange={(e)=> handleEmpty(e.target.checked)} checked={categoryIdList.length === 0} form={formId} name="categories" id="all_categories" value=""/>
            <label htmlFor="all_categories">All</label>

            
        </div>

        {data.map(category => (
                                <div key={category.id}>
                                    <input type='checkbox' onChange={(e)=>handleChange(e.target.checked, category.id)} checked={categoryIdList.includes(category.id)} name='categories' form={formId} id={category.id + "category"} value={category.id}></input>
                                    <label htmlFor={category.id + "category"}>{category.name}</label>
                                </div>))}

    </fieldset>
  )
}

export default CategoriesFilter