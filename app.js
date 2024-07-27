
let time;
let depurture;
let destination;

const MIN_TO_SEC = 60


const  trainTimeSheet = [
    {
        id:"6wrwhqp135zhrmby0ey1biw6xn6ml4s4uxfx50dbr6nhfnz9of",
        station:"تجریش",
        arrivalTimes:[8.00,9.00,10.00,11.00,12.00,13.00,14.00,15.00,16.00,17.00,18.00,19.00,20.00,21.00,22.00],
        stop: 5*MIN_TO_SEC,
        prevDestination:null,
        nextDestination:"پل صدر",
        travelTime: 7*MIN_TO_SEC
    },
    {
        id:"eb3ha4dl980q9ox7u6xzh973get9qurz1cqry51mw9n1xpbiih",
        station:"پل صدر",
        arrivalTimes:[8.13,9.13,10.13,11.13,12.13,13.13,14.13,15.13,16.13,17.13,18.13,19.13,20.13,21.13,22.13],
        stop: 5*MIN_TO_SEC,
        prevDestination:"تجریش",
        nextDestination:"قلهک",
        travelTime: 9*MIN_TO_SEC
    },
    {
        id:"ka5av43fhjdv50pcescfpwbkb2k0zi6i8btbjerp5k1wt1dn2t",
        station:"قلهک",
        arrivalTimes:[8.27,9.27,10.27,11.27,12.27,13.27,14.27,15.27,16.27,17.27,18.27,19.27,20.27,21.27,22.27],
        stop: 5*MIN_TO_SEC,
        prevDestination:"پل صدر",
        nextDestination:"شریعتی",
        travelTime: 6*MIN_TO_SEC
    },
    {
        id:"0gdxylz281nttswcgl6ffqtup6hb0op4nr0ymvddw2au7tam4m",
        station:"شریعتی",
        arrivalTimes:[8.38,9.38,10.38,11.38,12.38,13.38,14.38,15.38,16.38,17.38,18.38,19.38,20.38,21.38,22.38],
        stop: 5*MIN_TO_SEC,
        prevDestination:"قلهک",
        nextDestination:"میرداماد",
        travelTime: 12*MIN_TO_SEC
    },
    {
        id:"uq3r7v374coy45bso8aw1ejcyvvuxnsx8rq1uwr8sdczr6zs29",
        station:"میرداماد",
        arrivalTimes:[8.55,9.55,10.55,11.55,12.55,13.55,14.55,15.55,16.55,17.55,18.55,19.55,20.55,21.55,22.55],
        stop: 5*MIN_TO_SEC,
        prevDestination:"شریعتی",
        nextDestination:"حقانی",
        travelTime: 4*MIN_TO_SEC
    },
    {
        id:"m2yjk7loun9ffeiy27s11cegbs2xmabq9dmk8hzziowgtfw8q8",
        station:"حقانی",
        arrivalTimes:[9.10,10.10,11.10,12.10,13.10,14.10,15.10,16.10,17.10,18.10,19.10,20.10,21.10,22.10,23.10],
        stop: 15*MIN_TO_SEC,
        prevDestination:"میرداماد",
        nextDestination:null,
        travelTime: 0*MIN_TO_SEC
    }
]


const init = () => {

    trainTimeSheet.map(i=>{
        const el = document.createElement('option')
        el.innerText = i.station
        document.getElementById("depurture-input").appendChild(el)

    })
    trainTimeSheet.map(i=>{
        const el = document.createElement('option')
        el.innerText = i.station
        document.getElementById("destination-input").appendChild(el)

    })
}   

let destList = [...trainTimeSheet]
const checkroutes = () => {
    document.getElementById('stations').innerHTML = ""
    destList = [...trainTimeSheet]
    document.getElementsByClassName('result')[0].style.display = "inline-block"
    time = { hour: new Date().getHours(), minute: new Date().getMinutes() }
    depurture = document.getElementsByName("depurture")[0].value
    destination = document.getElementsByName("destination")[0].value
    const nearestStation = trainTimeSheet.filter(i=> i.station == depurture )
    const nextArival = nearestStation[0].arrivalTimes.find(i=> +`${time.hour}.${time.minute}` < i )
    document.getElementById("arrival-time").innerText = nextArival
    destList.forEach((i,index)=>{
        if(i.station == depurture){
            destList.splice(0,index)
        }
        if(i.prevDestination == destination){
            destList.splice(index,destList.length-1)
        }
})
    const travelTime = destList.reduce((acc,i)=> acc += i.stop + i.travelTime,0)
    document.getElementById("approx-time").innerHTML = travelTime/60
    destList.forEach((i,index)=>{
        console.log(i)
        const el = document.createElement('div')
        const gap = document.createElement('hr')
        el.innerText =  i.station 
        if(index === 0 ){
      
            document.getElementById('stations').appendChild(el)
            document.getElementById('stations').appendChild(gap)
            
        }else if( index === destList.length-1){
          
            document.getElementById('stations').appendChild(el)
            
        }else{
            document.getElementById('stations').appendChild(el)
            document.getElementById('stations').appendChild(gap)
               
        }

    })
   
}

