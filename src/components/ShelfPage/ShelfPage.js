import React from 'react';
import {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector(store => store.items);

  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  let newItem = {
    description: description,
      image_url: image
  }


  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
}, []);

  const newDescription = (event) => {
    setDescription(event.target.value)
  }

  const newImage = (event) => {
    setImage(event.target.value)
  }

  const saveItem = () => {
    console.log(newItem);
    dispatch({ type: 'ADD_ITEM', payload: newItem })
  }


  return (
    <div className="container">
      {JSON.stringify(items)}
      <input className="description" onChange={newDescription} type="text" placeholder="Description"/>
      <input className="image" onChange={newImage} type="text" placeholder="Image url"/>
      <button onClick={saveItem}>Submit</button>
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
