document.addEventListener('DOMContentLoaded', function(){
    //Operações vetoriais 
    document.getElementById('calculateVectors').addEventListener('click', function(){
        const vector1Str = document.getElementById('vector1').value;
        const vector2Str = document.getElementById('vector2').value;
        
        try {
            const vector1 = vector1Str.split(',').map(Number);
            const vector2 = vector2Str.split(',').map(Number);
            
            if(vector1.length !== vector2.length){
                throw new Error("Os vetores devem ter o mesmo tamanho");
            }

            //Soma vetorial
            const sum = vector1.map((val,i)=> val + vector2[i]);

            //Subtraçao Vetorial
            const sub = vector1.map((val,i)=> val - vector2[i]);

            //Produto escalar
            const prod = vector1.reduce((acc,val,i)=> acc + val *vector2[i],0);
        
            //Media dos vetores
            const averagel1 = vector1.reduce((acc, val) => acc + val ,0)/vector1.length;
            const averagel2 = vector2.reduce((acc, val) => acc + val ,0)/vector2.length;

            //Resultados calculados
            const results = `
              <p><strong>Vetor 1:</strong>[${vector1.join(',')}]</p>
              <p><strong>Vetor 2:</strong>[${vector2.join(',')}]</p>
              <p><strong>Soma:</strong>[${sum.join(',')}]</p>
              <p><strong>Subtração (V1-V2):</strong>[${sub.join(',')}]</p>  
              <p><strong>Produto Escalar:</strong>${prod}</p>
              <p><strong>Média Vetor 1:</strong>${averagel1.toFixed(2)}</p>
              <p><strong>Média Vetor 1:</strong>${averagel2.toFixed(2)}</p>  
            `;

            document.getElementById('vectorResults').innerHTML = results;
        }catch(error){
            document.getElementById('vectorResults').innerHTML = `<p>$(error.mensagem)</p>`
        };
    
    });

    //Calculo Media 
    document.getElementById("calculateAvarage").addEventListener("click", function(){
        const gradesStr = document.getElementById('grades').value;

        try{
            const grades = gradesStr.split(',').map(Number);

            if(grades.length === 0){
                throw new Error('Digite ao menos uma nota');
            }
            const sum = grades.reduce((acc,grade) => acc + grade,0);
            const average = sum/grades.length;

            let situation;
            if(average >= 7){
                situation = 'Aprovado';
            }else if(average >= 5){
                situation = "Recuperação";
            }else{
                situation = "Reprovado";
            }

            const result = `
                <p><strong>Notas:</strong>[${grades.join(',')}]</p>
                <p><strong>Média:</strong>${average.toFixed(2)}</p>
                <p><strong>Situação:</strong>${situation}</p>                
            `;
            document.getElementById('averageResults').innerHTML = result;
            
        }catch{
            document.getElementById('averageResults').innerHTML = `<p>$(error.message)</p>`
        };

    });

    //Portas Lógicas
    function updateLogicGates(){
        //Porta Logica AND
        const andInput1 = document.getElementById('andInput1').checked;
        const andInput2 = document.getElementById('andInput2').checked;
        const andResult = andInput1 && andInput2;
        document.getElementById('andOutput').textContent = `Saida:${andResult ? 1 : 0}`;
    
        //Porta Logica OR
        const orInput1 = document.getElementById('orInput1').checked;
        const orInput2 = document.getElementById('orInput2').checked;
        const orResult = orInput1 || orInput2;
        document.getElementById('orOutput').textContent = `Saida:${orResult ? 1 : 0}`;
    
        //Porta Logica XOR
        const xorInput1 = document.getElementById('xorInput1').checked;
        const xorInput2 = document.getElementById('xorInput2').checked;
        const xorResult = xorInput1 !== xorInput2;
        document.getElementById('xorOutput').textContent = `Saida:${xorResult ? 1 : 0}`;

        //Porta Logica NOT
        const notInput = document.getElementById('notInput').checked;
        const notResult = !notInput;
        document.getElementById('notOutput').textContent = `Saida:${notResult ? 1 : 0}`;
    };

    document.querySelector('.and-input, .or-input, .xor-input, .not-input')
    .forEach(input => {input.addEventListener('change', updateLogicGates)
    });
    
    //Inicialização das portas Logicas
    updateLogicGates();
});
