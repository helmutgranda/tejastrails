
const locations = [
  {
  long:-99.2009815,
  lat:29.6424935,
  title: 'Bandera Endurance Trail Run',
  races: `<i>100k</i>, 50k, 25k, Youth Trail Run`,
  banner: `https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/1611252331504-FE3LTVLIJ3TEELQYWRQF/Tinajas+Trail+Race?format=500w`
},
{
  long:-95.5223628,
  lat:30.6209038,
  title: 'Rocky 50',
  month: 2,
  races: `50m, 50k, 13.1m, Youth Trail`,
  singup: `https://runsignup.com/Race/TX/Huntsville/Rocky50`,
  banner: `https://doc-14-bg-mymaps.googleusercontent.com/untrusted/hostedimage/q6hcfa588f6kpjujbjtckbce90/av7ogpbraveaocpe5eodn3tpes/1638047879000/uHD6OSnEXJ-ke1CRL--DKLw47dcv6FCa/03400294955866176041/5AIsG_vabSqdVcShrjoBs18YidFFwaxRBTJDeitybm9yNSwf1qW3Jl7XxqxGIwrFLVMmhOlwb_OjZ-s5BzzK9TSz1WOPdr5GGh2RAqtO5MFZHJ_l1ApA59kIoOVVsjb_1o5c6OnlJqGm7GEDLVsrxXlXZMPiJ46OabSImjaPkt_Xr8AsNal5BtcfZFeS5fOfGaeST7N0?session=0&fife`
},
{
  longt:-95.5223628,
  lat:30.6209038,
  title: 'Rocky Raccoon 100 Endurance Trail Run',
  races: `100m, 100k, Youth Trail`,
  singup: `https://runsignup.com/Race/Info/TX/Huntsville/RockyRaccoonEnduranceTrailRun#directions`,
  banner: `https://doc-0k-bg-mymaps.googleusercontent.com/untrusted/hostedimage/q6hcfa588f6kpjujbjtckbce90/9vf4ikc5nucbngft35un47bfm4/1638047879000/uHD6OSnEXJ-ke1CRL--DKLw47dcv6FCa/03400294955866176041/5AIsG_vZIvwVfE8BbUgBVzHawLrEVhj0bUbN62nIckp07droQcEp9M9C5GPuai3jS6vefmxOBKVK9poAQcdptk1czch6ZvzPZS98qnQAI5xwpMX5XU5C-Jb0OEQmEargTULF63u-0Mdf9A1RcmnH0GhaHIPOTG1IN4Y8yJueleskFvpwRZebCDFCvcjFxr3DrlcTtVPQ?session=0&fife`
},
{
  long:-99.9588639,
  lat:29.9769323,
  title: 'J&J Race and Trail Running Reunion',
  races: `J&J101m, J&J100km, J&J42k, J&J21m, J&J 21m Ruck, J&J 10m, J&J 4m, J&J Youth Trail`,
  month: 3,
  singup: `https://runsignup.com/Race/TX/RockSprings/JJRaceandTrailRunningReunion`,
  banner: `https://doc-10-bg-mymaps.googleusercontent.com/untrusted/hostedimage/q6hcfa588f6kpjujbjtckbce90/2b24gcr2b5gds33bj5l54b5qak/1638047879000/uHD6OSnEXJ-ke1CRL--DKLw47dcv6FCa/03400294955866176041/5AIsG_vaEHTQDT4WSinH8BuvS97M20q2GwLJ87_7U4kZzvjYGDnDl4YAUlo1ohIMynTzf7JDheaBeVE_dnhTsWuZL1AB6p2f0Dy-iYjf-3WuJGxoCB5j63PUGuuBJL1raTVxgHqAP2U0PF3c4-G0j9HD9Cpa1qmwxEk93rV54uo9S6u8BcAt11wZpcuPqYPif1ZQyDTg?session=0&fife`
},
]

const icon = './running.png'

function infoWindowContent (title, races, singup, banner ) {
  return (
    `
    <div id="content">
    <div id="siteNotice">
    </div>
    <h1 id="firstHeading" class="firstHeading">${title}</h1>
    <div id="bodyContent">
    <p>${races}</p>
    <p><a href="${singup}" target="_blank">
    ${singup}</a></p>
    <img src="${banner}" width="100px"/>
    </div>
    </div>`
  )
}

function initMap() {
  
  const austin = { lat: 30.270857128596095, lng: -97.75414001965449 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
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
      infowindow.setContent(infoWindowContent(item.title, item.races, item.singup, item.banner))
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