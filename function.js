
// DARKMODE

 var checkbox = document.querySelector('input[name=mode]');
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                document.body.style.backgroundColor = "#458588";
                document.getElementById('1').style.color = "#b16286";
                document.getElementById('2').style.color = "#eeeeee";
                document.getElementById('3').style.color = "#ffffff";
                document.getElementById('4').style.color = "#ffffff";
                document.getElementById('5').style.color = "#ffffff";
                document.getElementById('6').style.color = "#ffffff";
                document.getElementById('7').style.color = "#b16286";
              

            } else {
                document.body.style.backgroundColor = "#ebe7dc";
                document.getElementById('1').style.color = "#ffffff";
                document.getElementById('2').style.color = "#999999";
                document.getElementById('3').style.color = "#231f20";
                document.getElementById('4').style.color = "#231f20";
                document.getElementById('5').style.color = "#231f20";
                document.getElementById('6').style.color = "#231f20";
                document.getElementById('7').style.color = "#ffffff";
               
            }
        })
 
        
