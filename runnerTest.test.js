import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { suma, resta, multiplicacion, division, modulo } from './runnerTest.js';

describe('tests funciones', () => {
    it('debe sumar 2 num', () => {
        const a = 5;
        const b = 5;
        assert.strictEqual(suma(a, b), 10);
    });

    it('debe restar 2 num', () => {
        const a = 8;
        const b = 4;
        assert.strictEqual(resta(a, b), 4);
    });

    it('debe multiplicar 2 num', () => {
        const a = 6;
        const b = 2;
        assert.strictEqual(multiplicacion(a, b), 12);
    });

    it('debe dividir 2 num', () => {
        const a = 20;
        const b = 2;
        assert.strictEqual(division(a, b), 10);
    });

    it('debe calcular modulo entre 2 num', () => {
        const a = 10;
        const b = 2;
        assert.strictEqual(modulo(a, b), 0);
    });
});
