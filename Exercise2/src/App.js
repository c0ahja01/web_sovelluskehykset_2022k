import React, { useState } from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import ShoppingListItem from './components/ShoppingListItem';
import styles from './App.module.css';
import './App.css';

export default function App(props) {

  const[ counterValue, setCounterValue ] = useState(0);
  //const[ shoppingListItem, setShoppingListItem ] = useState([

  const [items, setItems] = useState([
    { id: 1, value: 'Milk', qty: 5, unit: 'ltr', isChecked: true},
    { id: 2, value: 'Bananas', qty: 6, unit: 'pcs', isChecked: false},
    { id: 3, value: 'Bread', qty: 3, unit: 'x', isChecked: true},
    { id: 4, value: 'Eggs', qty: 16, unit: 'x', isChecked: false},
  ]);
  //]);
  const { applicationDescription, applicationName } = props;

  const handleItemCheckedToggle = (items) => {
    console.log("Toggling item status");
    console.log(items);

    let newitems = [...items];

    let itemClickedIndex = newitems.findIndex(i => items.id == i.id);
    if(itemClickedIndex != -1) {
      //itemClicked.isChecked = ! itemClicked.isChecked;

      let newElement = {...newitems[itemClickedIndex]}
      newElement.qty = newElement.qty;
      newitems[itemClickedIndex] = newElement;
      setItems(newitems);
    }

  }
  return <div className={ styles.shoppingList }>
    <Title 
      applicationDescription={ applicationDescription }
      applicationName={ applicationName }
    />
    <div>Laskuri: { counterValue }</div>
    <button onClick = { () => setCounterValue(counterValue + 1)}> Increase counter!</button>
    <ShoppingList items={ items } />
    
    <button onClick = { () => setItems(items)}>Add Milk</button>
    <button>Add Bananas</button>
    <button>Add Bread</button>
    <button>Add Eggs</button> 
  </div>
} 