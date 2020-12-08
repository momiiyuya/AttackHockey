const electron=require("electron");
const ipc=electron.ipcRenderer;

BackToTitle = ()=>{
	ipc.send("end");
}
