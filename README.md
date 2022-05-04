# site-records-zwglass-net

### 眼镜订单管理网站(自用)

### 拉取静态网站

```
git clone https://github.com/zwglass/site-records-zwglass-net.git
```

### 上传静态网站到 github

```
cd <project name>
git add .
git commit -m "update"
git push

```

### docker 本地测试 http://localhost:8080

```
docker run -p 8080:8080 -v $(pwd):/usr/share/nginx/html:ro -d nginx
```
