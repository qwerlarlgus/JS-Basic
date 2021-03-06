/**
 * 
 * @param {age} users 
 * @param {age} keyAge 
 * @returns {age}
 */
function getAgeGroup(users, keyAge) {
  let userAgeGroup = {};

  for (var user of users) {
    var ageGroup = "";
    if (user[keyAge] < 10) {
      ageGroup = "0";
    } else if (user[keyAge] >= 100) {
      ageGroup = user[keyAge].toString().substr(0, 2) + "0";
    } else {
      ageGroup = user[keyAge].toString().charAt(0) + "0";
    }

    if (userAgeGroup[ageGroup]) {
      userAgeGroup[ageGroup] = userAgeGroup[ageGroup] + 1;
    } else {
      userAgeGroup[ageGroup] = 1;
    }
  }

  return userAgeGroup;
}

/**
 * 최소값과 최대값을 파라미터로 받고 그 사이의 무작의(random) 정수 값을 변환하는 함수
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number} minrhk max 사이의 랜덤 정수 값
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 가위, 바위, 보 게임 함수 만들기
 * @param {가위,바위,보} userRsp 
 * @returns {
   userRsp: "",
   playerRsp: "",
   winner: 이기면 1,
   지면 - 1,
   무승부면 0
  }
 */
function rspPlayer(userRsp) {
  const rsp = ["가위", "바위", "보"];
  const playerRsp = rsp[getRandomInteger(0, 2)];
  const winValue = {
    "가위": "보",
    "바위": "가위",
    "보": "바위"
  };

  return {
    "userRsp": userRsp,
    "playerRsp": playerRsp,
    "winner": (userRsp == playerRsp) ? 0 : (winValue[userRsp] == playerRsp) ? 1 : -1
  }
}