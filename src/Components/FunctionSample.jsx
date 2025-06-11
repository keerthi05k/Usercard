export const FunctionSample = (props) => {
    const {handleClick} = props;
  return (
    <div>
     <p>This is a Function Component.</p>
     <button onClick={handleClick}>Click me!</button>
    </div>
  )
}
