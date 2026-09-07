import express from 'express';
import { createHotelHandler, deleteHotelsHandler, getAllHotelsHandler, getHotelByIdHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';


const hotelRouter = express.Router();

hotelRouter.post(
    '/',
    validateRequestBody(hotelSchema),
    createHotelHandler); 

hotelRouter.get('/:id', getHotelByIdHandler); 

hotelRouter.get("/" , getAllHotelsHandler);

hotelRouter.delete("/:id" , deleteHotelsHandler);

export default hotelRouter;