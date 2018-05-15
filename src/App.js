import React, { Component } from "react";


class App extends Component {
	render(){
		// var intElemScrollHeight = document.getElementsByClassName('.headtop').scrollHeight;
		return(
			<div>
				<div class="load"
				 style={{
				 	//  width:`${intElemScrollHeight}`+"50px", 
					 height:"50px",
					 "background-color" :'red',
					 position:"fixed"
				 	}}> 
					a </div>
				
				<div class="headtop" style={{height:"2000px"}}>
					<div class="innerHead">
						<img src="redBookLogo.png" alt="" class="headimg"/>
						<div class="menu-nav">
							<a class="linkPage">Home</a>
							<a>Find</a>
							<a>媒體報導</a>
							<a>加入</a>
                            
							{/* <!-- <li>??</li> --> */}
						</div>
					</div>
				</div>
				
				<div class="title-item">
					<div class="left">
						<span>小紅書是</span><br/> 
						{/* <!-- Why not use br typing will go first --> */}
						<div id='divTyping' 
							style={{
								float:"left", 
								padding: "20px 0",
								fontSize:"25px",
								width:"100%",
								height:"73px"
                                    
							}}>
							{/* <!--height is default for element null  --> */}
						</div>
						{/* <!-- why css can't run  --> */}
						<img src="slogan.jpg" class="slogan" alt=""/>

						<div class="btn-item">
							<a href="//itunes.apple.com/cn/app/小红书-标记我的生活/id741292507?mt=8">
                                ios版
							</a>
							<a href="//www.wandoujia.com/apps/com.xingin.xhs">
                                Android版
							</a>
						</div>
					</div>
					<img class="headIMG" src="LandingPage.png" alt=""/>
				</div>
			</div>
		);
	}
}

export default App;
