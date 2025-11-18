import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Wishes from './pages/Wishes'
import Story from './pages/Story' // New import

function App() {
  // Define her name here to easily change it across the app
  const girlfriendName = "Prachi" 

  return (
    <Routes>
      <Route path="/" element={<Layout girlfriendName={girlfriendName} />}>
        <Route index element={<Home girlfriendName={girlfriendName} />} />
        <Route path="gallery" element={<Gallery girlfriendName={girlfriendName} />} />
        <Route path="wishes" element={<Wishes girlfriendName={girlfriendName} />} />
        <Route path="story" element={<Story girlfriendName={girlfriendName} />} /> {/* New Route */}
      </Route>
    </Routes>
  )
}

export default App