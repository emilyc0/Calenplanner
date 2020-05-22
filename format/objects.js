console.log(calendarDat);
let months = 
[ 
    January = {
    name: "January",
    numDays: 31,
    dayStart: 4},

    February = {
        name: "February",
        numDays: 29,
        dayStart: 7},

    March = {
        name: "March",
        numDays: 31,
        dayStart: 1},
    
    April = {
        name: "April",
        numDays: 30,
        dayStart: 4},

    May = {
        name: "May",
        numDays: 31,
        dayStart: 6},

    June = {
        name: "June",
        numDays: 30,
        dayStart: 2},

    July = {
        name: "July",
        numDays: 31,
        dayStart: 4},

    August = {
        name: "August",
        numDays: 31,
        dayStart: 7},

    September = {
        name: "September",
        numDays: 30,
        dayStart: 3},

    October = {
        name: "October",
        numDays: 31,
        dayStart: 5},

    November = {
        name: "November",
        numDays: 30,
        dayStart: 1},

    December = {
        name: "December",
        numDays: 31,
        dayStart: 3}


];

let month;
/*x=months.indexOf();
currentMonth = month[x];*/

function displayMonth()
{
    document.getElementById("Mgrid").style.display = "grid";    
    document.getElementById("month").style.display ="none";
}
function displayWeek()
{
    document.getElementById("week").style.display = "grid";    
}
function generateDays()
{
    let currentDays = document.getElementsByClassName("day");
    console.log(currentDays);
    for(let i = 0; i<currentDays.length; i++)
    {
        currentDays[i].parentNode.removeChild(currentDays[i]);
        i--;
    }
    let currentButtons = document.getElementsByClassName('addTask');
    for(let i = 0; i<currentButtons.length.length; i++)
    {
        currentButtons[i].parentNode.removeChild(currentButtons[i]);
        i--;
    }

    let currentDaysMBf = document.getElementsByClassName("dayMBf");
    for(let y = 0; y<currentDaysMBf.length; y++)
    {
        currentDaysMBf[y].parentNode.removeChild(currentDaysMBf[y]);
        y--;
    }

    let currentDaysMAfter = document.getElementsByClassName("dayMAfter");
    for(let o = 0; o<currentDaysMAfter.length; o++)
    {
        currentDaysMAfter[o].parentNode.removeChild(currentDaysMAfter[o]);
        o--;
    }

    
    if(month.dayStart!==1)
    {
        for(let x=month.dayStart-1; x>0; x--)
        {
            let div = document.createElement("div");
            div.setAttribute('class', 'dayMBf');
            div.appendChild( document.createTextNode(months[months.indexOf(month)-1].numDays-x+1));
            /*console.log(x)
            console.log(months[months.indexOf(month)-1].numDays)
            console.log( months[months.indexOf(month)-1].numDays-x)*/
            document.getElementById('days').appendChild(div);
        }

    }
    for(let i=0; i< month.numDays; i++)
    {
        let div = document.createElement("div");
        div.setAttribute('class', 'day');
        let id= 'd' +i
        div.setAttribute('id', id);
        div.appendChild( document.createTextNode(i+1));
        document.getElementById('days').appendChild(div);
    }

    if(month.dayStart!==1)
    {
        for(let z=1; z<= month.dayStart; z++)
            {
                let div = document.createElement("div");
                div.setAttribute('class', 'dayMAfter');
                div.appendChild( document.createTextNode(z));
                document.getElementById('days').appendChild(div);
            }
    }
    else
    {
        for(let z=1; z<= (42-month.numDays); z++)
            {
                let div = document.createElement("div");
                div.setAttribute('class', 'dayMAfter');
                div.appendChild( document.createTextNode(z));
                document.getElementById('days').appendChild(div);
            }
    }
    
    for(let i=0; i<currentDays.length; i++)
    {
        let addTask = document.createElement("div");
        addTask.setAttribute('class', 'addTask');
        document.getElementById(currentDays[i].id).appendChild(addTask);
        console.log(currentDays[i].id);
        console.log(addTask);
    }
                
}
function setMonth( i )
{
    month = months[i];
    console.log(month);
    generateDays();

    document.getElementById("mname").innerText = month.name;

}

function add()
{
    

}

function parseText()
{
    let tasksString = db.connectCallback(connectCallback);
    let tasks = taskString( ", ");


}

let expndM = document.getElementById("openPopup");
expndM.onclick = displayMonth;

let expndW = document.getElementById("wExpand");
expndW.onclick = displayWeek;

/* Select Month */
    let setMonthJa = document.getElementById("m1");
    setMonthJa.onclick = setMonth.bind(null, 0);

    let setMonthF = document.getElementById("m2");
    setMonthF.onclick = setMonth.bind(null,1);

    let setMonthMr = document.getElementById("m3");
    setMonthMr.onclick = setMonth.bind(null, 2);

    let setMonthAp = document.getElementById("m4");
    setMonthAp.onclick = setMonth.bind(null, 3);;

    let setMonthMa = document.getElementById("m5");
    setMonthMa.onclick = setMonth.bind(null, 4);

    let setMonthJn = document.getElementById("m6");
    setMonthJn.onclick = setMonth.bind(null, 5);

    let setMonthJl = document.getElementById("m7");
    setMonthJl.onclick = setMonth.bind(null, 6);

    let setMonthAu = document.getElementById("m8");
    setMonthAu.onclick = setMonth.bind(null, 7);

    let setMonthS = document.getElementById("m9");
    setMonthS.onclick = setMonth.bind(null, 8);

    let setMonthO = document.getElementById("m10");
    setMonthO.onclick = setMonth.bind(null, 9);

    let setMonthN = document.getElementById("m11");
    setMonthN.onclick = setMonth.bind(null, 10);

    let setMonthD = document.getElementById("m12");
    setMonthD.onclick = setMonth.bind(null, 11);

if(month !==null)
{
    if(month.numDays===29)
    {
        let addTD1 = document.getElementById('d0');
        addTD1.onclick = add;

        let addTD2 = document.getElementById('d1');
        addTD2.onclick = add;

        let addTD3 = document.getElementById('d2');
        addTD3.onclick = add;

        let addTD4 = document.getElementById('d3');
        addTD4.onclick = add;

        let addTD5 = document.getElementById('d4');
        addTD5.onclick = add;

        let addTD6 = document.getElementById('d5');
        addTD6.onclick = add;

        let addTD7 = document.getElementById('d6');
        addTD7.onclick = add;

        let addTD8 = document.getElementById('d7');
        addTD8.onclick = add;

        let addTD9 = document.getElementById('d8');
        addTD9.onclick = add;

        let addTD10 = document.getElementById('d9');
        addTD10.onclick = add;

        let addTD11= document.getElementById('d10');
        addTD11.onclick = add;

        let addTD12 = document.getElementById('d11');
        addTD12.onclick = add;

        let addTD13 = document.getElementById('d12');
        addTD13.onclick = add;

        let addTD14 = document.getElementById('d13');
        addTD14.onclick = add;

        let addTD15 = document.getElementById('d14');
        addTD15.onclick = add;

        let addTD16 = document.getElementById('d15');
        addTD16.onclick = add;

        let addTD17 = document.getElementById('d16');
        addTD17.onclick = add;

        let addTD18 = document.getElementById('d17');
        addTD18.onclick = add;

        let addTD19 = document.getElementById('d18');
        addTD19.onclick = add;

        let addTD20 = document.getElementById('d19');
        addTD20.onclick = add;

        let addTD21 = document.getElementById('d20');
        addTD21.onclick = add;

        let addTD22 = document.getElementById('d21');
        addTD22.onclick = add;

        let addTD23 = document.getElementById('d22');
        addTD23.onclick = add;

        let addTD24 = document.getElementById('d23');
        addTD24.onclick = add;

        let addTD25 = document.getElementById('d24');
        addTD25.onclick = add;

        let addTD26 = document.getElementById('d25');
        addTD26.onclick = add;

        let addTD27 = document.getElementById('d26');
        addTD27.onclick = add;

        let addTD28 = document.getElementById('d27');
        addTD28.onclick = add;

        let addTD29 = document.getElementById('d28');
        addTD29.onclick = add;


    }

    if(month.numDays===30)
    {
        let addTD1 = document.getElementById('d0');
        addTD1.onclick = add;

        let addTD2 = document.getElementById('d1');
        addTD2.onclick = add;

        let addTD3 = document.getElementById('d2');
        addTD3.onclick = add;

        let addTD4 = document.getElementById('d3');
        addTD4.onclick = add;

        let addTD5 = document.getElementById('d4');
        addTD5.onclick = add;

        let addTD6 = document.getElementById('d5');
        addTD6.onclick = add;

        let addTD7 = document.getElementById('d6');
        addTD7.onclick = add;

        let addTD8 = document.getElementById('d7');
        addTD8.onclick = add;

        let addTD9 = document.getElementById('d8');
        addTD9.onclick = add;

        let addTD10 = document.getElementById('d9');
        addTD10.onclick = add;

        let addTD11= document.getElementById('d10');
        addTD11.onclick = add;

        let addTD12 = document.getElementById('d11');
        addTD12.onclick = add;

        let addTD13 = document.getElementById('d12');
        addTD13.onclick = add;

        let addTD14 = document.getElementById('d13');
        addTD14.onclick = add;

        let addTD15 = document.getElementById('d14');
        addTD15.onclick = add;

        let addTD16 = document.getElementById('d15');
        addTD16.onclick = add;

        let addTD17 = document.getElementById('d16');
        addTD17.onclick = add;

        let addTD18 = document.getElementById('d17');
        addTD18.onclick = add;

        let addTD19 = document.getElementById('d18');
        addTD19.onclick = add;

        let addTD20 = document.getElementById('d19');
        addTD20.onclick = add;

        let addTD21 = document.getElementById('d20');
        addTD21.onclick = add;

        let addTD22 = document.getElementById('d21');
        addTD22.onclick = add;

        let addTD23 = document.getElementById('d22');
        addTD23.onclick = add;

        let addTD24 = document.getElementById('d23');
        addTD24.onclick = add;

        let addTD25 = document.getElementById('d24');
        addTD25.onclick = add;

        let addTD26 = document.getElementById('d25');
        addTD26.onclick = add;

        let addTD27 = document.getElementById('d26');
        addTD27.onclick = add;

        let addTD28 = document.getElementById('d27');
        addTD28.onclick = add;

        let addTD29 = document.getElementById('d28');
        addTD29.onclick = add;

        let addTD30 = document.getElementById('d29');
        addTD30.onclick = add;


    }

    if(month.numDays===31)
    {
        let addTD1 = document.getElementById('d0');
        addTD1.onclick = add;

        let addTD2 = document.getElementById('d1');
        addTD2.onclick = add;

        let addTD3 = document.getElementById('d2');
        addTD3.onclick = add;

        let addTD4 = document.getElementById('d3');
        addTD4.onclick = add;

        let addTD5 = document.getElementById('d4');
        addTD5.onclick = add;

        let addTD6 = document.getElementById('d5');
        addTD6.onclick = add;

        let addTD7 = document.getElementById('d6');
        addTD7.onclick = add;

        let addTD8 = document.getElementById('d7');
        addTD8.onclick = add;

        let addTD9 = document.getElementById('d8');
        addTD9.onclick = add;

        let addTD10 = document.getElementById('d9');
        addTD10.onclick = add;

        let addTD11= document.getElementById('d10');
        addTD11.onclick = add;

        let addTD12 = document.getElementById('d11');
        addTD12.onclick = add;

        let addTD13 = document.getElementById('d12');
        addTD13.onclick = add;

        let addTD14 = document.getElementById('d13');
        addTD14.onclick = add;

        let addTD15 = document.getElementById('d14');
        addTD15.onclick = add;

        let addTD16 = document.getElementById('d15');
        addTD16.onclick = add;

        let addTD17 = document.getElementById('d16');
        addTD17.onclick = add;

        let addTD18 = document.getElementById('d17');
        addTD18.onclick = add;

        let addTD19 = document.getElementById('d18');
        addTD19.onclick = add;

        let addTD20 = document.getElementById('d19');
        addTD20.onclick = add;

        let addTD21 = document.getElementById('d20');
        addTD21.onclick = add;

        let addTD22 = document.getElementById('d21');
        addTD22.onclick = add;

        let addTD23 = document.getElementById('d22');
        addTD23.onclick = add;

        let addTD24 = document.getElementById('d23');
        addTD24.onclick = add;

        let addTD25 = document.getElementById('d24');
        addTD25.onclick = add;

        let addTD26 = document.getElementById('d25');
        addTD26.onclick = add;

        let addTD27 = document.getElementById('d26');
        addTD27.onclick = add;

        let addTD28 = document.getElementById('d27');
        addTD28.onclick = add;

        let addTD29 = document.getElementById('d28');
        addTD29.onclick = add;

        let addTD30 = document.getElementById('d29');
        addTD30.onclick = add;

        let addTD31 = document.getElementById('d30');
        addTD31.onclick = add;


    }
}
    
    