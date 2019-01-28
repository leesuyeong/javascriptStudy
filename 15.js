// Promise

function getData(callback) {
    const data = ['test1','test2','test3'];
    setTimeout(()=>{
        callback(data);
    },100);
}

getData((data)=>{
    getData((data)=>{
        getData((data)=>{
            getData((data)=>{
                getData((data)=>{
                    console.log(data)
                })
            })
        })
    })
});

function getData2() {
    const data = ['test1','test2','test3'];
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data.length === 0 ){
                reject('데이터가 없습니다.')
            } else {
                resolve(data)
            }
        },100);
    })
}

getData2().then((data)=>{
    console.log(data);
}).catch((err)=>{
console.log(err);
})


// 콜백 지옥 탈출하기

getData2().then(()=>{
    return getData2();
}).then((data)=>{
    return getData2();
}).then((data)=>{
    return getData2();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})