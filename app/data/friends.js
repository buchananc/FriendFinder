// ===============================================================================
// DATA
// create an array of friends
// ===============================================================================

var friends = [{
        "name": "Pam Beesly",
        "photo": "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2017/02/jenna_fischer.jpg",
        "scores": [5, 4, 2, 5, 1, 1, 2, 1, 3, 5]
    },
    {
        "name": "Jim Halpert",
        "photo": "https://i.pinimg.com/originals/6b/d2/2f/6bd22f4acd70b8c82842612f5468b13e.jpg",
        "scores": [3, 4, 2, 4, 4, 1, 1, 2, 3, 4]
    },
    {
        "name": "Michael Scott",
        "photo": "http://static.tvgcdn.net/mediabin/showcards/celebs/s-u/thumbs/steve-carell_sc_768x1024.png",
        "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        "name": "Dwight Schrute",
        "photo": "https://suntimesmedia.files.wordpress.com/2017/10/rainnwilson-100217_71623675.jpg?w=763",
        "scores": [5, 2, 4, 3, 3, 2, 1, 3, 3, 4]
    },
    {
        "name": "Kelly Kapoor",
        "photo": "https://m.media-amazon.com/images/M/MV5BNzQ2OTUzNDU1MF5BMl5BanBnXkFtZTcwODQ2MTYyNw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
        "scores": [4, 1, 5, 3, 4, 5, 2, 3, 4, 5]
    },
    {
        "name": "Angela Martin",
        "photo": "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2016%2F08%2Fangela_kinsey-2.jpg%3Fw%3D240&w=700&q=85",
        "scores": [4, 1, 5, 3, 4, 5, 2, 3, 4, 5]
    },
    {
        "name": "Ryan Howard",
        "photo": "https://mediamass.net/jdd/public/documents/celebrities/3123.jpg",
        "scores": [3, 4, 2, 4, 4, 1, 1, 2, 3, 4]
    },
    {
        "name": "Erin Hannon",
        "photo": "https://www.biography.com/.image/t_share/MTI4OTAwODA1OTg1MDgxODIy/ellie-kemper_shutterstock_113709262_600x900jpg.jpg",
        "scores": [5, 4, 2, 5, 1, 1, 2, 1, 3, 5]
    },
    {
        "name": "Jan Levinson",
        "photo": "https://m.media-amazon.com/images/M/MV5BMTcyNzAzODk5Ml5BMl5BanBnXkFtZTcwMjEyNTE2Mg@@._V1_UY317_CR5,0,214,317_AL_.jpg",
        "scores": [1, 5, 1, 3, 5, 1, 4, 3, 2, 1]
    },
    {
        "name": "Andy Bernard",
        "photo": "http://www2.pictures.zimbio.com/gi/Ed+Helms+Premiere+Electric+Entertainment+Book+Y3bxWBKPthVl.jpg",
        "scores": [1, 3, 3, 1, 2, 4, 4, 1, 3, 1]
    }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;