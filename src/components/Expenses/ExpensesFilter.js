import "./ExpensesFilter.css"

export const ExpensesFilter = (props) =>
{
    const onFilterHandler = (event) =>
    {
        props.onFilterExpenseData(event.target.value);
    }
    return (
      <div className="expenses-filter">
          <div className="expenses-filter__control">
              <label>Filter By Year :</label>
              <select value={props.selected} onChange={onFilterHandler}>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
              </select>
          </div>
      </div>
    );
}