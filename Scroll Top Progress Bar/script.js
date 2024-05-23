let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress"); //htmldagi progress idsi bor ona div chaqirildi
    let progressValue = document.getElementById("progress-value"); //htmldagi progress idsi bor ona divni ichidagi spanni progress-value idsi chaqirildi
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(calcHeight);
    let scrollValue = Math.round((pos * 100) / calcHeight);
    // console.log(scrollValue);
    scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
    progressValue.textContent = `${scrollValue}%`;
};

window.onscroll = scrollPercentage;
window.onload = scrollPercentage;    
