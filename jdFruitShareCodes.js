/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
   //账号一的好友shareCode,不同好友的shareCode中间用@符号隔开
  '447c49d888ee4f339314b55b79de0c74@412aa69dda9b4c41967a25060c6d794a@1e4d7e29cf584727a483b509a35b4735@3afe3a0b5a7b42be8db0923d2034c9f9@5252199465ce4cbc8d1b8637fb1d5df1@5633948454934afba0f459ae374de5a4@7035c5fc71424e74bc58e5f39b1505b2',
  //账号二的好友shareCode,不同好友的shareCode中间用@符号隔开
  '447c49d888ee4f339314b55b79de0c74@412aa69dda9b4c41967a25060c6d794a@1e4d7e29cf584727a483b509a35b4735@3afe3a0b5a7b42be8db0923d2034c9f9@5252199465ce4cbc8d1b8637fb1d5df1@5633948454934afba0f459ae374de5a4@7035c5fc71424e74bc58e5f39b1505b2',
  '447c49d888ee4f339314b55b79de0c74@412aa69dda9b4c41967a25060c6d794a@1e4d7e29cf584727a483b509a35b4735@3afe3a0b5a7b42be8db0923d2034c9f9@5252199465ce4cbc8d1b8637fb1d5df1@5633948454934afba0f459ae374de5a4@7035c5fc71424e74bc58e5f39b1505b2',
  '447c49d888ee4f339314b55b79de0c74@412aa69dda9b4c41967a25060c6d794a@1e4d7e29cf584727a483b509a35b4735@3afe3a0b5a7b42be8db0923d2034c9f9@5252199465ce4cbc8d1b8637fb1d5df1@5633948454934afba0f459ae374de5a4@7035c5fc71424e74bc58e5f39b1505b2',
  '447c49d888ee4f339314b55b79de0c74@412aa69dda9b4c41967a25060c6d794a@1e4d7e29cf584727a483b509a35b4735@3afe3a0b5a7b42be8db0923d2034c9f9@5252199465ce4cbc8d1b8637fb1d5df1@5633948454934afba0f459ae374de5a4@7035c5fc71424e74bc58e5f39b1505b2',
  '447c49d888ee4f339314b55b79de0c74@412aa69dda9b4c41967a25060c6d794a@1e4d7e29cf584727a483b509a35b4735@3afe3a0b5a7b42be8db0923d2034c9f9@5252199465ce4cbc8d1b8637fb1d5df1@5633948454934afba0f459ae374de5a4@7035c5fc71424e74bc58e5f39b1505b2',
  '447c49d888ee4f339314b55b79de0c74@412aa69dda9b4c41967a25060c6d794a@1e4d7e29cf584727a483b509a35b4735@3afe3a0b5a7b42be8db0923d2034c9f9@5252199465ce4cbc8d1b8637fb1d5df1@5633948454934afba0f459ae374de5a4@7035c5fc71424e74bc58e5f39b1505b2',
  '447c49d888ee4f339314b55b79de0c74@412aa69dda9b4c41967a25060c6d794a@1e4d7e29cf584727a483b509a35b4735@3afe3a0b5a7b42be8db0923d2034c9f9@5252199465ce4cbc8d1b8637fb1d5df1@5633948454934afba0f459ae374de5a4@7035c5fc71424e74bc58e5f39b1505b2',
  '447c49d888ee4f339314b55b79de0c74@412aa69dda9b4c41967a25060c6d794a@1e4d7e29cf584727a483b509a35b4735@3afe3a0b5a7b42be8db0923d2034c9f9@5252199465ce4cbc8d1b8637fb1d5df1@5633948454934afba0f459ae374de5a4@7035c5fc71424e74bc58e5f39b1505b2',
]
// 判断github action里面是否有水果互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`您secret里面未提供助力码，优先进行自己账号内互助，然后再给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
