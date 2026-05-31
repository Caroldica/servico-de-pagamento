Segue um README.md completo para o projeto:

# Serviço de Pagamento

## Descrição

Este projeto implementa uma classe chamada `ServicoDePagamento`, responsável por registrar pagamentos e consultar o último pagamento realizado.

O trabalho foi desenvolvido utilizando **Node.js**, com testes automatizados criados usando **Mocha** e **Node Assert**.

---

## Estrutura do Projeto

```text
servico-de-pagamento/
├── src/
│   └── ServicoDePagamento.js
├── test/
│   └── ServicoDePagamento.test.js
├── package.json
└── README.md
```

---

## Pré-requisitos

Antes de executar o projeto, instale:

* Node.js (versão LTS recomendada)
* Git

### Verificando as instalações

```bash
node -v
```

```bash
git --version
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/servico-de-pagamento.git
```

Entre na pasta do projeto:

```bash
cd servico-de-pagamento
```

Instale as dependências:

```bash
npm install
```

---

## Executando os Testes

Para executar todos os testes automatizados:

```bash
npm test
```

Resultado esperado:

```text
ServicoDePagamento
  pagar()
    ✔ deve armazenar um pagamento com as propriedades corretas
    ✔ deve definir categoria como "cara" quando valor for maior que 100
    ✔ deve definir categoria como "padrão" quando valor for igual a 100
    ✔ deve definir categoria como "padrão" quando valor for menor que 100
    ✔ deve acumular múltiplos pagamentos na lista

  consultarUltimoPagamento()
    ✔ deve retornar null quando não houver pagamentos
    ✔ deve retornar somente o último pagamento realizado
    ✔ deve retornar o objeto completo do último pagamento

8 passing
```

---

## Funcionalidades

### pagar(codigoBarras, empresa, valor)

Registra um novo pagamento contendo:

* Código de barras
* Empresa
* Valor
* Categoria

A categoria é definida automaticamente:

| Valor                      | Categoria |
| -------------------------- | --------- |
| Maior que R$ 100,00        | cara      |
| Menor ou igual a R$ 100,00 | padrão    |

### consultarUltimoPagamento()

Retorna:

* O último pagamento registrado;
* `null` caso não exista nenhum pagamento.

---

## Tecnologias Utilizadas

* Node.js
* JavaScript
* Mocha
* Node Assert
* Git
* GitHub

---

## Autor

Trabalho desenvolvido para a disciplina de Testes de Software.

GitHub: [https://github.com/SEU-USUARIO](https://github.com/Caroldica)

Salve esse conteúdo em um arquivo chamado **README.md** na raiz do projeto (`servico-de-pagamento/README.md`).
