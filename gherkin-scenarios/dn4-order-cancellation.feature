Feature: Política de Cancelamento de Pedidos

  Scenario: Bloqueio de cancelamento para pedidos acima de R$1.000
    Given um pedido com valor 1500
    When o cliente tenta cancelar o pedido
    Then o sistema deve bloquear o cancelamento

  Scenario: Aplicação de taxa de cancelamento após despacho
    Given um pedido com valor 500
    And o pedido já foi despachado
    When o cliente tenta cancelar o pedido
    Then o sistema deve aplicar uma taxa de cancelamento 