'use client';

import { useSearchParams } from 'next/navigation';
import { siswaLulus } from '@/data/siswa';
import { normalize } from '@/utils/normalizer';
import Link from 'next/link';
import { useMemo, useEffect, useState } from 'react';
import Image from 'next/image';

export default function HasilContent() {
    const searchParams = useSearchParams();
    const nama = searchParams.get('nama') || '';
    const nisn = searchParams.get('nisn') || '';
    const tanggalLahir = searchParams.get('tanggalLahir') || '';

    const siswa = useMemo(() => {
        return siswaLulus.find(
            (s) =>
                normalize(s.nama) === normalize(nama) &&
                s.nisn === nisn &&
                s.tanggalLahir === tanggalLahir
        );
    }, [nama, nisn, tanggalLahir]);

    const [motivasi, setMotivasi] = useState('');

    useEffect(() => {
        const motivasiList = [
            "Teruslah bermimpi dan kejar cita-citamu!",
            "Ini adalah awal dari perjalanan besar. Tetap semangat!",
            "Lulusan hebat bukan hanya karena nilai, tapi juga karena karakter!",
            "Jadilah pribadi yang membanggakan bagi orang tuamu dan bangsa.",
            "Setiap akhir adalah awal yang baru. Jangan berhenti belajar!",
            "Masa depanmu dimulai hari ini, bukan besok!",
            "Sukses adalah milik mereka yang tidak menyerah.",
            "Langkah kecil hari ini adalah awal dari pencapaian besar.",
            "Ilmu adalah cahaya. Gunakanlah untuk menerangi masa depanmu.",
            "Berterima kasihlah pada dirimu yang telah berjuang sejauh ini.",
            "Bersyukurlah, dan tetaplah rendah hati dalam kesuksesan.",
            "Keberhasilan hari ini adalah hasil kerja keras dan doa yang tidak sia-sia.",
            "Tetap menjadi pribadi yang berintegritas dan terus berkembang.",
            "Mimpi tidak akan bekerja kecuali kamu juga bekerja keras.",
            "Kamu sudah membuktikan bahwa kamu mampu, teruskan!"
        ];
        const randomIndex = Math.floor(Math.random() * motivasiList.length);
        setMotivasi(motivasiList[randomIndex]);
    }, []);

    return (
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-center space-y-6 animate-fade-in">
            <div className="flex justify-center">
                <Image
                    src="/logo.jpg"
                    alt="Logo Sekolah"
                    width={80}
                    height={80}
                    className="rounded-full border border-gray-300 shadow-md"
                    priority
                />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
                Hasil Pengumuman Kelulusan
            </h1>

            {siswa ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-5 sm:p-6 shadow-md transition-all">
                    <p className="text-lg sm:text-xl font-semibold">
                        🎉 Selamat, <span className="underline">{siswa.nama}</span>!
                    </p>
                    <p className="mt-2 text-sm sm:text-base">
                        Anda <strong className="text-green-700">dinyatakan LULUS</strong>.
                    </p>
                    {motivasi && (
                        <p className="mt-3 text-sm sm:text-base italic text-gray-700">
                            {motivasi}
                        </p>
                    )}
                </div>
            ) : (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-5 sm:p-6 shadow-md transition-all">
                    <p className="text-lg sm:text-xl font-semibold">❌ Data tidak ditemukan</p>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base">
                        Periksa kembali Nama, NISN, dan Tanggal Lahir Anda.
                    </p>
                </div>
            )}

            <Link
                href="/"
                className="inline-block mt-3 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow font-medium"
            >
                🔁 Cek Lagi
            </Link>
        </div>
    );
}
