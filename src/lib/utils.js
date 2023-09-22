export const extractTimeString = (timestamp) => {
    if (timestamp == null) return null;
    const date = new Date(timestamp);
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    const formattedTime = date.toLocaleTimeString([], options);
    return formattedTime;
  };
  
  export const extractDateString = (timestamp) => {
    if (timestamp == null) return null;
  
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const date = new Date(timestamp);
    const month = months[date.getMonth()];
    const day = date.getDate();
  
    return `${month} ${day}`;
  };
  
  export const extractTimeRemainingString = (timestamp) => {
      if (timestamp == null) return null;
    
      const now = new Date().getTime();
    
      if (timestamp <= now) {
        return '00:00:00';
      }
    
      const remainingMilliseconds = timestamp - now;
    
      const hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
      const minutes = Math.floor((remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);
    
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');
    
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };
    