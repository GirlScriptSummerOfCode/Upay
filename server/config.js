const dev = process.env.NODE_ENV !== 'production';
const PORT = parseInt(process.env.PORT, 10) || 3000;
export const server = dev
  ? `http://localhost:${PORT}`
  : 'https://deployment.server.com';
