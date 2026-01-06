export default async function StudentsPage() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`, {
        cache: 'no-store' });
    const data = await response.json();

    return (
        <div className="p8">
            <header className="mb-8">
                <h1 className="text-2xl font-bold">受講生 一覧</h1>
                <p className="text-gray-500">ゲスト</p>
            </header>

            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-auto">
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}
    
