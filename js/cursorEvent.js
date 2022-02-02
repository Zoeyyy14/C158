AFRAME .registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
      this.handleMouseEnterEvent() 
      this.handleMouseLeaveEvent() 
    },
    handlePlacesState:function(){
        const id=this.el.getAttribute("id")
        const placesid=["taj-mahal","budapest","eiffel-tower","new-york"]
        if(placesid.includes(id)){
            const placesContainer=document.querySelector("#places-container")
            placesContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"blue",opacity:1
            })
        }
    },

    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesState()
        })
    },
    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId}=this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute("id")
                if(id==selectedItemId){
                    el.setAttribute("material",{color:"purple",opacity:1})
                }
            }
        })
    }
})