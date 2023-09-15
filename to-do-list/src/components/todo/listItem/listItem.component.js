import { useState } from 'react';
import './listItem.component.css';
const statuses = ['not_done','done']

export function ListItem({item}){
  const [itemStatus, setItemStatus] = useState(item.status)
  function changeStatus(){
    const status = statuses.findIndex(s=>s===item.status);
    const nextStatus = status+1 >= status.length?0:status+1;
    setItemStatus(statuses[nextStatus])

  }
  return (
    <li class="td-list-item">
      <div>
        {item.title}
      </div>
      <div></div>
      <div onClick={e=>changeStatus(item)}>
        {itemStatus}
      </div>
    </li>
  )
}