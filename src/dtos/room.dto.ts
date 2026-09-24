export type GetAvailableRoomsDto = {
    checkInDate : number;
    checkOutDate : number;
    roomCategoryId : number;

}

export type updateBookingIdToRoomsDto = {
    bookingId : number;
    roomIds : number[];
}