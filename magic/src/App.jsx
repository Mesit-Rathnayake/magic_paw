import { BrowserRouter, Routes, Route } from "react-router"

import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <main className="pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App