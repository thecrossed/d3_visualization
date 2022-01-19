
let itemlist = d3.select("#itemlist")

function count(){
    return itemlist.selectAll("li").size()
}

function change1(){
  let c = count() + 1;
  itemlist
    .append("li")
    .text("Item " + c)
}

function change2(){
  itemlist.selectAll("li").remove()
}

  
function change3(){
  itemlist.select("li:last-child")
  .remove()

}