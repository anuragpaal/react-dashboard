function App() {
  return(
    <div className="flex h-screen">

      {/* SIDEBAR */}

      <div className="w-64 bg-indigo-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

        <ul className="space-y-4">
          <li className="hover:text-indigo-700 p-2 rounded cursor-pointer">Home</li>
          <li className="hover:text-indigo-700 p-2 rounded cursor-pointer">Analytics</li>
          <li className="hover:text-indigo-700 p-2 rounded cursor-pointer">Users</li>
          <li className="hover:text-indigo-700 p-2 rounded cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* MAIN AREA */}

      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}

        <div className="bg-white shadow p-4 flex justify-between"> 
            <h2 className="text-xl font-semibold">Welcome Back</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Logout
            </button>
        </div>

        {/* CONTENT */}

        <div className="p-6 bg-gray-100 flex-1">
            <h3 className="text-2xl font-bold mb-4">Dashboard Content</h3>

            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 p-6 rounded shadow hover:shadow-lg">Card 1</div>
              <div className="bg-green-100 p-6 rounded shadow hover:shadow-lg">Card 2</div>
              <div className="bg-yellow-100 p-6 rounded shadow hover:shadow-lg">Card 3</div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default App;