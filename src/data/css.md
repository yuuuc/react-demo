# css
 - 选择器
 * 权重
 * 内联样式 1000
 * id 100
 * 类、伪类、属性选择器 10
 * 通配符、子选择器、相邻选择器（*、>、+） 
 * 继承没有权值
   - 标签选择器、类选择器、id选择器、全局选择器
   - 属性选择器
     - [attr] 匹配带有attr属性的元素
     - [attr=value] 匹配带有attr=value的元素
     - [attr~=value] 匹配value 中有多个值，有一个和value匹配
     - [attr|=value] 匹配以value开头 或 value-*形式的
     - [attr^=value] 匹配以value开头
     - [attr$=value] 匹配以value结尾
     - [attr*=value] 匹配值中包含value的
     - [attr=value i] 告诉浏览器以不区分大小写的方式匹配
   - 伪类
     - :hover 鼠标移入
     - :focus 
   - 伪元素:
     - ::before
     - ::after
   - 