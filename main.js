const {
  app,
  BrowserWindow,
} = require('electron')
//SS
const path = require('path')
const url = require('url')

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // darwin = MacOS
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function createWindow() {
  // 建立瀏覽器的視窗(窗口)，有很多種參數自己去找吧
  win = new BrowserWindow({
    //設定你的應用程式的圖示的
    //第一個參數給 絕對位置 差不多等同於你的根目錄所以使用__dirname
    //第二個就是你的檔案，如果你要給不在根目錄的檔案，那就指定位置吧EX: icon/apple2
    icon: path.join(__dirname, 'icons/apple2.jpg'),
    //你的網頁是否要全螢幕
    fullscreen: true,
    //設定你網頁的大小
    width: 400,
    height: 400,
    webSecurity: false,
    //可不可以視窗最大化
    // maximizable: false
  })

  // 然后開啟對應的檔案 index.html。
  //如果你想開啟的第一個網頁叫其他名字，就給對應的名字。
  win.loadFile('index.html')


  // 当 Window 被關閉，會觸發這個事件。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })

}