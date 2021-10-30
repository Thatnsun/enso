
// DARKMODE

 var checkbox = document.querySelector('input[name=mode]');
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                document.body.style.backgroundColor = "#458588";
                document.getElementById('1').style.backgroundImage = "url('enso3.png')";
                document.getElementById('2').style.color = "#dddddd";
                document.getElementById('3').style.color = "#f1f1f1";
                document.getElementById('4').style.color = "#f1f1f1";
                document.getElementById('5').style.color = "#f1f1f1";
                document.getElementById('6').style.color = "#f1f1f1";
                document.getElementById('7').style.color = "#b16286";
              

            } else {
                document.body.style.backgroundColor = "#ebe7dc";
                document.getElementById('1').style.backgroundImage = "url('enso2.png')";
                document.getElementById('2').style.color = "#999999";
                document.getElementById('3').style.color = "#4b4746";
                document.getElementById('4').style.color = "#4b4746";
                document.getElementById('5').style.color = "#4b4746";
                document.getElementById('6').style.color = "#4b4746";
                document.getElementById('7').style.color = "#f1f1f1";
               
            }
        })
 
