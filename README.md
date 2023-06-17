# How To Deploy
1. Run<br>
```
ng build --output-path docs --base-href ./global-chat-ui/
```
2. In `docs/index.html`, change line 6 to<br>
```
<base href="/global-chat-ui/">
```
3. After push and check, visit<br>
[https://solidwaterslayer.github.io/global-chat-ui/](https://solidwaterslayer.github.io/global-chat-ui/)
