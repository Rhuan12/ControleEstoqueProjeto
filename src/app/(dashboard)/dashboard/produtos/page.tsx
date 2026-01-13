import { Package } from 'lucide-react'

export default function ProdutosPage() {
  return (
    <div className="max-w-4xl mx-auto text-center py-16">
      <div className="bg-white rounded-2xl shadow-lg p-12">
        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Package className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Gestão de Produtos
        </h1>
        <p className="text-gray-600 mb-6">
          Esta página será desenvolvida na próxima etapa. Aqui você poderá:
        </p>
        <ul className="text-left max-w-md mx-auto space-y-2 text-gray-700">
          <li>✅ Listar todos os produtos</li>
          <li>✅ Adicionar novos produtos</li>
          <li>✅ Editar produtos existentes</li>
          <li>✅ Upload de imagens</li>
          <li>✅ Gerenciar variações (tamanhos, cores)</li>
          <li>✅ Filtrar e buscar produtos</li>
        </ul>
        <div className="mt-8 inline-block bg-yellow-100 border border-yellow-300 rounded-lg px-6 py-3">
          <p className="text-yellow-800 font-semibold">
            🚧 Em desenvolvimento - Parte 3
          </p>
        </div>
      </div>
    </div>
  )
}
