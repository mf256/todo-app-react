function Item(props) {
  return (
    <tr>
      <td scope="row">{props.index + 1}</td>
      <td>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={'checkboxitem-' + props.index}
        />
      </td>
      <td>
        <label
          for={'checkboxitem-' + props.index}
          className={props.item.isCompleted ? 'done' : ''}
        >
          {props.item.name}
        </label>
      </td>
      <td className="text-end">
        <button
          className="btn btn-danger button-delete"
          type="button"
          id="button-addon2"
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default Item;
