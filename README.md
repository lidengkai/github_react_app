## 项目部署

**本地调试**

npm run modules:sh

cnpm i

npm start

**打包环境**

npm run [dev|test|prod]

## eslint

- js
  - 字符串必须使用单引号
  - 不强制使用驼峰法命名
  - 文件末尾使用换行符
  - 使用2个空格缩进
  - 允许console
  - 禁用debugger
  - 不使用var
  - 禁用alert confirm prompt
  - 禁止给类赋值
  - 禁止在条件表达式中使用赋值语句
  - 禁止修改const声明的变量
  - 不能对var声明的变量使用delete操作符
  - 函数参数不能重复
  - 在创建对象字面量时不允许键重复
  - switch中的case标签不能重复
  - 不使用分号
  - 禁止重复的函数声明
  - 禁用不规则的空白
  - 禁止重复声明变量
  - 函数调用时，函数名与()之间不能有空格
  - 在调用super()之前不能使用this或super
  - 行末不使用空格
  - 不能有未定义的变量
  - 允许定义未使用的变量
  - 未定义前不能使用
- jsx
  - 属性中必须使用双引号
  - 允许React组件未定义displayName
  - 省略属性值为true的赋值
  - 多行属性，右括号另起一行
  - 大括号内首尾不使用空格
  - 属性赋值不使用空格
  - 在数组或迭代器中必须使用key属性
  - JSX中允许使用bind
  - ! JSX中禁止未声明的变量
  - 允许未验证props

## 其他