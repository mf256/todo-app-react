import Item from './Item';

function Items(props) {
  return (
    <table class="table table-striped">
      <tbody>
        {props.items.map((item, index) => (
          <Item key={index} item={item} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Items;
