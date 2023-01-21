
const locations = [
  {
    lat:30.627189323021366,
    long:-95.52695500319255,
    date: `February 4-5, 2023`,
    where: `Huntsville State Park`,
    address: `565 Park Road 40 West, Huntsville, TX 77340`,
    title: `HOKA Rocky Raccoon 100 Trail Race`,
    races: `100mi, 100k, Youth 1mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/2ca7f7c6-7c48-481a-bb18-36c4b4f780d8/HOKA+Rocky+Raccoon+100+Trail+Race?format=300w`,
    url: `https://www.tejastrails.com/rocky100`
  },
  {
    lat:30.627189323021366,
    long:-95.52695500319255,
    date: `February 11, 2023`,
    where: `Huntsville State Park`,
    address: `565 Park Road 40 West, Huntsville, TX 77340`,
    title: `HOKA Rocky 50 Trail Race`,
    races: `50 mi, 50k, 13.1 mi (1/2 Marathon), Youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/a9a95d88-6caf-40aa-9931-a746dad4e51a/HOKA+Rocky+50+Trail+Race?format=300w`,
    url: `https://www.tejastrails.com/rocky50`,
  },
  {
    lat:29.977131510271686,
    long:-99.95879251613108,
    date: `March 10-11, 2023`,
    where: `Camp Eagle`,
    address: `6424 Hackberry Rd, Rocksprings, TX 78880`,
    title: `J&J Race & Trail Running Reunion`,
    races: `50 mi, 30 mi, 20 mi, 10 mi, 4 mi, Youth 1 mi, 20 mi (3-person) Relay, 20 mi Ruck, 4 mi Ruck, King & Queen of the Hill (~1 mi)`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1603737379712-7FL5YVTNOXB2CVOINR6P/J%26J.jpg?format=500w`,
    url: `https://www.tejastrails.com/jandj`,
  },
  {
    lat:30.044684202546488,
    long:-97.12575378908639,
    date: `April 1, 2023`,
    where: `Rocky Hill Ranch`,
    address: `Rocky Hill Ranch, SMITHVILLE, TX`,
    title: `Hells Hills Trail Race`,
    races: `50 mi, 50k, 25k, 10k, 25k Ruck, 10k Ruck, Youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1615247500096-CNWUKYNYMTQU90XJYHHZ/HELLS+HILLS.jpg?format=300w`,
    url: `https://www.tejastrails.com/hellshills`,
  },
  {
    lat:30.800546621381418 ,
    long:-98.33373664839078,
    date: `April 29, 2023`,
    where: `Reveille Peak Ranch`,
    address: `Reveille Peak Ranch, Burnet, TX`,
    title: `Pandora’s Box Of Rox Trail Race`,
    races: `52.4 mi, 26.2 mi, 13.1 mi, 8 mi, 4 mi, Youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1615248807439-4348YO8L168KO945W2YB/PANDORA+LOGO.jpg?format=300w`,
    url: `https://www.tejastrails.com/pandora`,
  },
  {
    lat:30.839892714145815,
    long:-98.34064281202764,
    date: `May 13, 2023`,
    where: `Spider Mountain Bike Park, Burnet, TX   `,
    address: `Spider Mountain Bike Park, Burnet, TX   `,
    title: `Spider Mountain Trail Race`,
    races: `4 mi, 8 mi, 12 mi, 12 mi Ruck, 4 mi Ruck, Youth 1 mi (By Time) 6 hour, 9 hour, 12 hour/relay`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1618003845015-W2K55Y8LH7WZXZYG0J87/SPIDER+MOUNTAIN.jpg?format=300w`,
    url: `https://www.tejastrails.com/spider`,
  },
  {
    lat:30.47773998781925, 
    long:-98.15168548076534,
    date: `June 3, 2023`,
    where: `Spicewood, TX`,
    address: `Krause Springs, 424 County Road 404, Spicewood TX 78669`,
    title: `Texas Trail Running Festival`,
    races: `26.2 mi, 13.1 mi, 10k, 5k, Youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1615411718182-XY18S32T3RTSSYJ7P8HT/FESTIVAL.png?format=300w`,
    url: `https://www.tejastrails.com/festival`,
  },
  {
    lat:30.334450857885, 
    long:-98.26207980765716,
    date: `June 24th, 2023`,
    where: `Pedernales Falls State Park`,
    address: `Pedernales Falls State Park, Johnson City, TX`,
    title: `Capt'n Karl's Pedernales Falls`,
    races: `60km, 30km, 20km, 10km, 5km, youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1616105034732-YUIKI89Z50JHEUGVKXXN/CKTS-Pedernales.jpg?format=300w`,
    url: `https://www.tejastrails.com/ck-pedernales`,
  },
  {
    lat:30.508295810986212, 
    long:-98.09532528906675,
    date: `July 15th-16th, 2023`,
    where: `Muleshoe Bend LCRA Recreation Area`,
    address: `, Spicewood, TX`,
    title: `Capt'n Karl's Muleshoe Bend`,
    races: `60k, 30k, 20k, 10k, 5k, youth 1 mi. `,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1616105122846-SYZXIRWOPB2G98OSSW4E/CKTS-Muleshoe.jpg?format=300w`,
    url: `https://www.tejastrails.com/ck-muleshoe`,
  },
  {
    lat:31.167320030505515, 
    long:-98.47161824350788,
    date: `August 5th, 2023`,
    where: `COLORADO BEND STATE PARK`,
    address: `COLORADO BEND STATE PARK, BEND, TX`,
    title: `Capt'n Karl's Colorado Bend`,
    races: `60k, 30k, 20k, 10k, youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1616104938720-VM6ZYVR6I9SKRMBY79NC/CKTS-Colorado.jpg?format=300w`,
    url: `https://www.tejastrails.com/ck-colorado`,
  },
  {
    lat:30.86300217977595, 
    long:-98.33215292931953,
    date: `August 26th, 2023`,
    where: `Reveille Peak Ranch`,
    address: `Reveille Peak Ranch, Burnet, TX`,
    title: `Capt'n Karl's Reveille Peak Ranch`,
    races: `60km, 30km, 20km, 10km, 5km, youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1616105224553-G1NS07Z9IVV00AV9RVX6/CKTS-ReveillePeak.jpg?format=300w`,
    url: `https://www.tejastrails.com/ck-reveille`,
  },
  {
    lat:30.461129897276255, 
    long:-98.01876697862663,
    date: `September 9, 2023`,
    where: `Pace Bend Park`,
    address: `2011 Pace Bend Rd N, Spicewood TX`,
    title: `Mellow Trail Race`,
    races: `26.2 mi, 13.1 mi, 10k, 5k, youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1615670833061-H0LGW5CK3YRISDVF12ZM/MELLOW+LOGO+%28Med%29.jpg?format=300w`,
    url: `https://www.tejastrails.com/mellow`,
  },
  {
    lat:30.309759533517287, 
    long:-96.63530362986748,
    date: `September 30, 2023`,
    where: `Lake Somerville State Park, Birch Creek Unit`,
    address: `14222 Park Road 57, Somerville, TX 77879`,
    title: `The Trailway Trail Race`,
    races: `50k, 26.2 mi, 13.1 mi, 10k, 26 mi Ruck, 10k Ruck, 5k, youth mi 1`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1623513467831-JVTJTWRQ4G5L1T2LT2ZZ/Trailway+%28Small+BW%29.jpeg?format=300w`,
    url: `https://www.tejastrails.com/trailway`,
  },
  {
    lat:29.646079177385047, 
    long:-99.19990047647597,
    date: `October 27-29, 2023`,
    where: `Hill Country State Natural Area`,
    address: `10600 Bandera Creek Rd, Bandera, TX 78003`,
    title: `Cactus Rose Endurance Trail Race`,
    races: `5 mi, 25 mi, 50 mi, 100 mi, 5 mi ruck, 25 mi ruck, youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1615674040760-FURMZ9XUC0IJLCLMB9X5/CACTUS+ROSE.png?format=300w`,
    url: `https://www.tejastrails.com/cactus`,
  },
  {
    lat:30.584970878981224, 
    long:-98.25070031211874,
    date: `November 5, 2023`,
    where: `Marble Falls High School, Mustang Stadium`,
    address: `Marble Falls High School, Mustang Stadium, Marble Falls, TX`,
    title: `Hill Country Trivium Road Race`,
    races: `50k, 26.2 mi, 13.1 mi, 10k, 5k, Phoenix Family Fun Run`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/397f6986-9b6b-4f23-8be1-b4838ab72f1f/TRIVIUM+LOGO.jpg?format=300w`,
    url: `https://www.tejastrails.com/trivium`,
  },
  {
    lat:30.05790819989511, 
    long:-96.90624437640044,
    date: `November 18, 2023`,
    where: `Bluff Creek Ranch`,
    address: `537 Owl Creek Road, Warda, TX 78960`,
    title: `Wild Hare Trail Race`,
    races: `50 mi, 50k, 25k, 10k, youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1615833743638-RU08K4CQ6OJGNB2K8V84/WILD+HARE.png?format=300w`,
    url: `https://www.tejastrails.com/wild`,
  },
  {
    lat:30.660871393158132, 
    long:-97.89794549419501,
    date: `December 9, 2023`,
    where: `Indian Mound Ranch`,
    address: `500 Becker Rd, Liberty Hill, TX 78642`,
    title: `Mosaic Trail Race`,
    races: `50k, 26.2 mi, 13.1 mi, 15k, 10k, 5, youth 1 mi, youth 2 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1615838161875-GCVDXWYENC83MFUS6Q8C/MOSAIC.jpg?format=300w`,
    url: `https://www.tejastrails.com/mosaic`,
  },
  {
    lat:31.065226727024452, 
    long:-98.50423897810393,
    date: `December 3, 2023`,
    where: `Colorado Bend State Park`,
    address: `Colorado Bend State Park, Bend, TX`,
    title: `Tinajas Trail Race`,
    races: `52.4 mi, 26.2 mi, 13.1 mi, 10k, Youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/303424b8-aadd-499c-a8eb-bae69b765519/tinajas.jpg?format=300w`,
    url: `https://www.tejastrails.com/tinajas`,
  },
  {
    lat:29.645482654082667, 
    long:-99.20144567675105,
    date: `January 7-8, 2023`,
    where: `Hill Country State Natural Area (HCSNA) `,
    address: `10600 Bandera Creek Rd, Bandera, TX 78003`,
    title: `HOKA Bandera Endurance Trail Race`,
    races: `100k, 50k, 25k, Youth 1 mi`,
    banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f4762700-1a1a-48cd-bfcf-f31b21c780fc/HOKA+Bandera+Endurance+Trail+Race?format=300w`,
    url: `https://www.tejastrails.com/bandera`,
  },
  
]

const icon = './running.png'

function infoWindowContent (title, date, races, url, banner ) {
  return (
    `
    <div id="content">
    <div id="siteNotice">
    </div>
    <h1 id="firstHeading" class="firstHeading">${title}</h1>
    <div id="bodyContent">
    <p>${races}</p>
    <p>${date}</p>
    <p><a href="${url}" target="_blank">
    ${url}</a></p>
    <img src="${banner}" width="100px"/>
    </div>
    </div>`
  )
}

function initMap() {
  
  const austin = { lat: 30.270857128596095, lng: -97.75414001965449 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: austin,
  });

  const infowindow = new google.maps.InfoWindow({});

  locations.map((item) => {
    const m = new google.maps.Marker({
      position: {lat: item.lat, lng: item.long},
      icon: icon,
      map: map,
      title: item.title
    })
    m.addListener("click", () => {
      infowindow.setContent(infoWindowContent(item.title, item.date, item.races, item.url, item.banner))
      infowindow.open( {
        anchor: m,
        map: map,
        shouldFocus: false,
      })
    })
  })

}


let selectBox = new vanillaSelectBox("#monthSelect",{"maxHeight":200,search:true});
console.log(selectBox);