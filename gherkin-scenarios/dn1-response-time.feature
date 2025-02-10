Feature: Tempo de Resposta para Chamados

  Scenario: Atendimento de casos críticos em até 15 minutos
    Given um cliente abre um chamado crítico
    When o chamado é registrado no sistema
    Then um agente deve ser atribuído em até 15 minutos
    And o tempo de resposta deve ser registrado

  Scenario: Atendimento de chamados gerais em até 2 horas
    Given um cliente abre um chamado geral
    When o chamado é registrado no sistema
    Then um agente deve ser atribuído em até 2 horas
    And o tempo de resposta deve ser registrado 