import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users', { name, email, phone });
    navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-coljustify-center h-[90vh]">
        <div className='flex flex-col m-auto text-center w-[400px] h-[400px] gap-[30px] bg-[#F5F5F5] p-[10px] rounded-[6px]'>
        <h1 className='font-sans text-[25px] font-semibold tracking-[1px] p-[5px]'>Create User</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type="submit" className="font-sans bg-[#16325B] text-white p-[5px] rounded-[6px] w-[250px] mx-auto">Add User</button>
        </div>
    </form>
  );
};

export default AddUser;
