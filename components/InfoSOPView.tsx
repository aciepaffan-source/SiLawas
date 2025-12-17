import React from 'react';
import { ArrowLeft, FileText, Clock, ShieldCheck } from 'lucide-react';

interface InfoSOPViewProps {
  onBack: () => void;
}

const InfoSOPView: React.FC<InfoSOPViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center mb-2">
        <button onClick={onBack} className="p-2 hover:bg-slate-200 rounded-full mr-2 bg-white shadow-sm">
          <ArrowLeft size={20} className="text-slate-600" />
        </button>
        <h2 className="text-2xl font-bold text-slate-800">Informasi & SOP</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                <FileText className="mr-2" size={20} /> Syarat Pengajuan SKAW
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 list-disc ml-4">
                <li>Scan KTP Pemohon (Ahli Waris).</li>
                <li>Scan Kartu Keluarga (KK) Pewaris & Ahli Waris.</li>
                <li>Surat Kematian dari Desa/Dukcapil.</li>
                <li>Surat Nikah Pewaris (Jika ada).</li>
                <li>Surat Pengantar dari Kepala Dusun/Desa.</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <h3 className="text-lg font-bold text-teal-800 mb-4 flex items-center">
                <ShieldCheck className="mr-2" size={20} /> Syarat Pengajuan SPAW
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 list-disc ml-4">
                <li>Semua persyaratan SKAW.</li>
                <li>Saksi-saksi (minimal 2 orang) dengan fotokopi KTP.</li>
                <li>Meterai Rp 10.000 (2 lembar).</li>
                <li>Draft Surat Pernyataan (disediakan di kantor).</li>
            </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
            <Clock className="mr-2" size={20} /> Alur Pelayanan (Estimasi: 3 Hari Kerja)
        </h3>
        <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 py-2">
            <div className="ml-6 relative">
                <span className="absolute -left-[31px] bg-blue-600 w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-100"></span>
                <h4 className="font-semibold text-slate-800">1. Pengajuan Online</h4>
                <p className="text-sm text-slate-500">Warga mengisi formulir dan upload dokumen via aplikasi SiLawas.</p>
            </div>
             <div className="ml-6 relative">
                <span className="absolute -left-[31px] bg-yellow-500 w-4 h-4 rounded-full border-2 border-white ring-2 ring-yellow-100"></span>
                <h4 className="font-semibold text-slate-800">2. Verifikasi Dokumen</h4>
                <p className="text-sm text-slate-500">Petugas Kecamatan memeriksa kelengkapan berkas.</p>
            </div>
             <div className="ml-6 relative">
                <span className="absolute -left-[31px] bg-purple-500 w-4 h-4 rounded-full border-2 border-white ring-2 ring-purple-100"></span>
                <h4 className="font-semibold text-slate-800">3. Validasi & Tanda Tangan</h4>
                <p className="text-sm text-slate-500">Camat memvalidasi dan menandatangani dokumen secara elektronik/basah.</p>
            </div>
             <div className="ml-6 relative">
                <span className="absolute -left-[31px] bg-green-500 w-4 h-4 rounded-full border-2 border-white ring-2 ring-green-100"></span>
                <h4 className="font-semibold text-slate-800">4. Selesai</h4>
                <p className="text-sm text-slate-500">Notifikasi dikirim. Warga mengambil dokumen fisik di Kantor Camat Gerung.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSOPView;