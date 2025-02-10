# Business Drivers - Automated Quality Control

## Resumo
Este documento apresenta uma visualização estruturada dos drivers de negócio para a automação de qualidade na Rappi. Inclui um diagrama **Mermaid** ilustrando as dependências chave, bem como uma descrição da abordagem de teste.

## Drivers de Negócio

### DN1: Tempo de Resposta para Chamados
- **85% dos casos críticos** devem ser respondidos **em até 15 minutos**.
- **95% dos chamados gerais** devem ser respondidos **em até 2 horas**.

### DN4: Cancelamento de Pedidos
- **Pedidos acima de R$1,000** não podem ser cancelados.
- Uma **taxa de cancelamento** é aplicada se um pedido é cancelado **após a saída para entrega**.

## Estratégia de Teste
- **Gherkin** para definir cenários de teste.
- **Cucumber.js** para execução automatizada de testes.
- **Integração com sistemas de monitoramento** para rastrear tempos de resposta e cancelamentos de pedidos.

## Diagrama Mermaid
```mermaid
flowchart TD

%% Nodes
    A["fa:fa-database Direcionadores de Negócio"]
    B["fa:fa-list Estratégia de Testes"]
    C["fa:fa-check Automação de Qualidade"]
    D["fa:fa-book-open Gherkin para Cenários de Teste"]
    E["fa:fa-code Implementação com Cucumber.js"]
    F["fa:fa-clock Logs de Tempo de Resposta"]
    G["fa:fa-ban Registros de Cancelamento"]
    H["fa:fa-gear Sistema de Supervisão"]
    I["fa:fa-code-branch Camada de Integração"]

%% Direcionador de Negócio 1: Tempo de Resposta
    DN1["Tempo de Resposta a Chamados"]
    DN1_1["85% dos chamados críticos em até 15 min"]
    DN1_2["95% dos chamados gerais em até 2 horas"]

%% Direcionador de Negócio 4: Cancelamento de Pedidos
    DN4["Política de Cancelamento"]
    DN4_1["Bloqueio de cancelamento para pedidos > R$1.000"]
    DN4_2["Cobrança de taxa após saída para entrega"]

%% Conexões
    A --> DN1 & DN4
    DN1 -->|Impacta| B
    DN4 -->|Impacta| B
    B --> C
    C -->|Monitora| F & G
    D -->|Define Cenários| E
    E -->|Executa Testes| H
    H -->|Registra Métricas| I
    I -->|Analisa Dados| F & G
    DN1_1 & DN1_2 -->|Validados por| F
    DN4_1 & DN4_2 -->|Validados por| G

%% Estilização dos Nós
    style A color:#FFFFFF, fill:#FF5733, stroke:#FF5733
    style B color:#FFFFFF, fill:#33AFFF, stroke:#33AFFF
    style C color:#FFFFFF, fill:#28A745, stroke:#28A745
    style E color:#FFFFFF, fill:#AA00FF, stroke:#AA00FF
    style F color:#FFFFFF, stroke:#FFC107, fill:#FFC107
    style G color:#FFFFFF, stroke:#DC3545, fill:#DC3545
```

