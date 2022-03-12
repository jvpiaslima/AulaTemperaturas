document.getElementById('calcular').onclick = converter;
var valor, valorC, valorF, valorK, valorR, opcao
function converter(){
    valor = document.getElementById('valor').value;
    opcao = document.getElementById('opcao').value;
    if(opcao=='c'){
        valorF = (parseFloat(valor)*1.8)+32;
        valorK = (parseFloat(valor)+273.15)
        valorR = (parseFloat(valor)+273.15)*1.8;
        document.getElementById('celsius').style.display = "none";
        document.getElementById('kelvin').style.display = "block";
        document.getElementById('fahrenheit').style.display = "block";
        document.getElementById('rankine').style.display = "block";
    } else if(opcao=='f'){
        valorC = (parseFloat(valor)-32)/1.8;
        valorK = parseFloat(valor-32)*(5/9) +273;
        valorR = (parseFloat(valor)+459.67);
        document.getElementById('celsius').style.display = "block";
        document.getElementById('fahrenheit').style.display = "none";
        document.getElementById('kelvin').style.display = "block";
        document.getElementById('rankine').style.display = "block";
    }else if(opcao=='k'){
        valorC = (parseFloat(valor)-273);
        valorF = ((parseFloat(valor)-273)*1.8)+32;
        valorR = (parseFloat(valor)*1.8)
        document.getElementById('celsius').style.display = "block";
        document.getElementById('fahrenheit').style.display = "block";
        document.getElementById('kelvin').style.display = "none";
        document.getElementById('rankine').style.display = "block";
    }else if(opcao=='r'){
        valorC = (parseFloat(valor)/8)-273.15;
        valorF = (parseFloat(valor)-459.67);
        valorK = (parseFloat(valor)/1.8);
        document.getElementById('celsius').style.display = "block";
        document.getElementById('fahrenheit').style.display = "block";
        document.getElementById('kelvin').style.display = "block";
        document.getElementById('rankine').style.display = "none";
    }   
    document.getElementById("fahrenheit").innerHTML = parseFloat(valorF).toFixed(2) +" °F";
    document.getElementById("celsius").innerHTML = parseFloat(valorC).toFixed(2) +" °C";
    document.getElementById("kelvin").innerHTML = parseFloat(valorK).toFixed(2)+" K";
    document.getElementById("rankine").innerHTML = parseFloat(valorR).toFixed(2)+" °R";
}