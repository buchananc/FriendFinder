// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [{
        friendName: "Pam Beesly",
        friendPhoto: "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2017/02/jenna_fischer.jpg",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    },
    {
        friendName: "Jim Halpert",
        friendPhoto: "https://i.pinimg.com/originals/6b/d2/2f/6bd22f4acd70b8c82842612f5468b13e.jpg",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    },
    {
        friendName: "Michael Scott",
        friendPhoto: "http://static.tvgcdn.net/mediabin/showcards/celebs/s-u/thumbs/steve-carell_sc_768x1024.png",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    },
    {
        friendName: "Dwight Schrute",
        friendPhoto: "https://suntimesmedia.files.wordpress.com/2017/10/rainnwilson-100217_71623675.jpg?w=763",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    },
    {
        friendName: "Kelly Kapoor",
        friendPhoto: "https://m.media-amazon.com/images/M/MV5BNzQ2OTUzNDU1MF5BMl5BanBnXkFtZTcwODQ2MTYyNw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    },
    {
        friendName: "Angela Martin",
        friendPhoto: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2016%2F08%2Fangela_kinsey-2.jpg%3Fw%3D240&w=700&q=85",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    },
    {
        friendName: "Ryan Howard",
        friendPhoto: "https://mediamass.net/jdd/public/documents/celebrities/3123.jpg",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    },
    {
        friendName: "Erin Hannon",
        friendPhoto: "https://www.biography.com/.image/t_share/MTI4OTAwODA1OTg1MDgxODIy/ellie-kemper_shutterstock_113709262_600x900jpg.jpg",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    },
    {
        friendName: "Jan Levinson",
        friendPhoto: "https://m.media-amazon.com/images/M/MV5BMTcyNzAzODk5Ml5BMl5BanBnXkFtZTcwMjEyNTE2Mg@@._V1_UY317_CR5,0,214,317_AL_.jpg",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    },
    {
        friendName: "Andy Bernard",
        friendPhoto: "http://www2.pictures.zimbio.com/gi/Ed+Helms+Premiere+Electric+Entertainment+Book+Y3bxWBKPthVl.jpg",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2"
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;