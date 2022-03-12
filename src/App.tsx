import { useState, useEffect } from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {categories} from './data/categories';
import {items} from './data/items';
import {getCurrentMonth, filterListByMonth} from './helpers/dataFilters'
import {TableArea} from './components/TableArea/index';
import {InfoArea} from './components/InfoArea/index';
import {InputArea} from './components/InputArea/index';


let App = ()=>{
  let [list, setList] = useState(items);
  let [filteredList, setFilteredList] = useState<Item[]>([])
  let [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList( filterListByMonth( list, currentMonth) )
  }, [list, currentMonth])

  useEffect(()=>{
    let incomeCount = 0;
    let expense = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expense += filteredList[i].value;
      } else{
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expense);
  }, [filteredList])


  let handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth);
  }

  return(
    <C.Container>
      
      <C.Header>
        <C.HeaderText>Sistema de finanças pessoais</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        ></InfoArea>

        <InputArea></InputArea>

        <TableArea list={filteredList} />
      </C.Body>

    </C.Container>
  );
}

export default App;