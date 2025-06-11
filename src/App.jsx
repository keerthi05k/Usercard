// import { LearnComponents } from './Components/LearnComponents'
// import { ChildComponent } from "./Components/ChildComponent"
// import { Student } from "./Components/Student"
// import { ArraySample } from "./Components/ArraySample"
// import { OneofSample } from "./Components/OneofSample"
// import { MultiTypeComponent } from "./Components/MultiTypeComponent"

// import { FunctionSample } from "./Components/FunctionSample"

// import { Header } from "./Components/Header"
function App() {
  // const items = [
  //   { id: 1, name: "Item 1"},
  //   { id: 2, name: "Item 2"},
  //   { id: 3, name: "Item 3"},
  // ]

  const handleClick = ()=>{
    alert("Button Clicked");
  }
  return (
    <>
     {/* <LearnComponents/> */}
     {/* <Header/> */}
     {/* <Student name="keerthana" age={22} isMarried={false}/>
     <Student name="priya" age={22} isMarried={false}/>
     <Student name="Sowmi" age={22} isMarried={false}/>
     
    <ChildComponent>
      <p>This is simple paragraph 1</p>
      <p>This is simple paragraph 2</p>
      <p>This is simple paragraph 3</p>
    </ChildComponent> */}
    {/* <ArraySample items={items}/> */}
    {/* <OneofSample color = "green"/> */}
    {/* <MultiTypeComponent value="Hello"/>
    <MultiTypeComponent value={22}/>
    <MultiTypeComponent value={true}/> */}
    <div>
      <h2>Parent Component</h2>
    </div>
    <FunctionSample handleClick={handleClick}/>
    </>
  )
}

export default App
