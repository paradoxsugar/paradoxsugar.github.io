window.addEventListener("load", () => {
  var d = new Date();
  m = d.getMonth() + 1;
  dd = d.getDate();
  y = d.getFullYear();

  //cookie函数
  function randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  }

  var ip_pop = 0;

  // ip 判断结果
  var foreignTips = (function () {
    var onSuccess = function (geoipResponse) {
      if (!geoipResponse.country.iso_code) {
        return;
      }
      var code = geoipResponse.country.iso_code.toLowerCase();
      if (code == "cn") {
        // btf.snackbarShow
        Swal.fire(
          "Warning",
          "使用中国境内网络大概率无法访问网站图片等资源，敬请见谅",
          "warning"
        );
      }
    };
    var onError = function (error) {};
    return function () {
      geoip2.country(onSuccess, onError);
    };
  })();

  if (m == 9 && dd == 18) {
    console.log(
      "勿忘国耻，振兴中华！\n\n今天是1931年9月18日九一八事变" +
        (y - 1931).toString() +
        "周年纪念日！\n================================================================="
    );
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire(
        "今天是1931年9月18日九一八事变" +
          (y - 1931).toString() +
          "周年纪念日。\n勿忘国耻，振兴中华！"
      ).then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }

  if (m == 7 && dd == 7) {
    console.log(
      "勿忘国耻，振兴中华！\n\n今天是1937年7月7日卢沟桥事变" +
        (y - 1937).toString() +
        "周年纪念日！\n================================================================="
    );
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire(
        "今天是1937年7月7日卢沟桥事变" +
          (y - 1937).toString() +
          "周年纪念日。\n勿忘国耻，振兴中华！"
      ).then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }

  if (m == 12 && dd == 13) {
    console.log(
      "勿忘国耻，振兴中华！\n\n今天是1937年12月13日南京大屠杀" +
        (y - 1931).toString() +
        "周年纪念日！为遇难的无辜同胞们缅怀！\n================================================================="
    );
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire(
        "今天是1937年12月13日南京大屠杀" +
          (y - 1937).toString() +
          "周年纪念日，希望你能停下来缅怀遇难的无辜同胞们。\n勿忘国耻，振兴中华！"
      ).then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }

  if (m == 8 && dd == 14) {
    console.log(
      "勿忘国耻，振兴中华！\n\n今天是8月14日世界慰安妇纪念日！\n================================================================="
    );
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire(
        "今天是8月14日世界慰安妇纪念日，希望你能停下来了解一下来为历史作证，为曾经的无辜妇女发声。\n勿忘国耻，振兴中华！"
      ).then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }

  //节假日

  if (m == 10 && dd <= 5) {
    //国庆节
    console.log("祖国" + (y - 1949).toString() + "岁生日快乐！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("祖国" + (y - 1949).toString() + "岁生日快乐！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 8 && dd == 15) {
    //搞来玩的，鬼子投降
    console.log("鬼子投降" + (y - 1945).toString() + "年了！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("鬼子投降" + (y - 1945).toString() + "年了！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 1 && dd == 1) {
    //元旦节
    console.log(y.toString() + "年元旦快乐！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire(y.toString() + "年元旦快乐！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 3 && dd == 8) {
    //妇女节
    console.log("各位女神们，妇女节快乐！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("各位女神们，妇女节快乐！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  l = [
    "震惊！Steam游戏全部免费！",
    "中国实现了1nm芯片！",
    "非常抱歉，因为不可控原因，博客将于明天停止运营，再见",
    "好消息，日本没了！",
    "美国垮了，背后原因竟是时刻心心念念想着祖国的川普！",
    "微软垮了！",
  ];
  console.log(m, dd);
  if (m == 4 && dd == 1) {
    //愚人节，随机谎话
    console.log(l[randomNum(0, l.length - 1)]);
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire(l[randomNum(0, l.length - 1)]).then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 5 && dd == 1) {
    //劳动节
    console.log("劳动节快乐！为助力各行各业发展辛勤工作的人们致敬！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("劳动节快乐！为助力各行各业发展辛勤工作的人们致敬！").then(
        () => {
          foreignTips();
          ip_pop = 1;
        }
      );
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 5 && dd == 4) {
    //青年节
    console.log(
      "为有思想政治觉悟，拥护中国共产党，追求无产阶级、共产主义、马克思主义的青年们致敬！"
    );
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire(
        "为有思想政治觉悟，拥护中国共产党，追求无产阶级、共产主义、马克思主义的青年们致敬！"
      ).then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 6 && dd == 1) {
    //儿童节
    console.log("各位小朋友们，儿童节快乐！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("各位小朋友们，儿童节快乐！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 7 && dd == 1) {
    //建党节
    console.log("中国共产党" + (y - 1921).toString() + "岁生日快乐");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("中国共产党" + (y - 1921).toString() + "岁生日快乐").then(
        () => {
          foreignTips();
          ip_pop = 1;
        }
      );
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 12 && dd == 25) {
    //圣诞节
    console.log("圣诞节快乐！准备好礼物和圣诞树了吗？");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("圣诞节快乐！准备好礼物和圣诞树了吗？").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 7 && dd == 1) {
    //建军节
    console.log("真理只在大炮射程范围之内，建军节快乐！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("真理只在大炮射程范围之内，建军节快乐！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if ((m == 10 && dd == 31) || (m == 11 && dd == 1)) {
    //万圣夜&万圣节
    console.log("祝亲爱的你万圣节做个开心鬼，乐得合不拢嘴! ");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("祝亲爱的你万圣节做个开心鬼，乐得合不拢嘴! ").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (m == 2 && dd == 21) {
    //生日
    console.log("今天是博主的生日，来祝他生日快乐吧~");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("今天是博主的生日，来祝他生日快乐吧~").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }

  //传统节日部分

  if ((m == 4 && dd == 4) || (m == 4 && dd == 5)) {
    //清明节
    console.log("燕子来时新社，梨花落后清明。清明安康！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("燕子来时新社，梨花落后清明。清明安康！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }

  var lunar = calendarFormatter.solar2lunar();

  //农历采用汉字计算，防止出现闰月导致问题

  if (
    (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初六") ||
    (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初五") ||
    (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初四") ||
    (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初三") ||
    (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初二") ||
    (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初一") ||
    (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "三十") ||
    (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "廿九")
  ) {
    //春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了
    console.log(
      "爆竹声中一岁除，春风送暖入屠苏。" + y.toString() + "年新年快乐！"
    );
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire(
        "爆竹声中一岁除，春风送暖入屠苏。" + y.toString() + "年新年快乐！"
      ).then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "十五") {
    //元宵节
    console.log("东风夜放花千树，更吹落，星如雨。元宵佳节，良宵与共！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("东风夜放花千树，更吹落，元宵佳节，良宵与共！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (lunar["IMonthCn"] == "五月" && lunar["IDayCn"] == "初五") {
    //端午节
    console.log("往事莫论量，千年忠义气，日星光。端午安康！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("往事莫论量，千年忠义气，日星光。端午安康！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (lunar["IMonthCn"] == "七月" && lunar["IDayCn"] == "初七") {
    //七夕节
    console.log("金风玉露一相逢，便胜却人间无数。祝天下有情人终成眷属！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("金风玉露一相逢，便胜却人间无数。祝天下有情人终成眷属！").then(
        () => {
          foreignTips();
          ip_pop = 1;
        }
      );
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (lunar["IMonthCn"] == "八月" && lunar["IDayCn"] == "十五") {
    //中秋节
    console.log("但愿人长久，千里共婵娟。愿得年年，常见中秋月！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire("但愿人长久，千里共婵娟。愿得年年，常见中秋月！").then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }
  if (lunar["IMonthCn"] == "九月" && lunar["IDayCn"] == "初九") {
    //重阳节
    console.log("人生易老天难老，岁岁重阳，今又重阳。久久情长，岁岁安康！");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
      Swal.fire(
        "人生易老天难老，岁岁重阳，今又重阳。久久情长，岁岁安康！"
      ).then(() => {
        foreignTips();
        ip_pop = 1;
      });
      sessionStorage.setItem("isPopupWindow", "1");
    }
  }

  if (ip_pop != 1) {
    foreignTips();
    ip_pop = 1;
  }
});
