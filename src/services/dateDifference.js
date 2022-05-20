
function calcDateDifference(date) {
    let today = new Date()
    let endDate = new Date(date);
    
    let diff = Math.floor(today.getTime() - endDate.getTime());
    let day = 1000 * 60 * 60 * 24;

    let days = Math.floor(diff/day);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);

    if(months === 0){
        return days + " Days Ago";
    } else if(years === 0) {
        return months + " Months Ago";
    } else {
        return years + " Years Ago";
    }   
}

export default calcDateDifference;