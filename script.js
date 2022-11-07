function pizza(){
    
    let x =  prompt("would you like extra cheese?");
    if(x == "yes"){
        let a = prompt("would you like extra sauce?");
        if (a == "yes"){
            let b = prompt("would you like olives?");
            if (b== "yes"){
                alert("your order is pizza with extra cheese and extra sauce and with olives on top");
            }
            else if(b == "no"){
                alert("your order is pizza with extra cheese and extra sauce");
            }
        }else if (a == "no"){
            alert("your order is pizza with extra cheese")
        }
    }else if(x == "no"){
            alert("your order normal pizza without any extra topping");
        }
}

function burger(){
    
    let x =  prompt("would you like cheese?");
    if(x == "yes"){
        let a = prompt("would you like extra pickles?");
        if (a == "yes"){
            let b = prompt("would you like patty?");
            if (b== "yes"){
                alert("your order is burger with cheese and pickles and extra patty");
            }
            else if(b == "no"){
                alert("your order is burger with cheese and pickles");
            }
        }else if (a == "no"){
            alert("your order is burger with cheese")
        }
    }else if(x == "no"){
            alert("your order normal burger");
        }
}