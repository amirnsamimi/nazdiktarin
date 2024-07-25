
let time;
let depurture;
let destination;

const  trainTimeSheet = [

    {
        depurture:"تجریش",
        arrivalTimes:[8.00,9.00,10.00,11.00,12.00],
        stop: 0.15,
    },
    {
        depurture:"پانزده خرداد",
        arrivalTimes:[8.00,9.00,10.00,11.00,12.00],
        stop: 0.15,
    }


]

const checkroutes = () => {
    time = new Date().toISOString();
    depurture = document.getElementsByName("depurture")[0].value
    destination = document.getElementsByName("destination")[0].value
}

