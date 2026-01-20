import Footer from "@/app/ui/components/footer";
import { HeaderSkeleton, StudentCardSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-black">
            <HeaderSkeleton />
            <main className="flex flex-grow justify-center">
                <StudentCardSkeleton />
            </main>
            <Footer />
        </div>
    )
}