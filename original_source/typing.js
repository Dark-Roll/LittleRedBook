
export function typing(){
    let strArr=['js 實現的 打字效果，感覺蠻有趣的','裝逼逼逼逼逼1','萌萌da','4'];
    let strLoopCount=0; 
    var i = 0;
    var divTyping = document.getElementById('divTyping');
     
    //     var name=1;
             
    const type=()=>{
        //    console.log(strLoopCount);
        if (i <= strArr[strLoopCount].length) {   // 利用小於和回乎做 for loop
            divTyping.innerText = strArr[strLoopCount].slice(0, i++) + '|';
            setTimeout('type()',50);//遞歸調用  好像沒作用
        }
             
        else {
            //   console.log("end");
            divTyping.innerText = strArr[strLoopCount];//結束打字,移除 _ 光標
            i=0;
            strLoopCount=(strLoopCount+1)%strArr.length;
            type()
            // set end function ?
        }
    }
    type()

}
// export {typing};


