import React from 'react';
import { FileText, Activity, MessageCircle, Info, AlertCircle, FilePlus, ChevronRight, Scale } from 'lucide-react';
import { ViewState } from '../types';

interface DashboardProps {
  onChangeView: (view: ViewState, docType?: 'SKAW' | 'SPAW') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onChangeView }) => {
  return (
    <div className="w-full">
      {/* Hero Section - Web Only */}
      <div className="hidden md:block w-full bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-2xl p-8 mb-8 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">SiLawas Kecamatan Gerung</h1>
          <p className="text-blue-100 text-lg mb-6">Urus dokumen waris lebih cepat, sederhana, dan transparan dari rumah.</p>
          <div className="flex space-x-4">
             <button 
                onClick={() => onChangeView('submission', 'SKAW')}
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition shadow-md"
              >
                Ajukan SKAW
              </button>
              <button 
                onClick={() => onChangeView('submission', 'SPAW')}
                className="bg-blue-800 bg-opacity-30 border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-50 transition shadow-md backdrop-blur-sm"
              >
                Ajukan SPAW
              </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <Scale size={300} />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden mb-6 px-4 pt-4">
        <h1 className="text-2xl font-bold text-slate-800">Kecamatan Gerung 👋</h1>
        <p className="text-slate-500">Layanan Waris Digital (SiLawas)</p>
      </div>

      {/* Quick Stats - Web Only */}
      <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center">
          <div className="p-3 bg-green-100 text-green-600 rounded-lg mr-4">
            <FileText size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500">Dokumen Selesai</p>
            <p className="text-2xl font-bold text-slate-800">1,240</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
            <Activity size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500">Sedang Proses</p>
            <p className="text-2xl font-bold text-slate-800">45</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-lg mr-4">
            <MessageCircle size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500">Kepuasan Warga</p>
            <p className="text-2xl font-bold text-slate-800">4.8/5</p>
          </div>
        </div>
      </div>

      {/* Mobile Grid Menu / Web Features */}
      <div className="px-4 md:px-0">
        <h2 className="text-lg font-bold text-slate-800 mb-4 md:mb-6">Menu Layanan</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Menu Item 1: Ajukan SKAW */}
          <button 
            onClick={() => onChangeView('submission', 'SKAW')}
            className="flex flex-col md:flex-row items-center md:items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition group text-center md:text-left"
          >
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-3 md:mb-0 md:mr-4 group-hover:scale-110 transition">
              <FilePlus size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Ajukan SKAW</h3>
              <p className="text-xs text-slate-500 mt-1 hidden md:block">Surat Keterangan Ahli Waris untuk keperluan umum.</p>
            </div>
          </button>

          {/* Menu Item 2: Ajukan SPAW */}
          <button 
            onClick={() => onChangeView('submission', 'SPAW')}
            className="flex flex-col md:flex-row items-center md:items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition group text-center md:text-left"
          >
            <div className="p-3 bg-cyan-100 text-cyan-600 rounded-full mb-3 md:mb-0 md:mr-4 group-hover:scale-110 transition">
              <Scale size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Ajukan SPAW</h3>
              <p className="text-xs text-slate-500 mt-1 hidden md:block">Surat Pernyataan Ahli Waris untuk pertanahan/bank.</p>
            </div>
          </button>

           {/* Menu Item 3: Status */}
           <button 
            onClick={() => onChangeView('tracking')}
            className="flex flex-col md:flex-row items-center md:items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition group text-center md:text-left"
          >
            <div className="p-3 bg-green-100 text-green-600 rounded-full mb-3 md:mb-0 md:mr-4 group-hover:scale-110 transition">
              <Activity size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Status</h3>
              <p className="text-xs text-slate-500 mt-1 hidden md:block">Cek progres berkas secara real-time.</p>
            </div>
          </button>

           {/* Menu Item 4: Konsultasi */}
           <button 
            onClick={() => onChangeView('consultation')}
            className="flex flex-col md:flex-row items-center md:items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition group text-center md:text-left"
          >
            <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-3 md:mb-0 md:mr-4 group-hover:scale-110 transition">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Konsultasi</h3>
              <p className="text-xs text-slate-500 mt-1 hidden md:block">Tanya jawab & buat janji temu.</p>
            </div>
          </button>

           {/* Menu Item 5: SOP */}
           <button 
            onClick={() => onChangeView('info')}
            className="flex flex-col md:flex-row items-center md:items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition group text-center md:text-left"
          >
            <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full mb-3 md:mb-0 md:mr-4 group-hover:scale-110 transition">
              <Info size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Info & SOP</h3>
              <p className="text-xs text-slate-500 mt-1 hidden md:block">Syarat dan alur layanan.</p>
            </div>
          </button>

           {/* Menu Item 6: Pengaduan */}
           <button 
            onClick={() => onChangeView('complaint')}
            className="flex flex-col md:flex-row items-center md:items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition group text-center md:text-left"
          >
            <div className="p-3 bg-red-100 text-red-600 rounded-full mb-3 md:mb-0 md:mr-4 group-hover:scale-110 transition">
              <AlertCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Pengaduan</h3>
              <p className="text-xs text-slate-500 mt-1 hidden md:block">Laporkan kendala layanan.</p>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile CTA Sticky */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-40">
        <button 
          onClick={() => onChangeView('submission', 'SKAW')}
          className="w-full bg-blue-600 text-white py-4 rounded-xl shadow-lg flex items-center justify-center font-bold text-lg active:scale-95 transition"
        >
          <FilePlus className="mr-2" /> Ajukan Dokumen Waris
        </button>
      </div>
    </div>
  );
};

export default Dashboard;