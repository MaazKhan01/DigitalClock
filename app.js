    function setTime() {
        document.getElementById('Set').disabled = true;
        
        var secNode = document.getElementById('sec');
        var minNode = document.getElementById('min');
        var hrNode = document.getElementById('hr');
        secNode.innerHTML = s.value;
        minNode.innerHTML = m.value;
        hrNode.innerHTML = h.value;
        timer();
        // console.log(secNode)
        s.value = 0;
        m.value = 0;
        h.value = 0;

    }

    function timer() {

        var s = document.getElementById('s');
        var m = document.getElementById('m');
        var h = document.getElementById('h');
        var secNode = document.getElementById('sec');
        var minNode = document.getElementById('min');
        var hrNode = document.getElementById('hr');

        console.log(secNode.innerHTML++);
        if (secNode.innerHTML == 61) {
           secNode.innerHTML=1;
           minNode.innerHTML++;
        }
        if (minNode.innerHTML == 61) {
            minNode.innerHTML = 1;
            hrNode.innerHTML++;
        }
        if (hrNode.innerHTML == 13) {
            hrNode.innerHTML = 1;
        }
    }
    
    function start() {
          document.getElementById('Start').disabled = true;
        var countdownTimer = setInterval('timer()', 1000);
    }
