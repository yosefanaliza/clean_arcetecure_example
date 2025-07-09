import express from 'express';

const router = express.Router();

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        await riddleServices.deleteRiddleById(id)
    } catch (error) {
        
    }
})

export default router