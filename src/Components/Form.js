import { useState } from 'react';
import bgimg from '../assets/img1.jpg';


const Form = () => {
  
  const [username,setUsername]= useState('')
  const [password,setPassword]= useState('')
  const [number,setNumber]= useState('')
  const [error , setError]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username.length===0 || password.length===0 || number.length===0){
      setError(true)
    }
    console.log(username,password)
  }
  return (
    <section>
    {/* Partie te3 l image */}
        <div className='register'>
        <div className='col-2'>
                <img src={bgimg} alt='kj'/>
            </div>
            {/* Partie te3 l image */}
            <div className='col-1'>
            {/* Formulaire */}
                <h2>Sign In</h2>
                <span>register and enjoy the site</span>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                {/* Input */}
                    <input type='text' placeholder='username'  onChange={e=>setUsername(e.target.value)}/>
                    {/* conditions */}{error&&username.length<=0?
                    <label>Username can't be empty</label>:""}
                    <input type='password' placeholder='password'  onChange={e=>setPassword (e.target.value)}/>
                    {error&&password.length<=0?
                    <label>password can't be empty</label>:""}
                    <input type='password' placeholder='confirm password'onChange={e=>setPassword (e.target.value)} />
                    {error&&password.length<=0?
                    <label>password can't be empty</label>:""}
                    <input type='number' placeholder='mobile number' onChange={e=>setNumber (e.target.value)} />
                    {error&&number.length<=0?
                    <label>Number can't be empty</label>:""}
                    {/* Input */}
                    {/* Button */}
                    <button className='btn'>Sign in</button>
                    {/* Button */}
                </form>
            </div>
            {/* Formulaire */}
            

        </div>
    </section>
  );
}

export default Form;
