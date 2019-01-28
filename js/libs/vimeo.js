
// Ajax call for configurator Json





var module_type
var module_video_type




// Get info
function getInfoConfig() {
    configArrayObject = configArray.responseJSON;
	module_type = configArrayObject.module_type
	module_video_type = configArrayObject.module_video_type
   
  
}

// Css function must be in css.js
// Css function must be in css.js

			
var filesExt ='.png'
var composeN
var src='src/img/icons/s'
var colorBlack = 'black'
var colorWhite = 'white'
var colorGrey = '#adadad'
var newUrl 
var whiteUrl 
var greyUrl 
var blackUrl
var iconArray = $('.pngIconMe')
var weeksArray = $('.pWeeks')
var greyUrl
var jQueryId ='#'+1
var selectOrNot=$(jQueryId).find('.pngIconMe').data("select");			
		
		
function actualiseIconvariable(id){
 filesExt ='.png'
 composeN=id
 src='src/img/icons/s'
 colorBlack = 'black'
 colorWhite = 'white'
 colorGrey = '#adadad'
 newUrl = src+composeN+colorGrey+filesExt
 whiteUrl = src+composeN+colorWhite+filesExt
 greyUrl = src+composeN+''+filesExt
 blackUrl = src+composeN+colorBlack+filesExt
 iconArray = $('.pngIconMe')
 weeksArray = $('.pWeeks')
 weeksArray.css("text-transform","capitalize")
 jQueryId ='#'+id
 selectOrNot=$(jQueryId).find('.pngIconMe').data("select");	
 

}	




function whiteMyIcon(id){
	actualiseIconvariable(id);
	if(selectOrNot==false || selectOrNot=='false')
	{
		$(jQueryId).find('.pngIconMe').attr('src',whiteUrl);
		$(jQueryId).find('.pWeeks').css('color','white');
		
	}
	
}	
		
			
function dontWhiteMyIcon(id){
	actualiseIconvariable(id);
	if(selectOrNot==false || selectOrNot=='false')
	{
		$(jQueryId).find('.pngIconMe').attr('src',greyUrl);
		$(jQueryId).find('.pWeeks').css('color','#adadad');
		
	}
	
}

function selectMyIcon(id){
actualiseIconvariable(id);
	for(i=0;i<iconArray.length;i++)
		{
		greyUrl = src+(i+1)+''+filesExt
		$(iconArray[i]).data("select",false)
		$(iconArray[i]).attr('src',greyUrl);
		$(iconArray[i]).parent().parent().css('background-color','white')

		$(weeksArray[i]).css('color','#ADADAD');
		
	}
	$(jQueryId).find('.pngIconMe').data("select",true);
	$(jQueryId).find('.pngIconMe').attr('src',blackUrl);
	$(jQueryId).find('.pWeeks').css('color','black');
	$(jQueryId).parent().css('background-color','#cbe01b')
	
}


function resetMyIcon(){

	actualiseIconvariable(id);
	for(i=0;i<iconArray.length;i++)
		{
		greyUrl = src+(i+1)+''+filesExt
		$(iconArray[i]).data("select",false)
		$(iconArray[i]).attr('src',greyUrl);
		$(iconArray[i]).css('filter','none');
		$(iconArray[i]).parent().parent().css('background-color','white')

		weeksArray.css('color','#adadad');
	}

	
}
// Css function must be in css.js
// Css function must be in css.js

// video pop up control 
$(function() {
    $("#video").videoPopup({
        autoplay: 1,
        controlsColor: 'white',
        showVideoInformations: 0,
        width: 1500,
        customOptions: {
            rel: 0,
            end: 60
        }
    });
    $("#video2").videoPopup();
});


var openPop = function(id)

{
    var videoCOmpose = "https://vimeo.com/" + id
    $("#video2").attr("video-url", videoCOmpose);
    $("#video2").click();
}


var configTypeOfCourse
var configTitle
var configPrequel
var configModule_type
var configTotalWeeks
var configTotalVideo
var configTotalDocs
var configTime
var configArrayObject
var configTitleOfWeeks
var nameOfModule 

var homeBind="<div class=' col-md-6 '> <div class='vertCenter'> <h1 class='lighter font-title'>"+configTypeOfCourse+"</h1><h1 class='font-title' >"+configTitle+"</h1><p id='titleInfos'><span id='titleWeeks'>"+configTotalWeeks+"</span><span class='separator'>|</span><span id='titleWeeks'>"+configTotalVideo+"</span><span class='separator'>|</span><span id='titleWeeks'>"+configTime+"</span><span class='separator'>|</span><span id='titleWeeks'>"+configTotalDocs+"</span></p><div id='titlePrequel'>"+configPrequel+"</div><a href='#' class='BUTTON_AFR' onclick='firstShot();'> <i class='fas fa-play'></i><span>&nbsp </span>continuer</a></div> </div><div class=' col-md-6 bigLeft' ></div>"

function configActualiseHome(){
	configTypeOfCourse= configArrayObject.type_of_course;
	configTitle= configArrayObject.title_of_course;
	configPrequel= configArrayObject.description_of_course;
	configModule_type= configArrayObject.module_type;
	configTotalWeeks= configArrayObject.total_weeks;
	configTitleOfWeeks= configArrayObject.total_weeks;
	configTotalVideo= configArrayObject.total_videos;
	configTotalDocs= configArrayObject.total_docs;
	configTime= configArrayObject.total_time;
	nameOfModule = configArrayObject.name_of_module+"&nbsp"
	
	homeBind="<div class=' col-md-6 '> <div class='vertCenter'> <h1 class='lighter font-title'>"+configTypeOfCourse+"</h1><h1 class='font-title' >"+configTitle+"</h1><p id='titleInfos'><span id='titleWeeks'>"+configTotalWeeks+"</span><span class='separator'>|</span><span id='titleWeeks'>"+configTotalVideo+"</span><span class='separator'>|</span><span id='titleWeeks'>"+configTime+"</span><span class='separator'>|</span><span id='titleWeeks'>"+configTotalDocs+"</span></p><div id='titlePrequel'>"+configPrequel+"</div><a href='#' class='BUTTON_AFR' onclick='firstShot();'> <i class='fas fa-play'></i><span>&nbsp </span>continuer</a></div> </div><div class=' col-md-6 bigLeft' ></div>"
	
	for (i=0;i<weeksArray.length;i++){
	weeksArray[i].innerHTML =nameOfModule+(i+1);
	
}

}


var configArray  = $.getJSON("src/json/config.json", function() {
       getInfoConfig(1)
    })
    .done(function() {
        configArrayObject = configArray.responseJSON;
		configActualiseHome();
		    welcomeHome();
    })
    .fail(function() {

    })
    .always(function() {
        
    });





var homeRun = $("#homeClick")


var welcomeHome = function(){
videoState=0
weekState=0
	
$("#appBind").html("");
configActualiseHome();
$("#appBind").html(homeBind);
$("#col-main").css("background-image","url('src/img/Fond-Personnage-Accueil.png')");

}


$(homeRun).click(function() {

welcomeHome(); resetMyIcon();
 });
 
 
 
 

var videoUrl = 'http://www.vimeo.com/292473063';
var endpoint = 'https://www.vimeo.com/api/oembed.json';
var callback = 'embedVideo';
var url = endpoint + '?url=' + encodeURIComponent(videoUrl)
var apiKey = "574df4c5ba89341dead9ce522260d8d429cfdd39"

var videoArray = jQuery.getJSON("https://www.vimeo.com/api/oembed.json?url=http%3A%2F%2Fwww.vimeo.com%2F292473063");
videoArray.done(function() {
    courseArrayObject = courseArray.responseJSON;
});

// video pop up control 
// video pop up control 
// video pop up control 
// video pop up control 
// video pop up control 
// video pop up control 
// video pop up control 


//native function
//native function
//native function
//native function
function createWeeksObjectVideo(weeksId, weeksTitle, videoArrayId, videoNumber) {

    this.weeksId = weeksId
    this.weeksTitle = weeksTitle
    this.videoArrayid = videoArrayId
    this.videoNumber = videoNumber
}

function domAppendVideo(className, videoObject, target) {
    var divContainer = "<div class='videoMiniContainer&nbsp" + className + "'>" + videoObject.title + "</div>"
    var targetB = "#" + target
    $(targetB).append(divContainer)

}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? "0" : "0") : "0";
    var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
	sDisplay=('0' + sDisplay).slice(-2);
    return hDisplay + mDisplay + sDisplay; 
}





function video(title, video_id, thumbnail_url, author_name, description, duration, html) {
    this.title = title
    this.video_id = video_id
    this.thumbnail_url = thumbnail_url
    this.author_name = author_name
    this.description = description
    this.duration = secondsToHms(duration)
    this.html = html



}


function pdfDdl(){
var pdfStateWeek = parseInt(weekState)+1
var pdfStateVideo = parseInt(videoState)+1
var term=".pdf"
var pdfName = "RTE-M"+pdfStateWeek+"-E"+pdfStateVideo+term
var pdfUrl = "docs/"
window.open(pdfUrl+pdfName)

}



function arrayWeeksCreator(nameOfModule, lengthOf, nameOfFirstProperty, valueOfFirstProperty, nameOfSecondProperty, valueOfSecondProperty, nameOfThirdProperty, valueOfThirdProperty, nameOfFourthProperty, valueOfFourthProperty, nameOfifthProperty, valueOfifthProperty) {
    var accounts = [];
    for (k = 0; k < lengthOf; k++) {
        window[nameOfModule + i] = new Object();
        window[nameOfModule + i][nameOfFirstProperty] = valueOfFirstProperty
        window[nameOfModule + i][nameOfSecondProperty] = valueOfSecondProperty
        window[nameOfModule + i][nameOfThirdProperty] = valueOfThirdProperty
        window[nameOfModule + i][nameOfFourthProperty] = valueOfFourthProperty
        window[nameOfModule + i][nameOfifthProperty] = valueOfifthProperty
    }

}


function fadeMyApp(){
	var time=1000;
	 $("#appBind").hide().fadeIn(time);
}

var videoOBj

//Variable statement.

var wait = 0

var pushMe = new Array

function pushObjectInMainObject(mainObject, littleObject, nameOfProperty) {

    pushMe.push(littleObject)
    window[mainObject][nameOfProperty] = pushMe
}

var vidObArr=[]
var vidObArrSave=[]


function jsonGetToObject(id, classOfWeeks, target) {
    this.classOfWeeks = classOfWeeks
    this.target = target
    this.id = id
    var url = "https://vimeo.com/api/oembed.json?url=https://vimeo.com/"
    var urlCOmpose = url + id


    $.ajax({
        type: 'GET',
        url: urlCOmpose,
        dataType: 'jsonp',
        success: function(data) {

            videoOBj = new video(data.title, data.video_id, data.thumbnail_url, data.author_name, data.description,data.duration,data.html);
            domAppendVideo(classOfWeeks, videoOBj, target);
				wait = 1
				vidObArr.push(videoOBj)
				vidObArrSave.push(videoOBj)

				
			
        },
        error: function(errorSender, errorMsg) {}
    });
};








var bigObject = []

function bigObjectCreator(nameOfBigObject, objectToPush) {
    nameOfBigObject.push(objectToPush)

}




//native function

// Json charger User Project

var courseArray = jQuery.getJSON("src/json/weeks.json");
var courseArrayObject = courseArray.responseJSON;
var jqxhr = $.getJSON("src/json/weeks.json", function() {
        // console.log("success");
    })
    .done(function() {
        // console.log("second success");
    })
    .fail(function() {
        // console.log("error");
    })
    .always(function() {
        // console.log("complete");
    });

jqxhr.done(function() {
    // console.log("second complete");
    getInfo();
});
var weeks_prequel
var video_link
var nbrSeq
var weeks_description
var time


// Create HTML OBJECT
// Create HTML OBJECT

var objectHTMLVideoBind





var  videoJack = " <div class=' col-md-6 '>  <div class='vertCenter'> <h1 class='font-title' id='jVideoModuleType' >" + VarJvideoModuleTypeNumber + "</h1> <h1 class='lighter font-title' id='jWeeksBind'>" + VarjJWeeksPrequel + "</h1>  <h1 class='font-title' id='jVideoTitle' >" + VarJvideoTitle + "</h1>  <p id='titleInfos'><span id='jModuleTrace'>" + VarJModule_video_typeNum+ "</span><span class='separator'>|</span><span id='Jtime'>" + VarJTime+ "</span><span class='separator'>|</span><span id='Jauthor'>" + VarJAuthor + "</span></p>  <div id='jVideotitlePrequel'>  " + VarjJvideotitlePrequel + "</div><a  class='BUTTON_AFR' onclick='videoBackP(id)' id='videoBackB'>  <span> </span><i style='color:white'class='fa fa-fast-backward' aria-hidden='true'></i>  </a><a  class='BUTTON_AFR' onclick='videoPlayP(id)' style='color: white;'>  <i style='color:white'class='fas fa-play'></i><span style='color:white'> </span></a><a  class='BUTTON_AFR' onclick='videoForwardP(id)' id='videoFF'>  <span> </span><i style='color:white'class='fa fa-fast-forward' aria-hidden='true'></i></a>	<a class='BUTTON_AFR2' onclick='masterBindThis(weekState+1)' style='height: 58px;vertical-align: middle;border: 2.5px solid #D2D932;text-shadow: none;box-shadow: none;'>  <span>; </span><i class='fa fa-list' aria-hidden='true' style='vertical-align: middle;'></i> <span style='vertical-align: middle;'> Épisodes</span></a></div>  </div>  <div class=' col-md-6 bigLeft' >  <center>  <img id='jackMyMan'class='jack'src=" + coverSRC + "> </center></div>"

function createHtmlVideoElmt (id,typeofModule,i,imgThumbnail,title,description){
	objectHTMLVideoBind=
	"<div class='col-12 col-md-6 col-lg-4 col-xl-3'><div class='item-listing-container-skrn'><div class='item-listing-text-skrnNb1 moduleNameNumber'>"+ typeofModule+"&nbsp;</div><div class='item-listing-text-skrnNb1'>  <div class='coton'>	  <div class='opactest'></div><center><img class = 'opac5' src ='"+imgThumbnail+"'></img></center> <i onmouseover='opacNone(this)' onmouseout='opacOut(this)' class='far fa-play-circle btnPlay' id='"+id+"' onclick='openPop(this.id)'></i></div></div><div class='item-listing-text-skrnNb2 moduleTitle'>"+title+"</div> <div class='item-listing-text-skrnNb moduleDescription'>"+description+"</div><center> <div  id='" + i + "' onclick='videoInfos(this.id)' class='item-listing-text-skrnNbpad click'><center> <span>&nbsp<i class='fas fa-info-circle' ></i>&nbsp&nbspPlus d'informations</span></center></div></center></div></div>"
             
}




var ObjectHTMLWeeksBind

function weeksmainCreator(i, typeofModule, titleOfMood, nbrWeeks, nbrVideo, nbrTime, weeksDescription) {
    ObjectHTMLWeeksBind =
        "<div class='col-md-12 weeksMain'> <div class='vertCenter'><h1 class='lighter font-title'>" + typeofModule + "</h1><h1 class='font-title' >" + titleOfMood + "</h1><p id='titleInfos'> <span id='titleWeeks'>" + nbrWeeks + "&nbsp;Épisodes</span><span class='separator'>|</span><span id='titleWeeks'>" + nbrTime + "&nbsp;minutes </span> </p><div id='titlePrequel'> " + weeksDescription + "</div> </div></div>"
}


// onmouseover='kickMyFlip()'onmouseout='kickMyFlip()'

// fonction flip a réactiver en changeant la classe filpStop

// rajouter la div BACK
// <div class='back' style='width:59%'><center><div  style='width:59%;height:900px;background-color:#05040433;padding:30px'><h3><h1 class='font-title' id='jVideoModuleType' >" + VarJvideoModuleTypeNumber + "</h1> <h1 class='lighter font-title' id='jWeeksBind'>" + VarjJWeeksPrequel + "</h1></br> </br> </br> </br> </br> </br> </br>  <h1 class='font-title' id='jVideoTitle' >" + VarJvideoTitle + "</h1>  <p id='titleInfos'><span id='jModuleTrace'>" + VarJModule_video_typeNum+ "</span><span class='separator'>|</span><span id='Jtime'>" + VarJTime+ "</span><span class='separator'>|</span><span id='Jauthor'>" + VarJAuthor + "</span></p>  <div id='jVideotitlePrequel'>  " + VarjJHTML + "</div></div> </center></div></div></center></div>

function triggerPlay(){
	$( "#pPlay" ).trigger( "click" );
}

var kickMyFlip=function(){}
function videoJackActualise() {
    videoJack = " <div class=' col-md-6 '>  <div class='vertCenter'> <h1 class='font-title' id='jVideoModuleType' >" + VarJvideoModuleTypeNumber + "</h1> <h1 class='lighter font-title' id='jWeeksBind'>" + VarjJWeeksPrequel + "</h1>  <h1 class='font-title' id='jVideoTitle' >" + VarJvideoTitle + "</h1>  <p id='titleInfos'><span id='jModuleTrace'>" + VarJModule_video_typeNum+ "</span><span class='separator'>|</span><span id='Jtime'>" + VarJTime+ "</span><span class='separator'></span><span id='Jauthor'>"+"</span></p>  <div id='jVideotitlePrequel'>  " + VarjJvideotitlePrequel + "</div><a  class='BUTTON_AFR' onclick='videoBackP(id)' id='videoBackB'>  <span> </span><i style='color:white'class='fa fa-fast-backward' aria-hidden='true'></i>  </a><a  class='BUTTON_AFR' id='pPlay'onclick='videoPlayP(id)' style='color: white;'>  <i style='color:white'class='fas fa-play'></i><span style='color:white'> </span></a><a  class='BUTTON_AFR' onclick='videoForwardP(id)' id='videoFF'>  <span> </span><i style='color:white'class='fa fa-fast-forward' aria-hidden='true'></i></a>	<a class='BUTTON_AFR2' onclick='masterBindThis(weekState+1)' style='border: 2.5px solid #D2D932;text-shadow: none;box-shadow: none;'>  <span></span><i class='fa fa-list' aria-hidden='true' '></i> <span style='vertical-align: middle;'> Épisodes</span></a></div>  </div>  <div class=' col-md-6 bigLeft' >  <center><div > <div > <div class='front'> 	<img onclick='pdfDdl();'id='jackMyMan'class='jack'src=" + coverSRC + ">     </div> "
	$(function(){
    $(".flip").flip({
        trigger: 'hover'
    });
});
 
}  



 

var opacNone = function (id) {
	$(id).parent().find(".opactest").fadeOut('slow');
	$(id).css("color","#d6e14c")
	
}

var opacOut = function (id) {
	$(id).parent().find(".opactest").fadeIn('slow');
	$(id).css("color","white")
	
}

// It is the name of all object JS wich contains all data
// It is the name of all object JS wich contains all data
// It is the name of all object JS wich contains all data
var nameOfMoid

// It is the name of all object JS wich contains all data
// It is the name of all object JS wich contains all data
// It is the name of all object JS wich contains all data


// It is the length of all object JS wich contains all data
// It is the length of all object JS wich contains all data
// It is the length of all object JS wich contains all data
var courseArrayObjectLength

// It is the length of all object JS wich contains all data
// It is the length of all object JS wich contains all data
// It is the length of all object JS wich contains all data


///// ******* USE window[nameOfMoid+i] to check data inside JS object by loop





// // // // // MAIN FUNCTION BINDING
// // // // // MAIN FUNCTION BINDING
// // // // // MAIN FUNCTION BINDING

function mainFunctionBinding(e) {
    $("#appBind").append(e);
}

// // // // // MAIN FUNCTION BINDING
// // // // // MAIN FUNCTION BINDING
// // // // // MAIN FUNCTION BINDING
var objectFoBind

function masterBinding(lenghtOfObj) {
    i = lenghtOfObj

    var object = window[nameOfMoid + i]
    var objectFoBind = window[nameOfMoid + i]
    var iNorm = i
    var weeks_id = object.id
    var weeks_title = object.weeks_prequel
    var nbrSeq = object.weeks_nrbE
    var time = object.weeks_time
    var weeks_description = object.weeks_description
    var video_link = []
    video_link = object.vidArray
    var video_linkNbrOfArray = video_link.length
	BigObjVidArrayLen2 = video_link.length -1
    var nameMduleById = nameOfModule + weeks_id

    weeksmainCreator(i, nameMduleById, weeks_title, nbrSeq, 4, time, weeks_description)
    $("#appBind").append(ObjectHTMLWeeksBind);

    for (j = 0; j < video_linkNbrOfArray; j++) {
        var objectV = video_link[j]
        var obVauthor_name = objectV.author_name
        var obVdescription = objectV.description
        var obVthumbnail_url = objectV.thumbnail_url
        var obVtitle = objectV.title
        var obVvideo_id = objectV.video_id
        var typeofModule = "Épisode" + "&nbsp;"
        var jPlusOne = j + 1
        var moduleBinding = typeofModule + jPlusOne

        createHtmlVideoElmt(obVvideo_id, moduleBinding, j, obVthumbnail_url, obVtitle, obVdescription)
        mainFunctionBinding(objectHTMLVideoBind);

    }


}
function splitDouble(arrayName) {
    var half_length = Math.ceil(arrayName.length / 2);
    arrayName.splice(0, half_length);

}

var ArrayAjxWait=[]

// Get info
function getInfo(occ) {
	vidObArr=[]
    courseArrayObject = jqxhr.responseJSON;
    courseArrayObjectLength = courseArrayObject.length

    for (i = 0; i < courseArrayObjectLength; i++) {

        weeks_prequel = courseArrayObject[i].weeks_title
        weeks_description = courseArrayObject[i].weeks_description
        weeks_id = courseArrayObject[i].id
        nbrSeq = courseArrayObject[i].nbrSeq
        time = courseArrayObject[i].time
        var semaine_prequelNameOfP = "weeks_prequel"
        var semaine_prequelNameOfPSecond = "weeks_description"
        var semaine_prequelNameOfPThird = "weeks_time"
        var semaine_prequelNameOfPFourth = "weeks_nrbE"
        var semaine_prequelNameOfPFifth = "id"
        var classCreator = "weeks" + i
        nameOfMoid = "week"
        var test = "test"
        video_link = courseArrayObject[i].video_link
        video_linkLength = courseArrayObject[i].video_link.length
        arrayWeeksCreator(nameOfMoid, courseArrayObjectLength, semaine_prequelNameOfP, weeks_prequel, semaine_prequelNameOfPSecond, weeks_description, semaine_prequelNameOfPThird, time, semaine_prequelNameOfPFourth, nbrSeq, semaine_prequelNameOfPFifth, weeks_id)
        pushMe = new Array
        for (j = 0; j < video_linkLength; j++) {
			
				wait = 0
				var jee = video_link[j]
				ArrayAjxWait.push(jee)
				
				var test = "test"
				jsonGetToObject(jee, classCreator, test)
				var mainObjectName = 'week' + i	
				pushObjectInMainObject(mainObjectName, videoOBj, 'vidArray')

			
        }
        bigObjectCreator(bigObject, window[nameOfMoid + i])
    }
}


setTimeout(function() {
    getInfo(2)
}, 1000);
setTimeout(function() {
    splitDouble(bigObject)
}, 2000);




function masterBindThis(id) {
	weekState=id-1
	fadeMyApp();
    $("#appBind").html("");
    masterBinding(id-1);
	$("#col-main").css("background-image","url('http://51.75.207.43/RTE/app/src/img/Fond-Personnage-Semaine1.png')");
}


function masterBindThis2(id) {
	weekState=id-1
	iconSetfunction(id-1);
	fadeMyApp();
    $("#appBind").html("");
    masterBinding(id-1);
	
	$("#col-main").css("background-image","url('http://51.75.207.43/RTE/app/src/img/Fond-Personnage-Semaine1.png')");
}
var bigObject = []

function bigObjectCreator(nameOfBigObject, objectToPush) {
    nameOfBigObject.push(objectToPush)


}

function splitDouble(arrayName) {
    var half_length = Math.ceil(arrayName.length / 2);
    arrayName.splice(0, half_length);

}

var StopCal= 0
var arrayResultTopush=[]

	var algoCalc=function(){
		if(StopCal==0){
			StopCal=1
	splitDouble(vidObArr)
	var total = vidObArr.length
	var bigLength = bigObject.length
	var arrayToReplace = bigObject[i].vidArray
	var arrayToReplacelength = bigObject[i].vidArray.length
	splitDouble(ArrayAjxWait)
	// Beacause Ajax we have to wait to last ajax call before binding elements we must to create two arrays and compare them to create a third one width incremented elements  correctly

for (i=0;i<ArrayAjxWait.length;i++)
{
	for (j=0;j<vidObArrSave.length;j++)
	{
		if(ArrayAjxWait[i]==vidObArrSave[j].video_id)
		{arrayResultTopush[i]=vidObArrSave[j]}
	}
}
	
	
	for(i=0;i<bigLength;i++){	
		var miniLength = bigObject[i].vidArray.length
		arrayToReplacelength = bigObject[i].vidArray.length
			for(j=0;j<miniLength;j++){
			bigObject[i].vidArray[j]=arrayResultTopush[j]}
			arrayResultTopush = arrayResultTopush.slice(arrayToReplacelength);
	
}
}
}




var VarjJWeeksPrequel
var VarJvideoModuleTypeNumber = module_type+"&nbsp"+(weekState+1)
var VarJModule_video_typeNum = module_video_type+"&nbsp"+(videoState+1)
var VarJvideoTitle
var VarJAuthor
var VarJvideoTime
var VarjJvideotitlePrequel
var VarjJvideoID
var coverSRC
var weekState = 1
var videoState = 0
var BigObjLen = 0
var BigObjVidArrayLen = 0
var BigObjVidArrayLen2 = 0
var VarJTime
var VarHTML



	var iconSet=$(".pngIconMe")


var iconSetfunction=function(id){

	for (i=0;i<iconSet.length;i++)
	{
		$(iconSet[i]).css('filter','brightness(1)')
	}
	$(iconSet[id]).css('filter','brightness(0.25)')
}

function changeWeekBindThis(id){
	algoCalc();
	weekState = parseInt(id);
	weekState = weekState - 1
	fadeMyApp()
	iconSetfunction(weekState)
	bindJack(weekState, videoState);
	
}



function firstShot(){
	bindJack(0, 0);
	iconSetfunction(0)
}

var videoInfos = function(id){
	fadeMyApp();
	
	var infoVideotrue = parseInt(id)
	videoState = infoVideotrue
	bindJack(weekState,infoVideotrue)
}


var fastForward =$("#videoFF")
var backForward =$("#videoBackB")

function lastvid(){
	
}

function bindJack(m, n) {
	
	 $("#appBind").html("");
	 algoCalc();
	
   	
	teete=n
	VarJvideoModuleTypeNumber = module_type+"&nbsp"+(weekState+1)
	VarJModule_video_typeNum = module_video_type+"&nbsp"+(videoState+1)
    VarjJWeeksPrequel = bigObject[m].weeks_prequel
    VarJvideoTitle = bigObject[m].vidArray[n].title
    VarJTime = bigObject[m].vidArray[n].duration
    VarJAuthor = bigObject[m].vidArray[n].author_name
    VarJvideoTime = bigObject[m].vidArray[n].description
    VarjJvideotitlePrequel = bigObject[m].vidArray[n].description
    VarjJvideoID = bigObject[m].vidArray[n].video_id
    VarjJHTML = bigObject[m].vidArray[n].html
    BigObjLen = bigObject.length
    coverSRC = 'src/img/cds.png'
	videoJackActualise();
    mainFunctionBinding(videoJack)
	fastForward = $("#appBind").find("#videoFF")
	backForward =$("#videoBackB")
	
	BigObjVidArrayLen = bigObject[m].vidArray.length - 2
	BigObjVidArrayLen2 = bigObject[m].vidArray.length -1
	console.log('nnnnnnnnnnnnnnnnnnn')
	console.log(n)
	
	if (n >= BigObjVidArrayLen+1 ){
		n=BigObjVidArrayLen
		console.log(n)
		fastForward.css('background','grey');
		fastForward.attr('onclick','lastvid()');
		}
	
	else{fastForward.css('background','#091B51');
		fastForward.attr('onclick','videoForwardP()');console.log(n)}
		
	if (n <=0){console.log(n)
		backForward.css('background','grey');
		backForward.attr('onclick','lastvid()');
		n=0;
		}
	
	else{backForward.css('background','#091B51');console.log(n)
		backForward.attr('onclick','videoBackP()');}	
		$("#col-main").css("background-image","url('http://51.75.207.43/RTE/app/src/img/Fond-Personnage-Semaine1.png')");
		

}


var videoPlayP = function() {
    openPop(VarjJvideoID)
}
var videoBackP = function() {teete=teete-1;videoState=teete;if(videoState>BigObjVidArrayLen2){videoState=BigObjVidArrayLen2};bindJack(weekState, teete)}

var teete=0
var videoForwardP = function() {teete=teete+1;videoState=teete;if(videoState>BigObjVidArrayLen2){videoState=BigObjVidArrayLen2}
bindJack(weekState, teete)}


var videoListP = function(id) {}


function packFirstVid() {
	masterBinding(0);

}
setTimeout(function() {
    packFirstVid();

}, 3000);

setTimeout(function() {
    algoCalc();
	welcomeHome();

}, 4000);

// // elements PAGE video width cover
// // elements PAGE video width cover
// // elements PAGE video width cover
// // elements PAGE video width cover