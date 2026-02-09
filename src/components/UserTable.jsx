import { useState, useEffect } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        setUsers(data);
        setLoading(false);
    });
  },[])

  return(
        <div className="bg-white p-5 rounded shadow mt-10">
            <h3 className="text-xl font-semibold mb-4">Users</h3>

            {loading ? (
                <p>Loading Users...</p>
            ) : (
                <table className="w-full border">
                    
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">City</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="text-center border-t">
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">{user.address.city}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}
        </div>
  )
}

export default UserTable;
