---
slug: how-apply-https
title: 免费https通配符证书申请与配置
authors: zeffon
tags: [linux, https]
date: 2019-09-09
---

Certbot 是 EFF 加密整个互联网的一部分。通过 Web 进行安全通信依赖于 HTTPS，这需要使用数字证书，以便浏览器验证 Web 服务器的身份。

<!--truncate-->

## 前言

Certbot 是 EFF 加密整个互联网的一部分。通过 Web 进行安全通信依赖于 HTTPS，这需要使用数字证书，以便浏览器验证 Web 服务器的身份。

### Let's Encrypt 简介

随着阿里免费的 HTTPS 过期后，不得不使用免费使用 HTTPS。所以就需要从证书授权机构(以下简称 CA) 处获取一个证书，Let's Encrypt 就是一个 CA。我们可以从 Let's Encrypt 获得网站域名的免费的证书。这篇文章也主要讲的是通过 Let's Encrypt + Nginx 来让网站升级到 HTTPS。

### Certbot 简介

Certbot 是 Let's Encrypt 官方推荐的获取证书的客户端，可以帮我们获取免费的 Let's Encrypt 证书。Certbot 是 EFF 加密整个互联网的一部分。通过 Web 进行安全通信依赖于 HTTPS，这需要使用数字证书，以便浏览器验证 Web 服务器的身份。Certbot 是支持所有 Unix 内核的操作系统的。

## 申请与配置

### Certbot 安装

1. 使用 `Git` 下载 `certbot`

```sh
$ git clone https://github.com/certbot/certbot
$ cd certbot
```

1. `certbot-auto` 或者 `letsencrypt-auto`查看命令参数

```sh
$ ./certbot-auto --help
或者
$ ./letsencrypt-auto --help
```

```s
obtain, install, and renew certificates:
(default) run   Obtain & install a certificate in your current webserver
certonly        Obtain or renew a certificate, but do not install it
renew           Renew all previously obtained certificates that are near
```

```sh
expiry
  enhance         Add security enhancements to your existing configuration
  -d DOMAINS       Comma-separated list of domains to obtain a certificate for
  --apache          Use the Apache plugin for authentication & installation
  --standalone      Run a standalone webserver for authentication
  --nginx           Use the Nginx plugin for authentication & installation
  --webroot         Place files in a server's webroot folder for authentication
  --manual          Obtain certificates interactively, or using shell script
```

这里只对几个重要的命令参数进行说明

- run：获取并安装证书到当前的 Web 服务器
- certonly：获取或续期证书，但是不安装
- renew：在证书快过期时，续期之前获取的所有证书
- -d DOMAINS：一个证书支持多个域名，用逗号分隔
- --apache：使用 Apache 插件来认证和安装证书
- --standalone：运行独立的 web server 来验证
- --nginx：使用 Nginx 插件来认证和安装证书
- --webroot：如果目标服务器已经有 web server 运行且不能关闭，可以通过往服务器的网站根目录放置文件的方式来验证
- --manual：通过交互式方式，或 Shell 脚本手动获取证书

> 关于域名验证和证书的获取安装，上面提到了`5种`方式：--apache, --standalone, --nginx, --webroot 和 --manual，请根据实际情况选择其一。这里会讲常用 Nginx 安装方式。

### 获取证书

1. 使用 `certbot-auto` 来获取证书但不安装

```sh
$ ./certbot-auto --email zeffonwu@gmail.com -d "*.thxycn.xin" -d "thxycn.xin" --manual --preferred-challenges dns-01 certonly --server https://acme-v02.api.letsencrypt.org/directory
```

注意将上面的邮箱和域名替换成自己的。需要两个-d：第一是通配符域名配置，第二个是主域名配置

> **`注意`**
>
> 1. 执行此命令必须使用 root 用户获得文件夹的权限
> 2. 域名能访问并且有绑定的公网 IP
> 3. 必须在此域名绑定的服务器上运行
> 4. 会使用 80 断端口，如果 nginx 监听 80 端口，把 nginx 先关掉

2. 需要在域名上新添加一条解析记录(由于设置两个域名，这里解析记录值也要弄两次)
   (`主机`：\_acme-challenge `类型`：TXT `记录值`：L435P35DFHIBAOF34548QoqJHbD162748HUDF)

```
Please deploy a DNS TXT record under the name
_acme-challenge.thxycn.xin with the following value:

L435P35DFHIBAOF34548QoqJHbD162748HUDF

Before continuing, verify the record is deployed.
```

> **`注意`:** 申请通配符证书是要经过 DNS 认证的，按照提示，前往域名后台添加对应的 DNS TXT 记录。添加之后，不要心急着按回车，先执行 dig xxxx.xxx.com txt 确认解析记录是否生效，生效之后再回去按回车确认

dig 命令安装：

```sh
$ yum install bind-utils
$ dig _acme-challenge.thxycn.xin
下文出现TXT的值则可以
;; ANSWER SECTION:
_acme-challenge.thxycn.xin. 600 IN      TXT     "Refivf35ferdfaypw7ZvfnmkbHDSD8433IGA"
```

3. 获取证书出现如下的 `NOTES`,说明证书创建成功了

```sh
IMPORTANT NOTES:
- Congratulations! Your certificate and chain have been saved at:
  /etc/letsencrypt/live/thxycn.xin/fullchain.pem
  Your key file has been saved at:
  /etc/letsencrypt/live/thxycn.xin/privkey.pem
  Your cert will expire on 2019-11-30. To obtain a new or tweaked
  version of this certificate in the future, simply run
  letsencrypt-auto again. To non-interactively renew *all* of your
  certificates, run "letsencrypt-auto renew"
```

4. 查看证书(证书默认保存在`/etc/letsencrypt/live/thxycn.xin`)

```
README  cert.pem  chain.pem  fullchain.pem  privkey.pem
```

而 Nginx 配置证书我们需要用到的证书是 `fullchain.pem` 和 `privkey.pem`。

### Nginx 证书配置

1. 配置 conf 文件（`注意`更换自己的证书）

```
server {
    listen 443;
    server_name thxycn.xin;
    ssl on;

    ssl_certificate /etc/letsencrypt/live/thxycn.xin/fullchain.pem; # 替换自己的证书
    ssl_certificate_key /etc/letsencrypt/live/thxycn.xin/privkey.pem; # 替换自己的证书
    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
server {
	listen 80;
	server_name thxycn.xin;
	rewrite ^/(.*) https://$server_name$request_uri? permanent;
}
```

2. 验证是否配置成功
   使用 `https://thxycn.xin/index.html` 能访问到 Nginx 的欢迎页面，则配置成功。

### 自动更新 SSL 证书

Let's Encrypt 提供的证书只有 90 天的有效期，所以我们需要写一个脚本在过期前定时重新获取证书。并且证书获取是要频次限制的--每 7 天 5 次。(limit ~5 per 7 days)。

1. 使用 `certbot renew` 自动更新证书

```sh
$ certbot-auto renew --manual # 需要进入/usr/local/certbot目录
或者可以使用强制更新
$ certbot-auto --force-renew
```

> 但是却报错了。原因: 重新更新证书需要启动 443 端口，而这个端口被 nginx 占用着
> 解决方法: 其实很简单，就是在执行`certbot renew --dry-run`命令前，把 Nginx 停止 `systemctl stop nginx`, 执行成功后就把 Nginx 启动 `systemctl start nginx`。所以需要用到 `--pre-hook`（这个参数表示执行更新操作之前要做的事情）,`--post-hook`(这个参数表示执行更新操作完成后要做的事情)

1. 定时设置(每 1 个月，凌晨 10 分执行)
   新建 certbot-auto-renew-crontab.sh 文件

```sh
$ mkdir crontab # 与usr同级下新建crontab目录
$ vi certbot-auto-renew-crontab.sh
10 0 * 1 * /usr/local/certbot/certbot-auto --force-renew --pre-hook "systemctl stop nginx" --post-hook "systemctl start nginx" # --force-renew 强制更新
```

2. 用 `crontab` 来启动这个定时任务

```sh
$ crontab certbot-auto-renew-crontab.sh
```
