import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddService() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "basic", 
    name: "", 
    price: "", 
    desc: "", 
    bestFor: "",
    features: "", 
    highlight: false,
    isSpecial: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const featuresArray = form.features.split(',').map(item => item.trim());
    try {
      await axios.post('http://localhost:3000/api/services', { ...form, features: featuresArray });
      alert("Paket berhasil ditambahkan ke Database!");
      navigate('/admin');
    } catch (error) { 
      console.error(error); 
      alert("Gagal menyimpan data!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-xl w-full max-w-2xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-green-400">Tambah Paket (Sesuai Data.jsx)</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Level ID (basic/standard/dll)</label>
              <select name="id" onChange={handleChange} className="w-full bg-gray-700 p-2 rounded text-yellow-400 font-bold">
                <option value="basic">basic</option>
                <option value="standard">standard</option>
                <option value="premium">premium</option>
                <option value="exclusive">exclusive</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Nama Paket (name)</label>
              <input type="text" name="name" placeholder="Cth: Paket Pelajar" onChange={handleChange} className="w-full bg-gray-700 p-2 rounded" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Harga (price)</label>
              <input type="text" name="price" placeholder="Cth: Rp225.000 / $20" onChange={handleChange} className="w-full bg-gray-700 p-2 rounded" required />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Cocok Untuk (bestFor)</label>
              <input type="text" name="bestFor" placeholder="Cth: Tugas Sekolah / Link Bio" onChange={handleChange} className="w-full bg-gray-700 p-2 rounded" required />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">Deskripsi Singkat (desc)</label>
            <textarea name="desc" placeholder="Simpel, cepat, dan tanpa biaya bulanan." onChange={handleChange} className="w-full bg-gray-700 p-2 rounded h-20" required />
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">Daftar Fitur (features - pisahkan koma)</label>
            <input type="text" name="features" placeholder="1 Halaman Website, Domain Numpang, Animasi Dasar" onChange={handleChange} className="w-full bg-gray-700 p-2 rounded" required />
          </div>
          
          <div className="flex gap-6 py-4 border-y border-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="highlight" checked={form.highlight} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-bold text-indigo-400">Jadikan Popular (highlight)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="isSpecial" checked={form.isSpecial} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-bold text-amber-400">Jadikan Sultan (isSpecial)</span>
            </label>
          </div>
          
          <div className="flex gap-2 pt-2">
            <button type="button" onClick={() => navigate('/admin')} className="w-1/3 bg-gray-600 hover:bg-gray-500 p-2 rounded transition">Batal</button>
            <button type="submit" className="w-2/3 bg-green-600 hover:bg-green-500 p-2 rounded font-bold transition">Simpan Paket</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddService;