const inputs=document.getElementById("INPUT");
const base=document.getElementById("CHOICE");
const tobases=document.getElementById("TOBASE");
const Result=document.getElementById("RESULTS");
const errors=document.getElementById("ERROR");
const Everybases=document.getElementById("EVERYBASE");


function convert()
{
    const j=inputs.value.trim();
    const CHOICE=parseInt(base.value);
    const TOBASE=parseInt(tobases.value);

    errors.textContent="";
    Result.textContent='-';
    Everybases.innerHTML='';

    if (!j) return;

    const ValidChar= '0123456789abcdefghijklmnopqrstuvwxyz'.slice(0, CHOICE);
    const regex=RegExp(`^[${ValidChar}]+$`, 'i');
    if (!regex.test(j))
    {
        errors.textContent=`invalid input for that base ${CHOICE}`;
        return; 
    }
    try
    {
        const decimal=parseInt(j,CHOICE);
        const output =decimal.toString(TOBASE).toUpperCase();
        Result.textContent=output;

        
    }
    catch (e){
        errors.textContent='error';
    }
}
inputs.addEventListener("input",convert);
base.addEventListener("change",convert);
tobases.addEventListener("change",convert);
