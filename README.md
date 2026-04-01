Aplicação de lista de tarefas simples e funcional, desenvolvida como um exercício prático diário para consolidar conhecimentos em **JavaScript Vanilla**. O projeto foca na manipulação dinâmica do DOM e na persistência de dados no navegador.

## 🚀 Funcionalidades

- **Adicionar Tarefas:** Criação de novos itens com validação de duplicatas.
- **Marcar como Concluída:** As tarefas finalizadas recebem um estilo visual diferente e são movidas automaticamente para o final da lista.
- **Excluir Tarefas:** Remoção individual de itens da lista.
- **Persistência de Dados:** Uso do `localStorage` para manter as tarefas salvas mesmo após atualizar a página.
- **Ordenação Dinâmica:** Priorização visual de tarefas pendentes sobre as concluídas.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização moderna e estados visuais (`.is-completed`).
- **JavaScript (ES6+):** Lógica principal, manipulação de arrays e eventos.

## 🧠 Aprendizados e Desafios

Este projeto foi fundamental para colocar em prática conceitos avançados de lógica de programação:

- **Manipulação de Arrays de Objetos:** Transição de arrays de strings simples para estruturas de objetos para controle de estado (`id`, `task`, `isCompleted`).
- **Métodos de Array:** - `some()` para validar tarefas existentes.
    - `filter()` para gerenciar a exclusão de itens de forma imutável.
    - `sort()` para organizar a lista com base no status de conclusão.
- **JSON e Web Storage:** Conversão de dados com `JSON.stringify()` e `JSON.parse()` para armazenamento no `localStorage`.
- **DOM Nativo:** Criação dinâmica de elementos complexos (incluindo SVGs) e gerenciamento de eventos em tempo real.
