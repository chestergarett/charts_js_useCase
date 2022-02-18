let results = {
    datasets: [
    {
        label: 'test label',
        data: [1,2,3,null]
    },
    {
        label: 'test label2',
        data: [null, 1,2,3]
    }
    ]
}

results.datasets.forEach(function(obj){
    if(obj.data.length!==0){
        obj.data.forEach(function(x){
            if(typeof(x)!=='number'){
                index = obj.data.indexOf(x)
                obj.data[index]=0
            }
        }) 
    }
})

console.log(results.datasets[0].data)