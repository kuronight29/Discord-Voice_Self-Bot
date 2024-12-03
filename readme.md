# Discord Voice Self-Bot

## Hướng dẫn cài đặt

1. **Cài đặt Node.js** trên máy tính (nếu chưa có).
2. **Tải code** về máy.
3. **Mở terminal** trong thư mục project và chạy lệnh:

```
npm install discord.js-selfbot-v13
npm i @discordjs/voice
```

4. **Chạy chương trình** để chạy chương trình hãy chạy lệnh:

```
node .
```


## Cấu hình bot trong file `config.json`:

- `token`: Token của tài khoản Discord.
- `id_channel`: ID kênh voice muốn tham gia.
- `id_guild`: ID server Discord.

### Cách lấy thông tin cấu hình

#### Token Discord:

1. Mở Discord trên trình duyệt.
2. Chạy đoạn mã sau trong console của trình duyệt:

    ```javascript
    window.webpackChunkdiscord_app.push([
      [Math.random()],
      {},
      req => {
        if (!req.c) return;
        for (const m of Object.keys(req.c)
          .map(x => req.c[x].exports)
          .filter(x => x)) {
          if (m.default && m.default.getToken !== undefined) {
            return copy(m.default.getToken());
          }
          if (m.getToken !== undefined) {
            return copy(m.getToken());
          }
        }
      },
    ]);
    console.log('%cWorked!', 'font-size: 50px');
    console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
    ```

#### ID kênh và server:

1. Bật chế độ **Developer Mode** trong Discord.
2. Chuột phải vào kênh voice > **Copy ID**.
3. Chuột phải vào server > **Copy ID**.

## Chạy bot

1. Mở terminal trong thư mục project.
2. Chạy lệnh:

## Lưu ý

- Đảm bảo thông tin trong `config.json` được cấu hình đúng.
- Bot sẽ tự động tham gia kênh voice khi khởi động.