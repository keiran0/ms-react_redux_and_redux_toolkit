import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)

  function incrementHandler(){
    dispatch({type:'increment'})
  }

  function decrementHandler(){
    dispatch({type:'decrement'})
  }

  function increaseHandler(){
    dispatch({type:'increase', amount: 5})
  }

  const toggleCounterHandler = () => { //arrow function. Doesn't matter, same as the above function form actually.
    dispatch({
      type: 'toggle'
    })
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
