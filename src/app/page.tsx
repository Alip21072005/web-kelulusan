import FormCek from "@/components/FormCek";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-center space-y-6">
        {/* Logo Sekolah */}
        <div className="flex justify-center">
          <Image
            src="/logo.jpg"
            alt="Logo Sekolah"
            width={80}
            height={80}
            className="rounded-full border border-gray-300 shadow"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">Pengumuman Kelulusan <br />
          SMPN 19 MUKOMUKO
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Masukkan Nama, NISN, dan Tanggal Lahir untuk cek kelulusan.
        </p>

        <FormCek />
      </div>
    </main>
  );
}
