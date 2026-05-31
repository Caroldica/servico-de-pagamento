const assert = require('node:assert/strict');
const { ServicoDePagamento } = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {
  let servico;

  beforeEach(() => {
    servico = new ServicoDePagamento();
  });

  describe('pagar()', () => {
    it('deve armazenar um pagamento com as propriedades corretas', () => {
      servico.pagar('0987-7656-3475', 'Samar', 156.87);
      const ultimo = servico.consultarUltimoPagamento();

      assert.equal(ultimo.codigoBarras, '0987-7656-3475');
      assert.equal(ultimo.empresa, 'Samar');
      assert.equal(ultimo.valor, 156.87);
    });

    it('deve definir categoria como "cara" quando valor for maior que 100', () => {
      servico.pagar('1111-2222-3333', 'Empresa A', 150.00);
      const ultimo = servico.consultarUltimoPagamento();

      assert.equal(ultimo.categoria, 'cara');
    });

    it('deve definir categoria como "padrão" quando valor for igual a 100', () => {
      servico.pagar('4444-5555-6666', 'Empresa B', 100.00);
      const ultimo = servico.consultarUltimoPagamento();

      assert.equal(ultimo.categoria, 'padrão');
    });

    it('deve definir categoria como "padrão" quando valor for menor que 100', () => {
      servico.pagar('7777-8888-9999', 'Empresa C', 49.90);
      const ultimo = servico.consultarUltimoPagamento();

      assert.equal(ultimo.categoria, 'padrão');
    });

    it('deve acumular múltiplos pagamentos na lista', () => {
      servico.pagar('0001-0001-0001', 'Empresa X', 30.00);
      servico.pagar('0002-0002-0002', 'Empresa Y', 200.00);
      servico.pagar('0003-0003-0003', 'Empresa Z', 75.00);

      assert.equal(servico.pagamentos.length, 3);
    });
  });

  describe('consultarUltimoPagamento()', () => {
    it('deve retornar null quando não houver pagamentos', () => {
      const resultado = servico.consultarUltimoPagamento();

      assert.equal(resultado, null);
    });

    it('deve retornar somente o último pagamento realizado', () => {
      servico.pagar('0001-0001-0001', 'Primeira', 50.00);
      servico.pagar('0002-0002-0002', 'Segunda', 250.00);

      const ultimo = servico.consultarUltimoPagamento();

      assert.equal(ultimo.empresa, 'Segunda');
      assert.equal(ultimo.valor, 250.00);
      assert.equal(ultimo.categoria, 'cara');
    });

    it('deve retornar o objeto completo do último pagamento', () => {
      servico.pagar('0987-7656-3475', 'Samar', 156.87);

      const ultimo = servico.consultarUltimoPagamento();

      assert.deepEqual(ultimo, {
        codigoBarras: '0987-7656-3475',
        empresa: 'Samar',
        valor: 156.87,
        categoria: 'cara',
      });
    });
  });
});