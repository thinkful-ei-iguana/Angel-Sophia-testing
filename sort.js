const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));


function sort(list) {
    for(let i = 2; i < list.length; i++){
      let j = i; 
      while(j > 0 && list[j - 1] > list[j]){
        let temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
        j = j - 1; 
      }
    }
    return list;
  }

  //[2, 5, 3, 4 ,1]
  //let j = 3
  //5 > 3
  //let temp = 3
  //3 = 5
  //temp = 5
  //j will go down to 4
  //[1, 2, 3, 4, 5] - [2, 5, 3, 4 ,1]

  //

  module.exports = sort;
