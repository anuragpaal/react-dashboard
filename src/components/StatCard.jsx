function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-5 rounded shadow flex justify-between items-center">
      <div>
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>

      <div className="text-3xl text-blue-500">{icon}</div>
    </div>
  );
}

export default StatCard;
