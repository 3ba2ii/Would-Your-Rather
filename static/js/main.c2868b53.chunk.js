(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{220:function(e,t,a){e.exports=a.p+"static/media/crown.84fc9273.svg"},222:function(e,t,a){e.exports=a(414)},227:function(e,t,a){},382:function(e,t,a){},414:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(215),s=a.n(o),l=(a(227),a(7)),i=a(8),c=a(10),u=a(9),m=a(16),d=a(11),p=a(14),h=a(23),E=a(29),f=a(91),g=a.n(f),v=["https://i.ibb.co/8cWd0BC/avatar6.jpg"],b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isLoggedIn,a=e.profile;return r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},r.a.createElement("li",{className:"menu__group"},r.a.createElement(m.b,{to:"/",exact:!0,className:"logo"},"WYR?")),!0===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"menu__group"},r.a.createElement(m.b,{to:"/",exact:!0,className:"menu__link"},"Dashboard")),r.a.createElement("li",{className:"menu__group"},r.a.createElement(m.b,{to:"/add",exact:!0,className:"menu__link"},"New Poll")),r.a.createElement("li",{className:"menu__group"},r.a.createElement(m.b,{to:"/leaderboard",exact:!0,className:"menu__link"},"Leaderboard")),r.a.createElement("li",{className:"menu__group"},r.a.createElement(g.a,{className:"menu__group",trigger:"Hello, ".concat(a.fname),triggerClassName:"menu__link collapse",openedClassName:"menu__link collapse opened"},r.a.createElement(m.b,{to:"/",exact:!0,className:"menu__link",onClick:this.props.signOut},"Logout")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"menu__group"},r.a.createElement(m.b,{to:"/",exact:!0,className:"menu__link"},"Home")),r.a.createElement("li",{className:"menu__group"},r.a.createElement(m.b,{to:"/sign",exact:!0,className:"menu__link"},"Join us!")))))}}]),a}(r.a.Component),O=Object(p.b)((function(e){return{isLoggedIn:!e.firebase.auth.isEmpty,profile:e.firebase.profile}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))(b),N=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).openSignPage=function(){e.props.history.push("/sign")},e}return Object(i.a)(a,[{key:"pageLayout",value:function(){return r.a.createElement("div",{className:"home-page column font-rubrik"},r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:"title"},"Would You Rather?"),r.a.createElement("p",{className:"website-description"},"Would you rather is a website where you can play around with your friends,",r.a.createElement("br",null),"You can post your own polls and answer your friends' ones.",r.a.createElement("br",null),"Join us now and have fun with your everyone."),r.a.createElement("button",{className:"sign font-rubrik",onClick:this.openSignPage},"JOIN US")))}},{key:"render",value:function(){return r.a.createElement("div",null,this.pageLayout())}}]),a}(n.Component),w=Object(p.b)()(N),y=a(3);a(31);function S(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author,r=e.uid;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOneText:t,optionTwoText:a,optionOneVotes:[],optionTwoVotes:[],uid:r}}var C=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={optionOne:"",optionTwo:""},e.handleOptionOneChange=function(t){var a=t.target.value;e.setState((function(){return{optionOne:a}}))},e.handleOptionTwoChange=function(t){var a=t.target.value;e.setState({optionTwo:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.uid,r=a.profile,o=a.addNewQuestion,s=e.state,l=s.optionOne,i=s.optionTwo;o({author:r.fname,optionOneText:l,optionTwoText:i,uid:n}),setInterval((function(){e.setState((function(){return{optionOne:"",optionTwo:""}})),e.props.history.push("/")}),1e3)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.optionOne,a=e.optionTwo;return void 0===this.props.uid?(alert("You must login first to access this page"),r.a.createElement(d.a,{to:"sign"})):r.a.createElement("div",{className:"col page-bkg"},r.a.createElement("h1",{className:"form-title"},"Would You Rather.."),r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"name",className:"question",id:"nme",value:t,required:!0,autoComplete:"off",onChange:this.handleOptionOneChange}),r.a.createElement("label",{htmlFor:"nme"},r.a.createElement("span",null,"option one?")),r.a.createElement("textarea",{name:"message",className:"question",id:"msg",value:a,required:!0,autoComplete:"off",onChange:this.handleOptionTwoChange}),r.a.createElement("label",{htmlFor:"msg"},r.a.createElement("span",{className:"option"},"option two?"))),r.a.createElement("div",{className:"button_container"},r.a.createElement("button",{className:"btn",onClick:this.handleSubmit,disabled:""===t||""===a},r.a.createElement("span",null,"POST POLL!"))))}}]),a}(n.Component),j=Object(p.b)((function(e){return{uid:e.firebase.auth.uid,profile:e.firebase.profile}}),(function(e){return{addNewQuestion:function(t){return e(function(e){var t=S({author:e.author,optionOneText:e.optionOneText,optionTwoText:e.optionTwoText,uid:e.uid});return function(a,n,r){var o=r.getFirebase,s=(0,r.getFirestore)(),l=o();s.collection("questions").doc(t.id).set(Object(y.a)({},t)).then((function(){s.collection("users").doc(e.uid).update({questions:l.firestore.FieldValue.arrayUnion(t.id)}).then((function(){return a({type:"ADD_QUESTION",question:e})}))})).catch((function(e){return a({type:"CREATE_QUESTION_ERROR",err:e})}))}}(t))}}}))(C),k=(a(382),a(92)),_=a.n(k),T=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleEmail=function(e){n.setState({email:e.target.value})},n.handlePassword=function(e){n.setState({password:e.target.value})},n.handleSubmit=function(e){n.props.signIn(n.state),setTimeout((function(){return n.setState({email:"",password:"",toHome:!0})}),1e3)},n.state={email:"",password:"",toHome:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return!0===e.toHome?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"header"},"Login"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:_.a,alt:"logo"})),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",value:t,onChange:this.handleEmail})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handlePassword})))),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{type:"button",className:"btn-sign",onClick:this.handleSubmit},"Login")))}}]),a}(r.a.Component),U=Object(p.b)(null,(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(T),R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleFName=function(e){n.setState({fname:e.target.value})},n.handleUsername=function(e){n.setState({username:e.target.value})},n.handleEmail=function(e){n.setState({email:e.target.value})},n.handlePassword=function(e){n.setState({password:e.target.value})},n.handleSubmit=function(e){n.props.signUp(n.state),n.setState({email:"",password:"",username:"",fname:""})},n.state={email:"",password:"",username:"",fname:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.fname,o=e.username;return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"header"},"Register"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:_.a,alt:"logo"})),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"fullname"},"Full Name"),r.a.createElement("input",{type:"text",name:"fullname",onChange:this.handleFName,value:n})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",onChange:this.handleUsername,value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",value:t,onChange:this.handleEmail})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handlePassword})))),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{type:"button",className:"btn-sign",onClick:this.handleSubmit},"Register")))}}]),a}(r.a.Component),x=Object(p.b)(null,(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,o=n.getFirestore,s=r(),l=o();s.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({fname:e.fname,username:e.username,answers:{},questions:[],avatarURL:v[Math.floor(Math.random()*v.length)]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_FAILED",err:e})}))}}(t))}}}))(R),F=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isLogginActive:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.rightSide.classList.add("right")}},{key:"changeState",value:function(){this.state.isLogginActive?(this.rightSide.classList.remove("right"),this.rightSide.classList.add("left")):(this.rightSide.classList.remove("left"),this.rightSide.classList.add("right")),this.setState((function(e){return{isLogginActive:!e.isLogginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLogginActive,a=t?"Register":"Login",n=t?"login":"register";return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container",ref:function(t){return e.container=t}},t&&r.a.createElement(U,{containerRef:function(t){return e.current=t}}),!t&&r.a.createElement(x,{containerRef:function(t){return e.current=t}})),r.a.createElement(I,{current:a,currentActive:n,containerRef:function(t){return e.rightSide=t},onClick:this.changeState.bind(this)})))}}]),a}(r.a.Component),I=function(e){return r.a.createElement("div",{className:"right-side",ref:e.containerRef,onClick:e.onClick},r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"text"},e.current)))},P=F,L=a(218),q=a(219),A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.question,t=e.author,a=e.optionOneVotes,n=e.optionTwoVotes,o=e.timestamp,s=this.props.avatarURL,l=function(e){var t=new Date(e),a=t.toLocaleTimeString("en-US");return a.substr(0,5)+a.slice(-2)+" | "+t.toLocaleDateString()}(o),i=a.length+n.length;return r.a.createElement("div",{className:"item-container"},r.a.createElement("img",{src:s,alt:"img",className:"question-author-avatar"}),r.a.createElement("div",{className:"poll-container"},r.a.createElement("span",{className:"author-name"},t),r.a.createElement("span",{className:"poll-date"},l),0!==i?r.a.createElement("span",{className:"votes"},i,i>1?r.a.createElement("span",null," users"):r.a.createElement("span",null," user")," voted for this poll"):r.a.createElement("span",{className:"votes"},"become the first one to vote")))}}]),a}(r.a.Component),D=a(217),G=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).toggleOption1Checked=function(){console.log("a7a"),n.setState((function(e){return{optionOneChecked:!e.optionOneChecked}}))},n.toggleOption2Checked=function(){n.setState((function(e){return{optionTwoChecked:!e.optionTwoChecked}}))},n.handleVoting=function(e){e.preventDefault();var t,a=n.state.optionOneChecked,r=n.props.selectedQuestion.id,o=n.props.authedUid;t=!0===a?"optionOne":"optionTwo",n.props.vote(r,t,o)},n.state={optionOneChecked:!1,optionTwoChecked:!1},n}return Object(i.a)(a,[{key:"unansweredPolls",value:function(e,t,a,n,o){return!1===o?r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"inputGroup"},r.a.createElement("input",{style:{cursor:"pointer"},id:"option1",name:"option1",type:"checkbox",onClick:this.toggleOption1Checked,disabled:!0===e}),r.a.createElement("label",{htmlFor:"option1"},t)),r.a.createElement("div",{className:"inputGroup"},r.a.createElement("input",{id:"option2",name:"option2",type:"checkbox",onChange:this.toggleOption2Checked,disabled:!0===a}),r.a.createElement("label",{htmlFor:"option2"},n)),r.a.createElement("button",{type:"submit",className:"add-new-poll vote-btn",disabled:a===e,onClick:this.handleVoting},"VOTE")):r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"inputGroup"},r.a.createElement("input",{id:"option1",name:"option1",type:"checkbox",onChange:this.toggleOption1Checked,checked:"optionOne"===o,disabled:!0}),r.a.createElement("label",{htmlFor:"option1"},t)),r.a.createElement("div",{className:"inputGroup"},r.a.createElement("input",{id:"option2",name:"option2",type:"checkbox",onChange:this.toggleOption2Checked,checked:"optionTwo"===o,disabled:!0}),r.a.createElement("label",{htmlFor:"option2"},n)),r.a.createElement("div",{style:{"font-size":"14px",color:"rgba(255, 255, 255, 0.734)"}},"you have already answered this question"))}},{key:"render",value:function(){var e=this.props.selectedQuestion,t=e.author,a=e.id,n=e.optionOneText,o=e.optionTwoText,s=e.optionOneVotes,l=e.optionTwoVotes,i=this.props.userAnswers,c=this.state,u=c.optionOneChecked,m=c.optionTwoChecked,d=!!Object.keys(i).includes(a)&&i[a],p={labels:["Option 1","Option 2"],datasets:[{backgroundColor:["#FE2F57","#97DAC7"],data:[s.length,l.length]}]};return r.a.createElement("div",{className:"poll-voting-container"},r.a.createElement("div",null,r.a.createElement("h2",null,t," Asks"),r.a.createElement("span",null,"Would You Rather.. "),this.unansweredPolls(m,n,u,o,d)),d&&r.a.createElement(g.a,{className:"collapse-result",openedClassName:"collapse-result",trigger:"Show Results",triggerWhenOpen:"Hide Results",triggerTagName:"button"},r.a.createElement(D.a,{width:"400px",height:"220px",data:p,title:"Poll Result",options:{pieStartAngle:100,pieSliceText:"label",responsive:!0,legend:{position:"left",color:"#FFF"}}})))}}]),a}(n.Component),V=Object(h.d)(Object(p.b)((function(e){var t=e.firebase.auth.uid;return{authedUid:t,userAnswers:e.firestore.data.users[t].answers}}),(function(e){return{vote:function(t,a,n){return e(function(e,t,a){return function(n,r,o){var s=o.getFirebase,l=o.getFirestore,i=s(),c=l();console.log("__ACTION__",e,t,a);var u=a,m=c.collection("questions").doc(e);console.log(m),m.update("optionTwo"===t?{optionTwoVotes:i.firestore.FieldValue.arrayUnion(u)}:{optionOneVotes:i.firestore.FieldValue.arrayUnion(u)}).then((function(){c.collection("users").doc(u).get().then((function(a){var n=a.data().answers;n[e]=t,c.collection("users").doc(u).update({answers:n})}))})).then((function(){n({type:"VOTING_SUCCESS",qid:e,voting:t})})).catch((function(e){n({type:"VOTING_FAILURE",err:e})}))}}(t,a,n))}}})),Object(E.firestoreConnect)([{collection:"users"}]))(G),W=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).openPollHandler=function(e){n.setState({openPoll:!0,selectedQuestion:e})},n.onClosePoll=function(){n.setState({openPoll:!1})},n.handleReceiveData=function(e){n.setState({questions:e})},n.handleWantedPolls=function(e){var t,a=Object.keys(n.props.authedUser.answers),r=n.props.authedUser.questions;"answered"===e?t=n.state.questions.filter((function(e){return a.includes(e.id)})):"unanswered"===e?t=n.state.questions.filter((function(e){return!a.includes(e.id)})):"myPolls"===e&&(t=n.state.questions.filter((function(e){return r.includes(e.id)}))),n.setState({openPoll:!1,wantedQuestions:t})},n.state={openPoll:!1,selectedQuestion:{},questions:Object.values(n.props.questions),wantedQuestions:Object.values(n.props.questions)},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.handleWantedPolls("unanswered")}},{key:"render",value:function(){var e=this,t=this.state,a=t.openPoll,n=t.selectedQuestion,o=t.wantedQuestions,s=this.props.users;return console.log(this.state),r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"dashboard-container"},r.a.createElement("ul",{className:"dashboard-menu"},r.a.createElement("h2",null,"Dashboard"),r.a.createElement(m.b,{to:"/add",className:"add-new-poll"},r.a.createElement(L.a,{size:"28px"}),r.a.createElement("div",null,"New Poll")),r.a.createElement("li",{onClick:function(){return e.handleWantedPolls("myPolls")}},"My Polls"),r.a.createElement("li",{onClick:function(){return e.handleWantedPolls("answered")}},"Answered Polls"),r.a.createElement("li",{onClick:function(){return e.handleWantedPolls("unanswered")}},"Unanswered Polls"),r.a.createElement("li",null," Favorites")),r.a.createElement("ul",{className:"questions-list"},o.map((function(t){return r.a.createElement("li",{key:t.id,onClick:function(){return e.openPollHandler(t)}},r.a.createElement(A,{question:t,avatarURL:s[t.uid].avatarURL}))}))),a&&r.a.createElement("div",{className:"poll-vote"},r.a.createElement(q.a,{className:"icon",onClick:this.onClosePoll}),r.a.createElement(V,{selectedQuestion:n}))))}}]),a}(r.a.Component),Q=a(220),H=a.n(Q),M=a(140),Y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={topUsers:[],loaded:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,t=this.props.users;e=Object.keys(t).sort((function(e,a){return t[a].questions.length+Object.keys(t[a].answers).length-(t[e].questions.length+Object.keys(t[e].answers).length)})),this.setState({topUsers:e,loaded:!0})}},{key:"render",value:function(){var e=this.state,t=e.topUsers,a=e.loaded,n=this.props,o=n.users,s=n.uid;return a?void 0===s?(alert("You must login first to access this page"),r.a.createElement(d.a,{to:"sign"})):r.a.createElement("div",{className:"leaderboard"},r.a.createElement("ul",{className:"users-list"},t.map((function(e,t){return r.a.createElement("div",{className:"signle-user"},r.a.createElement("header",null,r.a.createElement("header",{className:"index"},"#",t+1),r.a.createElement("img",{src:o[e].avatarURL,alt:"avatar",className:"avatars"}),r.a.createElement("div",{className:"user-info"},r.a.createElement("li",{key:e},o[e].fname),r.a.createElement("li",{className:"user-name",style:{fontSize:"1.2vw",color:"#222",fontWeight:"300"}},"@",o[e].username))),r.a.createElement("div",{className:"score",style:{fontSize:"1.8vw",color:"#222e",fontFamily:"Roboto"}},r.a.createElement("div",{className:"answered"},r.a.createElement("span",{style:{marginBottom:"10px"}},"ANSWERED"),r.a.createElement("span",null,Object.keys(o[e].answers).length)),r.a.createElement("div",{className:"answered"},r.a.createElement("span",{style:{marginBottom:"10px"}},"CREATED"),r.a.createElement("span",null,o[e].questions.length)),r.a.createElement(M.a,{className:"star"}),r.a.createElement("div",null," ",o[e].questions.length+Object.keys(o[e].answers).length)))}))),r.a.createElement("div",{className:"top-user"},r.a.createElement("header",null,"TOP ",r.a.createElement("span",null,"USER")),r.a.createElement("img",{src:H.a,alt:"crown",className:"crown"}),r.a.createElement("img",{src:o[t[0]].avatarURL,alt:"avatar",className:"avatar"}),r.a.createElement("div",{className:"fname"}," ",o[t[0]].fname),r.a.createElement("div",{className:"user-name"}," @",o[t[0]].username),r.a.createElement("div",{className:"score"},r.a.createElement(M.a,{className:"star"})," ",o[t[0]].questions.length+Object.keys(o[t[0]].answers).length))):null}}]),a}(n.Component),B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError,a=e.questions,n=e.users,o=e.uid;return console.log("___APP___",this.props),r.a.createElement("div",{className:"app"},r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{authError:t}),r.a.createElement("div",null,void 0===o&&r.a.createElement(d.b,{path:"/",exact:!0,component:w}),void 0!==n&&r.a.createElement(d.b,{path:"/leaderboard",exact:!0,component:function(){return r.a.createElement(Y,{users:n,uid:o})}}),r.a.createElement(d.b,{path:"/sign",component:P}),r.a.createElement(d.b,{path:"/add",exact:!0,component:function(){return r.a.createElement(j,{uid:o})}}),void 0!==a&&void 0!==n&&void 0!==o&&r.a.createElement(d.b,{path:"/",exact:!0,component:function(){return r.a.createElement(W,{questions:a,authedUser:n[o],users:n,uid:o})}})))))}}]),a}(n.Component);var z=Object(h.d)(Object(p.b)((function(e){return{uid:e.firebase.auth.uid,users:e.firestore.data.users,authError:e.authUser.authError,questions:e.firestore.data.questions}})),Object(E.firestoreConnect)([{collection:"users"},{collection:"questions",orderBy:["timestamp","desc"]}]))(B);var J={authError:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(y.a)(Object(y.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),{authError:null};case"SIGNOUT_SUCCESS":return console.log("SIGNOUT_SUCCESS"),e;case"SIGNUP_SUCCESS":return console.log("SIGNUP_SUCCESS"),Object(y.a)(Object(y.a)({},e),{},{authError:null});case"SIGNUP_FAILED":return console.log("SIGNUP_FAILED"),Object(y.a)(Object(y.a)({},e),{},{authError:t.err.message});default:return e}};var Z=a(60),X=Object(h.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS":return Object(y.a)(Object(y.a)({},e),t.users);default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_QUESTION":return console.log("created question",t.question),Object(y.a)(Object(y.a)({},e),t.question);case"CREATE_QUESTION_ERROR":return console.log("ERROR created new question",t.err),e;default:return e}},authUser:K,voting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VOTING_SUCCESS":return console.log("VOTING_SUCCEEDED"),Object(y.a)(Object(y.a)({},e),{},{voting:t.qid});case"VOTING_FAILURE":return console.log("VOTING__FAILED",t.err),{state:e};default:return e}},firestore:Z.firestoreReducer,firebase:E.firebaseReducer}),$=a(221),ee=a(141),te=a.n(ee);a(409),a(412);te.a.initializeApp({apiKey:"AIzaSyBxJxfId2y5Hyjw6KxTOZk1ke4ETbb3IkI",authDomain:"would-your-rather-b4031.firebaseapp.com",databaseURL:"https://would-your-rather-b4031.firebaseio.com",projectId:"would-your-rather-b4031",storageBucket:"would-your-rather-b4031.appspot.com",messagingSenderId:"34686369419",appId:"1:34686369419:web:a96d7a8de3ce671c4bde8e",measurementId:"G-L7Y5TMHEP2"});var ae=te.a,ne=Object(h.e)(X,Object(h.d)(Object(h.a)($.a.withExtraArgument({getFirebase:E.getFirebase,getFirestore:Z.getFirestore})),Object(E.reactReduxFirebase)(ae,{useFirestoreForProfile:!0,attachAuthIsReady:!0,userProfile:"users"}),Object(Z.reduxFirestore)(ae)));ne.firebaseAuthIsReady.then((function(){s.a.render(r.a.createElement(p.a,{store:ne},r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),",")),document.getElementById("root"))}))},92:function(e,t,a){e.exports=a.p+"static/media/login.9a76e74e.svg"}},[[222,1,2]]]);
//# sourceMappingURL=main.c2868b53.chunk.js.map