import './listItem.component.css'
export function ListItem({item}){
  return (
    <li class="td-list-item">
      <div>
        {item.title}
      </div>
      <div></div>
      <div>
        {item.status}
      </div>
    </li>
  )
}