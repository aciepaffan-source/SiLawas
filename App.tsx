import React, { useState } from 'react';
import { ViewState } from './types';
import Dashboard from './components/Dashboard';
import SubmissionForm from './components/SubmissionForm';
import TrackingView from './components/TrackingView';
import ConsultationChat from './components/ConsultationChat';
import ComplaintView from './components/ComplaintView';
import InfoSOPView from './components/InfoSOPView';
import { Home, Menu, X, Bell } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedDocType, setSelectedDocType] = useState<'SKAW' | 'SPAW'>('SKAW');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDashboardNav = (view: ViewState, docType?: 'SKAW' | 'SPAW') => {
      setCurrentView(view);
      if (docType) {
          setSelectedDocType(docType);
      }
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onChangeView={handleDashboardNav} />;
      case 'submission':
        return <SubmissionForm onBack={() => setCurrentView('dashboard')} initialDocType={selectedDocType} />;
      case 'tracking':
        return <TrackingView />;
      case 'consultation':
        return <ConsultationChat onBack={() => setCurrentView('dashboard')} />;
      case 'complaint':
        return <ComplaintView onBack={() => setCurrentView('dashboard')} />;
      case 'info':
        return <InfoSOPView onBack={() => setCurrentView('dashboard')} />;
      default:
        return <Dashboard onChangeView={handleDashboardNav} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0 font-sans">
      {/* Navbar (Web & Mobile) */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('dashboard')}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2 shadow-sm">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-800 tracking-tight leading-none">SiLawas</span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider">KECAMATAN GERUNG</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setCurrentView('dashboard')} className={`text-sm font-medium hover:text-blue-600 transition ${currentView === 'dashboard' ? 'text-blue-600' : 'text-slate-500'}`}>Beranda</button>
              <button onClick={() => setCurrentView('submission')} className={`text-sm font-medium hover:text-blue-600 transition ${currentView === 'submission' ? 'text-blue-600' : 'text-slate-500'}`}>Ajukan</button>
              <button onClick={() => setCurrentView('tracking')} className={`text-sm font-medium hover:text-blue-600 transition ${currentView === 'tracking' ? 'text-blue-600' : 'text-slate-500'}`}>Status</button>
              <button onClick={() => setCurrentView('consultation')} className={`text-sm font-medium hover:text-blue-600 transition ${currentView === 'consultation' ? 'text-blue-600' : 'text-slate-500'}`}>Konsultasi</button>
              
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              
              <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 animate-fadeIn shadow-lg absolute w-full z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => { setCurrentView('dashboard'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Beranda</button>
              <button onClick={() => { setCurrentView('submission'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Ajukan Dokumen</button>
              <button onClick={() => { setCurrentView('tracking'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Cek Status</button>
              <button onClick={() => { setCurrentView('consultation'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Konsultasi</button>
              <button onClick={() => { setCurrentView('info'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Info & SOP</button>
              <button onClick={() => { setCurrentView('complaint'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Pengaduan</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>

      {/* Footer (Web Only) */}
      <footer className="hidden md:block bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 SiLawas - Pemerintah Kecamatan Gerung.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-600">Kebijakan Privasi</a>
            <a href="#" className="hover:text-blue-600">Syarat Ketentuan</a>
            <a href="#" className="hover:text-blue-600">Bantuan</a>
          </div>
        </div>
      </footer>

      {/* Bottom Nav (Mobile Only - Alternative to Grid if user navigates away from dash) */}
      {currentView !== 'dashboard' && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-40 safe-area-bottom shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <button onClick={() => setCurrentView('dashboard')} className="flex flex-col items-center text-slate-400 hover:text-blue-600">
                <Home size={24} />
            </button>
             <button onClick={() => setCurrentView('consultation')} className="flex flex-col items-center text-slate-400 hover:text-blue-600">
                <div className="bg-blue-600 text-white p-3 rounded-full -mt-8 shadow-lg border-4 border-slate-50">
                    <span className="font-bold text-lg">?</span>
                </div>
            </button>
            <button onClick={() => setCurrentView('tracking')} className="flex flex-col items-center text-slate-400 hover:text-blue-600">
                <Bell size={24} />
            </button>
        </div>
      )}
    </div>
  );
};

export default App;