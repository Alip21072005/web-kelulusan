'use client';

import { useSearchParams } from 'next/navigation';
import { siswaLulus } from '@/data/siswa';
import { normalize } from '@/utils/normalizer';
import Link from 'next/link';
import { useMemo } from 'react';
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

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-center space-y-6">
                <div className="flex justify-center">
                    <Image
                        src="/logo.jpg"
                        alt="Logo Sekolah"
                        width={80}
                        height={80}
                        className="rounded-full border border-gray-300 shadow"
                    />
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
                    Hasil Pengumuman Kelulusan
                </h1>

                {siswa ? (
                    <div className="bg-green-100 border border-green-300 text-green-800 rounded-xl p-6 shadow animate-fade-in">
                        <p className="text-lg sm:text-xl font-semibold">
                            🎉 Selamat, <span className="underline">{siswa.nama}</span>!
                        </p>
                        <p className="mt-2">Anda dinyatakan <strong>LULUS</strong>.</p>
                    </div>
                ) : (
                    <div className="bg-red-100 border border-red-300 text-red-800 rounded-xl p-6 shadow">
                        <p className="text-lg sm:text-xl font-semibold">❌ Data tidak ditemukan</p>
                        <p className="mt-2">Periksa kembali Nama, NISN, dan Tanggal Lahir Anda.</p>
                    </div>
                )}

                <Link
                    href="/"
                    className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow"
                >
                    🔁 Cek Lagi
                </Link>
            </div>
        </main>
    );
}
