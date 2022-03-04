import {Item} from '../types/Item';

export let getCurrentMonth = ()=>{
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
};

export let filterListByMonth = (list: Item[], date:string): Item[] =>{
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ){
            newList.push(list[i]);
        }
    }
    return newList;
};

export let formatDate = (date: Date): string =>{
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date. getDate();

    return `${day}/${month}/${year}`;
};

let addZeroToDate = (n:number): string => n < 10 ? `0${n}` : `${n}`;