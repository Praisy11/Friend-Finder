// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        
            "name":"Juhi Chawla",
            "photo":"https://pbs.twimg.com/profile_images/861161312528867328/mlpHpgLm_400x400.jpg",
            "scores":[
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
              ]
          
    },
    {
        
        "name":"Ajay Devgun",
        "photo":"https://hollysuperstar.com/wp-content/uploads/2018/04/Ajay-Devgan.jpg",
        "scores":[
            4,
            3,
            1,
            2,
            5,
            2,
            1,
            3,
            5,
            2 
          ]
      
},
{
        
    "name":"Kangana",
    "photo":"https://top10xyz.com/wp-content/uploads/2016/03/Kangana-Ranaut-photos.jpg",
    "scores":[
        3,
        1,
        5,
        3,
        2,
        4,
        5,
        3,
        3,
        4
      ]
  
},
{
        
    "name":"Salman Khan",
    "photo":"https://www.behindwoods.com/tamil-movies-cinema-news-16/images/salman-khan-resumes-shoot-again-for-race-3-photos-pictures-stills.jpg",
    "scores":[
        2,
        3,
        4,
        5,
        3,
        4,
        2,
        3,
        4,
        2
      ]
  
},

    {
        
        "name":"Hritik Roshan",
        "photo":"https://i.pinimg.com/736x/78/24/ed/7824ed388961b467ab2a490774b8d9e0.jpg",
        "scores":[
            4,
            2,
            3,
            5,
            4,
            2,
            1,
            4,
            3,
            2
          ]
      
}
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;