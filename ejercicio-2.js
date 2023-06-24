console.log('Hi, im a placeholder');
function makeCalendar () {
    let timeZone = 'America/Mexico_City'
    let now = new Date();
    let localNow = new Date(now.toLocaleString('en-US', { timeZone: timeZone }))
    let day = now.toLocaleString('es-MX', { weekday:'long' })
    day = day[0].toUpperCase() + day.slice(1)
    let date = localNow.getDate()
    let month = localNow.toLocaleString('es-MX', { month:'long' })
    month = month[0].toUpperCase() + month.slice(1)
    let year = localNow.getFullYear()
    document.querySelector('#date').textContent = day + ' ' + date + ' de ' + month + ' de ' + year;
    let hours = localNow.getHours()
    let pm = false
    if (hours > 12) {
        hours = hours - 12
        pm = true
    } else {
        if (hours === 0) hours = 12
    }
    let minutes = localNow.getMinutes()
    if (minutes < 10) minutes = '0' + minutes
    let seconds = localNow.getSeconds()
    if (seconds < 10) seconds = '0' + seconds

    document.querySelector('#hours').textContent = hours
    document.querySelector('#mins').textContent = minutes
    document.querySelector('#seconds').textContent = seconds
    
    const timeType = pm ? 'pm' : 'am';
    document.querySelector('#type').textContent = timeType;
}

let clock = setInterval(makeCalendar, 1000);