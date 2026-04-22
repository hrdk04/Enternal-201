import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const initialForm ={
    name:'',
    email: '',
    phone: '',
    person: '',
    city: '',
    book_date: '',
    time: ''
  }
  const [formdata,setFormdata] = useState(initialForm)

  const [user,setUser] = useState([])
  const [editId, setEditid] = useState([null])
  const [search, setSearch] =useState('')

  const handleChange = (e)=> {
      const {name,value} = e.target;
      setFormdata({
        ...formdata,[name]: value
      });
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formdata)

    const newUser = {
      id: Date.now(),
      ...formdata
    };
    setUser([...user,newUser])
    setFormdata(initialForm)
  }

  return (
    <>
    <div className="main">

      
    <section className="center">
            <img src={reactLogo} className="framework" alt="React logo" /> &nbsp;  &nbsp;  &nbsp; 
            <h2>Restaurant Registration</h2> &nbsp;  &nbsp;  &nbsp; 
            <img src={reactLogo} className="framework" alt="React logo" />
        </section> 

        <section className='registration-main'>
            <form onSubmit={handleSubmit}>

            <h2>Registration Form</h2>
            <div className="input-section">
              <labal>Enter Your Name</labal>
              <input type="text" name="name" id="name" value={formdata.name} onChange={handleChange} required />
            </div>
            <div className="input-section">
              <labal>Enter Email</labal>
              <input type="email" name="email" id="email" value={formdata.email} onChange={handleChange} required />
            </div>
            <div className="input-section">
              <labal>Enter Contact</labal>
              <input type="" name="phone" id="phone" value={formdata.phone} onChange={handleChange} required />
            </div>
            <div className="input-section">
              <labal>Total Person</labal>
              <select name="person" id="person" value={formdata.person} onChange={handleChange} required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="1">4</option>
                <option value="2">5</option>
                <option value="3">6</option>
                <option value="1">7</option>
                <option value="2">8</option>
                <option value="3">9</option>
              </select>
            </div>
             <div className="input-section">
              <labal>City</labal>
              <input type="text" name="city" id="city"  value={formdata.city} onChange={handleChange} required/>
            </div>
             
             <div className="input-section">
              <labal>Prefer Time</labal>
              <input type="Time" name="time" id="time" value={formdata.time} onChange={handleChange}  />
            </div>
             <div className="btn-section" style={{display: 'flex', justifyContent:'space-evenly'}}>
              <button type="submit">Register</button>
              <button type="Reset" onClick={()=>setFormdata(initialForm)}>Reset</button>

            </div>

          </form>
       
          <h2>Registration History</h2>
          <table border="1">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Total Person</th>
              <th>City</th>
              <th>Time</th>
            </tr>
                     <tbody>
           {user.map((item) => (
             <tr key={item.id}>
               <td>{item.name}</td>
               <td>{item.email}</td>
               <td>{item.phone}</td>
               <td>{item.person}</td>
               <td>{item.city}</td>
               <td>{item.time}</td>
             </tr>
           ))}
         </tbody>

          </table>
 

        </section>

        <section id="next-steps">
          <div id="docs">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#documentation-icon"></use>
            </svg>
            <h2>Documentation</h2>
            <p>Your questions, answered</p>
            <ul>
              <li>
                <a href="https://vite.dev/" target="_blank">
                  <img className="logo" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank">
                  <img className="button-icon" src={reactLogo} alt="" />
                  Learn more
                </a>
              </li>
            </ul>
          </div>
          <div id="social">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2>Connect with us</h2>
            <p>Join the Vite community</p>
            <ul>
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>


    </>
  )
}

export default App
