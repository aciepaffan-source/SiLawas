import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "Maaf, fitur konsultasi sedang tidak tersedia (API Key missing).";
  }

  try {
    const model = ai.models.generateContent;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `Anda adalah asisten virtual untuk aplikasi "SiLawas" (Sistem Layanan Waris) di Kecamatan Gerung. 
        Tugas Anda adalah membantu warga Kecamatan Gerung memahami prosedur pengurusan Surat Keterangan Ahli Waris (SKAW) dan Surat Pernyataan Ahli Waris (SPAW).
        
        Panduan:
        1. Jawablah dengan ramah, formal namun mudah dimengerti (bisa menggunakan sapaan lokal yang sopan jika perlu).
        2. Fokus pada hukum waris di Indonesia dan peraturan daerah terkait pelayanan publik.
        3. Jelaskan syarat umum: KTP, KK, Surat Kematian, dan Surat Pengantar dari Desa/Kelurahan di wilayah Gerung.
        4. Jika warga ingin bertatap muka, arahkan mereka untuk menggunakan fitur "Buat Janji" atau datang langsung ke Kantor Camat Gerung pada jam kerja (08.00 - 16.00 WITA).
        5. Gunakan bahasa Indonesia yang baik dan benar.`,
      }
    });

    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan pada sistem konsultasi. Silakan coba lagi nanti.";
  }
};