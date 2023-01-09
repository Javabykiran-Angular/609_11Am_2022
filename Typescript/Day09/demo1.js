var jsonObj = {
    id: 9,
    "fname": "Sumit",
    lname: 'Raokhande'
};
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
var arrobj = [
    {
        id: 9,
        "fname": "Sumit",
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["Jan", "March", "Dec"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 55
            }
        ]
    },
    {
        id: 3,
        "fname": "Spruha",
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: "US"
        },
        month: ["Feb", "Aprl", "July"],
        result: [
            {
                subj: "M1",
                marks: 50
            },
            {
                subj: "M2",
                marks: 60
            },
            {
                subj: "M3",
                marks: 85
            }
        ]
    },
    {
        id: 6,
        "fname": "Kiran",
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: "Japan"
        },
        month: ["May", "Aug", "Sept"],
        result: [
            {
                subj: "M1",
                marks: 60
            },
            {
                subj: "M2",
                marks: 65
            },
            {
                subj: "M3",
                marks: 75
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n        ID         :: ".concat(arrobj[i].id, "\n        First Name :: ").concat(arrobj[i].fname, "\n        Last Name  :: ").concat(arrobj[i].lname, "\n        Coutry Name:: ").concat(arrobj[i].country.cname, "\n        Month      :: ").concat(arrobj[i].month.join(" "), "\n        ========Result=================\n    "));
    // for(let j=0;j<arrobj[i].result.length;j++){
    //     console.log(`
    //             Subject ::${arrobj[i].result[j].subj}
    //             Marks   ::${arrobj[i].result[j].marks}
    //     `)
    // }
    arrobj[i].result.forEach(function (myvalue) {
        console.log("\n                    Subject :: ".concat(myvalue.subj, "\n                    Marks   :: ").concat(myvalue.marks, "\n            "));
    });
}
