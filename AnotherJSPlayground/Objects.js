var hotel = {
    name: 'Homewood Suites',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'suite'],

    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};

var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();

hotel.name = "Hampton Inn";
document.write(hotel.name);