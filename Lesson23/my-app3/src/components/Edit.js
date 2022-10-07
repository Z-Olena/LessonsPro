const CustomEdit = (props) => {
  const onEdit = (event) => props.onEdit(event.target.value)

  return <input type='text' value={props.value} onChange={onEdit} />
}

export default CustomEdit
