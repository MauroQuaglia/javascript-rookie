//https://www.codewars.com/kata/53b2ff49b82af296ce001139/train/javascript
'use strict';

Array.prototype.reverse = function () {
   for (let i = 0; i < this.length; i++) {
       this.splice(i, 0, this.pop());
   }
   return this;
};