import Link from 'next/link'
import { Package, BarChart3, ShoppingCart, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-2xl shadow-xl">
              <Package className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Stock Control System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sistema completo de gestão de estoque, produtos e vendas para sua empresa
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Package className="w-8 h-8" />}
            title="Gestão de Produtos"
            description="Cadastro completo com categorias, variações, imagens e controle de estoque"
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Dashboard & Relatórios"
            description="Visualize indicadores, gráficos e tome decisões baseadas em dados"
          />
          <FeatureCard
            icon={<ShoppingCart className="w-8 h-8" />}
            title="Controle de Vendas"
            description="Registre vendas e controle automaticamente a saída de estoque"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Multi-usuário"
            description="Gerencie sua equipe com diferentes níveis de permissão"
          />
          <FeatureCard
            icon={<Package className="w-8 h-8" />}
            title="Alertas Inteligentes"
            description="Receba notificações quando produtos estiverem com estoque baixo"
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Exportação de Dados"
            description="Exporte relatórios em Excel e PDF para análises externas"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para começar?
            </h2>
            <p className="text-gray-600 mb-8">
              Sistema em desenvolvimento. Em breve disponível para uso!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Acessar Sistema
              </Link>
              <Link
                href="/cadastro"
                className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Criar Conta
              </Link>
            </div>
          </div>
        </div>

        {/* Status de Desenvolvimento */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-100 border border-yellow-300 rounded-lg px-6 py-3">
            <p className="text-yellow-800 font-semibold">
              🚧 Sistema em Desenvolvimento - Versão Beta
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
