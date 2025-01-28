const unkwonEndpoint = (req, res) => {
        res.status(404).send({ error: 'unknown endpoint' })
}

export default unkwonEndpoint;