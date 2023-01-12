/**
 * @ Author: willysliang
 * @ Create Time: 2023-01-12 18:41:00
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 18:51:16
 * @ Description: indexedDB 初始化数据库
 */

// 使用 IndexedDB 的第一步是打开数据库，使用indexedDB.open()方法。
let db
const request = indexedDB.open('myDB', 2)

// 打开数据库失败
request.onerror = (event) => {
  console.log('连接失败', event)
}

// 成功打开数据库
request.onsuccess = (event) => {
  db = request.result
  console.log('数据库打开成功')
}

// 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
request.onupgradeneeded = (event) => {
  db = event?.target?.result
  // 建表
  let objectStore
  if (!db.objectStoreNames.contains('userCopy')) {
    objectStore = db.createObjectStore('userCopy', {
      keyPath: 'id',
      autoIncrement: true,
    })
    // 新建索引，三个参数分别为索引名称、索引所在的属性、配置对象
    objectStore.createIndex('name', 'name', { unique: false })
  }
}

const getUserTX = () => {
  return db.transaction(['userCopy'], 'readwrite').objectStore('userCopy')
}

const getDB = () => db

export { getUserTX, getDB }
