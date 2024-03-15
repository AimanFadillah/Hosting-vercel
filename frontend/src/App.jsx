function App() {

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/upload",{
      method:"post",
      body:new FormData(e.target),
    })
    const data = await response.json();
    console.log(data);
  }

  return <form onSubmit={handleSubmit} >
    <input type="file" name="file" />
    <button>Kirim</button>
  </form>
}

export default App
