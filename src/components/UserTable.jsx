import { useState, useEffect } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [search,setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        setUsers(data);
        setLoading(false);
    });
  },[]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  return(
        <div className="bg-white p-5 rounded shadow mt-10">
            <h3 className="text-xl font-semibold mb-4">Users</h3>

            {/* Search */}

            <input 
            type="text"
            placeholder="Search User..."
            className="border p-2 mb-4 w-full rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

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

                        {filteredUsers.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="p-4 text-center text-red-500">
                                    No data found
                                </td>
                            </tr>
                        ) : (
                             filteredUsers.map(user => (
                            <tr key={user.id} className="text-center border-t">
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">{user.address.city}</td>
                            </tr>
                        ))
                        )}
                    </tbody>

                </table>
            )}
        </div>
  )
}

export default UserTable;
