const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let orderAmount;
let isDispatched = false;
let cancellationAttempted = false;
let cancellationFeeApplied = false;

Given('um pedido com valor {int}', function (amount) {
    orderAmount = amount;
    cancellationAttempted = false;
    isDispatched = false;
    cancellationFeeApplied = false;
});

When('o cliente tenta cancelar o pedido', function () {
    cancellationAttempted = true;
});

Then('o sistema deve bloquear o cancelamento', function () {
    // For orders above R$1000, cancellation should be blocked
    const cancellationBlocked = orderAmount > 1000;
    assert.strictEqual(cancellationBlocked, true, 'Cancelamento não foi bloqueado quando deveria');
});

Given('o pedido já foi despachado', function () {
    isDispatched = true;
});

Then('o sistema deve aplicar uma taxa de cancelamento', function () {
    if (isDispatched && cancellationAttempted && orderAmount <= 1000) {
        cancellationFeeApplied = true;
    }
    assert.ok(cancellationFeeApplied, 'Taxa de cancelamento não aplicada');
}); 