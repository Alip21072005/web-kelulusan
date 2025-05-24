'use client';

import FormCek from "@/components/FormCek";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animasi setelah komponen mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div
        className={`w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-10 text-center space-y-6 transform transition duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
      >
        {/* Logo Sekolah */}
        <div className="flex justify-center">
          <Image
            src="/logo.jpg"
            alt="Logo Sekolah"
            width={90}
            height={90}
            className="rounded-full ring-2 ring-blue-300 shadow-md"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 leading-tight">
          Pengumuman Kelulusan <br />
          <span className="text-blue-600">SMPN 19 MUKOMUKO</span> <br />
          T.A 2024/2025
        </h1>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Masukkan <strong>Nama</strong>, <strong>NISN</strong>, dan <strong>Tanggal Lahir</strong> untuk cek kelulusan.
        </p>

        <FormCek />
      </div>
    </main>
  );
}
