-- Dados de Exemplo para Desenvolvimento/Testes
-- Execute APÓS o schema.sql

-- =====================================================
-- 1. CRIAR ORGANIZAÇÃO DE TESTE
-- =====================================================

INSERT INTO organizations (id, name, plan) VALUES
('00000000-0000-0000-0000-000000000001', 'Empresa Demo', 'premium');

-- =====================================================
-- 2. CRIAR USUÁRIO DE TESTE
-- =====================================================
-- NOTA: O usuário deve ser criado primeiro no Supabase Auth
-- Depois, execute este comando substituindo o ID do usuário criado:

-- INSERT INTO users (id, organization_id, role, full_name) VALUES
-- ('seu-user-id-do-auth', '00000000-0000-0000-0000-000000000001', 'admin', 'Administrador Demo');

-- =====================================================
-- 3. CRIAR CATEGORIAS DE EXEMPLO
-- =====================================================

INSERT INTO categories (id, organization_id, name, description) VALUES
('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Roupas', 'Vestuário em geral'),
('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Calçados', 'Tênis, sapatos, sandálias'),
('10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Acessórios', 'Bonés, cintos, bolsas');

-- Subcategorias de Roupas
INSERT INTO categories (id, organization_id, name, parent_id) VALUES
('10000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'Camisetas', '10000000-0000-0000-0000-000000000001'),
('10000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000001', 'Calças', '10000000-0000-0000-0000-000000000001'),
('10000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000001', 'Bermudas', '10000000-0000-0000-0000-000000000001'),
('10000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000001', 'Jaquetas', '10000000-0000-0000-0000-000000000001');

-- =====================================================
-- 4. CRIAR PRODUTOS DE EXEMPLO
-- =====================================================

INSERT INTO products (id, organization_id, name, description, sku, category_id, cost_price, sale_price, min_stock, images) VALUES
('20000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 
 'Camiseta Básica', 'Camiseta de algodão 100% básica', 
 'CAM-BAS-001', '10000000-0000-0000-0000-000000000011', 
 25.00, 59.90, 10, 
 ARRAY['https://via.placeholder.com/300x400/3b82f6/ffffff?text=Camiseta']
),
('20000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 
 'Calça Jeans Masculina', 'Calça jeans tradicional', 
 'CAL-JEA-001', '10000000-0000-0000-0000-000000000012', 
 80.00, 149.90, 5, 
 ARRAY['https://via.placeholder.com/300x400/1e40af/ffffff?text=Calca']
),
('20000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 
 'Bermuda Cargo', 'Bermuda estilo cargo com bolsos', 
 'BER-CAR-001', '10000000-0000-0000-0000-000000000013', 
 45.00, 89.90, 8, 
 ARRAY['https://via.placeholder.com/300x400/2563eb/ffffff?text=Bermuda']
),
('20000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 
 'Jaqueta Jeans', 'Jaqueta jeans clássica', 
 'JAQ-JEA-001', '10000000-0000-0000-0000-000000000014', 
 120.00, 249.90, 3, 
 ARRAY['https://via.placeholder.com/300x400/60a5fa/ffffff?text=Jaqueta']
),
('20000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 
 'Tênis Esportivo', 'Tênis para corrida e caminhada', 
 'TEN-ESP-001', '10000000-0000-0000-0000-000000000002', 
 150.00, 299.90, 6, 
 ARRAY['https://via.placeholder.com/300x400/93c5fd/000000?text=Tenis']
);

-- =====================================================
-- 5. CRIAR VARIAÇÕES DE PRODUTOS
-- =====================================================

-- Variações da Camiseta Básica (P, M, G, GG em 3 cores)
INSERT INTO product_variants (product_id, size, color, sku_variant, stock_quantity) VALUES
('20000000-0000-0000-0000-000000000001', 'P', 'Branco', 'CAM-BAS-001-P-BCO', 15),
('20000000-0000-0000-0000-000000000001', 'M', 'Branco', 'CAM-BAS-001-M-BCO', 25),
('20000000-0000-0000-0000-000000000001', 'G', 'Branco', 'CAM-BAS-001-G-BCO', 20),
('20000000-0000-0000-0000-000000000001', 'GG', 'Branco', 'CAM-BAS-001-GG-BCO', 10),
('20000000-0000-0000-0000-000000000001', 'P', 'Preto', 'CAM-BAS-001-P-PTO', 12),
('20000000-0000-0000-0000-000000000001', 'M', 'Preto', 'CAM-BAS-001-M-PTO', 30),
('20000000-0000-0000-0000-000000000001', 'G', 'Preto', 'CAM-BAS-001-G-PTO', 18),
('20000000-0000-0000-0000-000000000001', 'GG', 'Preto', 'CAM-BAS-001-GG-PTO', 8),
('20000000-0000-0000-0000-000000000001', 'P', 'Azul', 'CAM-BAS-001-P-AZL', 10),
('20000000-0000-0000-0000-000000000001', 'M', 'Azul', 'CAM-BAS-001-M-AZL', 20),
('20000000-0000-0000-0000-000000000001', 'G', 'Azul', 'CAM-BAS-001-G-AZL', 15),
('20000000-0000-0000-0000-000000000001', 'GG', 'Azul', 'CAM-BAS-001-GG-AZL', 5);

-- Variações da Calça Jeans (38 ao 46 em 2 cores)
INSERT INTO product_variants (product_id, size, color, sku_variant, stock_quantity) VALUES
('20000000-0000-0000-0000-000000000002', '38', 'Azul Escuro', 'CAL-JEA-001-38-AZE', 8),
('20000000-0000-0000-0000-000000000002', '40', 'Azul Escuro', 'CAL-JEA-001-40-AZE', 12),
('20000000-0000-0000-0000-000000000002', '42', 'Azul Escuro', 'CAL-JEA-001-42-AZE', 15),
('20000000-0000-0000-0000-000000000002', '44', 'Azul Escuro', 'CAL-JEA-001-44-AZE', 10),
('20000000-0000-0000-0000-000000000002', '46', 'Azul Escuro', 'CAL-JEA-001-46-AZE', 6),
('20000000-0000-0000-0000-000000000002', '38', 'Preto', 'CAL-JEA-001-38-PTO', 5),
('20000000-0000-0000-0000-000000000002', '40', 'Preto', 'CAL-JEA-001-40-PTO', 10),
('20000000-0000-0000-0000-000000000002', '42', 'Preto', 'CAL-JEA-001-42-PTO', 12),
('20000000-0000-0000-0000-000000000002', '44', 'Preto', 'CAL-JEA-001-44-PTO', 8),
('20000000-0000-0000-0000-000000000002', '46', 'Preto', 'CAL-JEA-001-46-PTO', 4);

-- Variações da Bermuda Cargo (P ao GG em 2 cores)
INSERT INTO product_variants (product_id, size, color, sku_variant, stock_quantity) VALUES
('20000000-0000-0000-0000-000000000003', 'P', 'Bege', 'BER-CAR-001-P-BGE', 10),
('20000000-0000-0000-0000-000000000003', 'M', 'Bege', 'BER-CAR-001-M-BGE', 18),
('20000000-0000-0000-0000-000000000003', 'G', 'Bege', 'BER-CAR-001-G-BGE', 15),
('20000000-0000-0000-0000-000000000003', 'GG', 'Bege', 'BER-CAR-001-GG-BGE', 8),
('20000000-0000-0000-0000-000000000003', 'P', 'Verde Militar', 'BER-CAR-001-P-VDM', 12),
('20000000-0000-0000-0000-000000000003', 'M', 'Verde Militar', 'BER-CAR-001-M-VDM', 20),
('20000000-0000-0000-0000-000000000003', 'G', 'Verde Militar', 'BER-CAR-001-G-VDM', 14),
('20000000-0000-0000-0000-000000000003', 'GG', 'Verde Militar', 'BER-CAR-001-GG-VDM', 6);

-- Variações do Tênis (35 ao 43)
INSERT INTO product_variants (product_id, size, color, sku_variant, stock_quantity) VALUES
('20000000-0000-0000-0000-000000000005', '35', 'Preto/Branco', 'TEN-ESP-001-35-PBR', 5),
('20000000-0000-0000-0000-000000000005', '37', 'Preto/Branco', 'TEN-ESP-001-37-PBR', 8),
('20000000-0000-0000-0000-000000000005', '39', 'Preto/Branco', 'TEN-ESP-001-39-PBR', 12),
('20000000-0000-0000-0000-000000000005', '41', 'Preto/Branco', 'TEN-ESP-001-41-PBR', 10),
('20000000-0000-0000-0000-000000000005', '43', 'Preto/Branco', 'TEN-ESP-001-43-PBR', 6);

-- =====================================================
-- 6. CRIAR ALGUMAS MOVIMENTAÇÕES DE EXEMPLO
-- =====================================================

-- NOTA: Substitua 'seu-user-id-do-auth' pelo ID real do usuário
-- Entradas de estoque
-- INSERT INTO stock_movements (organization_id, product_variant_id, type, quantity, reason, user_id) VALUES
-- ('00000000-0000-0000-0000-000000000001', 
--  (SELECT id FROM product_variants WHERE sku_variant = 'CAM-BAS-001-M-BCO'), 
--  'entrada', 25, 'Compra inicial', 'seu-user-id-do-auth'),
-- ('00000000-0000-0000-0000-000000000001', 
--  (SELECT id FROM product_variants WHERE sku_variant = 'CAL-JEA-001-42-AZE'), 
--  'entrada', 15, 'Compra inicial', 'seu-user-id-do-auth');

-- =====================================================
-- Estrutura criada com sucesso!
-- =====================================================
