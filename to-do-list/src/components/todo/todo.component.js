import { useState } from 'react';
import { ListItem } from './listItem/listItem.component';
import './todo.component.css';
const DATA = [
  {category: 'household', title: 'clean litter box', status: 'not_done'},
  {category: 'household', title: 'vaccume', status: 'not_done'},
  {category: 'personal', title: 'clean kitchen', status: 'not_done'},
  {category: 'personal', title: 'get groceries', status: 'done'}
]

function ToDoList({items, completedFilter}){
  console.log(completedFilter)
  const categories = [];
    items.forEach(item=>{
      if(!completedFilter || (completedFilter && item.status !== 'done')){
        const catIndex = categories.findIndex(category=> category.category === item.category);
        if(catIndex < 0){
          categories.push({category:item.category, items:[item]})
        }
        else{
          categories[catIndex].items.push(item)
        }
      }
      
    })
  return (
    <ul class="td-categories">
      {categories.map(cat=>(<ListCategory category={cat} />))}
    </ul>
  )
}
function ListCategory({category}){
  
  return (
   <li>
    <div>
      <h3>{category.category}</h3>
    </div>
    <div>
      <ul>
        {category.items.map(item=>(<ListItem item={item}/>))}
      </ul>
    </div>
   </li>
  )
}

function ToDoFilters({incompleteOnly, onIncompleteOnlyChange}){
  return (
    <div>
      <form>
        <label>
          <input type="checkbox" checked={incompleteOnly} onChange={e=>onIncompleteOnlyChange(e.target.checked)} />
          hide complete
        </label>
      </form>
    </div>
  )
}

export function ToDo(){
  const [incompleteOnly, setIncompleteOnly] = useState(false);
  return (
    <div>
      <h1>ToDo List</h1>
      <div class="td-todo-list">
        <ToDoFilters incompleteOnly={incompleteOnly} onIncompleteOnlyChange={setIncompleteOnly} />
        <ToDoList items={DATA} completedFilter={incompleteOnly}/>
      </div>
    </div>

  )
}