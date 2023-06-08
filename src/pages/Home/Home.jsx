
import { useCallback, useId, useRef } from 'react';
import CategoriesFilter from '../../components/Home/CategoriesFilter/CategoriesFilter';
import ProductList from '../../components/Home/ProductList/ProductList'



import './Home.css'
import { Form, useSubmit } from 'react-router-dom';
const Home = () => {
  const formId = useId();
  const submit = useSubmit();
  const formRef = useRef();

  const handleChangeCategories = useCallback(
      ()=> {
        if (!formRef.current) return;

        submit(formRef.current);
      },
      [submit]
    );

  return (
    <section className='home_container'>
      <aside>
        <CategoriesFilter formId={formId} onChangeCategories={handleChangeCategories}/>
      </aside>
      <section>
        <Form id={formId} ref={formRef}></Form>
        <ProductList/>
      </section>

    </section>
  )
}

export default Home