export const documentation = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Challenge REST Application',
    description: 'Node.js Application API',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  host: 'localhost:3333',
  tags: [
    {
      name: 'Loans Contracts',
      description:
        'API para manipulaçao de contratos de emprestimos no sistema',
    },
  ],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/loans': {
      get: {
        tags: ['Loans'],
        summary: 'Get all loans in system',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Loanss',
            },
          },
        },
      },
      post: {
        tags: ['Loans'],
        summary: 'Create a new loan in system',
        requestBody: {
          description: 'Loan Object',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/Loans',
              },
            },
          },
        },
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/id',
            },
          },
          '400': {
            description: 'Failed. Bad post data.',
          },
        },
      },
      put: {
        summary: 'Update Loan with given ID',
        tags: ['Loans'],
        requestBody: {
          description: 'Loan Object',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/Loans',
              },
            },
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            description: 'Loan with new values of properties',
            schema: {
              $ref: '#/definitions/id',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Loans',
            },
          },
          '400': {
            description: 'Failed. Bad post data.',
          },
          '404': {
            description: 'Failed. Loan not found.',
          },
        },
      },
    },
    '/loans/upload': {
      post: {
        tags: ['Loans'],
        summary: 'Create a new loan in system',
        requestBody: {
          description: 'Loan Object',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/Loans',
              },
            },
          },
        },
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/id',
            },
          },
          '400': {
            description: 'Failed. Bad post data.',
          },
        },
      },
      put: {
        summary: 'Update Loan with given ID',
        tags: ['Loans'],
        requestBody: {
          description: 'Loan Object',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/Loans',
              },
            },
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            description: 'Loan with new values of properties',
            schema: {
              $ref: '#/definitions/id',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Loans',
            },
          },
          '400': {
            description: 'Failed. Bad post data.',
          },
          '404': {
            description: 'Failed. Loan not found.',
          },
        },
      },
    },
    '/loans/status': {
      patch: {
        tags: ['Loans'],
        summary: 'Create a new loan in system',
        requestBody: {
          description: 'Loan Object',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/Loans',
              },
            },
          },
        },
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/id',
            },
          },
          '400': {
            description: 'Failed. Bad post data.',
          },
        },
      },
    },
  },
  definitions: {
    loans: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        cpf: {
          type: 'string',
        },
        loan_amount: {
          type: 'number',
        },
        monthly_income: {
          type: 'number',
        },
        date_birth: {
          type: 'string',
        },
        marital_status: {
          type: 'string',
        },
        address: {
          type: 'string',
        },
        status: {
          type: 'UNDEFINED | APPROVED | DESAPROVED',
        },
      },
    },
  },
};
