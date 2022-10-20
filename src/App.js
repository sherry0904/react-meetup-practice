import AppRouter from "./AppRouter";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <div className="App">
      <Layout>
        <AppRouter/>
      </Layout>
    </div>
  );
}

export default App;
