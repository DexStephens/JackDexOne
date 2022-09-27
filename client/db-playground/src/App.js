import "./App.css";
import Database from "./components/Database";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>The boys are building some slick stuff</h1>
        <Database name="Dexter" />
      </Layout>
    </div>
  );
}

export default App;
