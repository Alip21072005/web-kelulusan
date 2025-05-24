import { Suspense } from "react";
import HasilContent from "./HasilContent";

export default function HasilPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6">
            <Suspense fallback={<div className="text-center text-blue-600 font-medium">Memuat hasil...</div>}>
                <HasilContent />
            </Suspense>
        </main>
    );
}
