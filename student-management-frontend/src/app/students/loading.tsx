import Footer from "../ui/components/footer";
import { StudentTableSkeleton } from "../ui/skeletons";

export default function Loading () {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
                <StudentTableSkeleton />
            <Footer />
        </div>
    )
}