
let newResults = {
     datasets: [
    
     ]
}

let results = [
    {data1: 'test3', data2: 'test4', subtitle: 'testSubtitle'},
    {data1: 'test1', data2: 'test2', subtitle: 'testSubtitle'},
]

for (let i=0;i<results.length;i++){
    newResults.datasets.push(
        {data: [results[i].data1, results[i].data2], subtitle: results[i].subtitle}
    )
}
console.log(newResults.datasets[0].data)