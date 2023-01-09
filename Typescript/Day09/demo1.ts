
let jsonObj={
    id:9,
    "fname":"Sumit",
    lname:'Raokhande'
}

// 1 dot operator
// 2 Square operator

// 1 dot operator

    // console.log(`
    //     ID         :: ${jsonObj.id}
    //     First Name :: ${jsonObj.fname}
    //     Last Name  :: ${jsonObj.lname}
    // `)

// 2 Square operator
// console.log(`
// ======= Using Square Operator==========
// ID         :: ${jsonObj["id"]}
// First Name :: ${jsonObj["fname"]}
// Last Name  :: ${jsonObj['lname']}
// `)

//Array of Object / multidimensional array 

let arrobj=[
    {
        id:9,
        "fname":"Sumit",
        lname:'Raokhande',
        country:{
            cid:1,
            cname:"India"

        },
        month:["Jan","March","Dec"],

        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:55
            }
        ]
    },
    {
        id:3,
        "fname":"Spruha",
        lname:'Raokhande',
        country:{
            cid:2,
            cname:"US"
        },
        month:["Feb","Aprl","July"],
        result:[
            {
                subj:"M1",
                marks:50
            },
            {
                subj:"M2",
                marks:60
            },
            {
                subj:"M3",
                marks:85
            }
        ]
    },
    {
        id:6,
        "fname":"Kiran",
        lname:'Raokhande',
        country:{
            cid:3,
            cname:"Japan"
        },
        month:["May","Aug","Sept"],
        result:[
            {
                subj:"M1",
                marks:60
            },
            {
                subj:"M2",
                marks:65
            },
            {
                subj:"M3",
                marks:75
            }
        ]
    }
]


for(let i=0;i<arrobj.length;i++){
    console.log(`
        ID         :: ${arrobj[i].id}
        First Name :: ${arrobj[i].fname}
        Last Name  :: ${arrobj[i].lname}
        Coutry Name:: ${arrobj[i].country.cname}
        Month      :: ${arrobj[i].month.join(" ")}
        ========Result=================
    `)

    // for(let j=0;j<arrobj[i].result.length;j++){
    //     console.log(`
    //             Subject ::${arrobj[i].result[j].subj}
    //             Marks   ::${arrobj[i].result[j].marks}
    //     `)
    // }

    arrobj[i].result.forEach((myvalue)=>{
            console.log(`
                    Subject :: ${myvalue.subj}
                    Marks   :: ${myvalue.marks}
            `)
    })


}



