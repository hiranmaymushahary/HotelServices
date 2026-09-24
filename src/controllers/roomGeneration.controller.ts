import { Request , Response } from "express";
import { StatusCodes } from "http-status-codes";
import { addRoomGenerationJobToQueue } from "../producers/roomGeneration.producer";


export async function generateRoomHandler(req : Request , res : Response) {

    addRoomGenerationJobToQueue(req.body)

    res.status(StatusCodes.OK).json({
        message : "Room generated succesfully",
        succes : true,
        data : {},
    })
    
}