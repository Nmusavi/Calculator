var output = document.getElementById('output');
var hello = document.getElementsByTagName('input');

for(let i=0;i<hello.length;i++)
{
    hello[i].addEventListener('click',function(e) 
    {
        function insert()
        {
            if(e.target.defaultValue == 'c' || output.innerHTML == 'Infinity')
            {
                output.innerHTML = "";
            }
            else if(e.target.defaultValue == '=')
            {
                if(output.innerHTML.includes('+') && !isNaN(output.innerHTML.slice(output.innerHTML.lastIndexOf())) )
                {   
                        let number1= parseFloat(output.innerHTML.slice(0,output.innerHTML.indexOf('+')));
                        let number2=parseFloat(output.innerHTML.slice(output.innerHTML.indexOf('+')+1));
                        output.innerHTML = number1 + number2 ;
                }else  if(output.innerHTML.includes('*') && !isNaN(output.innerHTML.slice(output.innerHTML.lastIndexOf())) )
                {   
                    let number1= parseFloat(output.innerHTML.slice(0,output.innerHTML.indexOf('*')));
                    let number2=parseFloat(output.innerHTML.slice(output.innerHTML.indexOf('*')+1));
                    output.innerHTML = number1 * number2 ;
                }else  if(output.innerHTML.includes('/') && !isNaN(output.innerHTML.slice(output.innerHTML.lastIndexOf())) )
                {   
                    let number1= parseFloat(output.innerHTML.slice(0,output.innerHTML.indexOf('/')));
                    let number2=parseFloat(output.innerHTML.slice(output.innerHTML.indexOf('/')+1));
                    output.innerHTML = number1 / number2 ;
                }else  if((output.innerHTML.substring(0,1)).includes('-') ==false && output.innerHTML.includes('-') && !isNaN(output.innerHTML.slice(output.innerHTML.lastIndexOf())) )
                {   
                    let number1= parseFloat(output.innerHTML.slice(0,output.innerHTML.indexOf('-')));
                    let number2=parseFloat(output.innerHTML.slice(output.innerHTML.indexOf('-')+1));
                    output.innerHTML = number1 - number2 ;
                }else  if((output.innerHTML.substr(1)).includes('-') && !isNaN(output.innerHTML.slice(output.innerHTML.lastIndexOf())) )
                {   
                    let number1= '-' + parseFloat(output.innerHTML.slice(1,output.innerHTML.indexOf('-')-1));
                    
                     let number2=parseFloat(output.innerHTML.slice(((output.innerHTML.substr(1)).indexOf('-')+2)));
                    
                    output.innerHTML = number1 - number2 ;
                }
            }
            else if(e.target.defaultValue == "+" || e.target.defaultValue == "*" || e.target.defaultValue == "/") 
            { 
                       if( !isNaN(output.innerHTML) && output.innerHTML != "" && output.innerHTML.slice(output.innerHTML.lastIndexOf()) != '.')
                       {
                        output.innerHTML += e.target.defaultValue;
                       }
            }else if(e.target.defaultValue == "-"){
                if( !isNaN(output.innerHTML) && output.innerHTML.slice(output.innerHTML.lastIndexOf()) != '.')
                {
                 output.innerHTML += e.target.defaultValue;
                }
            }
            else if(e.target.defaultValue == 'ln') {
                    if(!isNaN(output.innerHTML) && !isNaN(Math.log(output.innerHTML))  && output.innerHTML != "") 
                    {
                        output.innerHTML = Math.log(output.innerHTML);
                    }
            }
            else if(e.target.defaultValue == '√') 
            {
                if(!isNaN(output.innerHTML) && output.innerHTML != "") 
                    {
                    output.innerHTML = Math.sqrt(output.innerHTML);
                    }
            }
            else if(e.target.defaultValue == 'x²') 
            {
                if(!isNaN(output.innerHTML) && output.innerHTML != "") 
                    {
                    output.innerHTML = Math.pow(output.innerHTML ,2);
                    }
            }
            else if(e.target.defaultValue == '.')
            {   
                if(output.innerHTML != "" && !isNaN(output.innerHTML.slice(output.innerHTML.lastIndexOf())))
                {
                    if(output.innerHTML.includes('.') == false)
                    {
                        output.innerHTML += e.target.defaultValue;
                    }else if(output.innerHTML.includes('+')||output.innerHTML.includes('*')||output.innerHTML.includes('/')||output.innerHTML.includes('-')){
                        if( output.innerHTML.substr(output.innerHTML.indexOf('+')+1).indexOf('.') == '-1' || output.innerHTML.substr(output.innerHTML.indexOf('*')+1).indexOf('.') == '-1' || output.innerHTML.substr(output.innerHTML.indexOf('/')+1).indexOf('.') == '-1' || output.innerHTML.substr(output.innerHTML.indexOf('-')+1).indexOf('.') == '-1' ){
                            output.innerHTML += e.target.defaultValue;
                        }
                    }
                }
            }
            else
            {
                output.innerHTML += e.target.defaultValue;
            }
        }
        insert();
    });
}

