import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Buat tombol pindah halaman

function AdminDashboard() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/services');
      setServices(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => { fetchServices(); }, []);

  const deleteService = async (id) => {
    if (!window.confirm("Yakin hapus?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/services/${id}`);
      setServices(services.filter(s => s._id !== id));
    } catch (error) { console.error(error); }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      {/* --- HEADER DIPERBARUI --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-400">🚀 Dashboard MyWebu</h1>
          <p className="text-gray-400 text-sm mt-1">Selamat datang, Bos Fero.</p>
        </div>
        
        <div className="flex gap-3">
          {/* Tombol ke Ruang Sidang Testimoni */}
          <Link to="/admin/testimonials" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded font-bold flex items-center gap-2">
            💬 Cek Testimoni
          </Link>
          
          {/* Tombol Tambah Paket */}
          <Link to="/admin/add" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-bold">
            + Tambah Paket
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service._id} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{service.category}</p>
            <p className="text-blue-400 font-bold mb-4">IDR {service.price.toLocaleString()}</p>
            
            <div className="flex gap-2 mt-4">
              <button onClick={() => deleteService(service._id)} className="bg-red-500 px-3 py-1 rounded text-sm w-full">Hapus</button>
              {/* Nanti tombol Edit arahkan ke /edit/ID */}
              <Link to={`/admin/edit/${service._id}`} className="bg-yellow-500 text-black px-3 py-1 rounded text-sm w-full text-center">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;