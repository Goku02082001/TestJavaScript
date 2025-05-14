function countVowelsAndConsonants(str){
    let vowel=0;
    let constants=0;
    let result={}
    let obj={}
    for(let i=0;i<str.length;i++)
    {
        let  ch=str[i]
        if(ch.toUpperCase()==='A' || ch.toUpperCase()==='E' || ch.toUpperCase()==='I' || ch.toUpperCase()==='O' || ch.toUpperCase()==='U')
        {
            vowel++
        }
        else if(ch.toLowerCase()==='a' || ch.toLowerCase()==='e' || ch.toLowerCase()==='i' || ch.toLowerCase()==='o' || ch.toLowerCase()==='u')
        {
            vowel++
        }
        else if(ch==='!' || ch==='#' ||  ch===' ')
        {
            continue;
        }
        else
        {
            constants++;
        }
        
    }

    obj={
        vowel:vowel,
        constants:constants
    }
    result={...obj}
    return result
}




const result = countVowelsAndConsonants("Hello World!")

console.log(result)