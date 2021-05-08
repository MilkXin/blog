## npm 常用命令

_nodejs(v10.15.0), npm(6.4.1)_

1. **安装命令**

   ```
   npm install 模块名 -g    //全局安装

   npm install 模块名   //本地安装
   npm i(简写)

   npm install 模块1 模块2 模块3    //一次性安装多个

   npm install 模块名 --save-dev    //安装开发时依赖包
   npm install 模块名 -D(简写)

   npm install 模块名 --save    //安装运行时依赖包
   npm install 模块名 -S(简写)
   ```

2. **卸载 node 模块**

   ```
   npm uninstall 模块名
   ```

3. **项目初始化 npm 包管理**

   ```
   npm init
   ```

4. **查看安装的模块**

   ```
   npm root    //查看项目中模块所在的目录

   npm root -g    //查看全局安装的模块所在目录

   npm list    //查看已安装的模块

   npm list --depth 0    //查看已安装的模块，限制层级

   npm list -g --depth 0    //列出全局安装的模块，限制层级
   ```

5. **查看某个包的各种属性**

   ```
   npm view 模块名    //查看一个模块的所有信息

   npm view 模块名 dependencies    //查看某个包对于各种包的依赖关系

   npm view 模块名 repository.url    //查看包的源文件地址

   npm view 模块名 versions    //查看模块的历史版本号

   npm view 模块名 version    //查看模块远程库的当前版本号

   npm list 模块名 version    //查看当前项目中某个模块的版本号
   ```

6. **检查包是否已经过时,列出所有已经过时的包**

   ```
   npm outdated
   ```

7. **更新模块**

   ```
   npm update 模块名    //更新模块

   npm update 模块名 @版本号    //更新模块到指定版本（不可指定到更低版本）

   npm install 模块名@latest    //更新模块到最新版本
   ```

8. **更改包内容后进行重建**

   ```
   npm rebuild 模块名
   ```

9. **文档**

   ```
   npm help json    //访问package.json的字段文档
   ```

10. **发布一个 npm 包的时候，检查某个包名是否已经存在**

    ```
    npm search 模块名
    ```

11. **打开模块的相关信息**

    ```
    npm repo 模块名    //打开模块的仓库

    npm docs 模块名    //打开模块的文档

    npm home 模块名    //打开模块的主页
    ```

12. **清除未使用的模块**
    ```
    npm prune
    ```
