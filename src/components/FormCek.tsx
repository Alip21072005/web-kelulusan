'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FormCek() {
    const [nama, setNama] = useState('');
    const [nisn, setNisn] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!nama || !nisn || !tanggalLahir) {
            alert('Harap lengkapi semua field.');
            return;
        }

        if (!/^\d{10}$/.test(nisn)) {
            alert('NISN harus terdiri dari 10 digit angka.');
            return;
        }

        router.push(
            `/hasil?nama=${encodeURIComponent(nama)}&nisn=${encodeURIComponent(nisn)}&tanggalLahir=${encodeURIComponent(tanggalLahir)}`
        );
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 w-full max-w-md mx-auto px-4 sm:px-0"
        >
            <input
                type="text"
                placeholder="Masukkan Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded text-sm sm:text-base"
                required
            />
            <input
                type="text"
                placeholder="Masukkan NISN (10 digit)"
                value={nisn}
                onChange={(e) => setNisn(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded text-sm sm:text-base"
                pattern="\d{10}"
                title="NISN harus 10 digit angka"
                required
            />
            <input
                type="date"
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded text-sm sm:text-base"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded text-sm sm:text-base hover:bg-blue-700 transition"
            >
                Cek Kelulusan
            </button>
        </form>
    );
}
