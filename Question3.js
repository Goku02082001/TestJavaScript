function isPalindrome(str){
    let res=''
    let val=''
    let res1=''
    for(let i=0;i<str.length;i++)
    {
        let ch=str[i]

        if(ch.toUpperCase())
        {
                res+=ch.toLowerCase()
        }
        else
        {
            res+=ch
        }
    }

    for(let i=0;i<res.length;i++)
    {
        if(res[i]===' ' || res[i]===',' )
        {
            continue
        }
        else{
            res1+=res[i]
        }
    }
    for(let i=res1.length-1;i>=0;i-- )
    {
        val+=res1[i]
    }
    return val===res1
}



const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
