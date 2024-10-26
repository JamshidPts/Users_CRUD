import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="min-h-[90vh]">
        <div className="flex items-center justify-center pt-[160px]">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.id}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.name}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.email}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.phone}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm flex justify-center gap-[10px] relative top-[1px]">
                      <Link to={`/read/${user.id}`} className="mr-2 font-sans bg-[#16325B] text-white px-[10px] py-[5px] rounded-[5px]">
                        Read
                      </Link>
                      <Link to={`/edit/${user.id}`} className="mr-2 font-sans bg-[#16325B] text-white px-[10px] py-[5px] rounded-[5px]">
                        Edit
                      </Link>
                      <button className="mr-2 font-sans bg-[#16325B] text-white px-[10px] py-[5px] rounded-[5px]" onClick={() => deleteUser(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
