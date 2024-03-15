function App() {

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://hosting-vercel-peach.vercel.app/upload",{
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
