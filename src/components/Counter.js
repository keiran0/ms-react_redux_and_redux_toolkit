import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../store/index.js';

const Counter = () => {
  
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)

  const incrementHandler = ()=>{
    dispatch(counterActions.increment())
  }

  function decrementHandler(){
    dispatch(counterActions.decrement())
  }

  function increaseHandler(){
    dispatch(counterActions.increase(5)) //automatically created: any value you pass as an argument will be stored in an extra field called 'payload'.
  }

  const toggleCounterHandler = () => { //arrow function. Doesn't matter, same as the above function form actually.
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className="counter">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
