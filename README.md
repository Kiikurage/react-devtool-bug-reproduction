# React DevTool Bug Reproduction Code

This is the minimal code to reproduce the React dev tool issue 

# How to Reproduce The Bug

```shell
npm ci
npm run # build JS file
open index.html
```

"Components" tab shows the counter's value is stored in hook `7`.

![image1.png](doc%2Fimage1.png)

![image2.png](doc%2Fimage2.png)

However, "Profiler" tab shows that 8th hook is changed, while there isn't 8th hook.

![image3.png](doc%2Fimage3.png)

This bug is originally reported by [@mujurin1](https://github.com/mujurin1)