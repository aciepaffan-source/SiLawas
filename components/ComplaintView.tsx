import React, { useState } from 'react';
import { ArrowLeft, Send, Star, CheckCircle } from 'lucide-react';

interface ComplaintViewProps {
  onBack: () => void;
}

const ComplaintView: React.FC<ComplaintViewProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Terima Kasih atas Masukan Anda!</h2>
        <p className="text-slate-500 mb-4">Nomor Tiket Pengaduan: <span className="font-mono font-bold text-slate-800">T-5521</span></p>
        <p className="text-sm text-slate-400 mb-6">Kami akan menindaklanjuti laporan Anda dalam 24 jam.</p>
        <button 
          onClick={onBack}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Kembali ke Menu Utama
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full mr-2">
          <ArrowLeft size={20} className="text-slate-600" />
        </button>
        <h2 className="text-xl font-bold text-slate-800">Formulir Pengaduan</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Kategori Masalah</label>
          <select 
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">-- Pilih Kategori --</option>
            <option value="dokumen">Dokumen Tidak Sesuai</option>
            <option value="waktu">Proses Terlalu Lama</option>
            <option value="petugas">Pelayanan Petugas</option>
            <option value="sistem">Kendala Aplikasi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Deskripsi Pengaduan</label>
          <textarea 
            required
            rows={4} 
            placeholder="Jelaskan detail masalah yang Anda alami..."
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Rating Layanan Saat Ini</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`p-2 rounded-lg transition ${rating >= star ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'}`}
              >
                <Star size={32} fill={rating >= star ? "currentColor" : "none"} />
              </button>
            ))}
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-lg shadow-red-200"
        >
          Kirim Pengaduan
        </button>
      </form>
    </div>
  );
};

export default ComplaintView;