'use client';

import { useSearchParams } from 'next/navigation';
import { siswaLulus } from '@/data/siswa';
import { normalize } from '@/utils/normalizer';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Hasil() {
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

    if (!nama || !nisn || !tanggalLahir) {
        return (
            <main className="min-h-screen flex items-center justify-center p-6">
                <div className="text-center">
                    <p className="text-red-600 font-semibold">Parameter tidak lengkap.</p>
                    <Link href="/" className="text-blue-600 underline mt-4 block">Kembali ke Beranda</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="text-center space-y-6 max-w-md">
                <h1 className="text-2xl font-bold">Hasil Pengumuman</h1>
                {siswa ? (
                    <div className="bg-green-100 p-6 rounded shadow animate-pulse">
                        <p className="text-lg font-medium">Selamat, {siswa.nama}!</p>
                        <p className="text-green-700 mt-2 font-semibold">Anda dinyatakan LULUS 🎉</p>
                    </div>
                ) : (
                    <div className="bg-red-100 p-6 rounded shadow">
                        <p className="text-lg font-medium">Data tidak ditemukan</p>
                        <p className="text-red-700 mt-2">Periksa Nama, NISN, dan Tanggal Lahir</p>
                    </div>
                )}
                <Link href="/" className="text-blue-600 underline block">Cek Lagi</Link>
            </div>
        </main>
    );
}
