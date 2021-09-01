const boxElement = document.getElementById("Box");
const cssText = document.getElementById("cssText")
const borderTopLeftInput = document.getElementById("borderTopLeft")
const borderTopRightInput = document.getElementById("borderTopRight")
const borderBottomLeftInput = document.getElementById("borderBottomLeft")
const borderBottomRightInput = document.getElementById("borderBottomRight")
const valueInputs = document.getElementsByTagName("input")

cssText.value = generateCSS()

function setBorder(){

    if(borderTopLeftInput.value != ""){
        boxElement.style.borderTopLeftRadius = borderTopLeftInput.value+"px"
    }
    else{
        boxElement.style.borderTopLeftRadius = "0px"

    }
    
    if(borderTopRightInput.value != ""){
        boxElement.style.borderTopRightRadius = borderTopRightInput.value+"px"
    }
    else{
        boxElement.style.borderTopRightRadius = "0px"
    }
    
    if(borderBottomLeftInput.value != ""){
        boxElement.style.borderBottomLeftRadius = borderBottomLeftInput.value+"px"
    }
    else{
        boxElement.style.borderBottomLeftRadius = "0px"
    }
    
    if(borderBottomRightInput.value != ""){
        boxElement.style.borderBottomRightRadius = borderBottomRightInput.value+"px"
    }
    else{
        boxElement.style.borderBottomRightRadius = "0px"
    }

    cssText.value = generateCSS()
    
}

function generateCSS(){
    var elementStyle = window.getComputedStyle(boxElement)
    var borderRadiusValue = elementStyle.getPropertyValue("border-radius")
    return "border-radius:"+borderRadiusValue+";"
}

function copyToClipboard(){
    cssText.select()
    cssText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(cssText.value);
    alert("Código CSS copiado!")
}

function resetValues(){
    for (var i= 0; i < valueInputs.length; i++){
        valueInputs[i].value = ""
        
    }
    
    boxElement.style.borderRadius = ""
    cssText.value = generateCSS()
}
