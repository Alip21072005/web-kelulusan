'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FormCek() {
    const [nama, setNama] = useState('')
    const [nisn, setNisn] = useState('')
    const [tanggalLahir, setTanggalLahir] = useState('')
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validasi minimal NISN adalah angka 10 digit
        const nisnValid = /^\d{10}$/.test(nisn)
        if (!nisnValid) {
            alert('NISN harus terdiri dari 10 digit angka.')
            return
        }

        if (!nama || !tanggalLahir) {
            alert('Harap lengkapi semua field.')
            return
        }

        // Arahkan ke halaman hasil
        router.push(
            `/hasil?nama=${encodeURIComponent(nama)}&nisn=${encodeURIComponent(nisn)}&tanggalLahir=${encodeURIComponent(tanggalLahir)}`
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
            <input
                type="text"
                placeholder="Masukkan Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full p-3 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Masukkan NISN (10 digit)"
                value={nisn}
                onChange={(e) => setNisn(e.target.value)}
                className="w-full p-3 border rounded"
                pattern="\d{10}"
                title="NISN harus 10 digit angka"
                required
            />
            <input
                type="date"
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                className="w-full p-3 border rounded"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
                Cek Kelulusan
            </button>
        </form>
    )
}
