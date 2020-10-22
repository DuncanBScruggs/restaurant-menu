
import React from "react"

function Home() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h1 class="display-4">Welcome to Billy Bob's Gud Fud and Other Ateables</h1>
                        <p class="lead">Located behind the haircare and tire center.</p>
                        <ul>
                            <li>Open: Sun-up</li>
                            <li>Close: Sun-down</li>
                        </ul>
                        <p class="lead">Pricing depends on what was caught today!</p>
                    </div>
                    <div class="col-6 d-flex align-items-center">
                        <img class="img-fluid max-width: 100% height: auto" src="./img/tom-martin-hillbilly.jpg" ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home