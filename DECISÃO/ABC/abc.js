 let DistanciaPercorrida = 20
 let TempoGasto = 2
 let VelocidadeCarro = 100
 let VelocidadePermitida = 80
 let multa = 5 * (VelocidadeCarro - VelocidadePermitida)

     console.log ("Velocidade média é: " + DistanciaPercorrida / TempoGasto + "km")
     
 if (VelocidadeCarro > 80)
    console.log ("Você foi multado em:" + multa + " reais")
 else
    console.log ("Você não foi multado") 