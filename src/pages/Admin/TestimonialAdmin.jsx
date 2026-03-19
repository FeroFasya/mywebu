import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TestimonialAdmin() {
  const [testimonials, setTestimonials] = useState([]);

  // 1. Ambil SEMUA data (Jalur Admin)
  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/testimonials/admin');
      setTestimonials(response.data);
    } catch (error) {
      console.error("Gagal ambil data:", error);
    }
  };

  useEffect(() => { fetchTestimonials(); }, []);

  // 2. Fungsi Approve (Ketuk Palu Terima)
  const handleApprove = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/api/testimonials/${id}/approve`);
      fetchTestimonials(); // Refresh data biar pindah ke bawah
      alert("Testimoni diterima! 🎉");
    } catch (error) {
      console.error("Gagal approve:", error);
    }
  };

  // 3. Fungsi Delete (Ketuk Palu Buang)
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin mau buang opini ini?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/testimonials/${id}`);
      setTestimonials(testimonials.filter(t => t._id !== id));
      alert("Testimoni dibuang ke tong sampah! 🗑️");
    } catch (error) {
      console.error("Gagal hapus:", error);
    }
  };

  // Kita pisahkan mana yang Pending, mana yang Approved
  const pendingList = testimonials.filter(t => !t.isApproved);
  const approvedList = testimonials.filter(t => t.isApproved);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-purple-400">⚖️ Ruang Sidang Testimoni</h1>
        <Link to="/admin" className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
          ← Kembali ke Dashboard
        </Link>
      </div>

      {/* --- BAGIAN 1: ANTRIAN PENDING (WAJIB DIPERIKSA) --- */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-yellow-500 mb-4 border-b border-gray-700 pb-2">
          ⏳ Menunggu Persetujuan ({pendingList.length})
        </h2>
        
        {pendingList.length === 0 ? (
          <p className="text-gray-500 italic">Tidak ada antrian. Aman bos.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pendingList.map((t) => (
              <div key={t._id} className="bg-gray-800 p-6 rounded-xl border border-yellow-600/50 relative">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <span className="text-yellow-400 text-sm">⭐ {t.rating}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{t.role}</p>
                <div className="bg-gray-900 p-3 rounded mb-4 text-gray-300 italic">
                  "{t.message}"
                </div>
                
                <div className="flex gap-2">
                  <button onClick={() => handleApprove(t._id)} className="flex-1 bg-green-600 hover:bg-green-700 py-2 rounded font-bold transition">
                    ✅ TERIMA
                  </button>
                  <button onClick={() => handleDelete(t._id)} className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded font-bold transition">
                    🗑️ BUANG
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- BAGIAN 2: SUDAH TAYANG (RIWAYAT) --- */}
      <div>
        <h2 className="text-xl font-bold text-green-500 mb-4 border-b border-gray-700 pb-2">
          ✅ Sedang Tayang ({approvedList.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {approvedList.map((t) => (
            <div key={t._id} className="bg-gray-800 p-6 rounded-xl border border-gray-700 opacity-75 hover:opacity-100 transition">
              <div className="flex justify-between mb-2">
                <h3 className="font-bold text-white">{t.name}</h3>
                <span className="text-yellow-400 text-sm">⭐ {t.rating}</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">{t.role}</p>
              <p className="text-sm text-gray-400 line-clamp-3">"{t.message}"</p>
              <button onClick={() => handleDelete(t._id)} className="mt-4 text-red-400 text-xs hover:text-red-300 underline">
                Hapus dari Website
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialAdmin;