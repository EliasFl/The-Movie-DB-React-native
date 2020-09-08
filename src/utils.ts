const timeConvert = (n: number): string => {
  var num: number = n;
  var hours: number = (num / 60);
  var rhours: number = Math.floor(hours);
  var minutes: number = (hours - rhours) * 60;
  var rminutes: number = Math.round(minutes);
  return rhours + "h " + rminutes + "min";
}

export {
  timeConvert
}