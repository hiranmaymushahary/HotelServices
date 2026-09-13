import RoomCategory from "../db/models/roomCategory";
import { NotFoundError } from "../utils/errors/app.error";
import BaseRepository from "./base.repository";


class RoomCategoryRepository extends BaseRepository<RoomCategory> {
    constructor(){
        super(RoomCategory);
    }


    async findAllByHotelId(hotelId : number){
        const roomcategories = await this.model.findAll({
            where : {
                hotelId : hotelId,
                deletedAt : null

            }
        });

        if(!roomcategories || roomcategories.length === 0){
            throw new NotFoundError(`No categories for room were found with this id ${hotelId}`);
        }

        return roomcategories;
    }
}
export default RoomCategoryRepository;