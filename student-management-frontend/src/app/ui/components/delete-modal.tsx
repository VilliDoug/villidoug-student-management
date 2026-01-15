interface Props {
  isDeleteModalOpen: boolean;
  deleteConfirmText: string;
  setDeleteConfirmText: (text: string) => void;
  setIsDeleteModalOpen: (isOpen: boolean) => void;
  handleLogicalDelete: () => Promise<void>;
}

export default function DeleteModal({
  isDeleteModalOpen,
  deleteConfirmText,
  setDeleteConfirmText,
  setIsDeleteModalOpen,
  handleLogicalDelete,
}: Props) {
  if (!isDeleteModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-lg font-bold mb-4">本当に削除しますか？</h3>
        <p className="text-sm text-gray-600 mb-4">
          確認のため、下に「
          <span className="font-mono font-bold text-red-600">DELETE</span>
          」と入力してください。
        </p>

        <input
          type="text"
          placeholder="DELETE"
          value={deleteConfirmText}
          onChange={(e) => setDeleteConfirmText(e.target.value)}
          className="border w-full p-2 mb-4 rounded"
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 border-gray-200 rounded transition-colors"
            onClick={() => {
              setIsDeleteModalOpen(false);
              setDeleteConfirmText("");
            }}
          >
            中止
          </button>
          <button
            type="button"
            disabled={deleteConfirmText !== "DELETE"}
            className={`px-4 py-2 text-white transition-colors rounded ${
              deleteConfirmText === "DELETE"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-red-300 cursor-not-allowed"
            }`}
            onClick={handleLogicalDelete}
          >
            削除
          </button>
        </div>
      </div>
    </div>
  );
}
