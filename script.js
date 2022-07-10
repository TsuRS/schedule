function getSchedule() {
    const currentDate = new Date();
    const currentTime = getTime();
    document.getElementById("schedule").innerHTML = currentTime;
}
