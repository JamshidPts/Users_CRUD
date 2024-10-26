import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      setUser(response.data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className='h-[90vh] flex flex-col justify-center text-center '>
      <div className='bg-[#F5F5F5] w-[400px] m-auto p-[20px] rounded-[6px] text-start'>
        <h1 className="text-xl mb-4 font-sans text-[25px] font-semibold">User Details</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
};

export default UserDetail;
