export interface District {
  index: number;
  name: string;
  description: string;
  history: string;
  attractions: {
    name: string;
    description: string;
    image: string;
  }[];
  images: string[];
}
export const KERALA_DISTRICTS:any= [
    {
      index: 1,
      name: "Thiruvananthapuram",
      image:"https://cdn.pixabay.com/photo/2014/09/19/18/19/veli-452834_1280.jpg",

      description: "Thiruvananthapuram, the capital city of Kerala, is known for its rich cultural heritage and pristine beaches. It's a blend of traditional and modern attractions.",
      history: "Thiruvananthapuram, historically known as Trivandrum, has been a significant city since ancient times. The city was an important cultural and trading center. It gained prominence during the reign of the Travancore kings, particularly Maharaja Marthanda Varma who established it as the capital in 1745.",
      attractions: [
        {
          name: "Padmanabhaswamy Temple",
          description: "One of the richest temples in the world known for its intricate architecture and spiritual significance.",
          image: "https://media.istockphoto.com/id/615090784/photo/sri-padmanabhaswamy-temple-in-trivandrum-kerala-india.jpg?s=1024x1024&w=is&k=20&c=9h8MW-HZLFaXDFRWMd3aKBr8hNx1blqLy3lDPYBa6XQ="
        },
        {
          name: "Kovalam Beach",
          description: "A famous beach destination known for its pristine sands and tranquil waters.",
          image: "https://media.istockphoto.com/id/1150059940/photo/kovalam-beach-sunset.jpg?s=1024x1024&w=is&k=20&c=5llkE5a6TEya28PmC2FpPj1r1qsthq02sY69rwJJAp8="
        },
        {
          name: "Napier Museum",
          description: "A historic museum showcasing a rare collection of archaeological and historic artifacts.",
          image: "https://media.istockphoto.com/id/172276644/photo/old-palace.jpg?s=1024x1024&w=is&k=20&c=GUBcET9Db65nM8OPT7JPE2QUUVEnTAOuH7TeASGNxxg="
        },
        {
          name: "Shanghumukham Beach",
          description: "A serene beach known for its sculpture of a mermaid called 'Matsya Kanyaka' and sunset views.",
          image: "https://cdn.pixabay.com/photo/2023/09/14/16/17/wave-8253292_1280.jpg"
        }
      ],
      images: [
        "https://cdn.pixabay.com/photo/2021/10/28/05/24/beach-6748771_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/04/17/16/26/cottages-727558_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/08/07/08/37/street-3589297_1280.jpg",
        "https://cdn.pixabay.com/photo/2014/09/19/18/19/veli-452834_1280.jpg"
      ]
    },
    {
      index: 2,
      name: "Kollam",
      description: "Kollam, also known as Quilon, is a beautiful coastal city in Kerala. It's famous for its cashew industry and the picturesque Ashtamudi Lake.",
      image: "https://cdn.pixabay.com/photo/2022/09/29/01/26/lighthouse-7486290_1280.jpg",

      history: "Kollam has a rich history as one of the oldest ports on the Malabar Coast. It was an important trade center for Chinese, Arabs, and Europeans. The city played a crucial role in the spice trade, attracting merchants from around the world.",
      attractions: [
        {
          name: "Ashtamudi Lake",
          description: "The second largest estuarine lake in Kerala, renowned for its scenic beauty and houseboat cruises.",
          image: "https://cdn.pixabay.com/photo/2021/09/15/21/29/lake-6627781_1280.jpg"
        },
        {
          name: "Thangassery Lighthouse",
          description: "A historic lighthouse offering panoramic views of the Arabian Sea and the surrounding landscapes.",
          image: "https://cdn.pixabay.com/photo/2022/09/29/01/26/lighthouse-7486290_1280.jpg"
        },
        {
          name: "Palaruvi Waterfall",
          description: "A beautiful waterfall cascading down a height of 300 feet amidst lush greenery, ideal for nature enthusiasts.",
          image: "https://cdn.pixabay.com/photo/2021/09/12/20/05/waterfall-6619377_1280.jpg"
        },
        {
          name: "Sardar Vallabhbhai Patel Police Museum",
          description: "A museum dedicated to the history of the police force in Kerala, showcasing weapons, uniforms, and artifacts.",
          image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/sardar-vallabhbhai-patel-national-museum/Sardar-Vallabhbhai-Patel-National-Museum-Banner.jpg"
        }
      ],
      images: [
        "https://cdn.pixabay.com/photo/2016/09/02/14/25/kerala-1639325_1280.jpg",
        "https://cdn.pixabay.com/photo/2014/02/09/05/19/woman-262498_1280.jpg",
        "https://cdn.pixabay.com/photo/2012/11/28/09/36/kerala-67562_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/06/01/10/02/lake-district-5246025_1280.jpg"
      ]
    },
    {
      index: 3,
      name: "Pathanamthitta",
      image: "https://www.sotc.in/blog/wp-content/uploads/2022/08/Interesting-Facts-about-Sabarimala-Temple.jpg",

     
      description: "Pathanamthitta is known for its religious significance and natural beauty. It is a major pilgrimage center, attracting millions of devotees each year.",
      history: "Pathanamthitta's history is closely tied to its religious traditions. The district is home to the famous Sabarimala Temple, one of the most visited pilgrimage sites in India. It has a rich cultural heritage with numerous ancient temples and festivals.",
      attractions: [
        {
          name: "Sabarimala Temple",
          description: "A major pilgrimage site dedicated to Lord Ayyappa, attracting millions of devotees annually during the pilgrimage season.",
          image: "https://www.sotc.in/blog/wp-content/uploads/2022/08/Interesting-Facts-about-Sabarimala-Temple.jpg"
        },
        {
          name: "Perunthenaruvi Waterfall",
          description: "A picturesque waterfall nestled amidst lush greenery, offering a serene and refreshing experience.",
          image: "https://cdn.pixabay.com/photo/2023/04/21/05/11/waterfall-7941114_1280.jpg"
        },
        {
          name: "Konni Elephant Training Centre",
          description: "A training center for elephants where visitors can witness and learn about elephant care and training.",
          image: "https://cdn.pixabay.com/photo/2018/10/06/16/40/elephant-3728225_1280.jpg"
        },
        {
          name: "Aranmula Parthasarathy Temple",
          description: "An ancient temple known for its exquisite architecture and cultural significance.",
          image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/23/08/e1/c4/aranmula-parthasarathy.jpg"
        }
      ],
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxuXngFbiVy0hBXu_UWkWh7hSX1_4gnEfRQ&s",
        "https://www.keralatourism.org/images/enchanting_kerala/large/mannadi_pathanamthitta20221015184142_1232_1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkRVECMgXdrTYe9bswLCGuY9RSKXOkDi0vg1WG2rzuIGOA_Nxjc2_Mg9xlWd-2F5xBCA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTd_FikxjJlLfR4FkG4sL4GIXDCbVTAeweGmCfSW5iaNFM5HC3HGkELK1FlXCS9RFY9M&usqp=CAU"
      ]
    },
    {
      index: 4,
      name: "Alappuzha",
      image: "https://cdn.pixabay.com/photo/2020/04/20/18/04/backwater-5069279_1280.jpg"
      ,description: "Alappuzha, often referred to as the 'Venice of the East', is renowned for its beautiful backwaters and houseboat cruises. It is a hub for Kerala's coir industry.",
      history: "Alappuzha has a long history as a center of trade and commerce. The town was developed in the 18th century by the Diwan of Travancore, Raja Kesavadas, and became a prominent trading center for spices and coir products. The unique backwaters and canals have been a lifeline for the people here.",
      attractions: [
        {
          name: "Alleppey Backwaters",
          description: "A network of interconnected canals, lakes, and rivers ideal for houseboat cruises and exploring Kerala's rural lifestyle.",
          image: "https://cdn.pixabay.com/photo/2020/04/20/18/04/backwater-5069279_1280.jpg"
        },
        {
          name: "Marari Beach",
          description: "A serene beach known for its soft sands, gentle waves, and tranquility, perfect for relaxation.",
          image: "https://cdn.pixabay.com/photo/2023/09/05/16/40/sunrise-8235464_1280.jpg"
        },
        {
          name: "Punnamada Lake",
          description: "A scenic lake known for hosting the annual Nehru Trophy Boat Race, showcasing traditional snake boat races.",
          image: "https://cdn.pixabay.com/photo/2021/09/18/20/11/konigssee-6635951_1280.jpg"
        },
        {
          name: "Ambalappuzha Sri Krishna Temple",
          description: "An ancient temple known for its unique architecture and the famous 'Palpayasam', a sweet pudding offered as prasadam.",
          image: "https://www.dtpcalappuzha.com/uploads/picture_gallery/gallery_images/sree-krishna-swamy-temple-20230524135244917435.webp"
        }
      ],
      images: [
        "https://cdn.pixabay.com/photo/2021/01/01/10/48/alapuzha-5878229_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/09/27/06/31/houseboat-kerala-2791119_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/08/06/16/29/aranmula-7368945_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/09/02/14/25/kerala-1639325_1280.jpg"
      ]
    },
    {
      index: 5,
      name: "Kottayam",          image: "https://cdn.pixabay.com/photo/2020/04/20/18/04/backwater-5069279_1280.jpg"
,
      description: "Kottayam is known for its picturesque landscapes and rubber plantations. It is also a major center for education and literature in Kerala.",
      history: "Kottayam has a rich history as a center of education and publishing. The district played a crucial role in the development of the Malayalam language and literature. It is home to many ancient churches and temples, reflecting its diverse cultural heritage.",
      attractions: [
        {
          name: "Vembanad Lake",
          description: "The largest lake in Kerala, known for its backwater tourism, houseboat cruises, and bird watching opportunities.",
          image: "https://cdn.pixabay.com/photo/2020/04/20/18/04/backwater-5069279_1280.jpg"
        },
        {
          name: "Kumarakom Bird Sanctuary",
          description: "A paradise for bird lovers with a variety of migratory and resident bird species amidst lush greenery.",
          image: "https://cdn.pixabay.com/photo/2019/01/31/19/03/nature-3967707_1280.jpg"
        },
        {
          name: "Ettumanoor Mahadeva Temple",
          description: "An ancient temple dedicated to Lord Shiva, known for its mural paintings and Dravidian architecture.",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Ettumanoor_Mahadeva_Temple.jpg"
        },
{
name: "Illikkal Kallu",
description: "A picturesque hilltop known for its panoramic views of the surroundings and adventurous trekking trails.",
image: "https://www.keralatourism.org/images/picture/large/Illickal_Kallu_1871.jpg"
},
{
name: "Vaikom Mahadeva Temple",
description: "One of the oldest Shiva temples in Kerala known for its architectural grandeur and religious significance.",
image: "https://www.ekeralatourism.net/wp-content/uploads/2018/01/Vaikom-Mahadeva-Temple-at-Kottayam.jpg"
}
],
images: [
"https://deih43ym53wif.cloudfront.net/kottayam-india-shutterstock_1026587635_4ace4aba3b.jpeg",
"https://imgcld.yatra.com/ytimages/image/upload/v1463728413/Kottayam_overview.jpg",
"https://www.themaharajaexpress.org/blog/wp-content/uploads/2018/05/Aruvikkuzhi-Waterfall.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnyiUjuhXc_wSpt6Yyk9dP0n5vMWzhy1XDXAq9K3UQal1nSJY8NE-VDX0DiIZj96IGGk&usqp=CAU"
]
},
{
index: 6,
name: "Idukki",image: "https://cdn.pixabay.com/photo/2020/01/16/04/52/munnar-4769654_1280.jpg"
,
description: "Idukki is famous for its stunning hill stations, wildlife sanctuaries, and tea plantations. It is a haven for nature lovers and adventure enthusiasts.",
history: "Idukki, with its dense forests and hilly terrain, has a rich history of tribal culture and colonial plantations. The region's natural beauty and biodiversity have made it a significant area for ecological studies and tourism.",
attractions: [
{
name: "Munnar",
description: "A popular hill station known for its lush green tea plantations, misty mountains, and pleasant climate.",
image: "https://cdn.pixabay.com/photo/2020/01/16/04/52/munnar-4769654_1280.jpg"
},
{
name: "Idukki Arch Dam",
description: "One of the highest arch dams in Asia, offering panoramic views of the reservoir and surrounding hills.",
image: "https://www.billiontrips.com/sites/default/files/2020-01/6_0.jpg"
},
{
name: "Eravikulam National Park",
description: "Home to the endangered Nilgiri Tahr, this national park is known for its biodiversity and scenic beauty.",
image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Kurunji._..jpg"
},
{
name: "Kalvari Mount",
description: "A beautiful viewpoint offering panoramic views of the Idukki Reservoir and surrounding hills.",
image: "https://www.greenwoods.in/wp-content/uploads/2020/01/calvary-mount-tourism-fest-2020.jpg"
}
],
images: [
"https://cdn.pixabay.com/photo/2020/05/22/11/34/kerala-5205062_1280.jpg",
"https://cdn.pixabay.com/photo/2022/12/09/16/22/munnar-7645637_1280.jpg",
"https://cdn.pixabay.com/photo/2019/09/01/21/38/park-4446077_1280.jpg",
"https://cdn.pixabay.com/photo/2020/07/16/16/16/nature-5411408_1280.jpg"
]
},
{
index: 7,
name: "Ernakulam",image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/138998265.jpg?k=9d6ce3012c9f19cc0636f16e7cdbcc11dce79b1abc978b558aff9fabb262e611&o=&hp=1"
,
description: "Ernakulam, part of the bustling city of Kochi, is a blend of modernity and tradition. It is the commercial capital of Kerala with a rich maritime history.",
history: "Ernakulam's history is intertwined with that of Kochi, which has been a significant port city for centuries. The area was influenced by various cultures, including Portuguese, Dutch, and British, making it a melting pot of cultural and historical influences.",
attractions: [
{
name: "Fort Kochi",
description: "A historic neighborhood known for its colonial architecture, spice markets, and the iconic Chinese fishing nets.",
image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/138998265.jpg?k=9d6ce3012c9f19cc0636f16e7cdbcc11dce79b1abc978b558aff9fabb262e611&o=&hp=1"
},
{
name: "Marine Drive",
description: "A scenic promenade facing the backwaters of Kochi, perfect for evening walks and enjoying sunset views.",
image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/kochi_marine_%281%29.jpg"
},
{
name: "Mattancherry Palace",
description: "A Portuguese palace showcasing Kerala murals depicting Hindu temple art, portraits, and exhibits.",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEDy7H3RZCIFN65ni0gEDqOaDJSU8xmAHs_PhBL_J8G2eaeTxZ4O1fFotnS3FGsndJ0c&usqp=CAU"
},
{
name: "Jewish Synagogue",
description: "The oldest active synagogue in the Commonwealth of Nations, known for its exquisite Belgian chandeliers and hand-painted Chinese tiles.",
image: "https://www.keralatourism.org/images/judaism/large/mattachery%20synagogue_large.jpg"
}
],
images: [
"https://static.toiimg.com/photo/106353388.cms",
"https://upload.wikimedia.org/wikipedia/commons/8/8f/Kochi_Skyline.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ767x-BX2YO4jbxUa-SEtytp9wlubXG6PeDg&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRt-tFlZxPnVsfn-ZrCxTGQXkjolhiJ_p4Yg&s"
]
},
{
index: 8,
name: "Thrissur",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyO5Q256sjpbMXfIf9uPSx4KYNb5iyks5bXA&s"
,
description: "Thrissur, known as the cultural capital of Kerala, is famous for its temples, festivals, and traditional art forms. The Thrissur Pooram festival is a major attraction.",
history: "Thrissur has a rich cultural and historical legacy. It was an important center for the early Chera dynasty and later became a hub for trade and culture. The district is renowned for its contributions to Kerala's cultural heritage, particularly in classical arts and literature.",
attractions: [
{
name: "Vadakkunnathan Temple",
description: "An ancient Shiva temple with a classic Keralite architectural style and renowned for its annual Thrissur Pooram festival.",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyO5Q256sjpbMXfIf9uPSx4KYNb5iyks5bXA&s"
},
{
name: "Athirappilly Waterfalls",
description: "One of the largest waterfalls in Kerala, surrounded by lush green forests and biodiversity.",
image: "https://irisholidays.com/keralatourism/wp-content/uploads/2020/02/athirappilly-hill-waterfalls-1200x385.jpg"
},
{
name: "Cheraman Juma Masjid",
description: "The first mosque in India, built in traditional Kerala architecture with influences from Arab and Chinese styles.",
image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Cheraman_Juma_Palli_%28%E0%B4%9A%E0%B5%87%E0%B4%B0%E0%B4%AE%E0%B4%BE%E0%B5%BB_%E0%B4%9C%E0%B5%81%E0%B4%AE%E0%B4%BE_%E0%B4%AA%E0%B4%B3%E0%B5%8D%E0%B4%B3%E0%B4%BF%29.jpg"
},
{
name: "Peechi Dam",
description: "An enchanting dam surrounded by forests and a wildlife sanctuary, perfect for picnics and boating.",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPAjJH-9Ldka-4mLLaUEZFw-l3uIocnxXoQ&s"
}
],
images: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iTOP4bOBNJuYfHpFk1i2M2x8-3tKzWFb_MJ9yQIsbIwtYwk48vMlahKc8LGSa1hCTNc&usqp=CAU",
"https://www.keralatourism.org/images/enchanting_kerala/large/shakthan_thampuran_palace20230509075312_1298_1.jpg",
"https://www.nativeplanet.com/img/2023/09/view-of-thrissur-city-a-perfect-blend-of-culture-and-nature_1694070884187-1200x675-20230907125002.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HnaJNzC_avRwefqDzzPDmKC9Ipg8A-J2KA&s"
]
},
{
index: 9,
name: "Palakkad",image: "https://www.dtpcpalakkad.com/uploads/picture_gallery/gallery_images/palakkad-fort-5-20230131232319140172.webp"
,
description: "Palakkad, often referred to as the 'Gateway of Kerala', is known for its scenic landscapes, historical forts, and traditional villages.",
history: "Palakkad's history is marked by its strategic location as a gateway between Kerala and Tamil Nadu. The region has been a center of trade and cultural exchange for centuries. Palakkad Fort, built by Hyder Ali, is a prominent historical landmark.",
attractions: [
{
name: "Palakkad Fort",
description: "A well-preserved fort built in the 18th century, offering insights into the region's history and architectural heritage.",
image: "https://www.dtpcpalakkad.com/uploads/picture_gallery/gallery_images/palakkad-fort-5-20230131232319140172.webp"
},
{
name: "Silent Valley National Park",
description: "A biodiversity hotspot known for its rare species of flora and fauna, offering adventurous trekking trails.",
image: "https://example.com/palakkad_silent_valley.jpg"
},
{
name: "Malampuzha Dam",
description: "A multipurpose dam surrounded by gardens, amusement parks, and a cable car ride offering panoramic views.",
image: "https://static2.tripoto.com/media/filter/tst/img/15546/TripDocument/1457681135_forest_by_nihal_jabin.jpg"
},
{
name: "Dhoni Waterfalls",
description: "A serene waterfall nestled in the Western Ghats, surrounded by lush green forests and natural beauty.",
image: "https://tripinic.com/wp-content/uploads/2021/05/Dhoni-Waterfalls.jpg"
}
],
images: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIdbJF3K0sxy5mgjHDobryqV1swUe4yiIyA&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTly3xP-O5kFsgnUzB2BDUeuw6UoMXU2RXvlA&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyR35iaNZk_hPJn_y3PffH1KHqBV5jrUPGaA&s",

"https://ir.iitpkd.ac.in/sites/default/files/inline-images/Priority1_Saraswati%20Block-1.jpg"
]
},
{
index: 10,
name: "Malappuram",image: "https://tripinic.com/wp-content/uploads/2021/01/Kottakkunnu-Park-3-scaled-jpg.webp"
,
description: "Malappuram is known for its rich cultural heritage and historical significance. It is a major center for the Mappila community and their traditions.",
history: "Malappuram has a diverse history influenced by various cultures, including Hindu, Muslim, and colonial powers. The region played a key role in the Malabar Rebellion and has a vibrant cultural heritage with numerous historical sites and traditions.",
attractions: [
{
name: "Kottakkunnu",
description: "A hilltop park with scenic views of Malappuram town, offering recreational activities and cultural programs.",
image: "https://tripinic.com/wp-content/uploads/2021/01/Kottakkunnu-Park-3-scaled-jpg.webp"
},
{
name: "Nedumkayam Rainforest",
description: "A dense rainforest known for its biodiversity and tranquil ambiance, ideal for nature walks and birdwatching.",
image: "https://www.keralatourism.org/images/eco-tourism/trekking_thumb/trekking-trails/connolly-plot-1_07072018141203.jpg"
},
{
name: "Kadalundi Bird Sanctuary",
description: "A haven for birdwatchers, with a diverse range of migratory birds and scenic backwaters.",
image: "https://cdn.pixabay.com/photo/2022/10/23/03/44/bird-7540434_1280.jpg"
},
{
name: "Teak Museum Nilambur",
description: "A museum dedicated to teakwood, showcasing the history and uses of teak in Kerala's forestry.",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29o-seOJ5i0Q9IuAumfKj2mCakSGfSeeD9Krxx18LUkimf4A064eeTN1aaerbIAEv0dY&usqp=CAU"
},
{
name: "Tanur Beach",
description: "A serene beach with golden sands and coconut groves, perfect for relaxing and enjoying sunsets.",
image: "https://cdn.pixabay.com/photo/2018/01/05/02/40/shellfish-3062011_1280.jpg"
}
],
images: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyt95NKBTc_0aRdG4JoYyYCKjQhqLLxm0dQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPb0NA9SfZ7Ve6_DnOgXTd5ImbHAovuGAYeA&s",
"https://upload.wikimedia.org/wikipedia/commons/9/94/Malappuram_Townhall.png",
"https://a.travel-assets.com/findyours-php/viewfinder/images/res70/101000/101695-Malappuram-District.jpg"
]
},
{
index: 11,
name: "Kozhikode",image: "https://cdn.pixabay.com/photo/2023/03/06/06/44/beach-7832758_1280.jpg"
,
description: "Kozhikode, also known as Calicut, is a historically significant city. It is famous for its role in the spice trade and its beautiful beaches.",
history: "Kozhikode has a rich maritime history as a major trading port. It was here that Vasco da Gama first landed in India in 1498. The city was a key center for the spice trade and has a rich cultural and historical legacy.",
attractions: [
{
name: "Kozhikode Beach",
description: "A scenic beach with coconut groves, popular for its sunset views and local delicacies like seafood.",
image: "https://cdn.pixabay.com/photo/2023/03/06/06/44/beach-7832758_1280.jpg"
},
{
name: "Mananchira Square",
description: "A historic town square with landscaped gardens, musical fountain, and cultural events, reflecting the city's heritage.",
image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/db/0e/a7/mananchira-square.jpg?w=1200&h=-1&s=1"
},
{
name: "Beypore Beach",
description: "A traditional fishing port known for its ancient shipbuilding industry and wooden dhows.",
image: "https://cdn.pixabay.com/photo/2022/07/09/17/42/beach-7311405_1280.jpg"
},
{
name: "Thusharagiri Waterfalls",
description: "A series of picturesque waterfalls amidst lush greenery, offering trekking and rock climbing opportunities.",
image: "https://www.picnicwale.com/attractions/assets/sightseeing/thusharagiri-waterfalls-in-kerala-banner.jpg"
}
],
images: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkySNJkQDTkvp4b5a7o9tPSUw3oBBVZLTt8Q&s",
"https://upload.wikimedia.org/wikipedia/commons/2/22/Calicut_Beach.jpg",
"https://www.fabhotels.com/blog/wp-content/uploads/2024/02/cc551697-kozhikode-beach.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJt9Vhu5ksq7Lc1QqWuKXyXBFBbr2CUHIrTQ&s"
]
},
{
index: 12,
name: "Wayanad",image: "https://i0.wp.com/live.staticflickr.com/65535/51822825467_22c5d63bda_h.jpg?resize=1600%2C1116&ssl=1"
,
description: "Wayanad is a picturesque district known for its stunning landscapes, wildlife sanctuaries, and rich tribal culture. It is a haven for nature lovers.",
history: "Wayanad has a rich history with evidence of human habitation dating back to the Neolithic age. The region is known for its tribal heritage and biodiversity. The district has numerous ancient temples, caves, and other historical sites.",
attractions: [
{
name: "Edakkal Caves",
description: "Ancient caves with petroglyphs, providing insights into early human civilization and breathtaking views of Wayanad.",
image: "https://i0.wp.com/live.staticflickr.com/65535/51822825467_22c5d63bda_h.jpg?resize=1600%2C1116&ssl=1"
},
{
name: "Banasura Sagar Dam",
description: "The largest earthen dam in India, surrounded by lush greenery and offering boating facilities amidst scenic vistas.",
image: "https://tripinic.com/wp-content/uploads/2022/01/Banasura-Sagar-Dam-Wayanad-Kerala-scaled-jpg.webp"
},
{
name: "Chembra Peak",
description: "The highest peak in Wayanad, known for its heart-shaped lake amidst lush greenery and panoramic views.",
image: "https://wayanadtourism.co.in/images/places-to-visit/headers/chembra-peak-wayanad-tourism-entry-fee-timings-holidays-reviews-header.jpg"
},
{
name: "Soochipara Falls",
description: "A three-tiered waterfall surrounded by dense forests, offering trekking and rock climbing adventures.",
image: "v"
}
],
images: [
"https://www.keralatourism.org/images/microsites/wayanad/waynadu-1024x768.jpg",
"https://www.raindropsresorts.com/blog/wp-content/uploads/2019/07/wayanad...jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmUgU0fGi_zP0ji5uYeUVtIeniqSjLUhMEQ&s",
"https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_wayanad_tv_destination_img_3_l_638_1135.jpg"
]
},
{
index: 13,
name: "Kannur",image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Views_from_and_around_St._Angelo_Fort%2C_Kannur_%2822%29.jpg"
,
description: "Kannur, also known as Cannanore, is a district rich in history and cultural traditions. It is famous for its Theyyam performances and pristine beaches.",
history: "Kannur has a vibrant history as a prominent trading and cultural center. It was an important port city during ancient times and was influenced by various cultures, including the Portuguese, Dutch, and British. The region is known for its traditional art forms like Theyyam.",
attractions: [
{
name: "St. Angelo Fort",
description: "A massive sea-facing fort built by the Portuguese, offering stunning views of the Arabian Sea and surrounding beaches.",
image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Views_from_and_around_St._Angelo_Fort%2C_Kannur_%2822%29.jpg"
},
{
name: "Payyambalam Beach",
description: "A tranquil beach known for its golden sands, coconut groves, and calm waters, ideal for relaxation and water sports.",
image: "https://cdn.pixabay.com/photo/2016/11/19/15/38/beach-1839922_1280.jpg"
},
{
name: "Parassinikadavu Muthappan Temple",
description: "A famous temple dedicated to Muthappan, known for its Theyyam performances and religious rituals.",
image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Parassini.jpg"
},
{
name: "Dharmadam Island",
description: "A secluded island known for its natural beauty, serene ambiance, and opportunities for beach picnics and photography.",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNqm54TOiaR1qpLRo_QfuxncFxuggug8KKQ&s"
}
],
images: [
"https://th-i.thgim.com/public/news/national/kerala/83tkmt/article25883708.ece/alternates/FREE_1200/02tvkr-palakkayamthattu",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0O3-xi0HjPB_lGpm7_ttqGlgpVIhBcP7Zr9w0SXfEJDZS0w_POzidlfETqNAvmiu3a24&usqp=CAU",
"https://upload.wikimedia.org/wikipedia/commons/1/13/Kannur_South_6%2C_Kerala%2C_India.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JKKTCCJ480f8DWDM2ov93UhdTSwMXHH5Lg&s"
]
},
{
index: 14,
name: "Kasargod",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQvqsOep8CPjYLTE_ZS3ZRmnMX9RDJi4xDA&s"
,
description: "Kasargod is the northernmost district of Kerala, known for its rich cultural diversity and beautiful landscapes. It is famous for its historic forts and serene backwaters.",
history: "Kasargod has a diverse cultural heritage influenced by various rulers, including the Kolathiri Rajas, Vijayanagara Empire, and Tipu Sultan. The region is known for its historical forts, temples, and the unique Theyyam rituals.",
attractions: [
{
name: "Bekal Fort",
description: "A majestic fort overlooking the Arabian Sea, offering panoramic views and cultural insights into Kerala's history.",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQvqsOep8CPjYLTE_ZS3ZRmnMX9RDJi4xDA&s"
},
{
name: "Ananthapura Lake Temple",
description: "A unique temple located on a small lake island, known for its ancient architecture and sacred crocodile.",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvimdk4G4V56P4tzw4mvrzmkbwZs-qVtf-p4rvCQ3Um9MR5EIl44MTQpQuLUbv4pEwY3I&usqp=CAU"
},
{
name: "Chandragiri Fort",
description: "An ancient fort built by Shivappa Nayaka, offering scenic views of the Chandragiri River and nearby landscapes.",
image: "https://cdn.britannica.com/79/124679-050-7A0D3D69/Raja-Mahal-palace-Chandragiri-India-Andhra-Pradesh.jpg"
},
{
name: "Kappil Beach",
description: "A serene beach surrounded by cliffs and palm groves, offering breathtaking sunset views and opportunities for relaxation.",
image: "https://cdn.pixabay.com/photo/2017/04/05/16/29/sunset-2205553_1280.jpg"
}
],
images: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquW9THMz4Q6G6xlfvGQxdJdhbR8RRK1yjfQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEaCd0v1p1jCr0673MIgD02LdPaXUqUZdIw&s",
"https://karnatakatourism.org/wp-content/uploads/2021/02/my-trip-to-the-blue-flag-beaches-karnataka.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqn4NkqWdybo9pAqJ0LYzDWlRxoMP_cBOgqg&s"
]
}
];
// export const KERALA_DISTRICTS: District[] = [
//   { name: 'Thiruvananthapuram', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif', description: 'The capital of Kerala, known for its rich history and culture.' },
//   { name: 'Kollam', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif', description: 'Known for its cashew processing and coir manufacturing.' },
//   { name: 'Alappuzha', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif' , description: 'Famous for its backwater tourism and coir industry.' },
//   { name: 'Pathanamthitta', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif', description: 'Known for its religious unity and festivals.' },
//   { name: 'Kottayam', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif', description: 'The land of letters, latex, and lakes.' },
//   { name: 'Idukki', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif' , description: 'Famous for its spice plantations and wildlife.' },
//   { name: 'Ernakulam', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif' , description: 'The commercial capital of Kerala.' },
//   { name: 'Thrissur', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif' , description: 'Cultural capital of Kerala, known for its festivals and temples.' },
//   { name: 'Palakkad', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif' , description: 'Known as the granary of Kerala, it is a major rice growing region.' },
//   { name: 'Malappuram', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif', description: 'Rich in culture and history, with natural beauty.' },
//   { name: 'Kozhikode', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif', description: 'Known for its historical, cultural, and educational significance.' },
//   { name: 'Wayanad', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif', description: 'Famous for its wildlife and natural beauty.' },
//   { name: 'Kannur', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif', description: 'Known for its handlooms and ritualistic folk arts.' },
//   { name: 'Kasaragod', imageUrl:'https://irisholidays.com/keralatourism/wp-content/uploads/2020/04/theyyam-kerala.gif', description: 'Known for its coir and handloom industries.' }
// ];