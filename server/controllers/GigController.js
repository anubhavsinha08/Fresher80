const { GigModel } = require("../models/GigModel");

const createGig = (req, res) => {

}

const deleteGig = (req, res) => {

}

const allGigs = async (req, res) => {
    const q = req.query;
    const filters = {
        ...(q.userId && { userId: q.userId }),
        ...(q.cat && { cat: q.cat }),
        ...((q.min || q.max) && {
            price: {
                ...(q.min && { $gt: q.min }),
                ...(q.max && { $lt: q.max }),
            },
        }),
        ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    }

    try {
        let data = await GigModel.find(filters);

        if (!data) {
            res.status(400).json({ message: " no data found" });
        }
        return res.status(200).json(data);

    } catch (err) {
        res.status(400).json({ message: " no data found" });
    }

}

const viewGigs = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "ID not provided" });
        }

        const gig = await GigModel.findById(id);

        if (!gig) {
            return res.status(404).json({ message: "Gig not found" });
        }

        res.status(200).json(gig);

    } catch (err) {
        res.status(500).json({ message: "Something went wrong!" });
    }
};



module.exports = {
    createGig,
    allGigs,
    deleteGig,
    viewGigs
}