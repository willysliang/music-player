/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-11 11:19:20
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-25 18:33:46
 * @ Description: 常量设定
 */

/***
 * 定义产量接口
 */
export interface IPagesTypeItem {
  path: string
  key: string
  name: string
  title?: string
}
export interface IPagesType {
  [propName: string]: IPagesTypeItem
}
