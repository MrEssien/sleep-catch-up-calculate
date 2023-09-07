const getSleepHours = day => {
    switch(day){
    case 'monday' :
      return 8
      break;
    case 'tuesday':
      return 7
      break;
   case 'wednesday':
     return 9
     break;
   case 'thursday':
     return 8 
     break;
   case 'friday':
     return 6
     break;
  case 'saturday' :
    return 5
    break;
  case 'sunday' :
    return 8
    break;
  
    default:
    return 'error'     
    }
  };
    const getActualSleepHours = () => {
     return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') 
    }
  
  const getIdealSleepHours = () => {
    const idealHours =7.5;
    return idealHours * 7;
  };
  const calculateSleepDebt = () => {
    const actualSleepHours =
    getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours ===idealSleepHours) {
      console.log('Great!');
    } else if (actualSleepHours > idealSleepHours){
      console.log('Wake up earlier!')
    } else if (actualSleepHours < idealSleepHours){
      console.log('Go to bed earlier!')
    }
    else {
      console.log('Error!!!')
    }
  }
  calculateSleepDebt()