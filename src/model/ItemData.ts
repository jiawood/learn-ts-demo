import Category from './CateEnum'

class ItemData{
    id !:number   // 加入！表示可以为空
    categoryId : Category
    title:string
    content:string
    createTime:string

    constructor(id:number = -1,categoryId = -1, title:string = "", content:string = ""){
      this.id = id
      this.categoryId = categoryId
      this.title = title
      this.content = content
      this.createTime = this.toSelfDateStr()
    }
    toSelfDateStr():string{
      let date = new Date(Date.now())
      let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      + ' ' + date.getHours() + ':' + date.getMinutes()
      return str
    }

}
export default ItemData
