import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 700 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 900 },
  { name: "May", sales: 600 },
];

function SalesChart() {
    return(
        <div className="bg-white p-5 rounded shadow">
            <h3 className="mb-4 font-semibold">Monthly Sales</h3>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SalesChart;