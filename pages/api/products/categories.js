import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
    const categories = ['men', 'women', 'top', 'top and trouser', 'Dress'];
    res.send(categories);
});

export default handler;
