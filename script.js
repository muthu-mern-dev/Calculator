
        function display(values){
            let res=document.getElementById("result");
            if(values=== '='){
                res.value= eval(res.value);
            }
            else if(values==='Clear'){
                res.value='';
            }
            else if(values==='delete'){
                res.value=res.value.slice(0,res.value.length-1);
            }
            else if(values==='^'){
               let num=eval(res.value);
               res.value=num*num;
            }
            else if(values==='√'){
                let num=eval(res.value);
                res.value=Math.sqrt(num);
            }
             else{
                res.value=res.value + values;
             }
            
        }
    
    