import '../Assets/css/App.css';
// import Layout from '../Components/Layout.jsx'

function App() {
  return (
    <main>
      <header>
        <h1 className="header_logo">IMAGE CLASSIFIER</h1>
      </header>
      
      <form>
          <input id="file" type="file" name="imageFile"/>
          <label htmlFor="file">
            Choose a Photo
          </label>

          <input id="submit" type="submit" name="submit" value="Upload" />
      </form>
      
      <section className="cards">
        
      </section>
    </main>
  );
}

export default App;
