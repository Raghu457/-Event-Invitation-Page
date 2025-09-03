document.addEventListener('DOMContentLoaded', () => { 
    const countdown = () => {
        const eventDate = new Date("October 24, 2025 18:00:00").getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        document.getElementById("days").innerText = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
        if (difference < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "<h3>The Event Has Started!</h3>";
        }
    };
    const interval = setInterval(countdown, 1000);
    const rsvpForm = document.getElementById('rsvp-form');
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you for your RSVP, ${name}! We look forward to seeing you.`);
        rsvpForm.reset();
    });
});