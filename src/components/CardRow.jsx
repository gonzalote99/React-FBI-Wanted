import {useEffect, useState} from 'react';
import useFetch from '../hooks/useFetch';
import styled from 'styled-components';
import Search from './Search';
import Loading from './Loading';
import Error from './Error';
import Card from './Card';
import PageCtrl from './PageCtrl';

const CardRow = ({page, search, setSearch, setPage}) => {
  const [list, setList] = useState([]);
  const {data, error, isLoading} = useFetch(
    "https://api.fbi.gov/wanted/v1/list", JSON.stringify({params: {page, title: search}})
  );

  useEffect(() => {
   setList(data?.items);


  }, [data]);

  return(
   <>
   <Search search={search} setSearch={setSearch} setPage={setPage} />
     <Content className='container'>
       {isLoading ? (
     <Loading />
       ) : error ? (
     <Error errMsg={error} />
       ) : Array.isArray(list) && list.length ? (
     list.map((item) => ( 
       <Card 
          key={item.uid}
         uid={item.uid}
         title={item.title}
         image={item.images[0].thumb}
         subject={item.subjects[0]}
         />
     ))
       ) : ( <Card subject={"not results"} />
           )} 
     </Content>
     <PageCtrl page={page} setPage={setPage} />
   </>

  );
};

const Content = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
background-color: #ccc;
border: 1px solid #ccc;
grid-gap: 1px;

`;

export default CardRow;