function GetDateStr(AddDayCount) { 
   var dd = new Date();
   dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
   var y = dd.getFullYear(); 
   var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
   var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
   // return y+"-"+m+"-"+d;
	return dd
}
function GetMonthStr(AddMonthCount) { 
   var dd = new Date();
   dd.setMonth(dd.getMonth()+AddMonthCount);//获取AddDayCount天后的日期
   
	return dd
}
  function getDifferentDate(count,type = 0,split = '/') {
	  var timeList = []
	  var startTime = GetDateStr(count)
	  var endTime = new Date();
	  while((endTime.getTime()-startTime.getTime())>=0){
	    var year = startTime.getFullYear();
	    var month = (startTime.getMonth()+1) < 10?"0"+(startTime.getMonth()+1):(startTime.getMonth()+1);//获取当前月份的日期，不足10补0
	    var day = startTime.getDate()<10?"0"+startTime.getDate():startTime.getDate();//获取当前几号，不足10补0
	    if (type == 0) {
			timeList.push(year+"-"+month+"-"+day)
		}else if (type == 1){
			timeList.push(month+split+day)
		}
	    startTime.setDate(startTime.getDate()+1);
	  }
	  return timeList
  }
  function getDifferentMonth(count) {
  	  var timeList = []
  	  var startTime = GetMonthStr(count)
  	  var endTime = new Date();
  	  while((endTime.getTime()-startTime.getTime())>=0){
  	    var month = startTime.getMonth()+1
  		timeList.push(month)
  	    startTime.setMonth(month);
  	  }
  	  return timeList
  }
  function getYearArea(count) {
	 var startTime = GetMonthStr(count)
	 var endTime = new Date();
	 var startMonth = (startTime.getMonth() + 1)< 10?"0"+(startTime.getMonth()+1):(startTime.getMonth()+1)
	 var endMonth = (endTime.getMonth() + 1)< 10?"0"+(endTime.getMonth()+1):(endTime.getMonth()+1)
	 var startText = startTime.getFullYear()+'-'+startMonth
	 var endText= endTime.getFullYear()+'-'+ endMonth
	 return startText+'~'+ endText
  }
  function dateZh(str) {
	  switch(str) {
		  case 1:
		  return '一月'
		  break;
		  case 2:
		  return '二月'
		  break;
		  case 3:
		  return '三月'
		  break;
		  case 4:
		  return '四月'
		  break;
		  case 5:
		  return '五月'
		  break;
		  case 6:
		  return '六月'
		  break;
		  case 7:
		  return '七月'
		  break;
		  case 8:
		  return '八月'
		  break;
		  case 9:
		  return '九月'
		  break;
		  case 10:
		  return '十月'
		  break;
		  case 11:
		  return '十一月'
		  break;
		  case 12:
		  return '十二月'
		  break;
	  }
  }