//The program will determine the actual and ideal hours of sleep for each night of the last week.


const getSleepHours = day => {
 if (day === 'monday'){
   return 8;
 } else if (day === 'tuesday') {
   return 7;
 } else if (day === 'wednesday') {
   return 6;
 } else if (day === 'thursday') {
   return 4;
 } else if (day === 'friday') {
   return 5;
 } else if (day === 'saturday') {
   return 9;
 } else if (day === 'sunday') {
   return 10;
 }
 };

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
 const idealHours = 8;
 return idealHours * 7;
};
 
 const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You has' + (idealSleepHours - actualSleepHours) + ' the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You have' + (idealSleepHours - actualSleepHours) + ' got more sleep than needed');
  } else if (actualSleepHours < idealSleepHours) { 
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
 }
calculateSleepDebt();
