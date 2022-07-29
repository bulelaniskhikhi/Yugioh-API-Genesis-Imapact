 async function Cards() {
    let dingle = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=Genesis%20Impact")
    let res = await dingle.json()
    let Data = await res.data;

    return Data ;
    // .then((res) => res.json())
    // .then((data) => console.log(data.data))
}

async function CreateCards() {
    let genesis = document.getElementById("cardDisplay")

    genesis.innerHTML = ``

    let heart = await Cards();
    console.log(heart)
    heart.forEach(element => {
        genesis.innerHTML += `

            <div class="col-md-6  mx-auto" id="CardOuter">

                <div class="flip-card">

                    <div class="flip-card-inner">

                        <div class="flip-card-front">
                            <img src=" ${ element.card_images[0].image_url }" alt="Avatar">
                        </div>

                        <div class="flip-card-back">
                            <img src="https://i.postimg.cc/W1xZWpkv/dEFLmg.webp">
                        </div>

                    </div>
                </div>


            </div>
    `
    });
    
    // heart.forEach(element => {
        
    //     genesis.innerHTML += `
    //     ${element}
        
    //     `
    // });
    
}

CreateCards()