
# Formulário de Feedback com useState (React)

Projeto React para praticar o uso do hook **useState** na criação de um formulário controlado e interativo.
<img width="3814" height="1960" alt="Captura de tela 2026-01-07 163954" src="https://github.com/user-attachments/assets/8e75102a-f803-4c50-883a-18e8d30ba220" />

## Objetivo
- Gerenciar estado de campos de formulário com `useState`
- Usar entradas controladas (value + onChange)
- Validar e enviar dados, exibindo alerta com o conteúdo

## Tecnologias
- React 19 + react-scripts (Create React App)

## Pré-requisitos
- Node.js e npm instalados

## Instalação e Execução
1. Instalar dependências:
   - `npm install`
2. Rodar em desenvolvimento:
   - `npm start`
3. Testes:
   - `npm test`
4. Build de produção:
   - `npm run build`

## Estrutura
- `src/components/FeedbackForm.js`: componente com estados `nome`, `email`, `comentario`
- `src/App.js`: integra e renderiza o `FeedbackForm`
- `src/App.css`: estilos básicos (layout, espaçamento e botão)

## Como Usar
1. Preencha Nome, Email e Comentário
2. Clique em Enviar
3. O app valida campos vazios e mostra um alerta com os dados

## Próximos Passos (sugestões)
- Validar formato do email
- Mensagens de erro por campo
- Enviar para API em vez de `alert`

## Autor
Jardheson Oliveira

