import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Detail() {
  // const {id, title, content} = useParams()

  // const [search, setSearch] = useSearchParams()
  // const id = search.get('id')
  // const title = search.get('title')
  // const content = search.get('content')

  const {state:{id, title, content}} = useLocation()
  
  return (
    <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{content}</li>
    </ul>
  )
}
