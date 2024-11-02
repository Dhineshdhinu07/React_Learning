
const App = () => {
    return <User
    name = "Dhinesh"
    age = {21}
    details = "Learning Web Development"
    />
}

const User = (props) => {
  return<section>
    <h1>{props.name}</h1>
    <h2>Age: {props.age}</h2>
    <h3>{props.details}</h3>
  </section>
}

export default App;