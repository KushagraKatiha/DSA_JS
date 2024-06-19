
const myPromise = new Promise(function(res, rej){
    let success = false

    if(success){
        res('Promise Completed !')
    }else{
        rej('Promise Rejected !')
    }

})

myPromise
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('Promise consumed !');
})