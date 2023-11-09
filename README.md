# React DevTool Bug Reproduction Code

This is the minimal code to reproduce the React dev tool issue 

Version
- react@18.2.0
- react-dom@18.2.0
- React Developer Tools 4.28.5
- Google Chrome 119.0.6045.105
- macOS 14.0（23A344）

# How to Reproduce The Bug

```shell
npm ci
npm run # build JS file
open index.html
```

"Components" tab shows the counter's value is stored in hook `2`.

![image1.png](doc%2Fimage1.png)

However, "Profiler" tab shows that hook `3` is changed, though hook `3` doesn't exist.

![image2.png](doc%2Fimage2.png)


This bug is originally reported by [@mujurin1](https://github.com/mujurin1)

