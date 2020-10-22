import React from "react"

function Menu(props) {
    function price(){
        let dollars = Math.floor(Math.random() * 101);
        let cents = Math.floor(Math.random() * 100);
        if (cents.toString().length == 1){
            cents = cents.toString() + "0";
        }
        return `$${dollars}.${cents}`;
    }


    return (

        props.menu.data.map((item, index) => {
            let arr = item.description.split("with")
            console.log(arr)
            return (
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">{arr[0]}</h1>
                        <p class="lead">{arr[1]}</p>
                        <p>{price()}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Menu;