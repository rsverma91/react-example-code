import React, { useContext } from 'react';
import { v4 } from 'uuid';
import Context from '../Context';
import TodoItem from './TodoItem';

const MainArea = () => {
  const { data, isAllChecked, changeAllChecked, current } = useContext(Context);
  if (!data.length) {
    return null;
  }

  const filter = (items, type) => {
    switch (type) {
      case 'all': {
        return items;
      }
      case 'active': {
        return items.filter(activeItem => activeItem.isChecked === true);
      }
      case 'completed': {
        return items.filter(completedItem => completedItem.isChecked !== true);
      }
      default: {
        return items;
      }
    }
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isAllChecked()}
        onChange={() => changeAllChecked(isAllChecked())}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filter(data, current).map(item => (
          <TodoItem data={item} key={v4()} />
        ))}
      </ul>
    </section>
  );
};
export default MainArea;
