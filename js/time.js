window.onload = displayClock();
function displayClock() {
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    // Set to true to use a 12 hour date format
    var format_12hour = false;

    var d = new Date();
    var mm = monthNames[d.getMonth()];
    var dd = d.getDate();
    var min = (mins = ('0' + d.getMinutes()).slice(-2));
    var hh = d.getHours();
    var ss = d.getSeconds();
    var ampm = '';
    
    if (format_12hour) {
        ampm = hh >= 12 ? ' pm' : ' am';
        hh = hh % 12;
        hh = hh ? hh : 12; //show mod 0 as 12
    }

    if (ss % 2 == 0)
    {
        document.getElementById('separator').innerHTML = "&nbsp:&nbsp";
    }
    else
    {
        document.getElementById('separator').innerHTML = "&nbsp&nbsp&nbsp"; // &nfsp is a must for multi white spaces 
    }
  
    document.getElementById('hour').innerText = hh;
    
    document.getElementById('minutes').innerText = min + ampm;

    document.getElementById('month').innerText = mm;
    document.getElementById('day').innerText = dd;

    setTimeout(displayClock, 1000);
}
