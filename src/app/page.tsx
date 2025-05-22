import FormCek from "@/components/FormCek";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Pengumuman Kelulusan</h1>
      <p className="mb-8 text-center">Masukkan Nama, NISN dan Tanggal Lahir untuk cek kelulusan</p>
      <FormCek />
    </main>
  );
}
