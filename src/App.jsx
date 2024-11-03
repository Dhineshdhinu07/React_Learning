const ValidPassword = () => <h1>Valid</h1>
const InValidPassword = () => <h1>Invalid</h1>

const Password = ({isValid}) => {
  // if(isValid){
  //   return <ValidPassword />
  // }
  // return <InValidPassword />
  return isValid ? <ValidPassword /> : <InValidPassword />
}

const App = () => {
    return <section>
      <Password isValid={true}/>
    </section>
};

export default App;