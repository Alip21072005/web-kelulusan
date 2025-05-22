import { Suspense } from "react";
import HasilContent from "./HasilContent";

export default function HasilPage() {
    return (
        <Suspense fallback={<div className="text-center p-6">Memuat hasil...</div>}>
            <HasilContent />
        </Suspense>
    );
}
