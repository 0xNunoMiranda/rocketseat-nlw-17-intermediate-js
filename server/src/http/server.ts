import fastify from 'fastify';
const app = fastify()

app.listen({
    port: 3333
}).then(x => {
    console.log('Server started in', x);

});