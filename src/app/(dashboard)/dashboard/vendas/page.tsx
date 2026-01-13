export default function Page() {
  return (
    <div className="max-w-4xl mx-auto text-center py-16">
      <div className="bg-white rounded-2xl shadow-lg p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 capitalize">
          {/* Nome da página */}
        </h1>
        <p className="text-gray-600 mb-6">
          Esta página será desenvolvida em breve.
        </p>
        <div className="mt-8 inline-block bg-yellow-100 border border-yellow-300 rounded-lg px-6 py-3">
          <p className="text-yellow-800 font-semibold">
            🚧 Em desenvolvimento
          </p>
        </div>
      </div>
    </div>
  )
}
