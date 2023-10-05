import http from 'node:http';

const PORT: string | number = process.env.PING_LISTEN_PORT ?? 3000;

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(req.headers));
        res.end();
    } else {
        res.writeHead(404);
        res.write('');
        res.end();
    }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
