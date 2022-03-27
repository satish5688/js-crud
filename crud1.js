
const create=function(){
    let name=input.question('enter user name :')
        let mail=input.question('enter mail ID :')
        let pass=input.question('enter password :')
        data={
            Name:name,
            Mail:mail,
            Pass:pass
        }
        all_data.push(data)

}


const Update=function(){
    let check=input.question('Enter user Name :')
        for(let s=0; s<all_data.length; s++){
            if(check==all_data[s]['Name']){
                let newM=input.question('Enter New Mail ID :')
                let newP=input.question('Enter new password :')
                all_data[s]['Mail']=newM
                all_data[s]['Pass']=newP
                break  
            }
            if (!all_data.includes(all_data[s]['Name'])&& s==all_data.length-1){
                console.log('This user does not exist ')
                break
            }
        }
    
}

const Delet=function(){
    let check=input.question('Enter user Name :')
        for(let s=0; s<all_data.length; s++){
            if(check==all_data[s]['Name']){
                all_data.splice(s,1)
                break  
            }
            if (!all_data.includes(all_data[s]['Name'])&& s==all_data.length-1){
                console.log('This user does not exist ')
                break
            }
        }

}


const input=require('readline-sync')

const all_data=[]
while(true){
    console.log('1] Creat user\n2] Read usrer\n3] Update user\n4] Delet sere\n5] Exit')
    let a=parseInt(input.question("Enter your option :"))
    if (a===1){
        create()
    }
    else if(a==2){
        console.log(all_data)
    }
    else if (a==3){
        Update()
    }
    else if (a==4){
        Delet()
    }
    else if (a==5){
        console.log('you are going out of your crud operation.')
        break
    }
}



