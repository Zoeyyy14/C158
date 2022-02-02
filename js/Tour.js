AFRAME .registerComponent("tour",{
  init:function(){
    this.placesContainer=this.el
    this.createCards()
  },
  createCards:function(){
    const thumbnailsRef=[
      {
        id:"taj-mahal",
        title:"Taj Mahal",
        url:"./assets/thumbnails/taj_mahal.png"
      },
      {
        id:"budapest",
        title:"Budapest",
        url:"./assets/thumbnails/budapest.jpg"
      },
      {
        id:"eiffel-tower",
        title:"Eiffel Tower",
        url:"./assets/thumbnails/eiffel_tower.jpg"
      },
      {
        id:"new-york",
        title:"New York",
        url:"./assets/thumbnails/new_york_city.png"
      },
    ]
    let previousXPosition=-60
    for(var item of thumbnailsRef){
      const posX=previousXPosition+25
      const posY=10
      const posZ=-40
      const position={x:posX,y:posY,z:posZ}
      previousXPosition=posX
      const borderEl=this.createBorder(position,item.id)
      const thumbnails=this.createThumbnail(item)
      borderEl.appendChild(thumbnails)
      const titleEl=this.createTitleEl(position,item)
      borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl)
    }
  },
  createBorder:function(position,id){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("geometry",{primitive:"plane",width:10,height:10})
    entityEl.setAttribute("material",{color:"purple",opacity:0.5})
    entityEl.setAttribute("cursor-listener",{})
    return entityEl
  },
  createThumbnail:function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{primitive:"plane",width:10,height:10})
    entityEl.setAttribute("material",{src:item.url})
    return entityEl
  },
  createTitleEl:function(position,item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("text",{font:"exo2bold",align:"center",width:100,color:"purple",value:item.title})
    const elPosition=position
    elPosition.y=-30
    entityEl.setAttribute("position",elPosition)
    entityEl.setAttribute("visible",true)
    return entityEl
  },
})