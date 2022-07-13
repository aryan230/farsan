import Delivery from "../models/deliveryAdressModel.js";
import asyncHandler from "express-async-handler";

const addDeliverAdress = asyncHandler(async (req, res) => {
  const { name, adressOne, pincode, city, state, country } = req.body;
  if (!name && !pincode) {
    res.status(400);
    throw new Error("No adress Found");
    return;
  } else {
    const deliveryAdress = new Delivery({
      user: req.user._id,
      name,
      adressOne,
      pincode,
      city,
      state,
      country,
    });

    const createdAdress = await deliveryAdress.save();
    res.status(200);
    res.json(createdAdress);
  }
});

const getMyAdresses = asyncHandler(async (req, res) => {
  const adresses = await Delivery.find({ user: req.user._id });

  res.json(adresses);
});

export { addDeliverAdress, getMyAdresses };
