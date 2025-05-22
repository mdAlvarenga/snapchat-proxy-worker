# Snapchat Proxy Worker (Cloudflare)

Este proyecto implementa un proxy seguro para consumir la API de Snapchat desde un frontend como GitHub Pages, ocultando el token y validando su uso.

## 🔐 ¿Qué hace este Worker?

- Oculta el token real de Snapchat para que no se vea en el frontend.
- Valida que solo tu dominio autorizado (`Origin`) pueda usar el backend.
- Verifica una clave secreta compartida (`x-api-key`) como segunda capa de seguridad.
- Redirecciona el request a la API de Snapchat de forma segura.

## 🧱 Estructura del Proyecto

```
snapchat-proxy-worker/
├── src/
│   ├── index.js          # punto de entrada del Worker
│   ├── config.js         # manejo de entorno
│   ├── validator.js      # validaciones de origen y clave
│   ├── response.js       # helpers para respuestas HTTP
│   └── snapchatProxy.js  # lógica de red
├── test/                 # tests unitarios con Vitest
├── wrangler.toml         # configuración de Cloudflare
├── package.json          # scripts y dependencias
└── README.md
```

## 🚀 Deploy

1. Instalar dependencias:
```bash
npm install
```

2. Login en Cloudflare:
```bash
npx wrangler login
```

3. Definir secretos:
```bash
npx wrangler secret put SNAPCHAT_TOKEN
npx wrangler secret put API_KEY
npx wrangler secret put ALLOWED_ORIGINS
npx wrangler secret put SNAPCHAT_API_URL
```

4. Deploy:
```bash
npm run deploy
```

## 🧪 Tests

Para ejecutar los tests unitarios:

```bash
npm install
npm test
```

Usa `vitest` para probar lógica pura como validaciones, helpers y configuración.

## 🧪 Desarrollo local

Podés levantar el Worker localmente con:

```bash
npm run dev
```

Esto inicia un servidor en `http://localhost:8787`.

### 🔍 Probar localmente

Usá curl, Postman o tu navegador para probar:

```bash
curl "http://localhost:8787/api?filter=dog" \
  -H "Origin: https://tusitio.github.io" \
  -H "x-api-key: ABC123"
```

### 🧠 ¿Qué hace `wrangler dev`?

- Simula cómo se comportará el Worker en producción.
- Permite debuggear localmente sin hacer deploy.
- Usa variables de entorno definidas en `wrangler.toml` o `secret`.

---

## 🧠 Tips adicionales

- Reemplazá las URLs y claves por valores reales.
- Podés usar `wrangler tail` para ver logs en tiempo real.

## En un CICD

Se necesita configurar el CLOUDFLARE_API_TOKEN e inyectarlo para deployar con un CICD.