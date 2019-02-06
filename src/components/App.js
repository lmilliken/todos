import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => {
  // extreme destructuring, this is coming from React Router in Root component
  //  const { match: { params } } = this.props;
  // console.log({ params });
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
