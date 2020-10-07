export const documentation = {
  log: {
    swagger: '1.2',
    creator: {
      name: 'Insomnia REST Client',
      version: 'insomnia.desktop.app:v2020.4.1',
    },
    entries: [
      {
        startedDateTime: '2020-10-07T14:39:48.730Z',
        time: 61.921,
        request: {
          method: 'GET',
          url: 'http://localhost:3333/api-docs',
          httpVersion: 'HTTP/1.1',
          cookies: [
            {
              name: 'connect.sid',
              value:
                's%3AUeAj8zO56WzMwUDl69MG9tZX7omVn9dJ.iFjXXkbyj7zRPqgIy5DTW%2BdEPMW2dv1PsgzrvuNGk70',
              path: '/',
              domain: 'localhost',
              httpOnly: true,
            },
          ],
          headers: [],
          queryString: [],
          postData: {
            mimeType: '',
            text: '',
            params: [],
          },
          headersSize: -1,
          bodySize: -1,
          settingEncodeUrl: true,
        },
        response: {
          status: 200,
          statusText: 'OK',
          httpVersion: 'HTTP/1.1',
          cookies: [],
          headers: [
            {
              name: 'X-Powered-By',
              value: 'Express',
            },
            {
              name: 'Access-Control-Allow-Origin',
              value: '*',
            },
            {
              name: 'Content-Type',
              value: 'text/html; charset=utf-8',
            },
            {
              name: 'Content-Length',
              value: '3104',
            },
            {
              name: 'ETag',
              value: 'W/"c20-YaHADSLwvE3kEdwr5u3Bfu2fhF8"',
            },
            {
              name: 'Date',
              value: 'Wed, 07 Oct 2020 14:38:15 GMT',
            },
            {
              name: 'Connection',
              value: 'keep-alive',
            },
          ],
          content: {
            size: 3104,
            mimeType: 'text/html; charset=utf-8',
            text:
              '\n<!-- HTML for static distribution bundle build -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Swagger UI</title>\n  <link rel="stylesheet" type="text/css" href="./swagger-ui.css" >\n  <link rel="icon" type="image/png" href="./favicon-32x32.png" sizes="32x32" /><link rel="icon" type="image/png" href="./favicon-16x16.png" sizes="16x16" />\n  \n  <style>\n    html\n    {\n      box-sizing: border-box;\n      overflow: -moz-scrollbars-vertical;\n      overflow-y: scroll;\n    }\n    *,\n    *:before,\n    *:after\n    {\n      box-sizing: inherit;\n    }\n\n    body {\n      margin:0;\n      background: #fafafa;\n    }\n  </style>\n</head>\n\n<body>\n\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">\n  <defs>\n    <symbol viewBox="0 0 20 20" id="unlocked">\n      <path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z"></path>\n    </symbol>\n\n    <symbol viewBox="0 0 20 20" id="locked">\n      <path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z"/>\n    </symbol>\n\n    <symbol viewBox="0 0 20 20" id="close">\n      <path d="M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z"/>\n    </symbol>\n\n    <symbol viewBox="0 0 20 20" id="large-arrow">\n      <path d="M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z"/>\n    </symbol>\n\n    <symbol viewBox="0 0 20 20" id="large-arrow-down">\n      <path d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z"/>\n    </symbol>\n\n\n    <symbol viewBox="0 0 24 24" id="jump-to">\n      <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"/>\n    </symbol>\n\n    <symbol viewBox="0 0 24 24" id="expand">\n      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>\n    </symbol>\n\n  </defs>\n</svg>\n\n<div id="swagger-ui"></div>\n\n<script src="./swagger-ui-bundle.js"> </script>\n<script src="./swagger-ui-standalone-preset.js"> </script>\n<script src="./swagger-ui-init.js"> </script>\n\n<style>\n  .swagger-ui .topbar .download-url-wrapper { display: none } undefined\n</style>\n</body>\n\n</html>\n',
          },
          redirectURL: '',
          headersSize: -1,
          bodySize: -1,
        },
        cache: {},
        timings: {
          blocked: -1,
          dns: -1,
          connect: -1,
          send: 0,
          wait: 61.921,
          receive: 0,
          ssl: -1,
        },
        comment: 'api docs',
      },
      {
        startedDateTime: '2020-10-07T14:39:48.730Z',
        time: 21.822000000000003,
        request: {
          method: 'PATCH',
          url: 'http://localhost:3333/loans/status',
          httpVersion: 'HTTP/1.1',
          cookies: [
            {
              name: 'connect.sid',
              value:
                's%3AUeAj8zO56WzMwUDl69MG9tZX7omVn9dJ.iFjXXkbyj7zRPqgIy5DTW%2BdEPMW2dv1PsgzrvuNGk70',
              path: '/',
              domain: 'localhost',
              httpOnly: true,
            },
          ],
          headers: [
            {
              name: 'Content-Type',
              value: 'application/json',
            },
          ],
          queryString: [],
          postData: {
            mimeType: 'application/json',
            text: '{\n\t"status": "APPROVED"\n}',
            params: [],
          },
          headersSize: -1,
          bodySize: -1,
          settingEncodeUrl: true,
        },
        response: {
          status: 200,
          statusText: 'OK',
          httpVersion: 'HTTP/1.1',
          cookies: [
            {
              name: 'connect.sid',
              value:
                's%3AMpiFEyOAR6_V-iZFk4edlW3klLq-p7_u.EqdVR6KxEe0NwDEFo0ZVe%2FBeH%2Bo5UpWnBULyasKpVxM',
              path: '/',
              httpOnly: true,
            },
          ],
          headers: [
            {
              name: 'X-Powered-By',
              value: 'Express',
            },
            {
              name: 'Access-Control-Allow-Origin',
              value: '*',
            },
            {
              name: 'Content-Type',
              value: 'application/json; charset=utf-8',
            },
            {
              name: 'Content-Length',
              value: '17',
            },
            {
              name: 'ETag',
              value: 'W/"11-x8OjWEWr6eGsmTSVIe2f68gij60"',
            },
            {
              name: 'Set-Cookie',
              value:
                'connect.sid=s%3AMpiFEyOAR6_V-iZFk4edlW3klLq-p7_u.EqdVR6KxEe0NwDEFo0ZVe%2FBeH%2Bo5UpWnBULyasKpVxM; Path=/; HttpOnly',
            },
            {
              name: 'Date',
              value: 'Wed, 07 Oct 2020 14:04:33 GMT',
            },
            {
              name: 'Connection',
              value: 'keep-alive',
            },
          ],
          content: {
            size: 17,
            mimeType: 'application/json; charset=utf-8',
            text: '{"status":"PASS"}',
          },
          redirectURL: '',
          headersSize: -1,
          bodySize: -1,
        },
        cache: {},
        timings: {
          blocked: -1,
          dns: -1,
          connect: -1,
          send: 0,
          wait: 21.822000000000003,
          receive: 0,
          ssl: -1,
        },
        comment: 'upadate status',
      },
      {
        startedDateTime: '2020-10-07T14:39:48.730Z',
        time: 7.0089999999999995,
        request: {
          method: 'GET',
          url: 'http://localhost:3333/files/7beb463507f4cc056751-jhghg.jpeg',
          httpVersion: 'HTTP/1.1',
          cookies: [
            {
              name: 'connect.sid',
              value:
                's%3AUeAj8zO56WzMwUDl69MG9tZX7omVn9dJ.iFjXXkbyj7zRPqgIy5DTW%2BdEPMW2dv1PsgzrvuNGk70',
              path: '/',
              domain: 'localhost',
              httpOnly: true,
            },
          ],
          headers: [],
          queryString: [],
          postData: {
            mimeType: '',
            text: '',
            params: [],
          },
          headersSize: -1,
          bodySize: -1,
          settingEncodeUrl: true,
        },
        response: {
          status: 404,
          statusText: 'Not Found',
          httpVersion: 'HTTP/1.1',
          cookies: [
            {
              name: 'connect.sid',
              value:
                's%3A5S7vvjBboj6LNkxZnR502LL-KUJRG7w8.Sgvn6zoCx05tf%2B%2B8Q4V%2FYwR%2FSLRBigSVVHfaIr15HpY',
              path: '/',
              httpOnly: true,
            },
          ],
          headers: [
            {
              name: 'X-Powered-By',
              value: 'Express',
            },
            {
              name: 'Access-Control-Allow-Origin',
              value: '*',
            },
            {
              name: 'Content-Security-Policy',
              value: "default-src 'none'",
            },
            {
              name: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              name: 'Content-Type',
              value: 'text/html; charset=utf-8',
            },
            {
              name: 'Content-Length',
              value: '176',
            },
            {
              name: 'Set-Cookie',
              value:
                'connect.sid=s%3A5S7vvjBboj6LNkxZnR502LL-KUJRG7w8.Sgvn6zoCx05tf%2B%2B8Q4V%2FYwR%2FSLRBigSVVHfaIr15HpY; Path=/; HttpOnly',
            },
            {
              name: 'Date',
              value: 'Tue, 06 Oct 2020 13:45:07 GMT',
            },
            {
              name: 'Connection',
              value: 'keep-alive',
            },
          ],
          content: {
            size: 176,
            mimeType: 'text/html; charset=utf-8',
            text:
              '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET /files/7beb463507f4cc056751-jhghg.jpeg</pre>\n</body>\n</html>\n',
          },
          redirectURL: '',
          headersSize: -1,
          bodySize: -1,
        },
        cache: {},
        timings: {
          blocked: -1,
          dns: -1,
          connect: -1,
          send: 0,
          wait: 7.0089999999999995,
          receive: 0,
          ssl: -1,
        },
        comment: 'images url',
      },
      {
        startedDateTime: '2020-10-07T14:39:48.730Z',
        time: 61.977,
        request: {
          method: 'POST',
          url: 'http://localhost:3333/loans/upload',
          httpVersion: 'HTTP/1.1',
          cookies: [
            {
              name: 'connect.sid',
              value:
                's%3AUeAj8zO56WzMwUDl69MG9tZX7omVn9dJ.iFjXXkbyj7zRPqgIy5DTW%2BdEPMW2dv1PsgzrvuNGk70',
              path: '/',
              domain: 'localhost',
              httpOnly: true,
            },
          ],
          headers: [
            {
              name: 'Content-Type',
              value: 'multipart/form-data',
            },
          ],
          queryString: [],
          postData: {
            mimeType: 'multipart/form-data',
            text: '',
            params: [
              {
                name: 'cnh_cpf_img',
                value: '',
              },
              {
                name: 'income_proof_img',
                value: '',
              },
              {
                name: 'property_img',
                value: '',
              },
            ],
          },
          headersSize: -1,
          bodySize: -1,
          settingEncodeUrl: true,
        },
        response: {
          status: 400,
          statusText: 'Bad Request',
          httpVersion: 'HTTP/1.1',
          cookies: [
            {
              name: 'connect.sid',
              value:
                's%3A7RfQbkBbjaerqc1WPv5xxSKA5EDFwSJJ.Agb8DSjx8WMrSkfhoCoWazDoeQv%2Bfj339yA1GheQpDw',
              path: '/',
              httpOnly: true,
            },
          ],
          headers: [
            {
              name: 'X-Powered-By',
              value: 'Express',
            },
            {
              name: 'Access-Control-Allow-Origin',
              value: '*',
            },
            {
              name: 'Content-Type',
              value: 'application/json; charset=utf-8',
            },
            {
              name: 'Content-Length',
              value: '65',
            },
            {
              name: 'ETag',
              value: 'W/"41-bkvNN96OC70Ln3JXJlrs2DXC4uk"',
            },
            {
              name: 'Set-Cookie',
              value:
                'connect.sid=s%3A7RfQbkBbjaerqc1WPv5xxSKA5EDFwSJJ.Agb8DSjx8WMrSkfhoCoWazDoeQv%2Bfj339yA1GheQpDw; Path=/; HttpOnly',
            },
            {
              name: 'Date',
              value: 'Wed, 07 Oct 2020 13:54:51 GMT',
            },
            {
              name: 'Connection',
              value: 'keep-alive',
            },
          ],
          content: {
            size: 65,
            mimeType: 'application/json; charset=utf-8',
            text:
              '{"status":"error","message":"you have to create the loan first!"}',
          },
          redirectURL: '',
          headersSize: -1,
          bodySize: -1,
        },
        cache: {},
        timings: {
          blocked: -1,
          dns: -1,
          connect: -1,
          send: 0,
          wait: 61.977,
          receive: 0,
          ssl: -1,
        },
        comment: 'upload images loan',
      },
      {
        startedDateTime: '2020-10-07T14:39:48.730Z',
        time: 1267.0349999999999,
        request: {
          method: 'POST',
          url: 'http://localhost:3333/loans',
          httpVersion: 'HTTP/1.1',
          cookies: [
            {
              name: 'connect.sid',
              value:
                's%3AUeAj8zO56WzMwUDl69MG9tZX7omVn9dJ.iFjXXkbyj7zRPqgIy5DTW%2BdEPMW2dv1PsgzrvuNGk70',
              path: '/',
              domain: 'localhost',
              httpOnly: true,
            },
          ],
          headers: [
            {
              name: 'Content-Type',
              value: 'application/json',
            },
          ],
          queryString: [],
          postData: {
            mimeType: 'application/json',
            text:
              '{\n\t"name": "wellington",\n\t"email": "wellington96ssouza@gmail.com",\n\t"cpf": "424.245.588-14",\n\t"loan_amount": 150.2,\n\t"monthly_income": 152.1,\n\t"date_birth": "1996-5-25",\n\t"marital_status": "solteiro",\n\t"address": "rua são jorje"\n}',
            params: [],
          },
          headersSize: -1,
          bodySize: -1,
          settingEncodeUrl: true,
        },
        response: {
          status: 200,
          statusText: 'OK',
          httpVersion: 'HTTP/1.1',
          cookies: [
            {
              name: 'connect.sid',
              value:
                's%3Aq8HiPzX-gl-TJKNLpaSsIVUBLb3uhMeS.46q552kshHwwqIPp26UYhivtNJLvEi83DHnd5yHx7SE',
              path: '/',
              httpOnly: true,
            },
          ],
          headers: [
            {
              name: 'X-Powered-By',
              value: 'Express',
            },
            {
              name: 'Access-Control-Allow-Origin',
              value: '*',
            },
            {
              name: 'Content-Type',
              value: 'application/json; charset=utf-8',
            },
            {
              name: 'Content-Length',
              value: '293',
            },
            {
              name: 'ETag',
              value: 'W/"125-0IXWRxxilFVYpWyVZ61EjzLH2AA"',
            },
            {
              name: 'Set-Cookie',
              value:
                'connect.sid=s%3Aq8HiPzX-gl-TJKNLpaSsIVUBLb3uhMeS.46q552kshHwwqIPp26UYhivtNJLvEi83DHnd5yHx7SE; Path=/; HttpOnly',
            },
            {
              name: 'Date',
              value: 'Wed, 07 Oct 2020 13:54:41 GMT',
            },
            {
              name: 'Connection',
              value: 'keep-alive',
            },
          ],
          content: {
            size: 293,
            mimeType: 'application/json; charset=utf-8',
            text:
              '{"name":"wellington","email":"wellington96ssouza@gmail.com","cpf":"424.245.588-14","loan_amount":150.2,"monthly_income":152.1,"date_birth":"1996-5-25","marital_status":"solteiro","address":"rua são jorje","id":5,"created_at":"2020-10-07T16:54:41.000Z","updated_at":"2020-10-07T16:54:41.000Z"}',
          },
          redirectURL: '',
          headersSize: -1,
          bodySize: -1,
        },
        cache: {},
        timings: {
          blocked: -1,
          dns: -1,
          connect: -1,
          send: 0,
          wait: 1267.0349999999999,
          receive: 0,
          ssl: -1,
        },
        comment: 'create loans',
      },
    ],
  },
};
