import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Warehouse System</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
            </li>
            <li className="mb-4">
              <Link href="/products" className="block p-2 hover:bg-gray-700 rounded">Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
