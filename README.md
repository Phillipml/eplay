# 🎮 ePlay - E-commerce de Games

Uma plataforma completa de e-commerce especializada em jogos digitais, desenvolvida com React, TypeScript e Redux Toolkit. Interface moderna com sistema de temas, carrinho de compras e checkout integrado para uma experiência de compra fluida.

## 📸 Screenshots

### 🌙 Tema Escuro

![Screenshot Tema Escuro](https://raw.githubusercontent.com/Phillipml/eplay/main/public/screenshotDarkTheme.png)
_Interface do ePlay em tema escuro com catálogo de games_

### 🌞 Tema Claro

![Screenshot Tema Claro](https://raw.githubusercontent.com/Phillipml/eplay/main/public/screeenshotLightTheme.png)
_Interface do ePlay em tema claro com sistema de checkout_

## 🚀 Funcionalidades

- **Catálogo de Games** - Lista dinâmica de jogos com filtros por categoria
- **Páginas de Produtos** - Detalhes completos de cada jogo
- **Carrinho de Compras** - Sistema completo de adicionar/remover itens
- **Checkout Integrado** - Fluxo de finalização com validação de dados
- **Sistema de Temas** - Toggle entre tema escuro/claro com persistência
- **Design Responsivo** - Otimizado para desktop, tablet e mobile
- **Validação de Formulários** - Formik + Yup para validação robusta
- **Loading States** - Estados de carregamento para melhor UX
- **Roteamento Avançado** - Navegação fluida com React Router
- **Estado Global** - Gerenciamento de estado com Redux Toolkit

## 🛠️ Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca para construção da interface
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Redux Toolkit 2.8.2** - Gerenciamento de estado global
- **React Redux 9.2.0** - Integração React com Redux
- **React Router 7.6.3** - Roteamento e navegação
- **Styled Components 6.1.19** - CSS-in-JS para estilização
- **Formik 2.4.6** - Gerenciamento de formulários
- **Yup 1.6.1** - Validação de esquemas
- **React Icons 5.5.0** - Biblioteca de ícones
- **Vite 7.0.0** - Build tool e servidor de desenvolvimento

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd eplay
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador e acesse `http://localhost:5173`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint com correção automática

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Banner/           # Banner promocional
│   ├── Button/           # Componente de botão
│   ├── Card/             # Card de produto
│   ├── Cart/             # Carrinho de compras
│   ├── Footer/           # Rodapé
│   ├── Gallery/          # Galeria de imagens
│   ├── Header/           # Cabeçalho
│   ├── Hero/             # Seção hero
│   ├── Product/          # Componente de produto
│   └── ThemeButton/      # Botão de alternância de tema
├── pages/
│   ├── Categories/       # Página de categorias
│   ├── Checkout/         # Página de checkout
│   ├── Home/             # Página inicial
│   └── Product/          # Página de produto
├── services/
│   └── api.ts           # Configuração da API
├── store/
│   └── reducers/        # Reducers do Redux
├── themes/
│   ├── dark.ts          # Tema escuro
│   └── light.ts         # Tema claro
├── types/
│   └── types.d.ts       # Definições de tipos
└── utils/
    └── index.ts         # Funções utilitárias
```

## 🎯 Como Usar

1. **Explore Games**: Navegue pela página inicial para ver o catálogo de jogos
2. **Visualize Detalhes**: Clique em um jogo para ver informações detalhadas
3. **Adicione ao Carrinho**: Selecione jogos e adicione ao carrinho
4. **Finalize Compra**: Use o sistema de checkout para completar sua compra
5. **Alterne Temas**: Use o botão de tema para alternar entre modo claro/escuro

## 🎮 Funcionalidades do E-commerce

### 🎯 **Catálogo de Games**

- Lista dinâmica de jogos por categoria
- Filtros e busca avançada
- Galeria de imagens dos produtos
- Informações detalhadas de cada jogo

### 🛒 **Sistema de Carrinho**

- Adicionar/remover jogos do carrinho
- Cálculo automático de valores
- Persistência do estado
- Checkout integrado com validação

### 🎨 **Sistema de Temas**

- Toggle entre tema claro/escuro
- Persistência da preferência
- Componentes adaptáveis
- Design responsivo

### 📝 **Validação de Formulários**

- Formik para gerenciamento de estado
- Yup para validação de esquemas
- Validação em tempo real
- Mensagens de erro personalizadas

## 🔧 Arquitetura

### **Estado Global (Redux)**

- **Cart**: Gerencia itens do carrinho
- **Persistência**: Estado mantido durante navegação
- **Actions**: Ações para manipular o carrinho

### **Componentes**

- **Header**: Navegação e logo
- **ProductList**: Lista de produtos
- **Cart**: Carrinho lateral
- **Checkout**: Formulário de finalização

## 🎨 Características do Design

- **Styled Components**: CSS-in-JS para estilização modular
- **Design System**: Componentes reutilizáveis
- **Responsividade**: Adaptação automática para diferentes dispositivos
- **Temas Dinâmicos**: Sistema completo de temas claro/escuro
- **UX Otimizada**: Interface intuitiva e moderna

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido por

Phillip Menezes - contato.phillip.menezes@gmail.com

---

**Nota**: Este é um projeto de demonstração de e-commerce de games desenvolvido com as melhores práticas de React e TypeScript.
