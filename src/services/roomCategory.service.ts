
import { CreateRoomCategoryDto } from "../dtos/roomCategory.dto";
import { HotelRepository } from "../repositories/hotel.repository";
import RoomCategoryRepository from "../repositories/roomCategory.repository";
import { NotFoundError } from "../utils/errors/app.error";



const roomCategoryRepository = new RoomCategoryRepository();

const hotelRepository = new HotelRepository();

export async function createRoomCategoryService(createRoomCategoryDto : CreateRoomCategoryDto) {
    const roomCategory = await roomCategoryRepository.create(createRoomCategoryDto);
    return roomCategory;
}

export async function getRoomCategoryByIdService(id : number) {
    const roomCategory = await roomCategoryRepository.findById(id);
    return roomCategory;
}

export async function getRoomCategoryByHotelIdService(hotelId : number) {
    // check if the hotel exist or not 

    const hotel = await hotelRepository.findById(hotelId);

    if(!hotel) {
        throw new NotFoundError(`Hotel not found with id ${hotel}`);
    }

    // find all room categories by hotelId

    const roomCategories = await roomCategoryRepository.findAllByHotelId(hotelId);
    return roomCategories;
}


export async function deleteRoomCategoryService(id : number) {
    const roomCategory = await roomCategoryRepository.findById(id);


    if(!roomCategory){
        throw new NotFoundError(`Room Category with this id ${id} not found`);
    }
    await roomCategoryRepository.delete({id});
    return true;

}