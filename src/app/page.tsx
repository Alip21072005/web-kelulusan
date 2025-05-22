import FormCek from "@/components/FormCek";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Pengumuman Kelulusan</h1>
      <p className="mb-8 text-center text-sm sm:text-base">
        Masukkan Nama, NISN, dan Tanggal Lahir untuk cek kelulusan
      </p>
      <FormCek />
    </main>
  );
}
