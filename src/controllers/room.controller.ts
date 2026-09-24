import { NextFunction, Request, Response } from "express";
import { getAvailableRoomsService , updateBookingIdToRoomsService } from "../services/room.service";
import { StatusCodes } from "http-status-codes";

export async function getAvailableRoomsHandler(req: Request, res: Response, next: NextFunction) {
    const rooms = await getAvailableRoomsService(req.body);

    res.status(StatusCodes.OK).json({
        message: "Rooms found successfully",
        data: rooms,
        success: true
    });
}

export async function updateBookingIdToRoomsHandler(req: Request, res: Response, next: NextFunction) {
    const response = await updateBookingIdToRoomsService(req.body);

    res.status(StatusCodes.OK).json({
        message: "Booking ID updated to rooms successfully",
        data: response,
        success: true,
    });
}