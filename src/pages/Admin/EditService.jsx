import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditService() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    tierId: "basic",
    title: "", 
    price: "", 
    description: "", 
    features: "", 
    category: "Standard",
    bestFor: "",
    highlight: false,
    isSpecial: false
  });

  useEffect(() => {
    const fetchSingleService = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/services');
        const foundData = response.data.find(s => s._id === id);
        
        if (foundData) {
          setForm({
            ...foundData,
            features: foundData.features.join(', ') // Array jadi string lagi buat di form
          });
        }
      } catch (error) {
        console.error("Gagal ambil data lama:", error);
      }
    };
    fetchSingleService();
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const featuresArray = form.features.split(',').map(item => item.trim());

    try {
      await axios.patch(`http://localhost:3000/api/services/${id}`, {
        ...form,
        features: featuresArray
      });
      alert("Data berhasil diperbarui! 🎉");
      navigate('/admin');
    } catch (error) {
      console.error("Gagal update:", error); alert("Gagal update data!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-xl w-full max-w-2xl border border-yellow-600">
        <h2 className="text-2xl font-bold mb-6 text-yellow-500">Edit Paket</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Level Paket (Tier ID)</label>
              <select name="tierId" value={form.tierId} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded text-yellow-400 font-bold">
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="exclusive">Exclusive</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Nama Paket</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Harga (Teks Bebas)</label>
              <input type="text" name="price" value={form.price} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded" required />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Kategori Filter</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded">
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Exclusive">Exclusive</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">Cocok Untuk (Best For)</label>
            <input type="text" name="bestFor" value={form.bestFor} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded" required />
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">Deskripsi Singkat</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded h-20" required />
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">Daftar Fitur (Pisahkan dengan koma)</label>
            <input type="text" name="features" value={form.features} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded" required />
          </div>
          
          <div className="flex gap-6 py-4 border-y border-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="highlight" checked={form.highlight} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-bold text-indigo-400">Jadikan Popular (Highlight)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="isSpecial" checked={form.isSpecial} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-bold text-amber-400">Jadikan Sultan (Special)</span>
            </label>
          </div>
          
          <div className="flex gap-2 pt-2">
            <button type="button" onClick={() => navigate('/admin')} className="w-1/3 bg-gray-600 hover:bg-gray-500 p-2 rounded transition">Batal</button>
            <button type="submit" className="w-2/3 bg-yellow-600 hover:bg-yellow-500 text-black p-2 rounded font-bold transition">Update Perubahan</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditService;