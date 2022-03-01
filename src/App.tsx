import { useState } from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {categories} from './data/categories';
import {items} from './data/items';

let App = ()=>{
  let [list, setList] = useState(items);
  let [currentMonth, setCurrentMonth] = useState();
  
  return(
    <C.Container>
      
      <C.Header>
        <C.HeaderText>Sistema de finanças pessoais</C.HeaderText>
      </C.Header>

      <C.Body>
        ...
      </C.Body>

    </C.Container>
  );
}

export default App;