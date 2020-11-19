let data = {};


const JsonData = require('../Model/data');

data.StortJsonByAge = function(){
    let sortedArray = [];
    sortedArray.push(JsonData[0]);

    JsonData.sort(function(a, b) {
        return parseInt(a.Age) - parseInt(b.Age);
    });

    return JsonData

}


data.getSumOfMarks = function(){
    let TotalSum = 0;
    JsonData.forEach(element => {
        TotalSum = Number(TotalSum) + Number(element.Marks);
    });
    // console.log("TotalSum",TotalSum);
    return TotalSum
}

module.exports = data;