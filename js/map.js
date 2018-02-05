'use strict';

var HOUSE_TITLE = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var ADS_QUANTITY = 8;
var TIME = ['12:00', '13:00', '14:00'];
var HOUSE_TYPE = ['flat', 'house', 'bungalo'];
var FEATURES_ITEMS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var similarAds = [];

var randomValue = function (number) {
  return Math.floor(Math.random() * number);
};

var randomValueFromRange = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

var mixArray = function (arr) {
  var newArr = arr.slice();
  for (var i = newArr.length - 1; i > 0; i--) {
    var num = Math.floor(Math.random() * (i + 1));
    var buffer = newArr[num];
    newArr[num] = newArr[i];
    newArr[i] = buffer;
  }
  return newArr;
};

var generateArrayRandomLength = function (arr) {
  return mixArray(arr).slice(0, randomValue(arr.length - 1));
};

var createAdsData = function (adsArray) {
  for (var i = 0; i < ADS_QUANTITY; i++) {
    adsArray.push({author: {avatar: 'img/avatars/user0' + (i + 1) + '.png'}, offer: {title: HOUSE_TITLE[i], address: 'location.x, location.y', price: randomValueFromRange(1000, 1000000), type: HOUSE_TYPE[randomValue(HOUSE_TYPE.length)], rooms: randomValueFromRange(1, 5), guests: randomValueFromRange(1, 10), checkin: TIME[randomValue(TIME.length)], checkout: TIME[randomValue(TIME.length)], features: generateArrayRandomLength(FEATURES_ITEMS), description: '', photos: mixArray(PHOTOS)}, location: {x: randomValueFromRange(300, 900), y: randomValueFromRange(150, 500)}});
  }
  return adsArray;
};

document.querySelector('.map').classList.remove('map--faded');
