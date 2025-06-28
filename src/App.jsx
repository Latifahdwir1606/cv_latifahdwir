import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    alamat: '',
    nomorHp: ''
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Error fetching profile:', err))
  }, [])

  return (
    <div className="card">
      <header className="App-Header">
        <h1>Curriculum Vitae</h1>
      </header>
      <table>
        <tbody>
          <tr>
            <td>👤 Nama</td>
            <td>{profile.name}</td>
          </tr>
          <tr>
            <td>📧 Email</td>
            <td>{profile.email}</td>
          </tr>
          <tr>
            <td>🏠 Alamat</td>
            <td>{profile.alamat}</td>
          </tr>
          <tr>
            <td>📱 No. HP</td>
            <td>{profile.nomorHp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
