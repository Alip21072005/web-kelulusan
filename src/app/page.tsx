'use client';

import FormCek from "@/components/FormCek";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [timeParts, setTimeParts] = useState([
    { label: "hari", value: "00" },
    { label: "jam", value: "00" },
    { label: "menit", value: "00" },
    { label: "detik", value: "00" },
  ]);

  useEffect(() => {
    const targetDate = new Date("2025-06-02T04:30:00Z"); // 11:30 WIB

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        setIsTimeUp(true);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setTimeParts([
        { label: "hari", value: String(days).padStart(2, "0") },
        { label: "jam", value: String(hours).padStart(2, "0") },
        { label: "menit", value: String(minutes).padStart(2, "0") },
        { label: "detik", value: String(seconds).padStart(2, "0") },
      ]);
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div
        className={`w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-10 text-center space-y-6 transform transition duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
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

        {isTimeUp ? (
          <>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Masukkan <strong>Nama</strong>, <strong>NISN</strong>, dan{" "}
              <strong>Tanggal Lahir</strong> untuk cek kelulusan.
            </p>
            <FormCek />
          </>
        ) : (
          <>
            <p className="text-gray-600 text-sm sm:text-base">
              Pengumuman akan tersedia dalam:
            </p>
            <div className="flex justify-center gap-2 sm:gap-4 flex-wrap mt-2">
              {timeParts.map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white shadow-md border border-blue-200 rounded-xl px-4 py-3 text-center w-20 sm:w-24"
                >
                  <div className="text-blue-800 font-bold text-xl sm:text-2xl">
                    {value}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
