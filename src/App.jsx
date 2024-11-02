import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
    return <div>
      <Person
      name = "Don"
      age = {25}
      />
      <Product
      name = "Phone"
      price = {1000}
      />
    </div>
};

export default App;