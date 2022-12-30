# cors-server

这个项目主要解决国内的 `https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token` 接口被墙导致 `gitalk` 无法获取 `token` 问题

借助 `vercel` 部署服务来进行接口转发

我个人部署了服务，地址为：`cors-server-ecru.vercel.app`

如果不想折腾，只需把配置下的 `proxy` 改为 `https://find-nick-gitalk.netlify.app/github_access_token` 即可，如下

如果不放心，可以 `fork` 该项目然后自己注册 `vercel` 或 `netlify` 进行部署
