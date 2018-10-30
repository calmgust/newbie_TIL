# macOS 업데이트 후 git 등 오류 발생 시 solution



`macOS` 업데이트 시 발생

`Xcode Command Line Tools`의존성 이슈가 발생하는 경우 `git`실행 시 오류 발생



```
$ git --version

xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```



`Xcode`를 재설치하면 해결되나 전체 설치가 필요하지 않는 경우에는 `Xcode Command Line Tools`만 설치 가능



```
$ xcode-select --install
```



설치 후 버전 확인

```
$ xcode-select -v

xcode-select version 2354.
```

**=> 설치 후 2354 최신 버전으로 확인**

