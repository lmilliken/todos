import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, ownProps) => {
  console.log({ state });
  // ownProps.match is provided by withRouter at bottom of this file
  return { todos: getVisibleTodos(state, ownProps.match.params.filter || 'all') };
};

// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   },
// });

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
  )(TodoList)
);

export default VisibleTodoList;
