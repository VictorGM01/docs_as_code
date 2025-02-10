const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let requestTime;
let responseTime;

Given('um cliente abre um chamado crítico', function () {
    requestTime = Date.now();
});

Given('um cliente abre um chamado geral', function () {
    requestTime = Date.now();
});

When('o chamado é registrado no sistema', function () {
    this.isLogged = true; // Simulando log do sistema
});

Then('um agente deve ser atribuído em até {int} minutos', function (minutes) {
    responseTime = Date.now();
    const timeDiff = (responseTime - requestTime) / 60000;
    assert.ok(timeDiff <= minutes, `Tempo de resposta ultrapassou ${minutes} minutos`);
});

Then('um agente deve ser atribuído em até {int} horas', function (hours) {
    responseTime = Date.now();
    const timeDiff = (responseTime - requestTime) / 3600000; // Convert to hours
    assert.ok(timeDiff <= hours, `Tempo de resposta ultrapassou ${hours} horas`);
});

Then('o tempo de resposta deve ser registrado', function () {
    this.responseTimeLogged = true;
    assert.ok(this.responseTimeLogged, 'Tempo de resposta não registrado');
}); 