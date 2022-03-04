import { useState, useEffect } from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {categories} from './data/categories';
import {items} from './data/items';
import {getCurrentMonth, filterListByMonth} from './helpers/dataFilters'
import {TableArea} from './components/TableArea/index';
import {InfoArea} from './components/InfoArea/index';


let App = ()=>{
  let [list, setList] = useState(items);
  let [filteredList, setFilteredList] = useState<Item[]>([])
  let [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  
  useEffect(()=>{
    setFilteredList( filterListByMonth( list, currentMonth) )
  }, [list, currentMonth])

  return(
    <C.Container>
      
      <C.Header>
        <C.HeaderText>Sistema de finanças pessoais</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea currentMonth={currentMonth}></InfoArea>
        <TableArea list={filteredList} />
      </C.Body>

    </C.Container>
  );
}

export default App;