## これはなに
`nukumori-gay.space`のページを生成するためのリポジトリです。
netlifyと連携しており、mainブランチが更新されると自動的にデプロイされます。

## 開発環境
### ローカルでサーバ立ち上げ
```bash
npm run dev
# or
yarn dev
```

### sitemap.xmlを生成
現在、ローカルでsitemap.xmlを生成して、それをmainブランチにあげることでデプロイしています。
生成するには、
```bash
npm run sitemap
```
を実行してください。
