import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

const userData = [
  {
    name: "Jennie",
    city: "USA",
    description: "Front End Developer",
    skills: ["UI / UX", "Front End Development", "HTML5", "CSS3", "Javascript(ES+6)", "React", "Node"],
    online: true,
    profile: img1,
  },

   {
    name: "James",
    city: "New York",
    description: "Full Stack Web Developer",
    skills: ["Front End Development","Web Development", "HTML5/CSS3", "Javascript(ES+6)", "React", "Node"],
    online: false,
    profile: img3,
  },

   {
    name: "Nancy",
    city: "US",
    description: "Senior Front End Developer",
    skills: ["UI / UX", "Front End Development", "HTML5", "CSS3", "Javascript(ES+6)", "React", "Node"],
    online: true,
    profile: img2,
  }
];


function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
      <img src={props.profile} className="img" alt="User" width={100} />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index)=>(
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export const UserCard = () => {
  return <>
    {
      userData.map((user, index)=>(
        <User key ={index} 
        name={user.name}
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}
        />
      ))}
  </>
}
// {
//   // <User name="Jennie" city="USA" 
//   // description= "Front End Developer"
//   // skills={["UI / UX", "Front End Development", "HTML5", "CSS3", "Javascript(ES+6)", "React", "Node"]}
//   // online={true} profile="../images/img2.png";
//   // />
// }

