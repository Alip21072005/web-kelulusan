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
            className="space-y-5 w-full text-left animate-fade-in"
        >
            {/* Nama */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    required
                />
            </div>

            {/* NISN */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">NISN</label>
                <input
                    type="text"
                    placeholder="NISN (10 digit)"
                    value={nisn}
                    onChange={(e) => setNisn(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    pattern="\d{10}"
                    title="NISN harus 10 digit angka"
                    required
                />
            </div>

            {/* Tanggal Lahir */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Tanggal Lahir</label>
                <input
                    type="date"
                    value={tanggalLahir}
                    onChange={(e) => setTanggalLahir(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    required
                />
            </div>

            {/* Tombol */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md font-semibold"
            >
                Cek Kelulusan
            </button>
        </form>
    );
}
