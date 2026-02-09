import UserTable from "../components/UserTable";
import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import { FaUsers, FaShoppingCart, FaRupeeSign } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <div className="w-64 bg-indigo-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

        <ul className="space-y-4">
          <li className="hover:bg-indigo-700 p-2 rounded cursor-pointer">
            Home
          </li>

          <li className="hover:bg-indigo-700 p-2 rounded cursor-pointer">
            Analytics
          </li>

          <li className="hover:bg-indigo-700 p-2 rounded cursor-pointer">
            Users
          </li>

          <li className="hover:bg-indigo-700 p-2 rounded cursor-pointer">
            Settings
          </li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow p-4">
          <h2 className="text-xl font-semibold">Welcome 👋</h2>
        </div>

        <div className="p-6 bg-gray-100 flex-1">
          <div className="grid grid-cols-3 gap-5 mb-10">
            <StatCard title="Users" value="1,245" icon={<FaUsers />} />
            <StatCard title="Orders" value="320" icon={<FaShoppingCart />} />
            <StatCard title="Revenue" value="₹45,000" icon={<FaRupeeSign />} />
          </div>

          <SalesChart />
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
