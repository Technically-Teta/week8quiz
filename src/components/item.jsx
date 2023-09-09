const Item = ({ item }) => {
    return (
        <>
        {!item.text ? null : (<div  data-testid= "item-id"    className="singleitem">{item.text}</div>)}
        </>
    )
  };
  
  export default Item;