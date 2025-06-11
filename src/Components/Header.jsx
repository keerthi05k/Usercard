export const Header = () => {
    let customCSS = "code";
    const isLoggedIn = false;
    const greeting = isLoggedIn ? <p>Welcome back!</p> : <p>Please Login in</p>;
    const items = ['Item 1', 'Item 2', 'Item 3']
  return (
    <>
    <div>
        <h1 className="bannerText">keerthana Kannan</h1>
        <p className="slogan">Front end developer</p>
        {/* javascript Expression in Jsx */}
        <p className={customCSS} style={{ fontSize: "20px", fontStyle: "italic" }}> 24+ 50 = {24+50}</p>
        {/* JSX with Conditional Rendering: */}
        {greeting}
        {/* JSX with Lists : */}
        <ul>
            {items.map((item,index)=>(
                <li key={index}>
                 {item}
                </li>
            ))}
        </ul>
 

    </div>
    </>
    
  )
}
