# NVM



## NVM 설치



### 설치

```
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```



### 확인

```
$ nvm ls

-bash: nvm: command not found
```



### 수정

```
$ vi ~/.bash_profile
```

vi 에디터를 이용하여 첨부

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

i 키 로 insert

입력 후

:

wq



### 재시작

```
source ~/.bash_profile
```



### 확인

```
$ nvm ls
```

```
->       system
node -> stable (-> N/A) (default)
iojs -> N/A (default)
```

