
function coluring() {

            document.getElementById('input').style.backgroundColor = "pink";
            document.getElementById('input').style.fontSize = "20px";

        }

        document.getElementById("ids").addEventListener('click',()=>{


                 var a = document.getElementById('input').value;

            if (a == "") {


            }
            else {
                //get Input  values in todo list
                document.getElementById('values').innerHTML += `<ol id="ol" style="list-style:none;"><li class="list" style="color:black;font-size:20px;
        font-Weight:900;"> 
        <i class=" fa fa-check" style="display:none;"></i>
        <i class="fa fa-check-square" style='color:green;font-size:20px;font-weight:900;cursor:pointer' aria-hidden="true"></i> ${a}
        <i class="fa fa-cut" 
        style="color:red; 
        position:relative;
        left:280px;
        position:fixed;
        font-size:30px;
        margin-right:100px;
        cursor:pointer">
        </i></li></ol>`;
                document.getElementById('input').value = "";

            }
            // Create array
            var x = document.getElementsByClassName('fa fa-cut');
            var y = document.getElementsByClassName("fa fa-check-square");
            var z = document.getElementsByClassName("fa fa-check");
            //iterate every value and click item       
            for (var i = 0; i < x.length; i++) {
                x[i].onclick = function del() {
                    this.parentElement.style.display = "none";

                }

            }
            for (var i = 0; i < y.length; i++) {
                y[i].onclick = function del1() {

                    this.parentElement.style.textDecoration = `line-through`;

                    this.style.display = "none";
                

                }
            }





        } )
       
       

       
