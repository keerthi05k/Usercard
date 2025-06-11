export const OneofSample = (props) => {
    const { color } = props;
  return (
    <div style={{backgroundColor: color, padding: "20px", color: "white"}}>
        <p>This Component has a background color of {color}.</p>
    </div>
  )
}
