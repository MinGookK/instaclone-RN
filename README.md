# apploading 쓰기

> why use?
> 앱이 나타나기 전에 먼저 로드하고 싶은 파일들이 있음. 예로들어 폰트 파일이나 로고 이미지와 같은 것이
> 나중에 갑자기 나타나는 것은 이상해 보이기에 먼저 로드하고 싶을 수 있음.

그래서 apploading을 사용하게 되면 apploading의 startasync가 끝날때 까지는 다른 작업을 멈춰버림
끝나면 onFinish 실행

```js
const [loading, setLoading] = useState(true)
const onFinish = () => setLoading(false)
const preload = () => {
  const fontsToLoad = [Ionicons.font]
  const fontPromises = fontsToLoad.map(font => Font.loadAsync(font))
  return Promise.all(fontPromises)
}
if (loading) {
  return (
    <AppLoading
      startAsync={preload}
      onError={console.warn}
      onFinish={onFinish}
    />
  )
}
```
