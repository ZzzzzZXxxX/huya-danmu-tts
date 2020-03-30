const huya_danmu = require('huya-danmu');
const roomid = '11352970';
const client = new huya_danmu(roomid);
const child_process = require('child_process');
client.on('connect', () => {
    console.log(`已连接huya ${roomid}房间弹幕~`)
});

client.on('message', msg => {
    switch (msg.type) {
        case 'chat':
            // console.log(`[${msg.from.name}]:${msg.content}`);
             var workerProcess = child_process.exec('python chat.py '+`${msg.from.name}`+' '+`${msg.content}`, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        // console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
            break;
        case 'gift':
            // console.log(`[${msg.from.name}]->赠送${msg.count}个${msg.name}`);
            var workerProcess = child_process.exec('python gift.py '+`${msg.from.name}`, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        // console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
            break
        // case 'online':
        //     console.log(`[当前人气]:${msg.count}`)
        //     break
    }
});

client.on('error', e => {
    // console.log(e)
    console.log('err')
});

client.on('close', _ => {
    client.start()
});

client.start();