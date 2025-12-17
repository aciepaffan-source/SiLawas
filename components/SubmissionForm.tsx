import React, { useState } from 'react';
import { Check, Upload, ArrowLeft, ArrowRight, FileText } from 'lucide-react';

interface SubmissionFormProps {
  onBack: () => void;
  initialDocType?: 'SKAW' | 'SPAW';
}

const SubmissionForm: React.FC<SubmissionFormProps> = ({ onBack, initialDocType = 'SKAW' }) => {
  const [step, setStep] = useState(1);
  const [docType, setDocType] = useState<'SKAW' | 'SPAW'>(initialDocType);

  // Steps: 1. Data Diri, 2. Dokumen, 3. Review

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between mb-8 px-2">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex flex-col items-center relative z-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
            step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            {step > s ? <Check size={20} /> : s}
          </div>
          <span className="text-xs mt-2 text-gray-500 font-medium">
            {s === 1 ? 'Data' : s === 2 ? 'Upload' : 'Selesai'}
          </span>
        </div>
      ))}
      {/* Progress Bar Background */}
      <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -z-0 transform translate-y-[-50%] px-8"></div>
      <div 
        className="absolute top-5 left-0 h-1 bg-blue-600 -z-0 transform translate-y-[-50%] transition-all duration-300 px-8"
        style={{ width: `${((step - 1) / 2) * 100}%` }}
      ></div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full mr-2">
          <ArrowLeft size={20} className="text-slate-600" />
        </button>
        <div>
            <h2 className="text-xl font-bold text-slate-800">Formulir Pengajuan</h2>
            <p className="text-xs text-slate-500">Kecamatan Gerung</p>
        </div>
      </div>

      {renderStepIndicator()}

      <div className="min-h-[300px]">
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Jenis Dokumen</label>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setDocType('SKAW')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 text-center transition ${docType === 'SKAW' ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold' : 'border-gray-200 text-gray-500'}`}
                >
                  SKAW
                  <span className="block text-xs font-normal opacity-75">Surat Keterangan</span>
                </button>
                <button 
                  onClick={() => setDocType('SPAW')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 text-center transition ${docType === 'SPAW' ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold' : 'border-gray-200 text-gray-500'}`}
                >
                  SPAW
                  <span className="block text-xs font-normal opacity-75">Surat Pernyataan</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">NIK Pemohon</label>
              <input type="text" placeholder="16 digit NIK" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
              <p className="text-xs text-green-600 mt-1 flex items-center"><Check size={12} className="mr-1"/> Terintegrasi Dukcapil</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
              <input type="text" placeholder="Sesuai KTP" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp</label>
              <input type="tel" placeholder="08..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
            </div>
            
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Desa / Kelurahan</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-slate-700">
                  <option>-- Pilih Desa di Kec. Gerung --</option>
                  <option>Gerung Utara</option>
                  <option>Gerung Selatan</option>
                  <option>Dasan Geres</option>
                  <option>Banyu Urip</option>
                  <option>Beleka</option>
                  <option>Giri Tembesi</option>
              </select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
              <FileText className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <div className="text-sm text-blue-800">
                <p className="font-semibold">Persyaratan Dokumen:</p>
                <ul className="list-disc ml-4 mt-1 space-y-1">
                  <li>Scan KTP & KK Ahli Waris</li>
                  <li>Surat Kematian Pewaris</li>
                  <li>Surat Pengantar RT/RW & Desa</li>
                </ul>
              </div>
            </div>

            {['KTP Pemohon', 'Kartu Keluarga', 'Surat Kematian', 'Pengantar Desa'].map((label, idx) => (
              <div key={idx} className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition cursor-pointer relative group">
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="flex flex-col items-center text-gray-500 group-hover:text-blue-600">
                  <Upload size={32} className="mb-2" />
                  <span className="font-medium text-sm">Upload {label}</span>
                  <span className="text-xs mt-1">PDF/JPG max 2MB</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-8 animate-fadeIn">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Permohonan Terkirim!</h3>
            <p className="text-slate-500 mb-6">
              Nomor Registrasi Anda: <br/>
              <span className="text-xl font-mono font-bold text-blue-600">GER-2024-X892</span>
            </p>
            <div className="bg-slate-50 p-4 rounded-lg text-left text-sm text-slate-600 max-w-sm mx-auto mb-6">
              <p><strong>Estimasi Selesai:</strong> 3 Hari Kerja</p>
              <p><strong>Status:</strong> Menunggu Verifikasi Kecamatan</p>
            </div>
             <p className="text-xs text-slate-400">Notifikasi akan dikirim ke WhatsApp Anda.</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-between pt-6 border-t border-slate-100">
        {step > 1 && step < 3 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="px-6 py-2 rounded-lg text-slate-600 font-medium hover:bg-slate-100 transition"
          >
            Kembali
          </button>
        )}
        <div className="flex-1"></div> {/* Spacer */}
        {step < 3 ? (
          <button 
            onClick={() => setStep(step + 1)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center shadow-lg shadow-blue-200"
          >
            Lanjut <ArrowRight size={18} className="ml-2" />
          </button>
        ) : (
          <button 
            onClick={onBack}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg shadow-green-200 w-full md:w-auto"
          >
            Kembali ke Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default SubmissionForm;