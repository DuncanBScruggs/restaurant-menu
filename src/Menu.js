import React from "react"

function Menu(props) {
    return (

        props.menu.data.map((item, index) => {
            let arr = item.description.split("with")
            console.log(arr)
            return (
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">{arr[0]}</h1>
                        <p class="lead">{arr[1]}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Menu;