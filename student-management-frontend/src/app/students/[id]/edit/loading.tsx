import Footer from "@/app/ui/components/footer";
import { HeaderSkeleton, StudentFormSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <HeaderSkeleton />
            <main className="flex-grow p-8 flex items-center justify-center">
                <StudentFormSkeleton />
            </main>
            <Footer />
        </div>
    )
}