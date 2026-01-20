interface InputFieldSkeletonProps {
  hasHelperText?: boolean;
}

export function HeaderSkeleton() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-sky-300 animate-pulse">
      <div className="h-8 w-64 bg-sky-200/50 rounded-md"></div>
      <div className="flex items-center gap-6 m-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 bg-sky-200/50 rounded"></div>
          <div className="h-4 w-20 bg-sky-100/60 rounded"></div>
        </div>
        <div className="h-10 w-32 border border-sky-100/30 bg-sky-200/40 rounded-md"></div>
      </div>
    </nav>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="p-4 mb-6 border border-gray-300/50 rounded-lg bg-gray-50/50 grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse">
      <div className="md:col-span-2">
        <FormSelectSkeleton />
      </div>
      <InputFieldSkeleton />
      <InputFieldSkeleton />
      <FormSelectSkeleton />
    </div>
  );
}

export function FormSelectSkeleton() {
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
      <div className="h-10 border border-gray-200 rounded bg-gray-100 outline-none"></div>
    </div>
  );
}

export function InputFieldSkeleton({
  hasHelperText = false,
}: InputFieldSkeletonProps) {
  return (
    <div className="space-y-2 animate-pulse">
      <div className="h-4 w-24 bg-gray-200 rounded"></div>
      <div className="h-10 w-full bg-gray-100 border border-gray-200 rounded-md"></div>
      {hasHelperText && (
        <div className="h-3 w-40 bg-gray-100 rounded mt-1"></div>
      )}
    </div>
  );
}

export function StudentCardSkeleton() {
  return (
    <div className="bg-gray-50 min-h-screen animate-pulse">
      <main className="max-w-5xl mx-auto px-4">
        <div className="my-4">
          <div className="h-9 w-36 bg-gray-200 rounded-lg border border-gray-300"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="bg-sky-900/10 flex justify-between items-center p-6 border-b">
            <div>
              <div className="h-10 w-64 bg-gray-300/50 rounded mb-2"></div>
              <div className="h-4 w-32 bg-gray-200/50 rounded"></div>
            </div>
            <div className="h-20 w-20 bg-gray-200/40 rounded-full"></div>
          </div>

          <div className="p-6 grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-100">
            <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <div className="h-3 w-24 bg-gray-100 rounded font-bold"></div>
                  <div className="h-6 w-full bg-gray-200/60 rounded"></div>
                </div>
            </div>
            <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <div className="h-3 w-24 bg-gray-100 rounded font-bold"></div>
                  <div className="h-6 w-3/4 bg-gray-200/60 rounded"></div>
                </div>
            </div>
          </div>

          <div className="p-6 bg-sky-50/50">
            <div className="h-4 w-24 bg-gray-300/40 rounded mb-4"></div>
            
            <div className="flex gap-4 overflow-x-auto pb-4">
                <div 
                  className="min-w-[250px] bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3"
                >
                  <div className="h-5 w-32 bg-sky-100 rounded mb-2"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-100 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                    <div className="h-3 w-4/6 bg-gray-100 rounded"></div>
                  </div>
                </div>
            </div>
          </div>

          <div className="flex justify-end items-center p-6 bg-sky-100/30">
            <div className="h-10 w-24 bg-amber-200/60 rounded-md"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function StudentFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
        <InputFieldSkeleton />
        <InputFieldSkeleton hasHelperText={true} />
        <InputFieldSkeleton />
        <InputFieldSkeleton />
      </div>

      <div className="pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
          <div className="h-8 w-20 bg-gray-200 rounded"></div>
        </div>
        <CourseCardSkeleton />
      </div>
    </div>
  );
}

export function StudentTableSkeleton() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 animate-pulse">
            <div className="h-16 bg-sky-300 w-full mb-8"></div>

            <main className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                    <div className="h-8 w-32 bg-gray-200 rounded px-1"></div>
                    <div className="h-10 w-64 bg-gray-200 rounded-lg"></div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 border-b border-gray-200 p-4 grid grid-cols-4 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-4 bg-gray 300 rounded w-20"></div>
                        ))}
                    </div>

                    <div className="divide-y divide-gray-100">
                        {[...Array(6)].map((_, rowIndex) => (
                            <div key={rowIndex} className="p-4 grid grid-cols-4 gap-4 items-center">
                                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-5 bg-gray-100 rounded w-1/2"></div>
                                <div className="h-5 bg-gray-100 rounded w-1/3"></div>
                                <div className="flex justify-end">
                                    <div className="h-8 w-16 bg-gray-100 rounded-md"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-4 flex justify-end">
                    <div className="h-9 w-36 bg-gray-200 rounded-md border border-gray-300"></div>
                </div>
            </main>
        </div>
    )
}

export function DashboardSkeleton() {}
