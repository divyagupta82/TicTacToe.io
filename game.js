let boxes=document.querySelectorAll('.box');
let btn=document.querySelector('#btn');
let btn1=document.querySelector('#btn1');
let msg=document.querySelector('.msg');
let mess=document.querySelector('#mess');

let turn0=true;

const winpattern=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>
{
    if(turn0)
    {
        box.innerText="O";
        turn0=false;
    }
    else
    {
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;

    checkWinner();
});
});


const resetGame=()=>
    {
        turn0=true;
        enableBoxes();
        msg.classList.add("hide");
    };

const disableBoxes=()=>
    {
       for(let box of boxes)
        {
            box.disabled=true;
        }
    };

    const enableBoxes=()=>
        {
           for(let box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
        };

const showWinner =(winner)=>
{
    mess.innerText=`Congratulations, Winner is ${winner}` ;
    msg.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>
{
    for(let pattern of winpattern)
    {
        let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1 !="" && pos2!="" && pos3!="")
            {
                if(pos1==pos2 && pos2==pos3)
                {
                    console.log("winner",pos1);
                    showWinner(pos1);
                }
            }
    }
};

btn1.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame);
