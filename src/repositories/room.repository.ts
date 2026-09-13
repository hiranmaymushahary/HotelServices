import BaseRepository from "./base.repository";
import Room from "../db/models/room";



export class RoomRepository extends BaseRepository<Room>{
    constructor() {
        super(Room);
    }
}

export default RoomRepository;