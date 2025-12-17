import React from 'react';
import { Clock, CheckCircle2, FileCheck, MapPin, Search } from 'lucide-react';
import { MOCK_APPLICATIONS } from '../types';

const TrackingView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Status Permohonan</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Cari Nomor Registrasi / NIK..." 
            className="w-full p-4 pl-12 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>
      </div>

      <div className="space-y-6">
        {MOCK_APPLICATIONS.map((app) => (
          <div key={app.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Header Card */}
            <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        app.type === 'SKAW' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                        {app.type}
                    </span>
                    <span className="text-slate-400 text-sm">#{app.id}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">{app.applicantName}</h3>
                <p className="text-sm text-slate-500">Diajukan pada: {app.date}</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Status Terkini</p>
                <div className="flex items-center md:justify-end text-green-600 font-bold">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    {app.status}
                </div>
              </div>
            </div>

            {/* Visual Timeline (Responsive) */}
            <div className="p-6 bg-slate-50">
                <div className="relative">
                    {/* Line */}
                    <div className="absolute left-4 md:left-0 top-0 bottom-0 md:top-1/2 md:bottom-auto w-0.5 md:w-full h-full md:h-0.5 bg-gray-200 -z-0"></div>
                    
                    <div className="flex flex-col md:flex-row justify-between relative z-10 h-full">
                        {[
                            { step: 'Pengajuan', icon: Clock, done: true },
                            { step: 'Verifikasi', icon: Search, done: app.progress >= 40 },
                            { step: 'Validasi', icon: FileCheck, done: app.progress >= 70 },
                            { step: 'Selesai', icon: CheckCircle2, done: app.progress === 100 }
                        ].map((s, idx) => (
                            <div key={idx} className="flex md:flex-col items-center mb-6 md:mb-0 last:mb-0">
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-4 border-slate-50 shadow-sm transition-colors ${
                                    s.done ? 'bg-green-500 text-white' : 'bg-white text-gray-300'
                                }`}>
                                    <s.icon size={16} />
                                </div>
                                <div className="ml-4 md:ml-0 md:mt-3 md:text-center">
                                    <p className={`text-sm font-semibold ${s.done ? 'text-slate-800' : 'text-gray-400'}`}>{s.step}</p>
                                    {s.done && <p className="text-xs text-green-600 hidden md:block">Selesai</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {app.status === 'Selesai' && (
                     <div className="mt-6 p-4 bg-green-100 rounded-xl flex items-center justify-between">
                        <div className="flex items-center">
                            <MapPin className="text-green-600 mr-3" />
                            <div>
                                <p className="font-bold text-green-800">Dokumen Siap Diambil</p>
                                <p className="text-xs text-green-700">Kantor Kecamatan Sukamaju, Loket 2</p>
                            </div>
                        </div>
                        <div className="bg-white p-2 rounded-lg">
                            {/* Mock QR */}
                            <div className="w-12 h-12 bg-slate-900 rounded flex items-center justify-center text-white text-[8px]">QR CODE</div>
                        </div>
                     </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingView;