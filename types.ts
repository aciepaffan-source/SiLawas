export type ViewState = 'dashboard' | 'submission' | 'tracking' | 'consultation' | 'complaint' | 'info';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ApplicationStatus {
  id: string;
  type: 'SKAW' | 'SPAW';
  applicantName: string;
  date: string;
  status: 'Verifikasi' | 'Validasi' | 'Selesai';
  progress: number; // 0-100
  estimatedCompletion: string;
}

export const MOCK_APPLICATIONS: ApplicationStatus[] = [
  {
    id: "REG-2023-001",
    type: "SKAW",
    applicantName: "Budi Santoso",
    date: "2023-10-25",
    status: "Validasi",
    progress: 70,
    estimatedCompletion: "2 Hari Lagi"
  },
  {
    id: "REG-2023-002",
    type: "SPAW",
    applicantName: "Siti Aminah",
    date: "2023-10-20",
    status: "Selesai",
    progress: 100,
    estimatedCompletion: "Siap Diambil"
  }
];