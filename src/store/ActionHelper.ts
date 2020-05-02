import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'
import Category from '../model/CateEnum'

class ActionHelper{
 //数据处理
 dataHelper:DataHelper = new DataHelper('memoData','id')
//笔记数组
 memoList!:Array<ItemData>
//构造函数：读取本地数据，并设置给成员变量 memoList
constructor(){
 this.memoList = this.readData()
}

readData():Array<ItemData>{
 let arrObj = this.dataHelper.readDada()
 let arrItem = arrObj.map((ele:any) =>{
  let item:ItemData = new ItemData()
  item.id = ele.id
  item.categoryId = ele.categoryId
  item.title = ele.title
  item.content = ele.content
  item.createTime = ele.createTime

  return item
 })
 return arrItem
}

getCategoryName(cateId:Category):string{
 const arrName = ['工作','生活','学习']
 return arrName[cateId]
}

add(item:ItemData):number{
 item.id = this.dataHelper.addData(item)
 this.memoList.push(item)
 this.dataHelper.saveData(this.memoList)
 return item.id
}

edit(item:ItemData):void{
 let editItem:ItemData | undefined = this.memoList.find(ele =>{
  return ele.id == item.id
 })
 if(editItem){
  editItem.categoryId = item.categoryId
  editItem.title = item.title
  editItem.content = item.content

  this.dataHelper.saveData(this.memoList)
 }
}

remove(id:number):void{
 let index:number = this.memoList.findIndex(ele =>{
  return ele.id === id
 })
 if(index > -1){
  this.memoList.splice(index,1)
  this.dataHelper.saveData(this.memoList)
 }
}


}
export default ActionHelper
