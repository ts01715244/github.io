function videoGoog(id,id1,name) { 
  str = '<marquee behavior="alternate">'+name+'</marquee><video src="https://googledrive.com/host/'+id1+'/'+name+'" controls width="100%" height="350"></video><span style="color: red; font-size: 20;"><a style="text-decoration: none; color:Black;" target="_blank" href="https://googledrive.com/host/'+id1+'/'+name+'"><em><b>Download</a></b></span>';
  return str;
}

function videoGoogle(id,id1,name) {
  document.getElementById("player").innerHTML = videoGoog(id,id1,name);		
}

function videoGG(id,name) { 
  str = '<marquee behavior="alternate">'+name+'</marquee><iframe src="https://docs.google.com/file/d/'+id+'/preview" width="100%" height="350" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>';
  return str;
}

function videoG(id,name) {
  document.getElementById("player").innerHTML = videoGG(id,name);		
}

function videoZVV(name) { 
  str = '<iframe frameborder="0" height="760" marginheight="0" marginwidth="0" scrolling="no" src="https://googledrive.com/host/0B8QlaU9AmBqDfi1zejU2TXluSjJUYkhlWkg2Zm5QZmY3ZExtaW1uWXNRR1VxeEowTzFwWGc/'+name+'.html" width="100%" allowfullscreen></iframe>';
  return str;
}

function videoZV(name) {
  document.getElementById("player").innerHTML = videoZVV(name);		
}

function read(id) { 
  str = '<iframe src="https://docs.google.com/presentation/d/'+id+'/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
  return str;
}

function readGG(id) {
  document.getElementById("player").innerHTML = read(id);		
}

