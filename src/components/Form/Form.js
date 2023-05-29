import RadioInput from "../RadioInput/RadioInput";
function Form(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.setFilteredUsers(
          props.filterByKey(props.users, props.filter, props.searchValue)
        );
      }}
    >
      <div>
        <RadioInput name="name" title="Name" setFilter={props.setFilter} />
        <RadioInput name="email" title="Email" setFilter={props.setFilter} />
        <RadioInput name="phone" title="Phone" setFilter={props.setFilter} />
      </div>
      <input
        type="text"
        id="search"
        name="search"
        placeholder={props.filter}
        onChange={(e) => {
          props.setSearchValue(e.target.value);
        }}
      />
      <button type="submit">Find</button>
    </form>
  );
}

export default Form;

/*
props.users 
props.filter
props.searchValue
props.setFilter
props.setFilteredUsers
props.setSearchValue
props.filterByKey
*/
