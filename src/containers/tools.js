export const numbToMonth = (n) => {
    let months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    if(n>months.length||n<0){
        return 'Jan'
    }
    else{
        return months[n];
    }
}