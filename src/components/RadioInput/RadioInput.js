function RadioInput(props) {
  return (
    <label htmlFor={props.name}>
      <input
        type="radio"
        id={props.name}
        name="filter"
        onChange={() => {
          props.setFilter(props.name);
        }}
      />
      {props.title}
    </label>
  );
}

export default RadioInput;
