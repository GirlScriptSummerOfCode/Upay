const dev = process.env.NODE_ENV !== 'production';
const PORT = parseInt(process.env.PORT, 10) || 3000;
const NOWURL = process.env.NOW ? process.env.NOW_URL : '';
export const server = dev ? `http://localhost:${PORT}` : NOWURL;
