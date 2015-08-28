// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() { $('#gcf-simple').gCalFlow({
  calid: 'g8mgh3ggj2dmbdmku6c2g0p05k@group.calendar.google.com',
//   date_formatter: function (date, allday_p) {
//     var dayoftheweek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
//     var monthname = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//     return dayoftheweek[date.getDay()] + ", " + monthname[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
// }
  globalize_fmt_datetime: "dddd', 'MMMM' 'dd' • 'h':'mm' 'tt",
  globalize_fmt_date: "dddd', 'MMM' 'dd",
  globalize_fmt_time: "h':'mm' 'tt",
  globalize_fmt_monthday: "MMM' 'dd"
});});
