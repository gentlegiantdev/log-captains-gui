document.getElementById('deleteButton').addEventListener('click', deleteEntry)
document.getElementById('updateButton').addEventListener('click', updateEntry)

async function deleteEntry(){
    const input = document.getElementById("deleteInput")
    console.log(input.value)
    try{
        const response = await fetch('deleteEntry', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              name: input.value
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function updateEntry(){
    try{
        const response = await fetch('updateEntry', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: document.getElementsByName("name")[0].value,
            fullName: document.getElementsByName("fullName")[0].value,
            species: document.getElementsByName("species")[0].value,
            born: document.getElementsByName("born")[0].value,
            died: document.getElementsByName("died")[0].value,
            image: document.getElementsByName("image")[0].value,
            actor: document.getElementsByName("actor")[0].value,
            funFact: document.getElementsByName("funFact")[0].value,
            ship: document.getElementsByName("ship")[0].value,
            shipImage: document.getElementsByName("shipImage")[0].value
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

}catch(err){
    console.log(err)
}
}