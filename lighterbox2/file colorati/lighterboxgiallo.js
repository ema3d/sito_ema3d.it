//By: Richard Lee - Transcendent Design - tdesignonline.com - RichardAndrewLee@yahoo.com
//Optimization: Frédéric MADSEN - MadsenFr@laposte.net
var llocation
lbox=document.createElement('div')
lbox.id='lighterbox2'
lbox.style.height=document.body.offsetHeight+'px'
document.body.appendChild(lbox)
lighterboxwrapper=document.createElement('div')
lighterboxwrapper.id='lighterboxwrapper2'
lbox.appendChild(lighterboxwrapper)
lc=document.createElement('div')
lc.id='lighterboxclose2'
lc.title='Chiudi'
lbox.appendChild(lc)
labox=document.createElement('div')
labox.id='lighterboxcontent2'
lighterboxwrapper.appendChild(labox)
portimage=document.createElement('img')
portimage.id='lighterboxportimage2'
portimage.title='Click per immagine seguente'
labox.appendChild(portimage)
title_=document.createElement('div')
title_.id='lighterboxtitle2'
title_.appendChild(document.createTextNode(''))
labox.appendChild(title_)
lboxlink=document.createElement('div')
lboxlink.id='lighterboxclosebutton2'
labox.appendChild(lboxlink)
description_=document.createElement('div')
description_.id='lighterboxdescription2'
description_.appendChild(document.createTextNode(''))
labox.appendChild(description_)
pi=document.createElement('span')
pi.id='lighterboxprevimage2'
pi.title='Immagine precedente'
pi.appendChild(document.createTextNode('<'))
lboxlink.appendChild(pi)
ni=document.createElement('span')
ni.id='lighterboxnextimgage2'
ni.title='Immagine seguente'
ni.appendChild(document.createTextNode('>'))
lboxlink.appendChild(ni)
ci=document.createElement('span')
ci.id='lighterboxcloseimage2'
ci.title='Chiudi'
ci.appendChild(document.createTextNode('X'))
lboxlink.appendChild(ci)
piclinks=document.getElementsByTagName('a')
picarray=new Array()
for(var z=0;z<piclinks.length;z++)
	if(piclinks[z].rel=='lighterbox'){
		picarray.push(piclinks[z])
		piclinks[z].onclick=function(){
			for(var i=0;i<picarray.length;i++)if(picarray[i]==this){
				llocation=i
				break}
			setpic(this)
			return false}}
function close(){
	portimage.src='none'
	lbox.style.display='none'}
ci.onclick=close
function setpic(thispic){
	lc.onclick=close
	function nif(){
		if(llocation==picarray.length-1)llocation=-1
		setpic(picarray[llocation+=1])}
	ni.onclick=nif
	portimage.onclick=nif
	pi.onclick=function(){
		if(llocation==0)llocation=picarray.length
		setpic(picarray[llocation-=1])}
	function checkKeycode(e){
		if(lbox.style.display=='block'){
			if(e)keycode=e.which
			else keycode=window.event.keyCode
			if(keycode==37){
				if(llocation==0)llocation=picarray.length
				setpic(picarray[llocation-=1])}
			else if(keycode==27)close()
			else if(keycode==39||keycode==13)nif()}}
	document.onkeydown=checkKeycode
	portimage.style.opacity='0'
    portimage.style.filter='alpha(opacity=0)'
	portimage.src=thispic.href
	description_.firstChild.nodeValue=thispic.title
	title_.firstChild.nodeValue=(typeof(thispic.firstChild.alt)!='undefined'?thispic.firstChild.alt:'')
	portimage.onload=function(){
   		lighterboxwrapper.style.width=portimage.offsetWidth+'px'
		lighterboxwrapper.style.marginLeft='-'+labox.offsetWidth/2+'px'
		lighterboxwrapper.style.marginTop='-'+labox.offsetHeight/2+'px'
		for(var fd=0;fd<11;fd++)setTimeout('portimage.style.opacity="'+fd/10+'";portimage.style.filter="alpha(opacity='+(fd*10)+')";',fd*50)}
	lbox.style.display='block'}
window.onscroll=function(){if(lbox.style.display=='block')lbox.style.left=(document.documentElement.scrollLeft||document.body.scrollLeft)+'px'}